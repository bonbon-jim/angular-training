import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home-component';
import { DocumentsComponent } from './features/documents/documents-component';
import { AppRouting } from './const/routing.config';

export const routes: Routes = [
  { path: '', redirectTo:  AppRouting.Home, pathMatch: 'full' },
  { path: AppRouting.Home, component: HomeComponent },
  { 
    path: AppRouting.About, 
    loadComponent: () => import('./features/about/about-component').then(m => m.AboutComponent)
  },
  { 
    path: AppRouting.Documents, 
    component: DocumentsComponent,
    loadChildren: () => import('./features/documents/documents.routes').then(m => m.documentsRoutes)
  },
  { path: '**', redirectTo:  AppRouting.Home } // 404路由重定向到home
];
