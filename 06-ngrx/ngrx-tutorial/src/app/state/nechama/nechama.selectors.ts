import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { NechamaState } from './nechama.state';
import { nechamaAdapter } from './nechama.reducer';

export const getNechamaState = (state: AppState) => state.nechama;


export const {
  selectAll
} = nechamaAdapter.getSelectors()

export const getNechamaTasks = createSelector(
  getNechamaState,
  selectAll
)
