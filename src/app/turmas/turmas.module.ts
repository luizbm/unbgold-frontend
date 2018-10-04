import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TurmasComponent } from './turmas.component';
import { EvidenceOnHoverModule } from '../shared/directives/evidence-on-hover/evidence-on-hover.module';
import { FilterByDescriptionPipe } from './pipes/filter-by-description.pipe';
import { AMenosQueModule } from '../shared/directives/a-menos-que/a-menos-que.module';
import { TurmasListagemComponent } from './listagem/turmas-listagem.component';

@NgModule({
  imports: [
    CommonModule,
    EvidenceOnHoverModule,
    AMenosQueModule
  ],
  declarations: [
    TurmasComponent, 
    TurmasListagemComponent,
    FilterByDescriptionPipe],
  exports: [TurmasComponent]
})
export class TurmasModule { }
