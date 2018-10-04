import { Component, Input } from "@angular/core";
import { Turma } from "../turma";

@Component({
    selector: 'mw-listagem-turmas',
    templateUrl: './turmas-listagem.component.html'
})
export class TurmasListagemComponent { 

    @Input()
    turmas: Turma[];

    @Input()
    filtro: string;

}