/**
 * Reducer
 * manage a section in our state
 * greetingReducer to manage the greeting section of our data
 */

import { createReducer, on } from '@ngrx/store';
import { GreetingState } from './greeting.state';
import { setMessage } from './greeting.actions';

export const greetingReducer = createReducer<GreetingState>(
  {
    message: 'hello world',
    foo: 'lurem ipsum'
  },
  on(setMessage, (state, action) => ({...state, message: action.newMessage}))
)
