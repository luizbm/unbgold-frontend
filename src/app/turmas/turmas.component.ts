import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';


import { TURMAS } from "./mock-turmas";

@Component({
  selector: 'app-turmas',
  templateUrl: './turmas.component.html'
})
export class TurmasComponent implements OnInit, OnDestroy {

  filter = '';

  turmas = TURMAS;

  debounce: Subject<string> = new Subject<string>();

  constructor() { }

  ngOnInit() {

    this.debounce
    .pipe(debounceTime(300))
    .subscribe(filter => this.filter = filter);
  }

  ngOnDestroy(): void {
    this.debounce.unsubscribe();
  }
}
