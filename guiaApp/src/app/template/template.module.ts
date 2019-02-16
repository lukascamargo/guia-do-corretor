import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComunidadeModule } from './comunidade/comunidade.module';
import { HomeModule } from './home/home.module';
import { NoticiasModule } from './noticias/noticias.module';
import { TrilhaModule } from './trilha/trilha.module';
import { CoreModule } from '../core/core.module';
import { SeguradorasModule } from './seguradoras/seguradoras.module';
import { SigninModule } from './signin/signin.module';
import { SignupModule } from './signup/signup.module';
import { SobreModule } from './sobre/sobre.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ComunidadeModule,
    HomeModule,
    NoticiasModule,
    TrilhaModule, 
    CoreModule,
    SeguradorasModule,
    SigninModule,
    SignupModule, 
    SobreModule
  ]
})
export class TemplateModule { }
