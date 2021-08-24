import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EntityDataModule, DefaultDataServiceConfig } from '@ngrx/data';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({

    }),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot(),
    EntityDataModule.forRoot({
      entityMetadata: {
        'Task': {}
      },
      // pluralNames: {
      //   'Task': 'Task'
      // }
    })
  ],
  providers: [
    {
      provide: DefaultDataServiceConfig,
      useValue: {
        root: 'http://nztodo.herokuapp.com/api/'
      }
    },
    /*
    {
      provide:
    }
    */

    // {
    //   provide: 'hello',
    //   useFactory: () => {

    //   }
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
