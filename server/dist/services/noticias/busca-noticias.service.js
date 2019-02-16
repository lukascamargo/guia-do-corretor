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
const noticias_model_1 = require("../../models/noticias/noticias.model");
const base_service_1 = require("../base.service");
class BuscaNoticiaServices extends base_service_1.BaseService {
    constructor(_noticiaModel = new noticias_model_1.Noticia().getModelForClass(noticias_model_1.Noticia)) {
        super();
        this._noticiaModel = _noticiaModel;
        this._model = _noticiaModel;
    }
    buscaNoticias() {
        return __awaiter(this, void 0, void 0, function* () {
            const noticias = this.findAll();
            return noticias;
        });
    }
}
exports.BuscaNoticiaServices = BuscaNoticiaServices;
//# sourceMappingURL=busca-noticias.service.js.map