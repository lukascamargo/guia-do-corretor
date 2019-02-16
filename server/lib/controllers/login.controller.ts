import {Request, Response} from 'express';
import {Controller} from '@decorators/express';
import { ApiPath, ApiOperationPost, SwaggerDefinitionConstant, ApiOperationGet, ApiOperationDelete, ApiOperationPatch } from 'swagger-express-ts';
import { injectable, inject } from 'inversify';
import {interfaces, controller, httpGet, requestParam, httpPost, httpDelete} from 'inversify-express-utils';

import { CadastroService } from '../services/login/cadastro.service';
import { LoginService } from '../services/login/login.service';
import { LoginVm } from '../models/usuarios/login-vm.model';
import { Usuario } from '../models/usuarios/usuarios.model';

@ApiPath({
    path: '',
    name: 'Login'
})
export class LoginController {
    private readonly _cadastroService = new CadastroService();
    private readonly _loginService = new LoginService();

    @ApiOperationPost({
        description: 'Essa rota deve ser utilizada para a realização de cadastro ou atualização de usuário na aplicação',
        summary: 'Cadastro ou atualização de usuário',
        path: '/manterUsuario',
        parameters: {
            body: {
                required: true,
                description: 'Criar ou atualizar usuário',
                model: 'Usuario'
            }
        },
        responses: {
            200: {description: 'Sucesso', model: 'Usuario'}
        }
    })
    public manterUsuario(req: Request, res: Response){

        const usuario: Usuario = req.body;

        this._cadastroService
            .manterUsuario(usuario)
            .then(r => res.json(r))
            .catch(e => res.json(e));

    }

    @ApiOperationPost({
        description: 'Essa rota deve ser usada para realização de login na aplicação',
        summary: 'Login de usuários',
        path: '/login',
        parameters: {
            body: {
                required: true,
                description: 'Criar ou atualizar usuário',
                model: 'LoginVm'
            }
        },
        responses: {
            200: {description: 'Sucesso', model: 'Usuario'}
        }
    })
    public login(req: Request, res: Response){

        const loginVm: LoginVm = req.body;

        this._loginService
            .login(loginVm)
            .then(r => res.json(r))
            .catch(e => res.json(e));

    }
}