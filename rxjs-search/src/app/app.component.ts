import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { Task } from './task';
import { TaskService } from './task.service';
import { debounceTime, distinctUntilChanged, switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  template: `
    <h1>Autocomplete Example</h1>
    <p>
      And practicing rxjs operators
    </p>

    <div>
      <input
        [formControl]="searchControl"
        type="search"
        placeholder="Search for tasks"
      />
    </div>
<!--
    <ul>
      <li *ngFor="let task of tasks">
        {{ task.title }}
      </li>
    </ul> -->

    <ul>
      <li *ngFor="let task of tasks$ | async">
        {{ task.title }}
      </li>
    </ul>


  `,
})
export class AppComponent implements OnInit {

  searchControl = new FormControl('');
  // tasks: Task[] = [];

  tasks$: Observable<Task[]> | undefined

  constructor(private _taskService: TaskService) {}

  ngOnInit() {
    // naive approach
    /*
    this.searchControl.valueChanges.subscribe((searchString: string) => {
      this._taskService.searchTasks(searchString).subscribe((tasksFromServer: Task[]) => {

        this.tasks = tasksFromServer;

      })
    })
    */

    // good looking approach with operators
    // ---t----te------tes-------test--------->
    // -----------------------------------------test---------test->
    this.tasks$ = this.searchControl.valueChanges.pipe(
      debounceTime(1000),
      distinctUntilChanged(),
      switchMap((textAfterStopped: string) => this._taskService.searchTasks(textAfterStopped))
    )

    // .subscribe()
  }

}
