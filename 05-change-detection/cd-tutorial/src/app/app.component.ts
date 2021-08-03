import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  template: `
    <h1>
      Change Detection
    </h1>

    <p>
      {{ counter }}
      <!-- {{ counter$ | async }} -->
    </p>

    <app-child messageFromParent="message$ | async"></app-child>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  counter = 0;
  // counter$ = new BehaviorSubject(0)

  message$ = new BehaviorSubject('hello');

  constructor(private _cd: ChangeDetectorRef) {}

  ngOnInit() {

    // httpClient.get(...).subscribe()
    // promise.then()

    setInterval(() => {
      this.counter++;
      this._cd.detectChanges();
      // this.counter$.next(this.counter$.value + 1);
    }, 1000)
  }
}
