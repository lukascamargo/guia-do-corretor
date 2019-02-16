import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { CoreModule } from 'src/app/core/core.module';
import { NoticiasModule } from '../noticias/noticias.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    CoreModule,
    NoticiasModule
  ]
})
export class HomeModule { }
