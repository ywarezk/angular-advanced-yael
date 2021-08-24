/**
 * ng-content
 */

import { AfterContentChecked, AfterContentInit, Component, ContentChild, DoCheck, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-content-example',
  template: `
    <p>
      ng-content-example works!
    </p>

    <ng-content select=".hello">
    </ng-content>

    <ng-content>
    </ng-content>


  `
})
export class NgContentExampleComponent implements AfterContentInit, AfterContentChecked, DoCheck {
  @ContentChild('someText')
  private _header:ElementRef

  /*
  // is not called every change detection
  // called when input are changed
  ngOnChange() {

  }
  */

  /**
   * called every cd
   * rarely used
   * if you want to fine tune when to continue cd or not
   */
  ngDoCheck() {

  }


  /**
   * called once
   * the @ContentChild are populated
   */
  ngAfterContentInit() {}

  /**
   * rarely used
   *
   */
  ngAfterContentChecked() {}

}
