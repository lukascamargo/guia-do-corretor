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
const request = require("request-promise-native");
const cheerio = require("cheerio");
const base_service_1 = require("../base.service");
const vagas_model_1 = require("../../models/comunidade/vagas.model");
class VagasServices extends base_service_1.BaseService {
    constructor(_vagasModel = new vagas_model_1.Vaga().getModelForClass(vagas_model_1.Vaga)) {
        super();
        this._vagasModel = _vagasModel;
        this.urls = 'https://www.vagas.com.br/vagas-de-corretor?a%5B%5D=110';
        this._model = this._vagasModel;
    }
    executaCrawler() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.clearCollection();
            const vagas = yield this._crawlerInit(this.urls);
            return vagas;
        });
    }
    _crawlerInit(url) {
        return __awaiter(this, void 0, void 0, function* () {
            const vagas = [];
            const result = yield request.get(url);
            if (!result) {
                return { message: 'ERRO!!' };
            }
            const $ = cheerio.load(result);
            yield $('.grupoDeVagas').each(function () {
                return __awaiter(this, void 0, void 0, function* () {
                    var cargo = $(this).find('.cargo').text().trim();
                    var empresa = $(this).find('.emprVaga').text().trim();
                    var descricao = $(this).find('.detalhes p').text().trim();
                    vagas.push({ cargo, empresa, descricao });
                });
            });
            return vagas.map((n) => __awaiter(this, void 0, void 0, function* () { return yield this._addDB(n); }));
        });
    }
    _addDB({ cargo, empresa, descricao }) {
        return __awaiter(this, void 0, void 0, function* () {
            const vaga = this._model();
            vaga.cargo = cargo;
            vaga.empresa = empresa;
            vaga.descricao = descricao;
            return yield this.update(vaga._id, vaga);
        });
    }
    buscaVagas() {
        return __awaiter(this, void 0, void 0, function* () {
            const vagas = this.findAll();
            return vagas;
        });
    }
}
exports.VagasServices = VagasServices;
//# sourceMappingURL=vagas.service.js.map