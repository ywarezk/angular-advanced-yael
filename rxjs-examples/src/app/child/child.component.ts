import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';

/**
 *

 ----0----1----2----3----4------>


 ---hw0--hw1--hw2--------------------->

 */


@Component({
  selector: 'app-child',
  template: `
    <p>
      child works! {{ counter$ | async }}
    </p>
  `,
})
export class ChildComponent /*implements OnDestroy, OnInit*/ {
  // counter = 0;


  counter$: Observable<number> = interval(1000)
  myArr: number[] = [];

  private _sub : Subscription | undefined;

  constructor() {
    for(let i = 0; i< 100000; i++) {
      this.myArr.push(i);
    }
  }

  // ngOnInit() {
  //   // const intervalObservable: Observable<number> = interval(1000);

  //   // this._sub = intervalObservable.subscribe(() => {
  //   //   console.log(this.myArr.length);
  //   //   this.counter++;
  //   // })

  //   // setInterval(() => {
  //   //   console.log(this.myArr.length);
  //   //   this.counter++;
  //   // }, 1000)
  // }

  /**
   * clean what the component opened in this function
   */
  // ngOnDestroy() {
  //   console.log('ngOnDestroy');
  //   this._sub?.unsubscribe();
  // }

}
