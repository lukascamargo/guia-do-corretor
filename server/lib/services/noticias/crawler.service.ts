import * as request from 'request-promise-native';
import * as cheerio from 'cheerio';

import {Noticia} from '../../models/noticias/noticias.model';
import { BaseService } from '../base.service';

export class CrawlerService extends BaseService<Noticia> {

    private readonly urls = [
        'https://exame.abril.com.br/noticias-sobre/seguros/'
    ];

    constructor(
        private readonly _noticiaModel = new Noticia().getModelForClass(Noticia)
    ) {
        super();
        this._model = _noticiaModel;
    }

    async executaCrawler(url : string){

        this.urls.map(async u => {
            const noticias = await this._crawlerInit(u);
        })
        
        return true;
    }

    private async _crawlerInit(url){

        const noticias  = [];

        const result = await request.get(url);
        if(!result){
            return {message: 'ERROR!!'}
        }
        const $ = cheerio.load(result);
        await $('.list-item').each(async function(){
                var titulo = $(this).find('.list-item-title a' ).text().trim();
                var link = $(this).find('.list-item-title a').attr('href');
                var imagemUrl = $(this).find('.image img').attr('src');
                noticias.push({titulo, link, imagemUrl});
        })


        await noticias.map(async n => await this._addDB(n.titulo, n.link, n.imagemUrl));

    }

    private async _addDB(titulo, link, imagemUrl){
        console.log({titulo, link, imagemUrl});
        const noticia = this._model();

        noticia.titulo = titulo;
        noticia.link = link;
        noticia.imagemUrl = imagemUrl;

        return await this.update(noticia._id, noticia);
    }

}