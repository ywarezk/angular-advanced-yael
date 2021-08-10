/**
 * this component will send a server call and populate the store tasks
 * with the result from the server
 */

import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TaskService } from '../state/todo/task.service';
import { loadTasks, setTasks } from '../state/todo/todo.actions';

@Component({
  selector: 'app-grab-tasks',
  template: `
    <p>
      grab-tasks works!
    </p>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GrabTasksComponent implements OnInit {

  constructor(
    // private _task: TaskService,
    private _store: Store
  ) { }

  ngOnInit(): void {
    // this._task.getTasks().subscribe((tasks) => {
    //   this._store.dispatch(setTasks({newTasks: tasks}));
    // })

    this._store.dispatch(loadTasks());
  }

}
