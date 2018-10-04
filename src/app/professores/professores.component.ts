import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProfessoresService } from './professores.service';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html'
})
export class ProfessoresComponent implements OnInit {

  professors = [
    {name: '1A' , email: '2018.01', registration: 1, semesters: '2018.01', salary: '100.00'},
    {name: '7Z' , email: '2018.01', registration: 2, semesters: '2018.01', salary: '100.00'},
    {name: '10A', email: '2018.01', registration: 3, semesters: '2018.01', salary: '100.00'},
    {name: '4B' , email: '2018.01', registration: 4, semesters: '2018.01', salary: '100.00'},
    {name: '4C' , email: '2018.01', registration: 5, semesters: '2018.01', salary: '100.00'}
  ];

  constructor(private professoresService: ProfessoresService, private router: Router) { }

  ngOnInit() {

    /*this.professoresService
          .todosProfessores()
          .subscribe(
            (response) => {this.professors = response['data']},
            (error) => {console.log(error)}
          )*/
  }

  add() {
    this.router.navigate(['professores', 'cadastro']);
  }

}
