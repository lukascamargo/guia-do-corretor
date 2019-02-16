import {Request, Response} from 'express';
import {Controller} from '@decorators/express';
import { ApiPath, ApiOperationPost, SwaggerDefinitionConstant, ApiOperationGet, ApiOperationDelete, ApiOperationPatch } from 'swagger-express-ts';
import { injectable, inject } from 'inversify';
import {interfaces, controller, httpGet, requestParam, httpPost, httpDelete} from 'inversify-express-utils';

import {Seguradora} from 'models/seguradoras/seguradora.model';
import { BuscaSeguradoraService } from '../services/seguradoras/busca-seguradora.service';
import { MantemSeguradoraService } from '../services/seguradoras/mantem-seguradora.service';
import { AvaliacaoSeguradoraService } from '../services/seguradoras/avaliacao-seguradora.service';

@ApiPath({
    path: '',
    name: 'Seguradora'
})
export class SeguradoraController {
    private readonly _buscaSeguradoraService = new BuscaSeguradoraService();
    private readonly _mantemSeguradoraService = new MantemSeguradoraService();
    private readonly _avaliacaoSeguradoraService = new AvaliacaoSeguradoraService();

    @ApiOperationGet({
        description: 'Essa rota deve ser usada para a busca de uma listagem de seguradora cadastradas no sistema',
        summary: 'getSeguradoras',
        path: '/getSeguradoras',
        responses: {
            200: {description: 'Sucesso', model: 'Seguradora'}
        }
    })
    public getSeguradoras(req: Request, res: Response) {
        console.log('Busca seguradoras');

        this._buscaSeguradoraService
            .getSeguradoras()
            .then(r => res.json(r))
            .catch(e => res.json(e));
    }

    @ApiOperationGet({
        description: 'Essa rota deve ser usada para a busca de uma seguradora em especifico',
        summary: 'getSeguradora',
        path: '/getSeguradora/{seguradoraId}',
        parameters: {
            path: {
                seguradoraId: {
                    required: true,
                    type: SwaggerDefinitionConstant.Parameter.Type.STRING,
                }
            }
        },
        responses: {
            200: {description: 'Sucesso', model: 'Seguradora'}
        }
    })
    public getSeguradora(@requestParam('seguradoraId') req: Request, res: Response) {
        const {seguradoraId} = req.params;

        this._buscaSeguradoraService
            .getSeguradora(seguradoraId)
            .then(r => res.json(r))
            .catch(e => res.json(e));
    }

    @ApiOperationDelete({
        description: 'Essa rota deve ser usada para a busca de uma seguradora em especifico',
        summary: 'deletaSeguradora',
        path: '/deletaSeguradora/{seguradoraId}',
        parameters: {
            path: {
                seguradoraId: {
                    required: true,
                    type: SwaggerDefinitionConstant.Parameter.Type.STRING,
                }
            }
        },
        responses: {
            200: {description: 'Sucesso', model: 'Seguradora'}
        }
    })
    public deletaSeguradora(@requestParam('seguradoraId') req: Request, res: Response) {
        const {seguradoraId} = req.params;

        this._mantemSeguradoraService
            .deletaSeguradora(seguradoraId)
            .then(r => res.json(r))
            .catch(e => res.json(e));
    }

    @ApiOperationPost({
        description: 'Essa rota deve ser utilizada para a criação ou atualização de uma Seguradora. Caso queira atualizar uma seguradora especifica você deve passar o parametro _id obrigatoriamente',
        summary: 'Criar ou Atualizar Seguradora',
        path: '/mantemSeguradora',
        parameters: {
            body: {
                required: true,
                description: 'Criar ou atualizar Seguradora',
                model: 'Seguradora'
            }
        },
        responses: {
            200: {description: 'Sucesso', model: 'Seguradora'}
        }
    })
    public mantemSeguradora(req: Request, res: Response) {
        const seguradora = req.body;

        this._mantemSeguradoraService
            .mantemSeguradora(seguradora)
            .then(r => res.json(r))
            .catch(e => res.json(e));
    }

    @ApiOperationPost({
        description: 'Essa rota deve ser utilizada para criar avaliações em relação a uma seguradora especifica',
        summary: 'Avaliar Seguradora',
        path: '/avaliarSeguradora/{seguradoraId}',
        parameters: {
            body: {
                required: true,
                description: 'Criar ou atualizar Seguradora',
                model: 'Avaliacao'
            },
            path: {
                seguradoraId: {
                    required: true,
                    type: SwaggerDefinitionConstant.Parameter.Type.STRING,
                }
            }
        },
        responses: {
            200: {description: 'Sucesso', model: 'Seguradora'}
        }
    })
    public avaliarSeguradora(@requestParam('seguradoraId') req: Request, res: Response) {
        const avaliacao = req.body;
        const {seguradoraId} = req.params;

        this._avaliacaoSeguradoraService
            .avaliar(seguradoraId, avaliacao)
            .then(r => res.json(r))
            .catch(e => res.json(e));
    }

}