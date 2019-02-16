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
const mentorias_service_1 = require("../services/mentorias/mentorias.service");
const parcerias_service_1 = require("../services/mentorias/parcerias.service");
let MentoriasParceriasController = class MentoriasParceriasController {
    constructor() {
        this._mentoriasServices = new mentorias_service_1.MentoriasServices();
        this._parceriasServices = new parcerias_service_1.ParceriasService();
    }
    ativarMentoria(req, res) {
        const { userId } = req.params;
        this._mentoriasServices
            .ativarMentoria(userId)
            .then(r => res.json(r))
            .catch(e => res.json(e));
    }
    ativarQueroSerMentor(req, res) {
        const { userId } = req.params;
        this._mentoriasServices
            .ativarQueroSerMentor(userId)
            .then(r => res.json(r))
            .catch(e => res.json(e));
    }
    getMentores(req, res) {
        this._mentoriasServices
            .getMentores()
            .then(r => res.json(r))
            .catch(e => res.json(e));
    }
    getQueroMentor(req, res) {
        this._mentoriasServices
            .getQueroMentor()
            .then(r => res.json(r))
            .catch(e => res.json(e));
    }
    getParceiros(req, res) {
        this._parceriasServices
            .getParceiros()
            .then(r => res.json(r))
            .catch(e => res.json(e));
    }
    ativarParceria(req, res) {
        const { userId } = req.params;
        this._parceriasServices
            .ativarParceria(userId)
            .then(r => res.json(r))
            .catch(e => res.json(e));
    }
};
__decorate([
    swagger_express_ts_1.ApiOperationPost({
        description: 'Essa rota ativa perfil de mentor para o usuario referenciado',
        summary: 'Ativa perfil mentor',
        path: '/ativarMentoria',
        parameters: {
            path: {
                userId: {
                    required: true,
                    type: swagger_express_ts_1.SwaggerDefinitionConstant.Parameter.Type.STRING
                }
            }
        },
        responses: {
            200: { description: 'Sucesso' }
        }
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], MentoriasParceriasController.prototype, "ativarMentoria", null);
__decorate([
    swagger_express_ts_1.ApiOperationPost({
        description: 'Essa rota ativa procura de mentor para o usuario referenciado',
        summary: 'Ativa procura de mentor',
        path: '/ativarQueroSerMentor',
        parameters: {
            path: {
                userId: {
                    required: true,
                    type: swagger_express_ts_1.SwaggerDefinitionConstant.Parameter.Type.STRING
                }
            }
        },
        responses: {
            200: { description: 'Sucesso' }
        }
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], MentoriasParceriasController.prototype, "ativarQueroSerMentor", null);
__decorate([
    swagger_express_ts_1.ApiOperationGet({
        description: 'Essa rota busca pessoas com perfil de mentor',
        summary: 'Busca perfil de mentor',
        path: '/getMentores',
        responses: {
            200: { description: 'Sucesso' }
        }
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], MentoriasParceriasController.prototype, "getMentores", null);
__decorate([
    swagger_express_ts_1.ApiOperationGet({
        description: 'Essa rota busca pessoas que precisam de mentor',
        summary: 'Busca pessoas precisando de mentor',
        path: '/getQueroMentor',
        responses: {
            200: { description: 'Sucesso' }
        }
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], MentoriasParceriasController.prototype, "getQueroMentor", null);
__decorate([
    swagger_express_ts_1.ApiOperationGet({
        description: 'Essa rota busca pessoas com perfil de parceiria',
        summary: 'Busca perfil de parceiro',
        path: '/getParceiros',
        responses: {
            200: { description: 'Sucesso' }
        }
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], MentoriasParceriasController.prototype, "getParceiros", null);
__decorate([
    swagger_express_ts_1.ApiOperationPost({
        description: 'Essa rota ativa perfil de parceiria para o usuario referenciado',
        summary: 'Ativa perfil parceiro',
        path: '/ativarParceria',
        parameters: {
            path: {
                userId: {
                    required: true,
                    type: swagger_express_ts_1.SwaggerDefinitionConstant.Parameter.Type.STRING
                }
            }
        },
        responses: {
            200: { description: 'Sucesso' }
        }
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], MentoriasParceriasController.prototype, "ativarParceria", null);
MentoriasParceriasController = __decorate([
    swagger_express_ts_1.ApiPath({
        path: '',
        name: 'Mentorias e Parcerias'
    })
], MentoriasParceriasController);
exports.MentoriasParceriasController = MentoriasParceriasController;
//# sourceMappingURL=mentorias-parcerias.controller.js.map