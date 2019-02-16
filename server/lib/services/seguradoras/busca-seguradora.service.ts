import { BaseService } from '../base.service';
import {Seguradora} from '../../models/seguradoras/seguradora.model';

export class BuscaSeguradoraService extends BaseService<Seguradora> {

    constructor(
        private readonly _seguradoraModel = new Seguradora().getModelForClass(Seguradora)
    ) {
        super();
        this._model = _seguradoraModel;
    }

    async getSeguradoras(){
        const seguradoras = await this.findAll();
        console.log(seguradoras);
        return seguradoras;
    }

    async getSeguradora(seguradoraId: string) {
        const seguradora = await this.findById(seguradoraId);

        return seguradora;
    }

}