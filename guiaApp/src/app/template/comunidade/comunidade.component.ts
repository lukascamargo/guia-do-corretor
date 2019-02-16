import { Component, OnInit } from '@angular/core';
import { HttpClient } from '../../../../node_modules/@angular/common/http';
import { environment } from '../../../environments/environment';

const API = environment.apiUrl;
@Component({
  selector: 'app-comunidade',
  templateUrl: './comunidade.component.html',
  styleUrls: ['./comunidade.component.css']
})
export class ComunidadeComponent implements OnInit {
  parceiros: any;
  mentores: any;

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.buscarParceiros();
    this.buscaMentores();
  }

  buscarParceiros(){

    this.http.get(API + '/getParceiros').subscribe(r => {
      this.parceiros = r;
      console.log(r);
    }, e => {
      console.log(e);;
    })

  }
  buscaMentores(){

    this.http.get(API + '/getMentores').subscribe(r => {
      this.mentores = r;
      console.log(r);
    }, e => {
      console.log(e);;
    })

  }

}
