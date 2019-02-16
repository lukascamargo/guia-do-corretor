import {Request, Response} from 'express';
import {Controller} from '@decorators/express';
import { ApiPath, ApiOperationPost, SwaggerDefinitionConstant, ApiOperationGet, ApiOperationDelete, ApiOperationPatch } from 'swagger-express-ts';
import { injectable, inject } from 'inversify';
import {interfaces, controller, httpGet, requestParam, httpPost, httpDelete} from 'inversify-express-utils';

import { VagasServices } from '../services/comunidade/vagas.service';

@ApiPath({
    path: '',
    name: 'Vagas'
})
export class VagasController {
    private readonly _vagasService = new VagasServices();

    @ApiOperationGet({
        description: 'Essa rota executa o crawler para buscar novas vagas',
        summary: 'Executa script de crawler',
        path: '/executaCrawlerVagas',
        responses: {
            200: {description: 'Sucesso'}
        }
    })
    public executeCrawler(req: Request, res: Response){
        
        this._vagasService
            .executaCrawler()
            .then(r => res.json(r))
            .catch(e => res.json(e));

    }

    @ApiOperationGet({
        description: 'Essa rota vai buscar todas as vagas que está na no banco de dados',
        summary: 'Busca vagas',
        path: '/buscaVagas',
        responses: {
            200: {description: 'Sucesso', model: 'Vaga'}
        }
    })
    public buscaVagas(req: Request, res: Response){

        this._vagasService
            .buscaVagas()
            .then(r => res.json(r))
            .catch(e => res.json(e));

    }
}