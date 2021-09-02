import { Component, OnInit } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import { TaskService } from './task.service';
import { EntityCollectionServiceFactory } from '@ngrx/data';
import { Actions, ofType } from '@ngrx/effects';

@Component({
  selector: 'app-root',
  template: `
    <h1>
      @ngrx/data example {{ tasks$ | async | json}}
    </h1>

    <!-- <div *ngIf="error$ | async">
      Error something happened
    </div> -->
  `,
})
export class AppComponent implements OnInit {
  tasks$ = this._taskService.entities$;

  // Observable<ErrorAction>
  // error$ = this._action.pipe(
  //   ofType('error')
  // )

  constructor(
    // private _action: Actions,
    private _taskService: TaskService,
    private _serviceFactory: EntityCollectionServiceFactory
  ) {}

  ngOnInit() {
    this._taskService.getAll();

    /*
    const cityService = this._serviceFactory.create('Address');
    cityService.getAll();
    */
  }
}
