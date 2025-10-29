import { Routes } from '@angular/router';
import { InputParaComponent } from './input-para/input-para-component';
import { BindingComponent } from './binding/binding-component';
import { DocumentsRouting } from '../../const/routing.config';

export const documentsRoutes: Routes = [
  { path: '', redirectTo: DocumentsRouting.InputPara, pathMatch: 'full' },
  { 
    path: DocumentsRouting.InputPara, 
    loadComponent: () => import('./input-para/input-para-component').then(m => m.InputParaComponent)
  },
  { path: DocumentsRouting.Binding, loadComponent: () => import('./binding/binding-component').then(m => m.BindingComponent) },
  { path: DocumentsRouting.Directive, loadComponent: () => import('./directive/directive-component').then(m => m.DirectiveComponent) },
  { path: DocumentsRouting.ApiCall, loadComponent: () => import('./api-call/api-call-component').then(m => m.ApiCallComponent) },
  { path: '**', redirectTo: 'input-para' }
];
