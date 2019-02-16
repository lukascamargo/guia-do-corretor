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
const vagas_service_1 = require("../services/comunidade/vagas.service");
let VagasController = class VagasController {
    constructor() {
        this._vagasService = new vagas_service_1.VagasServices();
    }
    executeCrawler(req, res) {
        this._vagasService
            .executaCrawler()
            .then(r => res.json(r))
            .catch(e => res.json(e));
    }
    buscaVagas(req, res) {
        this._vagasService
            .buscaVagas()
            .then(r => res.json(r))
            .catch(e => res.json(e));
    }
};
__decorate([
    swagger_express_ts_1.ApiOperationGet({
        description: 'Essa rota executa o crawler para buscar novas vagas',
        summary: 'Executa script de crawler',
        path: '/executaCrawlerVagas',
        responses: {
            200: { description: 'Sucesso' }
        }
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], VagasController.prototype, "executeCrawler", null);
__decorate([
    swagger_express_ts_1.ApiOperationGet({
        description: 'Essa rota vai buscar todas as vagas que está na no banco de dados',
        summary: 'Busca vagas',
        path: '/buscaVagas',
        responses: {
            200: { description: 'Sucesso', model: 'Vaga' }
        }
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], VagasController.prototype, "buscaVagas", null);
VagasController = __decorate([
    swagger_express_ts_1.ApiPath({
        path: '',
        name: 'Vagas'
    })
], VagasController);
exports.VagasController = VagasController;
//# sourceMappingURL=vagas.controller.js.map