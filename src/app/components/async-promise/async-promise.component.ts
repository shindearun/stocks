import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-async-promise-pipe',
  template: `<div>
    <code>promise|async</code>:
    <button (click)="clicked()">{{ arrived ? 'Reset' : 'Resolve' }}</button>
    <span>Wait for it... {{ greeting | async }}</span>
  </div>`
})
export class AsyncPromiseComponent  {
  greeting: Promise<string> | null = null;
  arrived = false;

  private resolve: Function | null = null;

  constructor() { this.reset(); }

  reset() {
    this.arrived = false;
    this.greeting = new Promise<string>((resolve, reject) => {
       this.resolve = resolve;
       // assisning resolve to outside function so that we can resolve the promise
       // without calling then() by calling resolve() from outside the promise.
      // and the  the async pipe can pick it and display it.


    });
  }

  clicked() {
    if (this.arrived) {
      this.reset();
    } else {
      // tslint:disable-next-line:no-non-null-assertion
      this.resolve ('hi there!');
      this.arrived = true;
    }
  }
}
