import { AfterViewChecked, AfterViewInit, Component, DoCheck, ElementRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-view-child-example',
  template: `
    <p #someP>
      view-child-example works!
    </p>
  `,
  styles: [
  ]
})
export class ViewChildExampleComponent implements AfterViewInit, AfterViewChecked, DoCheck {
  @ViewChild('someP')
  stamP: ElementRef

  constructor() { }

  ngDoCheck() {

  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {

  }

  ngAfterViewChecked() {

  }

}
