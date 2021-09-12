import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home-page',
  template: `
    <ul>
      <li *ngFor="let task of todoList$ | async">
        {{ task.title }}
      </li>
    </ul>
  `,
  styles: [
  ]
})
export class HomePageComponent implements OnInit {

  todoList$: Observable<any>

  constructor(
    private _http: HttpClient
  ) { }

  ngOnInit(): void {
    this.todoList$ = this._http.get('https://nztodo.herokuapp.com/api/tasks/?format=json');
  }

}
