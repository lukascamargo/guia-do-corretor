import { prop, ModelType, arrayProp, Ref } from 'typegoose';
import {ApiModel, ApiModelProperty, SwaggerDefinitionConstant} from 'swagger-express-ts';

import { BaseModel } from '../base.model';

@ApiModel({
    description: 'Collection de noticias de Seguradoras do GuiaDoCorretor',
    name: 'Usuario'
})
export class Usuario extends BaseModel<Usuario>{
    _id?: string;

    @ApiModelProperty({
        description: 'Nome do Usuário',
        required: true
    })
    @prop({required: [true, 'O nome é um elemento obrigatório dessa Collection']})
    nome: string;

    @ApiModelProperty({
        description: 'E-mail do Usuário',
        required: true
    })
    @prop({
        required: [true, 'O e-mail é um elemento obrigatório dessa Collection'],
        unique: true
    })
    email: string;

    @ApiModelProperty({
        description: 'Senha do Usuário',
        required: true
    })
    @prop({required: [true, 'A senha é um elemento obrigatório dessa Collection']})
    senha: string;

    @ApiModelProperty({
        description: 'Variavel booleana indicando se o usuário é um mentor um ou não'
    })
    @prop()
    mentor?: boolean;

    @ApiModelProperty({
        description: 'Variavel booleana indicando se o usuário quer um mentor ou não'
    })
    @prop()
    queroMentor?: boolean;

    @ApiModelProperty({
        description: 'Variavel booleana indicando se o usuário quer Parceria ou não'
    })
    @prop()
    parceria?: boolean;

}