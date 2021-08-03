import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SettingsPageComponent } from './settings-page/settings-page.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        // /settings
        path: '',
        component: SettingsPageComponent
      }
    ])
  ],
  exports: [RouterModule]
})
export class SettingsRoutingModule {}
