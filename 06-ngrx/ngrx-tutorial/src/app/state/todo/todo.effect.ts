/**
 * effect decouple ui from business logic
 * effect can listen to action and perform logic like server request
 */

import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { interval } from "rxjs";
import { map, mergeMap } from "rxjs/operators";
import { TaskService } from "./task.service";
import { loadTasks, setTasks } from "./todo.actions";


@Injectable({
  providedIn: 'root'
})
export class TodoEffect {

  fetchTasks$ = createEffect(
    () => this._actions$.pipe(
      ofType(loadTasks),
      mergeMap(() => this._task.getTasks()),
      map(tasks => setTasks({newTasks: tasks}))
    )
  )

  refreshTasks$ = createEffect(
    () => interval(60000).pipe(
      map(() => loadTasks())
    )
  )

  constructor(private _actions$: Actions, private _task: TaskService) {}

}
