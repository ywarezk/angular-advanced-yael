/**
 * in the state i want to change the greeting.message
 */

import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { setMessage } from '../state';

@Component({
  selector: 'app-change-message',
  template: `
    <p>
      change-message works!
    </p>
    <button (click)="changeMessage()">
      Change the message
    </button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChangeMessageComponent {
  constructor(private _store: Store) {}

  /**
   * we will change the greeting.message
   */
  changeMessage() {
    this._store.dispatch(setMessage({newMessage: 'this is a new message'}));
  }
}
