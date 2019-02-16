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
let Vaga = class Vaga extends base_model_1.BaseModel {
};
__decorate([
    swagger_express_ts_1.ApiModelProperty({
        description: 'Cargo da vaga',
        required: true
    }),
    typegoose_1.prop({ required: [true, 'O cargo é um elemento obrigatório dessa Collection'] }),
    __metadata("design:type", String)
], Vaga.prototype, "cargo", void 0);
__decorate([
    swagger_express_ts_1.ApiModelProperty({
        description: 'Empresa da Vaga',
        required: true
    }),
    typegoose_1.prop({ required: [true, 'A empresa é um elemento obrigatório dessa Collection'] }),
    __metadata("design:type", String)
], Vaga.prototype, "empres", void 0);
__decorate([
    swagger_express_ts_1.ApiModelProperty({
        description: 'Descrição da Vaga',
        required: true
    }),
    typegoose_1.prop({ required: [true, 'A descrição url é um elemento obrigatório dessa Collection'] }),
    __metadata("design:type", Object)
], Vaga.prototype, "descricao", void 0);
__decorate([
    swagger_express_ts_1.ApiModelProperty({
        description: 'URL da vaga',
        required: true
    }),
    typegoose_1.prop({ required: [true, 'A url é um elemento obrigatório dessa Collection'] }),
    __metadata("design:type", Object)
], Vaga.prototype, "link", void 0);
Vaga = __decorate([
    swagger_express_ts_1.ApiModel({
        description: 'Collection de vagas de Seguradoras do GuiaDoCorretor',
        name: 'Vaga'
    })
], Vaga);
exports.Vaga = Vaga;
//# sourceMappingURL=vagas.model.js.map