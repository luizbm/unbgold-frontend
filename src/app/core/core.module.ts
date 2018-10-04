import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";

import { LayoutComponent } from './shell/layout/layout.component';
import { HeaderComponent } from './shell/header/header.component';
import { FooterComponent } from './shell/footer/footer.component';
import { AppRoutingModule } from '../app-routing.module';
import { UserService } from './user/user.service';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    AppRoutingModule
  ],
  declarations: [
    LayoutComponent, 
    HeaderComponent, 
    FooterComponent
  ],
  providers: [UserService],
  exports: [LayoutComponent]
})
export class CoreModule { }
