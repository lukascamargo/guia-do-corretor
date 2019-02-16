import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '../../../../node_modules/@angular/forms';
import { HttpClient } from '../../../../node_modules/@angular/common/http';
import { Router } from '../../../../node_modules/@angular/router';
import { environment } from '../../../environments/environment.prod';

const API = environment.apiUrl;
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  loginForm: FormGroup;
	usuario: any = {};
	mensagem: string;

	constructor(
		private formBuilder: FormBuilder,
		private http: HttpClient,
		private _router: Router
	) { }

	ngOnInit() {
		this.mensagem = 'Cadastre-se para utilizar o sistema';
		this.construirFormulario();
	}

	construirFormulario(){
		this.loginForm = this.formBuilder.group({
			email: ['', Validators.required],
			senha: ['', Validators.required]
		})
	}

	login(){
		console.log('Pegar usuário');
		this.usuario.email = this.loginForm.get('email').value;
		this.usuario.senha = this.loginForm.get('senha').value;
		console.log(this.usuario);
		this.
			http.
			post(API + '/login', this.usuario)
			.subscribe((r:any) => {
        console.log(r)
        if(r){
          localStorage.setItem('email', r.email);
          localStorage.setItem('id', r._id);
          this._router.navigate(['/']);
        } else {
          console.log('erro', r);
        }
			},
			e => {
				console.log(e);
				this.mensagem =  'Houve um erro no cadastro';
			});
	}

}
