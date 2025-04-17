import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./feature/features.routes').then((m) => m.routes),
    title: 'Features',
  },
];
