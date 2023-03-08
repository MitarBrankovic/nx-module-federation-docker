import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';
import { loadRemoteModule } from '@nrwl/angular/mf';

export const appRoutes: Route[] = [
  {
    path: 'second-microfront',
    loadChildren: () =>
      loadRemoteModule('second-microfront', './Module').then(
        (m) => m.RemoteEntryModule
      ),
  },
  {
    path: 'first-microfront',
    loadChildren: () =>
      loadRemoteModule('first-microfront', './Module').then(
        (m) => m.RemoteEntryModule
      ),
  },
  {
    path: '',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  // {
  //   path: '',
  //   component: NxWelcomeComponent,
  // },
];
