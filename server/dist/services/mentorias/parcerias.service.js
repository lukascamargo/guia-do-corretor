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
const base_service_1 = require("../base.service");
const usuarios_model_1 = require("../../models/usuarios/usuarios.model");
class ParceriasService extends base_service_1.BaseService {
    constructor(_userModel = new usuarios_model_1.Usuario().getModelForClass(usuarios_model_1.Usuario)) {
        super();
        this._userModel = _userModel;
        this._model = this._userModel;
    }
    ativarParceria(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const usuario = yield this.findById(userId);
            usuario.parceria = true;
            return yield this.update(userId, usuario);
        });
    }
    getParceiros() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.findAll({ parceria: true });
        });
    }
}
exports.ParceriasService = ParceriasService;
//# sourceMappingURL=parcerias.service.js.map