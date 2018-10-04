import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

import { TurmasComponent } from "@app/turmas/turmas.component";
import { SignInComponent } from '@app/home/signin/signin.component';
import { AuthGuard } from '@app/core/auth/auth.guard';
import { SignedInGuard } from '@app/core/auth/signedin.guard';
import { DatasetComponent } from '@app/dataset/dataset.component';

const routes: Routes = [

  { path: 'professores',
    loadChildren: './professores/professores.module#ProfessoresModule'
  },
  { path: 'turmas', component: TurmasComponent},
  { path: 'datasets', component: DatasetComponent},
  { path: '', redirectTo: '/', pathMatch: 'full'}
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
