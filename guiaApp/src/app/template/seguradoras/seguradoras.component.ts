import { Component, OnInit } from '@angular/core';
import { HttpClient } from '../../../../node_modules/@angular/common/http';
import { environment } from '../../../environments/environment.prod';

const API = environment.apiUrl;
@Component({
  selector: 'app-seguradoras',
  templateUrl: './seguradoras.component.html',
  styleUrls: ['./seguradoras.component.css']
})
export class SeguradorasComponent implements OnInit {
  seguradoras: any;

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.buscarSeguradoras();
  }

  buscarSeguradoras(){

    this.http.get(API + '/getSeguradoras').subscribe(r => {
      this.seguradoras = r;
      console.log(r);
    }, e => {
      console.log(e);;
    })

  }

}
