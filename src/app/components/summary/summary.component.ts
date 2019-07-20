import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css'],
  animations: [
    trigger('fadeIn', [
      state('in', style({opacity: 1})),
      transition(':enter', [
        style({opacity: 0}),
        animate(1000)
      ])
    ])
  ]
})
export class SummaryComponent implements OnInit {

  @Input() stock: any;
  /*
  Not needed as the logic is moved to attribute directive [cardType]
  isNegative() {
    return (this.stock && this.stock.change < 0);
  }

  isPositive() {
    return (this.stock && this.stock.change > 0);
  }
  */
  constructor() { }

  ngOnInit() {
  }

}

