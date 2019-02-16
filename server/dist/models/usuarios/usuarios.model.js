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
let Usuario = class Usuario extends base_model_1.BaseModel {
};
__decorate([
    swagger_express_ts_1.ApiModelProperty({
        description: 'Nome do Usuário',
        required: true
    }),
    typegoose_1.prop({ required: [true, 'O nome é um elemento obrigatório dessa Collection'] }),
    __metadata("design:type", String)
], Usuario.prototype, "nome", void 0);
__decorate([
    swagger_express_ts_1.ApiModelProperty({
        description: 'E-mail do Usuário',
        required: true
    }),
    typegoose_1.prop({
        required: [true, 'O e-mail é um elemento obrigatório dessa Collection'],
        unique: true
    }),
    __metadata("design:type", String)
], Usuario.prototype, "email", void 0);
__decorate([
    swagger_express_ts_1.ApiModelProperty({
        description: 'Senha do Usuário',
        required: true
    }),
    typegoose_1.prop({ required: [true, 'A senha é um elemento obrigatório dessa Collection'] }),
    __metadata("design:type", String)
], Usuario.prototype, "senha", void 0);
__decorate([
    swagger_express_ts_1.ApiModelProperty({
        description: 'Variavel booleana indicando se o usuário é um mentor um ou não'
    }),
    typegoose_1.prop({ default: false }),
    __metadata("design:type", Boolean)
], Usuario.prototype, "mentor", void 0);
__decorate([
    swagger_express_ts_1.ApiModelProperty({
        description: 'Variavel booleana indicando se o usuário quer um mentor ou não'
    }),
    typegoose_1.prop({ default: false }),
    __metadata("design:type", Boolean)
], Usuario.prototype, "queroMentor", void 0);
__decorate([
    swagger_express_ts_1.ApiModelProperty({
        description: 'Variavel booleana indicando se o usuário quer Parceria ou não'
    }),
    typegoose_1.prop({ default: false }),
    __metadata("design:type", Boolean)
], Usuario.prototype, "parceria", void 0);
Usuario = __decorate([
    swagger_express_ts_1.ApiModel({
        description: 'Collection de noticias de Seguradoras do GuiaDoCorretor',
        name: 'Usuario'
    })
], Usuario);
exports.Usuario = Usuario;
//# sourceMappingURL=usuarios.model.js.map