// var Crawler = {
// 	request : null,
// 	cheerio : null,
// 	init : function(html){
// 		request = require('request');
// 		cheerio = require('cheerio');
// 		Crawler.getMovies(html);
// 	},
// 	getMovies: function(html){
// 		request(html, function(err, res, body){
// 			if(err)
// 				console.log('Error: ' + err);
// 			var $ = cheerio.load(body);
// 			$('.list-item').each(function(){
// 				var title  = $(this).find('.list-item-title a' ).text().trim();
// 				var url  = $(this).find('.list-item-title a').attr('href');
// 				var img_url  = $(this).find('.image img').attr('src');
// 				console.log(title +'\n'+ url+'\n'+img_url);	
// 			});
// 		});
// 	}
// };
// Crawler.init('https://exame.abril.com.br/noticias-sobre/seguros/');
//# sourceMappingURL=crawler-seguradoras.service.js.map