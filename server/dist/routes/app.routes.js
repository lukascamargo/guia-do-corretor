"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const app_controller_1 = require("../controllers/app.controller");
const seguradora_controller_1 = require("../controllers/seguradora.controller");
const noticias_controller_1 = require("../controllers/noticias.controller");
class Routes {
    constructor() {
        this._appController = new app_controller_1.AppController();
        this._seguradoraController = new seguradora_controller_1.SeguradoraController();
        this._noticiasController = new noticias_controller_1.NoticiasController();
        this.router = express_1.Router();
        this.init();
    }
    init() {
        this.router
            .route('/isAlive')
            .get(this._appController.isAlive.bind(this._appController));
        //APIs de Seguradoras
        this.router
            .route('/getSeguradoras')
            .get(this._seguradoraController.getSeguradoras.bind(this._seguradoraController));
        this.router
            .route('/getSeguradora/:seguradoraId')
            .get(this._seguradoraController.getSeguradora.bind(this._seguradoraController));
        this.router
            .route('/deletaSeguradora/:seguradoraId')
            .delete(this._seguradoraController.deletaSeguradora.bind(this._seguradoraController));
        this.router
            .route('/mantemSeguradora')
            .post(this._seguradoraController.mantemSeguradora.bind(this._seguradoraController));
        this.router
            .route('/avaliarSeguradora/:seguradoraId')
            .post(this._seguradoraController.avaliarSeguradora.bind(this._seguradoraController));
        //APIs de Noticias
        this.router
            .route('/executaCrawler')
            .get(this._noticiasController.executeCrawler.bind(this._noticiasController));
        this.router
            .route('/buscaNoticias')
            .get(this._noticiasController.buscaNoticias.bind(this._noticiasController));
    }
}
exports.default = new Routes().router;
//# sourceMappingURL=app.routes.js.map