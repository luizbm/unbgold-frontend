import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { VMessageModule } from '@app/shared/components/vmessage/vmessage.module';
import { ProfessoresRoutingModule } from './professores-routing.module';
import { ProfessoresComponent } from './professores.component';
import { ProfessoresRaizComponent } from './professores-raiz.component';
import { CadastroProfessorComponent } from './cadastro/cadastro-professor.component';
import { ProfessoresListagemComponent } from './listagem/professores-listagem.component';
import { ProfessoresService } from './professores.service';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    VMessageModule,
    ProfessoresRoutingModule
  ],
  declarations: [
    ProfessoresComponent, 
    ProfessoresRaizComponent, 
    ProfessoresListagemComponent,
    CadastroProfessorComponent
  ],
  providers: [ ProfessoresService ],
  exports: [ProfessoresRaizComponent]
})
export class ProfessoresModule { }
