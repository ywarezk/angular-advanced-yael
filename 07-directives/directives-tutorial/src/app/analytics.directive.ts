import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[analytics]'
})
export class AnalyticsDirective {
  @Input('analytics')
  analyticsMessage: string = '';


  constructor() { }

  @HostListener('click')
  buttonClick() {
    console.log(`send to analytics: ${this.analyticsMessage}`);
  }

}
