import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as mongoose from 'mongoose';
import * as morgan from 'morgan';
import * as cors from 'cors';
import * as path from 'path';
import * as swagger from 'swagger-express-ts';

import Routes from '../routes/app.routes';

class App {
    public app: express.Application;
    private mongoUrl: string = 'mongodb://backend:guiadocorretor1@ds137605.mlab.com:37605/guia-do-corretor';

    constructor(){
        this.app = express();
        this._config();
        this._routes();
        this._mongoSetup();
        this._configSwagger();
    }

    private _config():void{
        this.app.use(morgan('dev'));
        this.app.use(bodyParser.json({limit: '50mb'}));
        this.app.use(bodyParser.urlencoded({limit: '50mb', extended: false}));
        this.app.use(cors({
            origi: '*',
            methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS'
        }));
    }

    private _mongoSetup():void{
        (<any>mongoose).Promise = global.Promise;
        mongoose.connect(this.mongoUrl, {useNewUrlParser: true});
        mongoose.connection.on('connected', ()=>console.log('Conectado ao MongoDB'));
        mongoose.connection.on('error', (error) => console.log('Erro na conexão: ' + error));
        mongoose.connection.on('disconnected', () => console.log('Desconectado do MongoDB'));
        process.on('SIGINT', () => {
            mongoose.connection.close(() => {
                console.log('Aplicação finalizada, conexão com o MongoDB fechada.');
                process.exit(0);
            });
        });
    }

    private _routes() : void {
        this.app.use('/api', Routes);
    }

    private _configSwagger() {
        this.app.use('/api-docs/swagger', express.static(path.join('swagger')));
        this.app.use('/api-docs/swagger/assets', express.static('node_modules/swagger-ui-dist'));
        this.app.use('/', express.static(path.join(__dirname, '../../../guiaApp/dist/guiaApp')));
        this.app.use(swagger.express({
            definition: {
                info: {
                    title: 'Guia do Corretor - Documentação de APIs',
                    version: '1.0'
                },
                externalDocs: {
                    url: 'localhost:3001/api-docs/swagger'
                },
                securityDefinitions: {
                    Bearer: {
                        type: 'apiKey',
                        in: 'header',
                        name: 'Authorization'
                    }
                },
                basePath: '/api'
            }
        }))
    }

}

export default new App().app;