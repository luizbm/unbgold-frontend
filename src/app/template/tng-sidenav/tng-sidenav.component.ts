import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Animal } from './animal';
export interface PeriodicElement {
  name: string;
  position: string;
  weight: string;
  symbol: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 'ano', name: 'Parametro Temporal', weight: 'Anual', symbol: 'H'},
  {position: 'departamento', name: 'Fixo', weight: 'Departamento de Administração', symbol: 'He'},
  {position: 'limit', name: 'Fixo', weight: '10', symbol: 'Li'},
  
];

@Component({
  selector: 'app-tng-sidenav',
  templateUrl: './tng-sidenav.component.html',
  styleUrls: ['./tng-sidenav.component.css'],
  //encapsulation: ViewEncapsulation.None
})
export class TngSidenavComponent implements OnInit {

    animals: Animal[] = [
      {name: 'Dog', sound: 'Woof!'},
      {name: 'Cat', sound: 'Meow!'},
      {name: 'Cow', sound: 'Moo!'},
      {name: 'Fox', sound: 'Wa-pa-pa-pa-pa-pa-pow!'},
    ];

    
    displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
    dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }


}
