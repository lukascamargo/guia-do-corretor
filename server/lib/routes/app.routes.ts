import { Router } from 'express';
import { AppController } from '../controllers/app.controller';
import { SeguradoraController } from '../controllers/seguradora.controller';
import { NoticiasController } from '../controllers/noticias.controller';

class Routes {
    public router: Router;
    private readonly _appController = new AppController();
    private readonly _seguradoraController = new SeguradoraController();
    private readonly _noticiasController = new NoticiasController()

    constructor(){
        this.router = Router();
        this.init();
    }

    public init(){
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

export default new Routes().router;