import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComunidadeModule } from './comunidade/comunidade.module';
import { HomeModule } from './home/home.module';
import { NoticiasModule } from './noticias/noticias.module';
import { TrilhaModule } from './trilha/trilha.module';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ComunidadeModule,
    HomeModule,
    NoticiasModule,
    TrilhaModule, 
    CoreModule
  ]
})
export class TemplateModule { }
