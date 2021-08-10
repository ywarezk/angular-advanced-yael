/**
 * the selectors helps us to read data from the state
 * with good performance => memoizable
 * they will not trigger cd if the value didn't change
 */

import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { GreetingState } from './greeting.state';

export const greetingSelector = (state: AppState) => state.greeting;

// ---s0----s1------s2----s3------>

// ---m0------------------m3--------------->
export const messageSelector = createSelector(
  greetingSelector,
  (greetingState: GreetingState) => greetingState.message
);
