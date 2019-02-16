import { prop, ModelType, arrayProp, Ref } from 'typegoose';
import {ApiModel, ApiModelProperty, SwaggerDefinitionConstant} from 'swagger-express-ts';

import { BaseModel } from '../base.model';

@ApiModel({
    description: 'Collection de vagas de Seguradoras do GuiaDoCorretor',
    name: 'Vaga'
})
export class Vaga extends BaseModel<Vaga>{
    _id?: string;

    @ApiModelProperty({
        description: 'Cargo da vaga',
        required: true
    })
    @prop({required: [true, 'O cargo é um elemento obrigatório dessa Collection']})
    cargo?: string;

    @ApiModelProperty({
        description: 'Empresa da Vaga',
        required: true
    })
    @prop({required: [true, 'A empresa é um elemento obrigatório dessa Collection']})
    empres?: string;

    @ApiModelProperty({
        description: 'Descrição da Vaga',
        required: true
    })
    @prop({required: [true, 'A descrição url é um elemento obrigatório dessa Collection']})
    descricao?: any;

    @ApiModelProperty({
        description: 'URL da vaga',
        required: true
    })
    @prop({required: [true, 'A url é um elemento obrigatório dessa Collection']})
    link?: any;

}