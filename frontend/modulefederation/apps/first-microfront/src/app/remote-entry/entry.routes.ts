import { Route } from '@angular/router';
import { RemoteEntryComponent } from './entry.component';

export const remoteRoutes: Route[] = [
  // { path: '', component: RemoteEntryComponent },
  { path: '', loadChildren: () => import('../about/about.module').then(m => m.AboutModule) },
];
