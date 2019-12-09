import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';
import {IonicModule} from '@ionic/angular';
import {DashboardPage} from './dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: DashboardPage,
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
         import('./profile/profile.module').then(
           m => m.ProfilePageModule
         )
      },
      {
        path: 'search',
        loadChildren: () =>
         import('./search/search.module').then(
           m => m.SearchPageModule
         )
      },
      {
        path: 'searchevents',
        loadChildren: () =>
          import('./searchevents/searchevents.module').then(
            m => m.SearchEventsPageModule
          )
      },
      {
        path: 'searchort',
        loadChildren: () =>
          import('./searchort/searchort.module').then(
            m => m.SearchOrtPageModule
          )
      },
      {
        path: 'settings',
        loadChildren: () =>
        import('./settings/settings.module').then(
          m => m.SettingsPageModule
        )
      },
      {
        path: 'profile',
        loadChildren: () =>
         import('./profile/profile.module').then(
           m => m.ProfilePageModule
         )
      }]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DashboardPage]
})
export class DashboardPageModule {
}
