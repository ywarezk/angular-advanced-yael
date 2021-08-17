/**
 * this component will send a server call and populate the store tasks
 * with the result from the server
 */

import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { fetchNechamaTasks, ShortNechamaService } from '../state';
import { TaskService } from '../state/todo/task.service';
import { loadTasks, setTasks } from '../state/todo/todo.actions';

@Component({
  selector: 'app-grab-tasks',
  template: `
    <p>
      grab-tasks works! {{tasks$ | async | json}}
    </p>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GrabTasksComponent implements OnInit {
  tasks$ = this._shortNechama.entities$;

  constructor(
    private _shortNechama: ShortNechamaService
    // private _task: TaskService,
    // private _store: Store
  ) { }

  ngOnInit(): void {
    // this._task.getTasks().subscribe((tasks) => {
    //   this._store.dispatch(setTasks({newTasks: tasks}));
    // })

    // this._store.dispatch(loadTasks());

    // this._store.dispatch(fetchNechamaTasks());
    // this._shortNechama.getAll();
    this._shortNechama.getWithQuery({
      format: 'json',
      search: 'test'
    })


  }

}
