import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { NgForOf } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-child',
  template: `
    <p (click)="num$.next(num$.value + 1)">
      child works! {{ title }} {{ num$ | async }} {{ message }}
    </p>



    <button (click)="reloadList()">
      Refresh list
    </button>

    <ul>
      <li *ngFor="let item of list; trackBy: trackById">
        {{ item.randNum }}
      </li>
    </ul>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent implements OnInit {
  @Input('messageFromParent')
  message: string = '';

  title = 'hello world';
  num$ = new BehaviorSubject(0)

  // {id: 1, randNum: }
  list: Array<{id: number, randNum: number}> = []

  constructor() { }

  private _populateList() {
    this.list = [];
    for(let i = 0; i < 10000; i++) {
      this.list.push({ id: i, randNum: Math.random()});
    }
  }

  ngOnInit() {
    this._populateList();
  }

  reloadList() {
    this._populateList();
  }

  trackById(index: number, item: any) {
    return item.id;
  }
}
