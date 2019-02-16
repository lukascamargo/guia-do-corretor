import { SchemaOptions } from 'mongoose';
import {Typegoose, prop, pre} from 'typegoose';

@pre('findOneAndUpdate', function(next) {
    this.updatedAt = new Date();
    next();
})
export class BaseModel<T> extends Typegoose {
    @prop()
    criado?: Date;

    @prop()
    atualizado?: Date;
}

export class BaseModelVm {
    criado?: Date;
    atualizado?: Date;
}

export const schemaOptions: SchemaOptions = {
    toJSON : {
        virtuals: true,
        getters: true
    }
};