import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoticiasComponent } from './noticias.component';

@NgModule({
  declarations: [NoticiasComponent],
  imports: [
    CommonModule
  ],
  exports: [NoticiasComponent]
})
export class NoticiasModule { }
