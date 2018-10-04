import { NgModule } from "@angular/core";
import { EvidenceOnHoverDirective } from "./evidence-on-hover.directive";

@NgModule({
    declarations: [EvidenceOnHoverDirective],
    exports: [EvidenceOnHoverDirective]
})
export class EvidenceOnHoverModule {}
