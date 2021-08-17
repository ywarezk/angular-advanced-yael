import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SomeDirectiveDirective } from './some-directive.directive';
import { AnalyticsDirective } from './analytics.directive';
import { IfUserDirective } from './if-user.directive';

@NgModule({
  declarations: [
    AppComponent,
    SomeDirectiveDirective,
    AnalyticsDirective,
    IfUserDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
