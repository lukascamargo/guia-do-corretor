import {Noticia} from '../../models/noticias/noticias.model';
import { BaseService } from '../base.service';

export class BuscaNoticiaServices extends BaseService<Noticia> {

    constructor(
        private readonly _noticiaModel = new Noticia().getModelForClass(Noticia)
    ) {
        super();
        this._model = _noticiaModel;
    }

    async buscaNoticias(){
        const noticias = this.findAll()

        return noticias;
    }

}