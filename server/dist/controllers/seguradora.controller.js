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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const swagger_express_ts_1 = require("swagger-express-ts");
const inversify_express_utils_1 = require("inversify-express-utils");
const busca_seguradora_service_1 = require("../services/seguradoras/busca-seguradora.service");
const mantem_seguradora_service_1 = require("../services/seguradoras/mantem-seguradora.service");
const avaliacao_seguradora_service_1 = require("../services/seguradoras/avaliacao-seguradora.service");
let SeguradoraController = class SeguradoraController {
    constructor() {
        this._buscaSeguradoraService = new busca_seguradora_service_1.BuscaSeguradoraService();
        this._mantemSeguradoraService = new mantem_seguradora_service_1.MantemSeguradoraService();
        this._avaliacaoSeguradoraService = new avaliacao_seguradora_service_1.AvaliacaoSeguradoraService();
    }
    getSeguradoras(req, res) {
        console.log('Busca seguradoras');
        this._buscaSeguradoraService
            .getSeguradoras()
            .then(r => res.json(r))
            .catch(e => res.json(e));
    }
    getSeguradora(req, res) {
        const { seguradoraId } = req.params;
        this._buscaSeguradoraService
            .getSeguradora(seguradoraId)
            .then(r => res.json(r))
            .catch(e => res.json(e));
    }
    deletaSeguradora(req, res) {
        const { seguradoraId } = req.params;
        this._mantemSeguradoraService
            .deletaSeguradora(seguradoraId)
            .then(r => res.json(r))
            .catch(e => res.json(e));
    }
    mantemSeguradora(req, res) {
        const seguradora = req.body;
        this._mantemSeguradoraService
            .mantemSeguradora(seguradora)
            .then(r => res.json(r))
            .catch(e => res.json(e));
    }
    avaliarSeguradora(req, res) {
        const avaliacao = req.body;
        const { seguradoraId } = req.params;
        this._avaliacaoSeguradoraService
            .avaliar(seguradoraId, avaliacao)
            .then(r => res.json(r))
            .catch(e => res.json(e));
    }
};
__decorate([
    swagger_express_ts_1.ApiOperationGet({
        description: 'Essa rota deve ser usada para a busca de uma listagem de seguradora cadastradas no sistema',
        summary: 'getSeguradoras',
        path: '/getSeguradoras',
        responses: {
            200: { description: 'Sucesso', model: 'Seguradora' }
        }
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], SeguradoraController.prototype, "getSeguradoras", null);
__decorate([
    swagger_express_ts_1.ApiOperationGet({
        description: 'Essa rota deve ser usada para a busca de uma seguradora em especifico',
        summary: 'getSeguradora',
        path: '/getSeguradora/{seguradoraId}',
        parameters: {
            path: {
                seguradoraId: {
                    required: true,
                    type: swagger_express_ts_1.SwaggerDefinitionConstant.Parameter.Type.STRING,
                }
            }
        },
        responses: {
            200: { description: 'Sucesso', model: 'Seguradora' }
        }
    }),
    __param(0, inversify_express_utils_1.requestParam('seguradoraId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], SeguradoraController.prototype, "getSeguradora", null);
__decorate([
    swagger_express_ts_1.ApiOperationDelete({
        description: 'Essa rota deve ser usada para a busca de uma seguradora em especifico',
        summary: 'deletaSeguradora',
        path: '/deletaSeguradora/{seguradoraId}',
        parameters: {
            path: {
                seguradoraId: {
                    required: true,
                    type: swagger_express_ts_1.SwaggerDefinitionConstant.Parameter.Type.STRING,
                }
            }
        },
        responses: {
            200: { description: 'Sucesso', model: 'Seguradora' }
        }
    }),
    __param(0, inversify_express_utils_1.requestParam('seguradoraId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], SeguradoraController.prototype, "deletaSeguradora", null);
__decorate([
    swagger_express_ts_1.ApiOperationPost({
        description: 'Essa rota deve ser utilizada para a criação ou atualização de uma Seguradora. Caso queira atualizar uma seguradora especifica você deve passar o parametro _id obrigatoriamente',
        summary: 'Criar ou Atualizar Seguradora',
        path: '/mantemSeguradora',
        parameters: {
            body: {
                required: true,
                description: 'Criar ou atualizar Seguradora',
                model: 'Seguradora'
            }
        },
        responses: {
            200: { description: 'Sucesso', model: 'Seguradora' }
        }
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], SeguradoraController.prototype, "mantemSeguradora", null);
__decorate([
    swagger_express_ts_1.ApiOperationPost({
        description: 'Essa rota deve ser utilizada para criar avaliações em relação a uma seguradora especifica',
        summary: 'Avaliar Seguradora',
        path: '/avaliarSeguradora/{seguradoraId}',
        parameters: {
            body: {
                required: true,
                description: 'Criar ou atualizar Seguradora',
                model: 'Avaliacao'
            },
            path: {
                seguradoraId: {
                    required: true,
                    type: swagger_express_ts_1.SwaggerDefinitionConstant.Parameter.Type.STRING,
                }
            }
        },
        responses: {
            200: { description: 'Sucesso', model: 'Seguradora' }
        }
    }),
    __param(0, inversify_express_utils_1.requestParam('seguradoraId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], SeguradoraController.prototype, "avaliarSeguradora", null);
SeguradoraController = __decorate([
    swagger_express_ts_1.ApiPath({
        path: '',
        name: 'Seguradora'
    })
], SeguradoraController);
exports.SeguradoraController = SeguradoraController;
//# sourceMappingURL=seguradora.controller.js.map