import { prop, ModelType, arrayProp, Ref } from 'typegoose';
import {ApiModel, ApiModelProperty, SwaggerDefinitionConstant} from 'swagger-express-ts';

import { BaseModel } from '../base.model';
import { Avaliacao } from './avaliacao.model';

@ApiModel({
    description: 'Modelo de cadastro de Seguradoras no GuiaDoCorretor',
    name: 'Seguradora'
})
export class Seguradora extends BaseModel<Seguradora>{
    _id?: string;

    @ApiModelProperty({
        description: 'Nome da Seguradora',
        required: true
    })
    @prop({
        required: [true, 'Nome é um elemento obrigatório desta collection']
    })
    nome: string;

    @ApiModelProperty({
        description: 'URL do site da Seguradora'
    })
    @prop()
    site?: string;

    @ApiModelProperty({
        description: 'Descrição breve da Seguradora'
    })
    @prop()
    descricao?: string;

    @ApiModelProperty({
        description: 'LINK do logo da Seguradora'
    })
    @prop()
    logoLink?: string;

    @ApiModelProperty({
        description: 'Avaliações da Seguradora'
    })
    @arrayProp({items: Avaliacao})
    avaliacoes?: Avaliacao[];

    @ApiModelProperty({
        description: 'Média dos votos da seguradora com base nas avaliações calculado dinamicamente'
    })
    @prop()
    media?: number;

}