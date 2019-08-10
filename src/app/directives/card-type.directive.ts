import { Directive, ElementRef, Input, OnInit } from '@angular/core';
@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[cardType]'
})
export class CardTypeDirective implements OnInit {
  @Input() cardType = 0;
  @Input() increaseClass = 'increase';
  @Input() decreaseClass = 'decrease';
  card : any;

  constructor(private el: ElementRef) { }

  ngOnInit() {
    console.log('in Card Type oninit');

    if (this.cardType) {
      this.card = this.el.nativeElement.querySelector('.mdl-card');
      if (this.cardType >= 0) {
        this.card.classList.add(this.increaseClass);
        this.card.classList.remove(this.decreaseClass);
      } else if (this.cardType <= 0) {
        this.card.classList.add(this.decreaseClass);
        this.card.classList.remove(this.increaseClass);
      } else {
        this.card.classList.remove(this.increaseClass);
        this.card.classList.remove(this.decreaseClass);
      }
    }
  }
}
