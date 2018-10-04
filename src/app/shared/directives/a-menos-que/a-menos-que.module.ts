import { NgModule } from "@angular/core";
import { AMenosQueDirective } from "./a-menos-que.directive";

@NgModule({
  declarations: [AMenosQueDirective],
  exports: [AMenosQueDirective]
})
export class AMenosQueModule {}
