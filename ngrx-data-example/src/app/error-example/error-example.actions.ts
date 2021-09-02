

import { createAction, props } from '@ngrx/store';

// setSum
export const setSum = createAction(
  '[error-example] Set SUM',
  props<{sum: number}>()
)

// fetchStamArray
// i want to refresh the array
export const fetchStamArray = createAction(
  '[error-example] Fetch Stam Array'
);

export const setStamArray = createAction(
  '[error-example] Set Array',
  props<{newArray: any[]}>()
)
