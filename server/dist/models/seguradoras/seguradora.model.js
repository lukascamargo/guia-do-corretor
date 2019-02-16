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
const typegoose_1 = require("typegoose");
const swagger_express_ts_1 = require("swagger-express-ts");
const base_model_1 = require("../base.model");
const avaliacao_model_1 = require("./avaliacao.model");
let Seguradora = class Seguradora extends base_model_1.BaseModel {
};
__decorate([
    swagger_express_ts_1.ApiModelProperty({
        description: 'Nome da Seguradora',
        required: true
    }),
    typegoose_1.prop({
        required: [true, 'Nome é um elemento obrigatório desta collection']
    }),
    __metadata("design:type", String)
], Seguradora.prototype, "nome", void 0);
__decorate([
    swagger_express_ts_1.ApiModelProperty({
        description: 'URL do site da Seguradora'
    }),
    typegoose_1.prop(),
    __metadata("design:type", String)
], Seguradora.prototype, "site", void 0);
__decorate([
    swagger_express_ts_1.ApiModelProperty({
        description: 'Descrição breve da Seguradora'
    }),
    typegoose_1.prop(),
    __metadata("design:type", String)
], Seguradora.prototype, "descricao", void 0);
__decorate([
    swagger_express_ts_1.ApiModelProperty({
        description: 'LINK do logo da Seguradora'
    }),
    typegoose_1.prop(),
    __metadata("design:type", String)
], Seguradora.prototype, "logoLink", void 0);
__decorate([
    swagger_express_ts_1.ApiModelProperty({
        description: 'Avaliações da Seguradora'
    }),
    typegoose_1.arrayProp({ items: avaliacao_model_1.Avaliacao }),
    __metadata("design:type", Array)
], Seguradora.prototype, "avaliacoes", void 0);
__decorate([
    swagger_express_ts_1.ApiModelProperty({
        description: 'Média dos votos da seguradora com base nas avaliações calculado dinamicamente'
    }),
    typegoose_1.prop(),
    __metadata("design:type", Number)
], Seguradora.prototype, "media", void 0);
Seguradora = __decorate([
    swagger_express_ts_1.ApiModel({
        description: 'Modelo de cadastro de Seguradoras no GuiaDoCorretor',
        name: 'Seguradora'
    })
], Seguradora);
exports.Seguradora = Seguradora;
//# sourceMappingURL=seguradora.model.js.map