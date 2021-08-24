import { Component, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>
      Load component by code
    </h1>

    <button (click)="createComponent()">
      Create the component
    </button>



    <div #container>
      <!-- <app-admin>
      <app-manager> -->
    </div>
  `,
})
export class AppComponent {
  @ViewChild('container', { read: ViewContainerRef })
  container: ViewContainerRef;

  constructor(private _componentFactoryResolver: ComponentFactoryResolver) {}

  /**
   *
   */
  async createComponent() {
    const {ChildComponent} = await import('./child/child.component')
    const componentFactory = this._componentFactoryResolver.resolveComponentFactory(ChildComponent);
    this.container.createComponent(componentFactory);
  }
}
