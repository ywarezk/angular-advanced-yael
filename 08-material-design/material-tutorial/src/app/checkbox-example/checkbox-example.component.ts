import { Component, OnInit } from '@angular/core';

/***
<input />
<textarea />
<select />

// 1234-1234
<input type="creditcard" />

052 - 345345
<input type="phonenumber" />

<input type="idnumber" />



 */

@Component({
  selector: 'app-checkbox-example',
  template: `
    <p>
      checkbox-example works!
    </p>
    <form>
    <!-- <input /> -->
      <mat-checkbox name="stam" [(ngModel)]="checkbox">
        I'm a checkbox {{checkbox}}
      </mat-checkbox>
    </form>

  `,
  styles: [
  ]
})
export class CheckboxExampleComponent implements OnInit {
  checkbox = true;

  constructor() { }

  ngOnInit(): void {
  }

}
