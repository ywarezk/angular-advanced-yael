import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TaskService } from './task.service';

@Component({
  selector: 'app-root',
  template: `
    <h1>
      @ngrx/data example {{ tasks$ | async | json}}
    </h1>
  `,
})
export class AppComponent implements OnInit {
  tasks$ = this._taskService.entities$;

  constructor(private _taskService: TaskService) {}

  ngOnInit() {
    this._taskService.getAll();
  }
}
