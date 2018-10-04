import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

import { ProfessoresRaizComponent } from './professores-raiz.component';
import { AuthGuard } from '@app/core/auth/auth.guard';
import { ProfessoresComponent } from './professores.component';
import { CadastroProfessorComponent } from './cadastro/cadastro-professor.component';

const routes: Routes = [
  { path: '',
    component: ProfessoresRaizComponent,
  
    children: [
      { path: '', component: ProfessoresComponent },
      { path: 'cadastro', component: CadastroProfessorComponent }
    ]
  }
]

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class ProfessoresRoutingModule { }
