import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '../../../../node_modules/@angular/forms';
import { HttpClient } from '../../../../node_modules/@angular/common/http';
import { environment } from '../../../environments/environment.prod';
import { Router } from '../../../../node_modules/@angular/router';

const API = environment.apiUrl;
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
	cadastraForm: FormGroup;
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
		this.cadastraForm = this.formBuilder.group({
			nome: ['', Validators.required],
			email: ['', Validators.required],
			senha: ['', Validators.required]
		})
	}

	manterUsuario(){
		console.log('Pegar usuário');
		this.usuario.nome = this.cadastraForm.get('nome').value;
		this.usuario.email = this.cadastraForm.get('email').value;
		this.usuario.senha = this.cadastraForm.get('senha').value;
		console.log(this.usuario);
		this.
			http.
			post(API + '/manterUsuario', this.usuario)
			.subscribe((r:any) => {
				console.log('Usuário cadastrado!! ', r);
				this._router.navigate(['/']);
			},
			e => {
				console.log(e);
				this.mensagem =  'Houve um erro no cadastro';
			});
	}

}
