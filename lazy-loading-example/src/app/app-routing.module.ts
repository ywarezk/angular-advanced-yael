import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        component: HomePageComponent
      },
      {
        path: 'settings',
        loadChildren: async () => {
          const module = await import('../settings/settings.module')
          return module.SettingsModule
        }
        // loadChildren: () => import('../settings/settings.module').then(m => m.SettingsModule)
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
