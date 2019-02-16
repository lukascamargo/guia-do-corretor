import { Router } from 'express';
import { AppController } from '../controllers/app.controller';
import { SeguradoraController } from '../controllers/seguradora.controller';
import { NoticiasController } from '../controllers/noticias.controller';
import { LoginController } from '../controllers/login.controller';
import { VagasController } from '../controllers/vagas.controller';
import { MentoriasParceriasController } from '../controllers/mentorias-parcerias.controller';

class Routes {
    public router: Router;
    private readonly _appController = new AppController();
    private readonly _seguradoraController = new SeguradoraController();
    private readonly _noticiasController = new NoticiasController()
    private readonly _loginController = new LoginController();
    private readonly _vagasController = new VagasController();
    private readonly _mPController = new MentoriasParceriasController()

    constructor(){
        this.router = Router();
        this.init();
    }

    public init(){
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
            .route('/ativarMentoria/:userId')
            .post(this._mPController.ativarMentoria.bind(this._mPController));

        this.router
            .route('/ativarParceria/:userId')
            .post(this._mPController.ativarParceria.bind(this._mPController));


        this.router
            .route('/ativarQueroSerMentor/:userId')
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

export default new Routes().router;