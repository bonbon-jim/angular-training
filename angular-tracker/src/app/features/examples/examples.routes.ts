import { Routes } from '@angular/router';
import { InputParaComponent } from './input-para/input-para-component';
import { BindingComponent } from './binding/binding-component';

export const examplesRoutes: Routes = [
  { path: '', redirectTo: 'input-para', pathMatch: 'full' },
  { 
    path: 'input-para', 
    loadComponent: () => import('./input-para/input-para-component').then(m => m.InputParaComponent)
  },
  { path: 'binding', loadComponent: () => import('./binding/binding-component').then(m => m.BindingComponent) },
  { path: '**', redirectTo: 'input-para' }
];
