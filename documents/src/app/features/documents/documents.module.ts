import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DocumentsComponent } from './documents-component';
import { documentsRoutes } from './documents.routes';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DocumentsComponent,
    RouterModule.forChild(documentsRoutes)
  ],
  exports: [DocumentsComponent]
})
export class DocumentsModule { }
