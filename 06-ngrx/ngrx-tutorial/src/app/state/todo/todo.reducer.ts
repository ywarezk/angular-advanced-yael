/**
 * Manage the todo section in our state
 */

import { createReducer, on } from '@ngrx/store';
import { setTasks } from './todo.actions';
import { TodoState } from './todo.state';

export const todoReducer = createReducer<TodoState>(
  {
    tasks: []
  },
  on(setTasks, (state, action) => ({...state, tasks: action.newTasks})),

)
