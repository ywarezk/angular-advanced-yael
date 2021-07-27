import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from './task';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(
    private _http: HttpClient
  ) { }

  searchTasks(search = ''): Observable<Task[]> {
    return this._http
      .get<Task[]>(`https://nztodo.herokuapp.com/api/tasks/?format=json&search=${search}`)
      .pipe(
        catchError((err) => {
          return []
        })
      )
  }
}
