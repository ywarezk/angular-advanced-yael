import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-very-heavy',
  template: `
    <p>
      very-heavy works!
    </p>
  `,
  styleUrls: ['./very-heavy.component.css']
})
export class VeryHeavyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
