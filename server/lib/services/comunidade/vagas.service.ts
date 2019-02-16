import * as request from 'request-promise-native';
import * as cheerio from 'cheerio';

import { BaseService } from '../base.service';
import { Vaga } from '../../models/comunidade/vagas.model';

export class VagasServices extends BaseService<Vaga> {
    private readonly urls = 'https://www.vagas.com.br/vagas-de-corretor?a%5B%5D=110';
    
    constructor(
        private readonly _vagasModel = new Vaga().getModelForClass(Vaga)
    ){
        super();
        this._model = this._vagasModel;
    }

    async executaCrawler(){
        await this.clearCollection();

        const vagas = await this._crawlerInit(this.urls);

        return vagas;
    }

    private async _crawlerInit(url){
        const vagas = [];

        const result = await request.get(url);
        if(!result){
            return {message: 'ERRO!!'}
        }

        const $ = cheerio.load(result);
        await $('.grupoDeVagas').each(async function(){
            var cargo  = $(this).find('.cargo').text().trim();
            var empresa = $(this).find('.emprVaga').text().trim();
            var descricao = $(this).find('.detalhes p').text().trim(); 
            vagas.push({cargo, empresa, descricao});
        })


        return vagas.map(async n => await this._addDB(n));
        
    }

    private async _addDB({cargo, empresa, descricao}){
        const vaga = this._model();

        vaga.cargo = cargo;
        vaga.empresa = empresa;
        vaga.descricao = descricao;

        return await this.update(vaga._id, vaga);
    }

    async buscaVagas(){
        const vagas = this.findAll();

        return vagas;
    }
}