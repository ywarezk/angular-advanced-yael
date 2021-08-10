import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { greetingReducer, todoReducer } from './state';
import { ChangeMessageComponent } from './change-message/change-message.component';
import { HttpClientModule } from '@angular/common/http';
import { GrabTasksComponent } from './grab-tasks/grab-tasks.component';
import { EffectsModule } from '@ngrx/effects';
import { TodoEffect } from './state/todo/todo.effect';

@NgModule({
  declarations: [
    AppComponent,
    ChangeMessageComponent,
    GrabTasksComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({
      greeting: greetingReducer,
      todo: todoReducer
    }),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([
      TodoEffect
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
