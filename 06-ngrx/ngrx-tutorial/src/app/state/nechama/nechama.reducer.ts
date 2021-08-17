import { createReducer, on } from '@ngrx/store';
import { setNechamaTasks } from './nechama.actions';
import { NechamaState } from './nechama.state';
import { createEntityAdapter } from '@ngrx/entity';
import { Task } from '../todo';

export const nechamaAdapter = createEntityAdapter<Task>()

export const nechamaReducer = createReducer<NechamaState>(
  nechamaAdapter.getInitialState(),
  on(setNechamaTasks, (state, action) => nechamaAdapter.setAll(action.tasks, state))
)
