import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ExampleComponent } from './example-component';
import { examplesRoutes } from './examples.routes';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ExampleComponent,
    RouterModule.forChild(examplesRoutes)
  ],
  exports: [ExampleComponent]
})
export class ExamplesModule { }
