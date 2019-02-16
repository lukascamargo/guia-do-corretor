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
let Avaliacao = class Avaliacao extends base_model_1.BaseModel {
};
__decorate([
    swagger_express_ts_1.ApiModelProperty({
        description: 'Usuário que fez a avaliação',
        required: true
    }),
    typegoose_1.prop({ required: [true, 'O usuário é um elemento obrigatório dessa Collection'] }),
    __metadata("design:type", Object)
], Avaliacao.prototype, "usuario", void 0);
__decorate([
    swagger_express_ts_1.ApiModelProperty({
        description: 'Voto da avaliação',
        required: true
    }),
    typegoose_1.prop({ required: [true, 'O voto é um elemento obrigatório dessa Collection'] }),
    __metadata("design:type", Number)
], Avaliacao.prototype, "voto", void 0);
__decorate([
    swagger_express_ts_1.ApiModelProperty({
        description: 'Comentário da avaliação realizada pelo usuário',
        required: true
    }),
    typegoose_1.prop({ required: [true, 'Comentário é um elemento obrigatório dessa Collection'] }),
    __metadata("design:type", String)
], Avaliacao.prototype, "comentario", void 0);
__decorate([
    swagger_express_ts_1.ApiModelProperty({
        description: 'ID da Seguradora mencionada nesta avaliação',
        required: true
    }),
    typegoose_1.prop({ required: [true, 'O id da seguradora é um elemento obrigatório dessa Collection'] }),
    __metadata("design:type", String)
], Avaliacao.prototype, "seguradoraId", void 0);
Avaliacao = __decorate([
    swagger_express_ts_1.ApiModel({
        description: 'Collection de avaliações de Seguradoras do GuiaDoCorretor',
        name: 'Avaliacao'
    })
], Avaliacao);
exports.Avaliacao = Avaliacao;
//# sourceMappingURL=avaliacao.model.js.map