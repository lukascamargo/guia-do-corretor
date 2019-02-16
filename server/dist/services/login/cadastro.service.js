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
class CadastroService extends base_service_1.BaseService {
    constructor(_userModel = new usuarios_model_1.Usuario().getModelForClass(usuarios_model_1.Usuario)) {
        super();
        this._userModel = _userModel;
        this._model = this._userModel;
    }
    manterUsuario(usuarioVm) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(usuarioVm);
            const novoUser = new this._model();
            novoUser._id = usuarioVm._id;
            novoUser.nome = usuarioVm.nome;
            novoUser.email = usuarioVm.email;
            novoUser.senha = usuarioVm.senha;
            novoUser.mentor = usuarioVm.mentor;
            novoUser.queroMentor = usuarioVm.queroMentor;
            novoUser.parceria = usuarioVm.parceria;
            novoUser.criado = usuarioVm.criado;
            novoUser.atualizado = usuarioVm.atualizado;
            return yield this.update(novoUser._id, novoUser);
        });
    }
}
exports.CadastroService = CadastroService;
//# sourceMappingURL=cadastro.service.js.map