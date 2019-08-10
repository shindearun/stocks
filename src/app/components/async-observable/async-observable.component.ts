import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-async-observable',
  template: '<div><code>observable|async</code>: Time: {{ time | async }}</div>'
})
export class AsyncObservableComponent implements OnInit {
  time: Observable<string>;

  constructor() {
   }

  ngOnInit() {
    this.time = new Observable<string>(
        (observer: Observer<string>) => {
           setInterval(() => observer.next(new Date().toString()), 1000);
        }
      );
  }

}
