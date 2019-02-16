import { BaseService } from '../base.service';
import {Seguradora} from '../../models/seguradoras/seguradora.model';

export class MantemSeguradoraService extends BaseService<Seguradora> {
    constructor(
        private readonly _seguradoraModel =new Seguradora().getModelForClass(Seguradora)
    ){
        super();
        this._model = _seguradoraModel;
    }

    async mantemSeguradora(seguradoraVm: Seguradora) {
        const seguradora = new this._model();

        seguradora._id = seguradoraVm._id;
        seguradora.nome = seguradoraVm.nome;
        seguradora.site = seguradoraVm.site;
        seguradora.descricao = seguradoraVm.descricao;
        seguradora.logoLink = seguradoraVm.logoLink;
        seguradora.avaliacoes = seguradoraVm.avaliacoes;
        seguradora.criado = seguradoraVm.criado;
        seguradora.atualizado = seguradoraVm.atualizado;

        return await this.update(seguradora._id, seguradora);
    }

    async deletaSeguradora(seguradoraId: string){
        return await this.delete(seguradoraId);
    }
}
