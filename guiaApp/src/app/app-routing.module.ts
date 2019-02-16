import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './template/home/home.component';
import { ComunidadeComponent } from './template/comunidade/comunidade.component';
import { NoticiasComponent } from './template/noticias/noticias.component';
import { TrilhaComponent } from './template/trilha/trilha.component';
import { SeguradorasComponent } from './template/seguradoras/seguradoras.component';
import { SigninComponent } from './template/signin/signin.component';
import { SignupComponent } from './template/signup/signup.component';
import { SobreComponent } from './template/sobre/sobre.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'login',
    component: SigninComponent,
  },
  {
    path: 'comunidade',
    component: ComunidadeComponent
  },
  {
    path: 'noticias',
    component: NoticiasComponent
  },
  {
    path: 'trilha', 
    component: TrilhaComponent
  },
  {
    path: 'seguradoras', 
    component: SeguradorasComponent
  },
  {
    path: 'cadastro',
    component: SignupComponent
  },
  {
    path: 'sobre',
    component: SobreComponent
  }
];
@NgModule({
	imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
