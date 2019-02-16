import { prop, ModelType, arrayProp, Ref } from 'typegoose';
import {ApiModel, ApiModelProperty, SwaggerDefinitionConstant} from 'swagger-express-ts';

import { BaseModel } from '../base.model';

@ApiModel({
    description: 'Collection de avaliações de Seguradoras do GuiaDoCorretor',
    name: 'Avaliacao'
})
export class Avaliacao extends BaseModel<Avaliacao>{
    _id?: string;

    @ApiModelProperty({
        description: 'Usuário que fez a avaliação',
        required: true
    })
    @prop({required: [true, 'O usuário é um elemento obrigatório dessa Collection']})
    usuario: any;

    @ApiModelProperty({
        description: 'Voto da avaliação',
        required: true
    })
    @prop({required: [true, 'O voto é um elemento obrigatório dessa Collection']})
    voto: number;

    @ApiModelProperty({
        description: 'Comentário da avaliação realizada pelo usuário',
        required: true
    })
    @prop({required: [true, 'Comentário é um elemento obrigatório dessa Collection']})
    comentario: string;

    @ApiModelProperty({
        description: 'ID da Seguradora mencionada nesta avaliação',
        required: true
    })
    @prop({required: [true, 'O id da seguradora é um elemento obrigatório dessa Collection']})
    seguradoraId: string;
}