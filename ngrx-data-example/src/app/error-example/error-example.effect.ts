

import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType, concatLatestFrom, OnInitEffects } from '@ngrx/effects';
import { setSum, fetchStamArray, setStamArray } from './error-example.actions';
import { map, mergeMap, withLatestFrom } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { selectSum } from './error-example.selector';

@Injectable({
  providedIn: 'root'
})
export class ErrorExampleService implements OnInitEffects {

  ngrxOnInitEffects() {
    return fetchStamArray();
  }

  /*
  refresh$ = createEffect(
    () => {
      this._actions$.pipe(
        ofType(fetchStamArray),
        concatLatestFrom(action => this._store.select(selectSum)),
        mergeMap(([action, sum]) => {
          this._http.get('...')
        }),
        map((dataFromServer) => setStamArray(dataFromServer))
      )
    }
  )
  */

  setSum$ = createEffect(() => {
    return this._actions$.pipe(
      ofType(setSum),
      map((action) => fetchStamArray())
    )
  })

  constructor(
    private _actions$: Actions,
    private _store: Store
  ) {}

}
