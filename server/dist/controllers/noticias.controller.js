"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const swagger_express_ts_1 = require("swagger-express-ts");
const crawler_service_1 = require("../services/noticias/crawler.service");
const busca_noticias_service_1 = require("../services/noticias/busca-noticias.service");
let NoticiasController = class NoticiasController {
    constructor() {
        this._crawlerService = new crawler_service_1.CrawlerService();
        this._buscaNoticiasService = new busca_noticias_service_1.BuscaNoticiaServices();
    }
    executeCrawler(req, res) {
        this._crawlerService
            .executaCrawler()
            .then(r => res.json(r))
            .catch(e => res.json(e));
    }
    buscaNoticias(req, res) {
        this._buscaNoticiasService
            .buscaNoticias()
            .then(r => res.json(r))
            .catch(e => res.json(e));
    }
};
__decorate([
    swagger_express_ts_1.ApiOperationGet({
        description: 'Essa rota executa o crawler para buscar novas noticias',
        summary: 'Executa script de crawler',
        path: '/executaCrawler',
        responses: {
            200: { description: 'Sucesso' }
        }
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], NoticiasController.prototype, "executeCrawler", null);
__decorate([
    swagger_express_ts_1.ApiOperationGet({
        description: 'Essa rota vai buscar todas as noticias que está na no banco de dados',
        summary: 'Busca noticias',
        path: '/buscaNoticias',
        responses: {
            200: { description: 'Sucesso', model: 'Noticia' }
        }
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], NoticiasController.prototype, "buscaNoticias", null);
NoticiasController = __decorate([
    swagger_express_ts_1.ApiPath({
        path: '',
        name: 'Noticias'
    })
], NoticiasController);
exports.NoticiasController = NoticiasController;
//# sourceMappingURL=noticias.controller.js.map