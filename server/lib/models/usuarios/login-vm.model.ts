import { prop, ModelType, arrayProp, Ref } from 'typegoose';
import {ApiModel, ApiModelProperty, SwaggerDefinitionConstant} from 'swagger-express-ts';

import { BaseModel } from '../base.model';

@ApiModel({
    description: 'Collection de noticias de Seguradoras do GuiaDoCorretor',
    name: 'UsuarioVm'
})
export class LoginVm {
    @ApiModelProperty({
        description: 'E-mail do Usuário',
        required: true
    })
    email: string;

    @ApiModelProperty({
        description: 'Senha do Usuário',
        required: true
    })
    senha: string;

}