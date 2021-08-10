/**
 * describe the changes you want to perform in the GreetingState with actions
 */

import { createAction, props } from '@ngrx/store';

export const setMessage = createAction(
  '[greeting] SET MESSAGE',
  props<{newMessage: string}>()
)
