import {Request, Response} from 'express';
import {Controller} from '@decorators/express';
import { ApiPath, ApiOperationPost, SwaggerDefinitionConstant, ApiOperationGet, ApiOperationDelete, ApiOperationPatch } from 'swagger-express-ts';
import { injectable, inject } from 'inversify';
import {interfaces, controller, httpGet, requestParam, httpPost, httpDelete} from 'inversify-express-utils';

import { MentoriasServices } from '../services/mentorias/mentorias.service';
import { ParceriasService } from '../services/mentorias/parcerias.service';

@ApiPath({
    path: '',
    name: 'Mentorias e Parcerias'
})
export class MentoriasParceriasController {
    private readonly _mentoriasServices = new MentoriasServices();
    private readonly _parceriasServices = new ParceriasService();

    @ApiOperationPost({
        description: 'Essa rota ativa perfil de mentor para o usuario referenciado',
        summary: 'Ativa perfil mentor',
        path: '/ativarMentoria',
        parameters: {
            path:{
                userId: {
                    required:true, 
                    type: SwaggerDefinitionConstant.Parameter.Type.STRING
                }
            }
        },
        responses: {
            200: {description: 'Sucesso'}
        }
    })
    public ativarMentoria(req: Request, res: Response){
        const {userId} = req.params;

        this._mentoriasServices
            .ativarMentoria(userId)
            .then(r => res.json(r))
            .catch(e => res.json(e));
    }

    @ApiOperationPost({
        description: 'Essa rota ativa procura de mentor para o usuario referenciado',
        summary: 'Ativa procura de mentor',
        path: '/ativarQueroSerMentor',
        parameters: {
            path:{
                userId: {
                    required:true, 
                    type: SwaggerDefinitionConstant.Parameter.Type.STRING
                }
            }
        },
        responses: {
            200: {description: 'Sucesso'}
        }
    })
    public ativarQueroSerMentor(req: Request, res: Response){
        const {userId} = req.params;

        this._mentoriasServices
            .ativarQueroSerMentor(userId)
            .then(r => res.json(r))
            .catch(e => res.json(e));
    }

    @ApiOperationGet({
        description: 'Essa rota busca pessoas com perfil de mentor',
        summary: 'Busca perfil de mentor',
        path: '/getMentores',
        responses: {
            200: {description: 'Sucesso'}
        }
    })
    public getMentores(req: Request, res: Response){
        this._mentoriasServices
            .getMentores()
            .then(r => res.json(r))
            .catch(e => res.json(e));
    }

    @ApiOperationGet({
        description: 'Essa rota busca pessoas que precisam de mentor',
        summary: 'Busca pessoas precisando de mentor',
        path: '/getQueroMentor',
        responses: {
            200: {description: 'Sucesso'}
        }
    })
    public getQueroMentor(req: Request, res: Response){
        this._mentoriasServices
            .getQueroMentor()
            .then(r => res.json(r))
            .catch(e => res.json(e));
    }

    @ApiOperationGet({
        description: 'Essa rota busca pessoas com perfil de parceiria',
        summary: 'Busca perfil de parceiro',
        path: '/getParceiros',
        responses: {
            200: {description: 'Sucesso'}
        }
    })
    public getParceiros(req: Request, res: Response){
        this._parceriasServices
            .getParceiros()
            .then(r => res.json(r))
            .catch(e => res.json(e));
    }

    @ApiOperationPost({
        description: 'Essa rota ativa perfil de parceiria para o usuario referenciado',
        summary: 'Ativa perfil parceiro',
        path: '/ativarParceria',
        parameters: {
            path:{
                userId: {
                    required:true, 
                    type: SwaggerDefinitionConstant.Parameter.Type.STRING
                }
            }
        },
        responses: {
            200: {description: 'Sucesso'}
        }
    })
    public ativarParceria(req: Request, res: Response){
        const {userId} = req.params;

        this._parceriasServices
            .ativarParceria(userId)
            .then(r => res.json(r))
            .catch(e => res.json(e));
    }


    
}