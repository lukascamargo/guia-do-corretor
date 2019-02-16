import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {
  noticias: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
      this.http.get('http://localhost:3000/buscaNoticias').subscribe(r => {
      this.noticias = r;
      console.log(this.noticias);
    })
  }

}
