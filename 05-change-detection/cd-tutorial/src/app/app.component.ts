import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>
      Change Detection
    </h1>

    <p>
      {{ counter }}
    </p>
  `,
})
export class AppComponent implements OnInit {
  counter = 0;

  ngOnInit() {

    setInterval(() => {
      this.counter++;
    }, 1000)
  }
}
