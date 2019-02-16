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
let LoginVm = class LoginVm {
};
__decorate([
    swagger_express_ts_1.ApiModelProperty({
        description: 'E-mail do Usuário',
        required: true
    }),
    __metadata("design:type", String)
], LoginVm.prototype, "email", void 0);
__decorate([
    swagger_express_ts_1.ApiModelProperty({
        description: 'Senha do Usuário',
        required: true
    }),
    __metadata("design:type", String)
], LoginVm.prototype, "senha", void 0);
LoginVm = __decorate([
    swagger_express_ts_1.ApiModel({
        description: 'Collection de noticias de Seguradoras do GuiaDoCorretor',
        name: 'UsuarioVm'
    })
], LoginVm);
exports.LoginVm = LoginVm;
//# sourceMappingURL=login-vm.model.js.map