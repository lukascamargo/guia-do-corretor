import 'automapper-ts';
import { Typegoose, ModelType, InstanceType } from 'typegoose';
import {Types} from 'mongoose';

export abstract class BaseService<T extends Typegoose> {
    protected _model: ModelType<T>;

    private get ModelName(): string {
        return this._model.modelName;
    }

    private get viewModelName(): string {
        return `${this._model.modelName}Vm`;
    }

    async ignore<K> (
        object: Object,
        whatToIgnore: string,
        sourceKey: string = this.ModelName,
        destinationKey: string = this.viewModelName
    ): Promise<any> {
        automapper
            .createMap(sourceKey, destinationKey)
            .forMember(whatToIgnore, function(opts) { opts.ignore(); })
        return automapper.map(sourceKey, destinationKey, object);
    }

    async findAll(filter = {}, exclude = {}): Promise<InstanceType<T>[]> {
        return this._model.find(filter, exclude).exec();
    }

    async findOne(filter = {}, exclude = {}): Promise<InstanceType<T>> {
        return this._model.findOne(filter, exclude).exec();
    }

    async findById(id: string): Promise<InstanceType<T>> {
        return this._model.findById(this.toObjectId(id)).exec();
    }

    async create(item: InstanceType<T>): Promise<InstanceType<T>> {
        return this._model.create(item);
    }

    async delete(id: string): Promise<InstanceType<T>> {
        return this._model.findByIdAndRemove(this.toObjectId(id)).exec();
    }

    async update(id: string, item: InstanceType<T>): Promise<InstanceType<T>> {
        return this._model.findOneAndUpdate({_id: this.toObjectId(id)}, item, {new: true, upsert: true});
    }

    async clearCollection(filter= {}): Promise<void> {
        return this._model.deleteMany(filter).exec();
    }

    protected toObjectId(id: string | any): Types.ObjectId {
        return Types.ObjectId(id);
    }
}
