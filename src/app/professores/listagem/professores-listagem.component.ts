import { Component, Input } from "@angular/core";

import { Professor } from "@app/professores/cadastro/professor";

@Component({
    selector: 'mw-listagem-professores',
    templateUrl: './professores-listagem.component.html'
})
export class ProfessoresListagemComponent {

    @Input()
    professors: Professor[];

    
}