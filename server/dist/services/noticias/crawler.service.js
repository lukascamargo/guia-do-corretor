"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const request = require("request-promise-native");
const cheerio = require("cheerio");
const noticias_model_1 = require("../../models/noticias/noticias.model");
const base_service_1 = require("../base.service");
class CrawlerService extends base_service_1.BaseService {
    constructor(_noticiaModel = new noticias_model_1.Noticia().getModelForClass(noticias_model_1.Noticia)) {
        super();
        this._noticiaModel = _noticiaModel;
        this.urls = [
            'https://exame.abril.com.br/noticias-sobre/seguros/'
        ];
        this._model = _noticiaModel;
    }
    executaCrawler() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.clearCollection();
            this.urls.map((u) => __awaiter(this, void 0, void 0, function* () {
                const noticias = yield this._crawlerInit(u);
            }));
            return true;
        });
    }
    _crawlerInit(url) {
        return __awaiter(this, void 0, void 0, function* () {
            const noticias = [];
            const result = yield request.get(url);
            if (!result) {
                return { message: 'ERROR!!' };
            }
            const $ = cheerio.load(result);
            yield $('.list-item').each(function () {
                return __awaiter(this, void 0, void 0, function* () {
                    var titulo = $(this).find('.list-item-title a').text().trim();
                    var link = $(this).find('.list-item-title a').attr('href');
                    var imagemUrl = $(this).find('.image img').attr('src');
                    noticias.push({ titulo, link, imagemUrl });
                });
            });
            yield noticias.map((n) => __awaiter(this, void 0, void 0, function* () { return yield this._addDB(n.titulo, n.link, n.imagemUrl); }));
        });
    }
    _addDB(titulo, link, imagemUrl) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log({ titulo, link, imagemUrl });
            const noticia = this._model();
            noticia.titulo = titulo;
            noticia.link = link;
            noticia.imagemUrl = imagemUrl;
            return yield this.update(noticia._id, noticia);
        });
    }
}
exports.CrawlerService = CrawlerService;
//# sourceMappingURL=crawler.service.js.map