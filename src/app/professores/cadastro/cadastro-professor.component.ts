import { Component } from "@angular/core";
import { Validators, FormGroup, FormBuilder } from "@angular/forms";

import { ProfessoresService } from "@app/professores/professores.service";

@Component({
    templateUrl: './cadastro-professor.component.html'
})
export class CadastroProfessorComponent {
    cadastroForm: FormGroup;

    constructor(
      private formBuilder: FormBuilder,
      private professorService: ProfessoresService
    ) {}

    ngOnInit(): void {
      this.cadastroForm = this.formBuilder.group({
        name: ['', Validators.required],
        email: ['', Validators.required],
        registration: ['', Validators.required]
      });

    }

    cadastrar() {

        const name = this.cadastroForm.get('name').value;
        const email = this.cadastroForm.get('email').value;
        const registration = this.cadastroForm.get('registration').value;

        this.professorService
            .cadastraProfessor({name, email, registration})
            .subscribe(
                () => {
                    alert('Professor cadastrado com sucesso');
                    this.cadastroForm.reset();
                },
                erro => {
                    this.cadastroForm.reset();
                    alert('Algum dado está repetido ou inválido');
                }
            );
    }
}
