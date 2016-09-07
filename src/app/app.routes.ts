import { Routes, RouterModule } from '@angular/router';
import { Home } from './components/home';

import { DataResolver } from './app.resolver';


export const ROUTES: Routes = [
  { path: '', component: Home }
];
