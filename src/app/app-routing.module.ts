import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuscaComponent } from './busca/form-busca/form-busca.component';
import { RouterModule, Routes } from '@angular/router';
import { TngDashboardComponent } from './tng-dashboard/tng-dashboard.component';
import { TngSidenavComponent } from './template/tng-sidenav/tng-sidenav.component';
import { DetalheBuscaComponent } from './busca/detalhe-busca/detalhe-busca.component';
import { FormDatasetComponent } from './dataset/form-dataset/form-dataset.component';

export const routes : Routes = [
  { path: 'busca', component: FormBuscaComponent},
  { path: 'dataset', component: FormDatasetComponent},
  { path: '', redirectTo: '/busca', pathMatch: 'full' },
  { path: 'buscaDetalhe/:id', component: DetalheBuscaComponent},
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
