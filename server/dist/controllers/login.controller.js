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
const cadastro_service_1 = require("../services/login/cadastro.service");
const login_service_1 = require("../services/login/login.service");
let LoginController = class LoginController {
    constructor() {
        this._cadastroService = new cadastro_service_1.CadastroService();
        this._loginService = new login_service_1.LoginService();
    }
    manterUsuario(req, res) {
        const usuario = req.body;
        this._cadastroService
            .manterUsuario(usuario)
            .then(r => res.json(r))
            .catch(e => res.json(e));
    }
    login(req, res) {
        const loginVm = req.body;
        this._loginService
            .login(loginVm)
            .then(r => res.json(r))
            .catch(e => res.json(e));
    }
};
__decorate([
    swagger_express_ts_1.ApiOperationPost({
        description: 'Essa rota deve ser utilizada para a realização de cadastro ou atualização de usuário na aplicação',
        summary: 'Cadastro ou atualização de usuário',
        path: '/manterUsuario',
        parameters: {
            body: {
                required: true,
                description: 'Criar ou atualizar usuário',
                model: 'Usuario'
            }
        },
        responses: {
            200: { description: 'Sucesso', model: 'Usuario' }
        }
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], LoginController.prototype, "manterUsuario", null);
__decorate([
    swagger_express_ts_1.ApiOperationPost({
        description: 'Essa rota deve ser usada para realização de login na aplicação',
        summary: 'Login de usuários',
        path: '/login',
        parameters: {
            body: {
                required: true,
                description: 'Criar ou atualizar usuário',
                model: 'LoginVm'
            }
        },
        responses: {
            200: { description: 'Sucesso', model: 'Usuario' }
        }
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], LoginController.prototype, "login", null);
LoginController = __decorate([
    swagger_express_ts_1.ApiPath({
        path: '',
        name: 'Login'
    })
], LoginController);
exports.LoginController = LoginController;
//# sourceMappingURL=login.controller.js.map