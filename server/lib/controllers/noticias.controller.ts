import {Request, Response} from 'express';
import {Controller} from '@decorators/express';
import { ApiPath, ApiOperationPost, SwaggerDefinitionConstant, ApiOperationGet, ApiOperationDelete, ApiOperationPatch } from 'swagger-express-ts';
import { injectable, inject } from 'inversify';
import {interfaces, controller, httpGet, requestParam, httpPost, httpDelete} from 'inversify-express-utils';

import { CrawlerService } from '../services/noticias/crawler.service';
import { BuscaNoticiaServices } from '../services/noticias/busca-noticias.service';

@ApiPath({
    path: '',
    name: 'Noticias'
})
export class NoticiasController {
    private readonly _crawlerService = new CrawlerService();
    private readonly _buscaNoticiasService = new BuscaNoticiaServices();

    @ApiOperationGet({
        description: 'Essa rota executa o crawler para buscar novas noticias',
        summary: 'Executa script de crawler',
        path: '/executaCrawler',
        responses: {
            200: {description: 'Sucesso'}
        }
    })
    public executeCrawler(req: Request, res: Response){
        
        this._crawlerService
            .executaCrawler()
            .then(r => res.json(r))
            .catch(e => res.json(e));

    }

    @ApiOperationGet({
        description: 'Essa rota vai buscar todas as noticias que está na no banco de dados',
        summary: 'Busca noticias',
        path: '/buscaNoticias',
        responses: {
            200: {description: 'Sucesso', model: 'Noticia'}
        }
    })
    public buscaNoticias(req: Request, res: Response){

        this._buscaNoticiasService
            .buscaNoticias()
            .then(r => res.json(r))
            .catch(e => res.json(e));

    }
}