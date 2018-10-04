import { Directive, ElementRef, Renderer2, HostListener } from "@angular/core";

@Directive({
    selector: '[mwEvidenceOnHover]'
})
export class EvidenceOnHoverDirective {

    constructor( private renderer: Renderer2, private el: ElementRef){ }

    @HostListener('mouseover')
    evidenceOn(){
        this.renderer.addClass(this.el.nativeElement, 'shadow-lg');
    }

    @HostListener('mouseleave')
    evidenceOff(){
        this.renderer.removeClass(this.el.nativeElement, 'shadow-lg');
    }
}
