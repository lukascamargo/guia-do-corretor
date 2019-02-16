import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MatMenuModule } from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    MenuComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    RouterModule
  ],
  exports: [
    MenuComponent,
    HeaderComponent,
    FooterComponent
  ]
})
export class CoreModule { }
