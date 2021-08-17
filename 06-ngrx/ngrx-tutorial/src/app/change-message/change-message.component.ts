/**
 * in the state i want to change the greeting.message


 <ul>
  <li *ngFor="let task of nechamaTasks$ | async"></li>
 </ul>

 <ul *nechamaTasks="let tasks">
  <li *ngFor="let task of tasks" >

  </li>
 </ul>

 */

import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { setMessage, fetchNechamaTasks, Task, getNechamaTasks, AppState } from '../state';

@Component({
  selector: 'app-change-message',
  template: `
    <p>
      change-message works! <!--{{ nechamaTasks$ | async | json}}-->
    </p>
    <button (click)="changeMessage()">
      Change the message
    </button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChangeMessageComponent implements OnInit {
  nechamaTasks$: Observable<Task[]> = this._store.select(
    getNechamaTasks
  )


  constructor(private _store: Store<AppState>) {}

  /**
   * we will change the greeting.message
   */
  changeMessage() {
    this._store.dispatch(setMessage({newMessage: 'this is a new message'}));
  }

  ngOnInit() {
    this._store.dispatch(fetchNechamaTasks());
  }
}

