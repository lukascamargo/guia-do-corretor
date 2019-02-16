import { BaseService } from '../base.service';
import {Seguradora} from '../../models/seguradoras/seguradora.model';
import {Avaliacao} from '../../models/seguradoras/avaliacao.model';
import { parse } from 'url';

export class AvaliacaoSeguradoraService extends BaseService<Avaliacao> {
    constructor(
        private readonly _avaliacaoModel = new Avaliacao().getModelForClass(Avaliacao),
        private readonly _seguradoraModel = new Seguradora().getModelForClass(Seguradora)
    ){
        super();
        this._model = _avaliacaoModel;
    }

    async avaliar(seguradoraId: string, avaliacao: Avaliacao){
        const seguradora : Seguradora = await this._seguradoraModel.findById(seguradoraId);

        const newAvaliacao = new this._model();

        newAvaliacao.usario = avaliacao.usuario;
        newAvaliacao.criado = avaliacao.criado;
        newAvaliacao.atualizado = avaliacao.atualizado;
        newAvaliacao.voto = avaliacao.voto;
        newAvaliacao.comentario = avaliacao.comentario;
        newAvaliacao.seguradoraId = seguradoraId;

        const novaAvaliacao : Avaliacao = await this.update(newAvaliacao._id, newAvaliacao);

        seguradora.avaliacoes = [].concat(novaAvaliacao, seguradora.avaliacoes);
        // const somaDosVotos : number = await +seguradora.avaliacoes.map(a => a.voto);
        const somaDosVotos : number = await seguradora.avaliacoes.reduce(function(a, b) { return a + b.voto; }, 0);
        seguradora.media = (somaDosVotos / seguradora.avaliacoes.length);

        console.log(seguradora);

        return await this._seguradoraModel.findByIdAndUpdate(seguradora._id, seguradora, {new: true});
    }
}