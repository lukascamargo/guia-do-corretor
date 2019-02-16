"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
require("automapper-ts");
const mongoose_1 = require("mongoose");
class BaseService {
    get ModelName() {
        return this._model.modelName;
    }
    get viewModelName() {
        return `${this._model.modelName}Vm`;
    }
    ignore(object, whatToIgnore, sourceKey = this.ModelName, destinationKey = this.viewModelName) {
        return __awaiter(this, void 0, void 0, function* () {
            automapper
                .createMap(sourceKey, destinationKey)
                .forMember(whatToIgnore, function (opts) { opts.ignore(); });
            return automapper.map(sourceKey, destinationKey, object);
        });
    }
    findAll(filter = {}, exclude = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            return this._model.find(filter, exclude).exec();
        });
    }
    findOne(filter = {}, exclude = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            return this._model.findOne(filter, exclude).exec();
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this._model.findById(this.toObjectId(id)).exec();
        });
    }
    create(item) {
        return __awaiter(this, void 0, void 0, function* () {
            return this._model.create(item);
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this._model.findByIdAndRemove(this.toObjectId(id)).exec();
        });
    }
    update(id, item) {
        return __awaiter(this, void 0, void 0, function* () {
            return this._model.findOneAndUpdate({ _id: this.toObjectId(id) }, item, { new: true, upsert: true });
        });
    }
    clearCollection(filter = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            return this._model.deleteMany(filter).exec();
        });
    }
    toObjectId(id) {
        return mongoose_1.Types.ObjectId(id);
    }
}
exports.BaseService = BaseService;
//# sourceMappingURL=base.service.js.map