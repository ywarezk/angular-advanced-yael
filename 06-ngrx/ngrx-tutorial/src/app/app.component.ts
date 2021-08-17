import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState, fetchNechamaTasks, messageSelector } from './state';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  template: `
    <h1>
      @ngrx/store
    </h1>

    <p>
      The store greeting contains the following message: {{ greetingMessage$ | async }}
    </p>

    <app-change-message></app-change-message>

    <app-grab-tasks></app-grab-tasks>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  // greetingMessage$: Observable<string> = this._store$.pipe(
  //   map((state: AppState) => state.greeting.message)
  // )

  greetingMessage$: Observable<string> = this._store$.select(messageSelector);


  constructor(private _store$: Store<AppState>) {}

  ngOnInit() {
    this._store$.dispatch(fetchNechamaTasks());
  }
}
