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
class BuscaService extends base_service_1.BaseService {
    constructor(_seguradoraModel = new seguradora_model_1.Seguradora().getModelForClass(seguradora_model_1.Seguradora)) {
        super();
        this._seguradoraModel = _seguradoraModel;
        this._model = _seguradoraModel;
    }
    getSeguradoras() {
        return __awaiter(this, void 0, void 0, function* () {
            const seguradoras = yield this.findAll();
            return seguradoras;
        });
    }
}
exports.BuscaService = BuscaService;
//# sourceMappingURL=busca.service.js.map