import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, Effect } from '@ngrx/effects';
import { first, map, mergeMap, take } from 'rxjs/operators';
import { TaskService } from '../todo/task.service';
import { fetchNechamaTasks, setNechamaTasks } from './nechama.actions';
import { pipe } from 'rxjs';

/**
 *

 someObservable$.subscribe((someData) => {
   // something with someData
   // something with someData
   // something with someData
   // something with someData
 })


 */

// const myCustomOperator =

/**


michal.com
michal.com/api

localhost:4200
localhost:4200/api

 */

@Injectable({
  providedIn: 'root'
})
export class NechamaEffect {

  fetchTasksOneTime$ = createEffect(
    () => this._actions.pipe(
      ofType(fetchNechamaTasks),
      first(),
      mergeMap(() => this._tasksService.getTasks()),
      map((tasks) => setNechamaTasks({tasks}))
    )
  )

  constructor(private _actions: Actions, private _tasksService: TaskService) {}

}
