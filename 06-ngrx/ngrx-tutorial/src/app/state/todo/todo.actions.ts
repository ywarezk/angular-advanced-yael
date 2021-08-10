import { createAction, props } from '@ngrx/store';
import { Task } from './task.model';

export const setTasks = createAction(
  '[todo] SET TASKS',
  props<{newTasks: Task[]}>()
)

export const loadTasks = createAction(
  '[todo] LOAD TASKS'
)
