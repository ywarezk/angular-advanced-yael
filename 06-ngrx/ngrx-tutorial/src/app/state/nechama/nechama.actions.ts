import { createAction, props } from '@ngrx/store';
import { Task } from '../todo';

/**
 * we call this action when the server returns an answer
 */
export const setNechamaTasks = createAction(
  '[nechama] Set Tasks',
  props<{tasks: Task[]}>()
);

/**
 * we are intreseted in reading the tasks
 */
export const fetchNechamaTasks = createAction(
  '[nechama] Fetch Tasks'
)
