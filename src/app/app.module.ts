import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Other imports removed for brevity
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutGoldModule } from './template/layout/layout.module';
import { HeadComponent } from './template/head/head.component';
import { MenuComponent } from './template/menu/menu.component';
import { FormBuscaComponent } from './busca/form-busca/form-busca.component';
import { AppRoutingModule } from './app-routing.module';
import { DetalheBuscaComponent } from './busca/detalhe-busca/detalhe-busca.component';
import { FormDatasetComponent } from './dataset/form-dataset/form-dataset.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutGoldModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
