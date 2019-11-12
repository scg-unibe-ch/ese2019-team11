import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  { path: 'home',
  component: HomePage,
  children: [
    {
      path: 'feed',
      loadChildren: () =>
        import('../pages/feed/feed.module').then(
          m => m.FeedPageModule
        )
    },
    {
      path: 'events',
      loadChildren: () =>
        import('../pages/events/events.module').then(m => m.EventsPageModule)
    },
    {
      path: 'services',
      loadChildren: () =>
        import('../pages/services/services.module').then(m => m.ServicesPageModule)
    },
    {
      path: 'profile',
      loadChildren: () =>
        import('../pages/profile/profile.module').then(m => m.ProfilePageModule)
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRouter {}
