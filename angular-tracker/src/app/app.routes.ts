import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home-component';
import { ExampleComponent } from './features/examples/example-component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { 
    path: 'about', 
    loadComponent: () => import('./features/about/about-component').then(m => m.AboutComponent)
  },
  { 
    path: 'examples', 
    component: ExampleComponent,
    loadChildren: () => import('./features/examples/examples.routes').then(m => m.examplesRoutes)
  },
  { path: '**', redirectTo: 'home' } // 404路由重定向到home
];
