import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './template/home/home.component';
import { SigninComponent } from './signin/signin.component';
import { ComunidadeComponent } from './template/comunidade/comunidade.component';
import { NoticiasComponent } from './template/noticias/noticias.component';
import { TrilhaComponent } from './template/trilha/trilha.component';

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
  }
];
@NgModule({
	imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
