import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox-example',
  template: `
    <p>
      checkbox-example works!
    </p>
    <form>
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
