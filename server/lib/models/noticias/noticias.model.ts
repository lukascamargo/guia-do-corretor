import { prop, ModelType, arrayProp, Ref } from 'typegoose';
import {ApiModel, ApiModelProperty, SwaggerDefinitionConstant} from 'swagger-express-ts';

import { BaseModel } from '../base.model';

@ApiModel({
    description: 'Collection de noticias de Seguradoras do GuiaDoCorretor',
    name: 'Noticia'
})
export class Noticia extends BaseModel<Noticia>{
    _id?: string;

    @ApiModelProperty({
        description: 'Titulo da noticia',
        required: true
    })
    @prop({required: [true, 'O tiulo é um elemento obrigatório dessa Collection']})
    titulo: any;

    @ApiModelProperty({
        description: 'Link da Noticia',
        required: true
    })
    @prop({required: [true, 'O link é um elemento obrigatório dessa Collection']})
    link: any;

    @ApiModelProperty({
        description: 'URL da imagem da noticia',
        required: true
    })
    @prop({required: [true, 'A imagem url é um elemento obrigatório dessa Collection']})
    imagemUrl: any;

}