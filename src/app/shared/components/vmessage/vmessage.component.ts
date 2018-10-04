import { Component, Input } from "@angular/core";

@Component({
  selector: 'mw-vmessage',
  templateUrl: './vmessage.component.html'
})
export class VMessageComponent {

  @Input()
  texto = '';
}
