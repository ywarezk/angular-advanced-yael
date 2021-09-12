import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'hello';

  constructor(private _http: HttpClient) {}

  ngOnInit() {
    // hello: world
    this._http.get('https://nztodo.herokuapp.com/api/tasks/?format=json').subscribe()
  }

}
