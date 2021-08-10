/**
 * Service using httpClient to fetch data from the tasks api
 */

import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { Task } from "./task.model";

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  constructor( private _http: HttpClient) {}

  getTasks(): Observable<Task[]> {
    return this._http.get<Task[]>('http://nztodo.herokuapp.com/api/tasks/?format=json');
  }
}
