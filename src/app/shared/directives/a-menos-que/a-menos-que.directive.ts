import { Directive, TemplateRef, ViewContainerRef, Input } from "@angular/core";

@Directive({
  selector: '[mwAMenosQue]'
})
export class AMenosQueDirective {

  private existeView = false;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) { }

  @Input()
  set mwAMenosQue(condicao: boolean) {
    if (!condicao && !this.existeView) {
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.existeView = true;
    } else if(condicao && this.existeView) {
      this.viewContainer.clear();
      this.existeView = false;
    }
  }
}
