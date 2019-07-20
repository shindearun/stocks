import { Directive, ElementRef, Input, OnInit } from '@angular/core';
@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[cardType]'
})
export class CardTypeDirective implements OnInit {
  @Input() cardType = 0;
  @Input() increaseClass = 'increase';
  @Input() decreaseClass = 'decrease';

  constructor(private el: ElementRef) { }

  ngOnInit() {
    if (this.cardType) {
      if (this.cardType >= 0) {
        this.el.nativeElement.classList.add(this.increaseClass);
        this.el.nativeElement.classList.remove(this.decreaseClass);
      } else if (this.cardType <= 0) {
        this.el.nativeElement.classList.add(this.decreaseClass);
        this.el.nativeElement.classList.remove(this.increaseClass);
      } else {
        this.el.nativeElement.classList.remove(this.increaseClass);
        this.el.nativeElement.classList.remove(this.decreaseClass);
      }
    }
  }
}
