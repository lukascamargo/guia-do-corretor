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
const inversify_express_utils_1 = require("inversify-express-utils");
let AppController = class AppController {
    isAlive(req, res) {
        const message = 'Guia Do Corretor está em funcionamento!';
        res.json(message);
    }
};
__decorate([
    swagger_express_ts_1.ApiOperationGet({
        description: 'Essa rota deve ser verificada para verificação se o servidor (backend) está em funcionamento',
        summary: 'Is Alive',
        path: '/isAlive',
        responses: {
            200: { description: 'The service is alive' },
        }
    }),
    inversify_express_utils_1.httpGet('/isAlive'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "isAlive", null);
AppController = __decorate([
    swagger_express_ts_1.ApiPath({
        path: '',
        name: 'App'
    })
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map