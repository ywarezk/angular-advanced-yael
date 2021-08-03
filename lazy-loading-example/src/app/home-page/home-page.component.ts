import { Compiler, Component, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-home-page',
  template: `
    <p>
      home-page works!
    </p>

    <button (click)="lazyLoadHeavyComponent()">
      click me to load heavy component
    </button>

    <!-- i want to lazy load a heavy component only when the user clicks the button -->
    <div #containerOfVeryHeavy>
    </div>
  `,
})
export class HomePageComponent {
  @ViewChild('containerOfVeryHeavy', {read: ViewContainerRef})
  containerOfVeryHeavy: ViewContainerRef | undefined;

  constructor(private _compiler: Compiler) {}

  async lazyLoadHeavyComponent() {
    const { HeavyModule } = await import('../../heavy/heavy.module');
    const moduleWithComponentFactories = await this._compiler.compileModuleAndAllComponentsAsync(HeavyModule);
    const componentFactoryVeryHeavy = moduleWithComponentFactories.componentFactories.find((componentFactory) => componentFactory.selector === 'app-very-heavy');
    this.containerOfVeryHeavy?.createComponent(componentFactoryVeryHeavy as any);
  }

}
