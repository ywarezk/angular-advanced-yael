import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {catchError} from 'rxjs/operators';

@Component({
  selector: 'app-ajax',
  template: `
    <ul>
      <li *ngFor="let task of tasks$ | async">
        {{ task.title }}
      </li>
    </ul>
    <p>
      {{ error }}
    </p>
  `,
})
export class AjaxComponent implements OnInit {
  tasks$: Observable<any> = of([]);
  error: string = '';

  constructor(
    private _httpClient: HttpClient
  ) { }

  ngOnInit(): void {
    this.tasks$ = this._httpClient
      .get('http://nztodo.herokuapp.com/api/tasks/?format=json').pipe(
        catchError((err) => {
          this.error = err.message;
          return of([])
        })
      );
  }

}
