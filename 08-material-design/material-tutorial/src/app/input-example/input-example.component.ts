import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-input-example',
  template: `
    <p>
      input-example works!
    </p>
  `,
  inputs: ['someConfig']
})
export class InputExampleComponent implements OnInit, OnChanges {
  // <app-input-example [someConfig]="true">
  // <app-input-example [isActive]="true">
  // @Input('isActive')
  someConfig: boolean = false;

  // <app-input-example [disabled]="true" >
  @Input()
  set disabled(value: boolean) {

  };

  /**
   * called once
   * simple initialization
   * usually constructor is thin
   */
  constructor() {
    console.log(this.someConfig);
    this.someConfig = true;
  }

  /**
   * when the lifecycle is called? when input properties are changing ===
   * How many times is it called? multiple times
   * what kind of logic i should place in that lifecycle
   */
  ngOnChanges(changes: SimpleChanges) {

  }

  /**
   * init
   * 1
   * complex initialization
   */
  ngOnInit(): void {

  }

}
