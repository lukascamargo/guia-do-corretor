import {Request, Response} from 'express';
import {Controller} from '@decorators/express';
import { ApiPath, ApiOperationPost, SwaggerDefinitionConstant, ApiOperationGet, ApiOperationDelete } from 'swagger-express-ts';
import { injectable, inject } from 'inversify';
import {interfaces, controller, httpGet, requestParam, httpPost, httpDelete} from 'inversify-express-utils';


@ApiPath({
    path: '',
    name: 'App'
})
export class AppController {

    @ApiOperationGet({
        description: 'Essa rota deve ser verificada para verificação se o servidor (backend) está em funcionamento',
        summary: 'Is Alive',
        path: '/isAlive',
        responses: {
            200: {description: 'The service is alive'},
        }
    })
    @httpGet('/isAlive')
    public isAlive(req: Request, res: Response) {
        const message = 'Guia Do Corretor está em funcionamento!';

        res.json(message);
    }
}