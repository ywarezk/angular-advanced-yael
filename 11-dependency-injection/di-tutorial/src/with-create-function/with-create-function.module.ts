import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CONFIG_TOKEN } from './token';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    // RouterModule.forRoot([]),
    // ButtonModule.forRoot('some config')
  ]
})
export class WithCreateFunctionModule {
  static forRoot(config: string): ModuleWithProviders<WithCreateFunctionModule> {
    return {
      ngModule: WithCreateFunctionModule,
      providers: [
        {
          provide: CONFIG_TOKEN,
          useValue: config
        }
      ]
    }
  }
}
