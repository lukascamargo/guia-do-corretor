"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const app_controller_1 = require("../controllers/app.controller");
const seguradora_controller_1 = require("../controllers/seguradora.controller");
const noticias_controller_1 = require("../controllers/noticias.controller");
const login_controller_1 = require("../controllers/login.controller");
const vagas_controller_1 = require("../controllers/vagas.controller");
const mentorias_parcerias_controller_1 = require("../controllers/mentorias-parcerias.controller");
class Routes {
    constructor() {
        this._appController = new app_controller_1.AppController();
        this._seguradoraController = new seguradora_controller_1.SeguradoraController();
        this._noticiasController = new noticias_controller_1.NoticiasController();
        this._loginController = new login_controller_1.LoginController();
        this._vagasController = new vagas_controller_1.VagasController();
        this._mPController = new mentorias_parcerias_controller_1.MentoriasParceriasController();
        this.router = express_1.Router();
        this.init();
    }
    init() {
        this.router
            .route('/isAlive')
            .get(this._appController.isAlive.bind(this._appController));
        //APIs de Login
        this.router
            .route('/manterUsuario')
            .post(this._loginController.manterUsuario.bind(this._loginController));
        this.router
            .route('/login')
            .post(this._loginController.login.bind(this._loginController));
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
        //APIs de Vagas
        this.router
            .route('/executaCrawlerVagas')
            .get(this._vagasController.executeCrawler.bind(this._vagasController));
        this.router
            .route('/buscaVagas')
            .get(this._vagasController.buscaVagas.bind(this._vagasController));
        //APIs de Parceirias e Mentorias
        this.router
            .route('/ativarMentoria')
            .post(this._mPController.ativarMentoria.bind(this._mPController));
        this.router
            .route('/ativarParceria')
            .post(this._mPController.ativarParceria.bind(this._mPController));
        this.router
            .route('/ativarQueroSerMentor')
            .post(this._mPController.ativarQueroSerMentor.bind(this._mPController));
        this.router
            .route('/getMentores')
            .get(this._mPController.getMentores.bind(this._mPController));
        this.router
            .route('/getQueroMentor')
            .get(this._mPController.getQueroMentor.bind(this._mPController));
        this.router
            .route('/getParceiros')
            .get(this._mPController.getParceiros.bind(this._mPController));
    }
}
exports.default = new Routes().router;
//# sourceMappingURL=app.routes.js.map