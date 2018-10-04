import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { AuthService } from "@app/core/auth/auth.service";

@Component({
  templateUrl: './signin.component.html'
})
export class SignInComponent implements OnInit {

  loginForm: FormGroup;

  @ViewChild('userEmailInput')
  userEmailInput: ElementRef<HTMLInputElement>;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userEmail: ['', Validators.required],
      password: ['', Validators.required]
    });

  }

  login() {

    const userEmail = this.loginForm.get('userEmail').value;
    const password = this.loginForm.get('password').value;

    this.authService
        .authenticate(userEmail, password)
        .subscribe(
          () => this.router.navigate(['professores']),
          erro => {
            console.log('Tudo errado');
            this.loginForm.reset();
            this.userEmailInput.nativeElement.focus();
            alert('Email ou senha do usuário inválidos');
          }
        );
  }

}
