import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { PrivateForDashboardComponent } from './private-for-dashboard/private-for-dashboard.component';

@NgModule({
  declarations: [
    DashboardComponent,
    PrivateForDashboardComponent
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule {}
