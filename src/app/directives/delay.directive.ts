import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[delay]'
})
export class DelayDirective {

  @Input() set delay(ms: number) {
    setTimeout(() => {
      this.viewContainer.createEmbeddedView(this.templateRef);
    }, ms);
  }

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) { }
}
