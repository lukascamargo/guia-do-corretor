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
const avaliacao_model_1 = require("../../models/seguradoras/avaliacao.model");
class AvaliacaoSeguradoraService extends base_service_1.BaseService {
    constructor(_avaliacaoModel = new avaliacao_model_1.Avaliacao().getModelForClass(avaliacao_model_1.Avaliacao), _seguradoraModel = new seguradora_model_1.Seguradora().getModelForClass(seguradora_model_1.Seguradora)) {
        super();
        this._avaliacaoModel = _avaliacaoModel;
        this._seguradoraModel = _seguradoraModel;
        this._model = _avaliacaoModel;
    }
    avaliar(seguradoraId, avaliacao) {
        return __awaiter(this, void 0, void 0, function* () {
            const seguradora = yield this._seguradoraModel.findById(seguradoraId);
            const newAvaliacao = new this._model();
            newAvaliacao.usario = avaliacao.usuario;
            newAvaliacao.criado = avaliacao.criado;
            newAvaliacao.atualizado = avaliacao.atualizado;
            newAvaliacao.voto = avaliacao.voto;
            newAvaliacao.comentario = avaliacao.comentario;
            newAvaliacao.seguradoraId = seguradoraId;
            const novaAvaliacao = yield this.update(newAvaliacao._id, newAvaliacao);
            seguradora.avaliacoes = [].concat(novaAvaliacao, seguradora.avaliacoes);
            // const somaDosVotos : number = await +seguradora.avaliacoes.map(a => a.voto);
            const somaDosVotos = yield seguradora.avaliacoes.reduce(function (a, b) { return a + b.voto; }, 0);
            seguradora.media = (somaDosVotos / seguradora.avaliacoes.length);
            console.log(seguradora);
            return yield this._seguradoraModel.findByIdAndUpdate(seguradora._id, seguradora, { new: true });
        });
    }
}
exports.AvaliacaoSeguradoraService = AvaliacaoSeguradoraService;
//# sourceMappingURL=avaliacao-seguradora.service.js.map