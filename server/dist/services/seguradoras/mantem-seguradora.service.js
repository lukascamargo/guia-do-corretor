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
const seguradora_model_1 = require("../../models/seguradoras/seguradora.model");
class MantemSeguradoraService extends base_service_1.BaseService {
    constructor(_seguradoraModel = new seguradora_model_1.Seguradora().getModelForClass(seguradora_model_1.Seguradora)) {
        super();
        this._seguradoraModel = _seguradoraModel;
        this._model = _seguradoraModel;
    }
    mantemSeguradora(seguradoraVm) {
        return __awaiter(this, void 0, void 0, function* () {
            const seguradora = new this._model();
            seguradora._id = seguradoraVm._id;
            seguradora.nome = seguradoraVm.nome;
            seguradora.site = seguradoraVm.site;
            seguradora.descricao = seguradoraVm.descricao;
            seguradora.logoLink = seguradoraVm.logoLink;
            seguradora.avaliacoes = seguradoraVm.avaliacoes;
            seguradora.criado = seguradoraVm.criado;
            seguradora.atualizado = seguradoraVm.atualizado;
            return yield this.update(seguradora._id, seguradora);
        });
    }
    deletaSeguradora(seguradoraId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.delete(seguradoraId);
        });
    }
}
exports.MantemSeguradoraService = MantemSeguradoraService;
//# sourceMappingURL=mantem-seguradora.service.js.map