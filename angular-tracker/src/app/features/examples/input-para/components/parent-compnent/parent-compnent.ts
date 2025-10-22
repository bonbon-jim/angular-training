import { Component } from '@angular/core';
import { ChildComponent } from '../child-component/child-component';

@Component({
  selector: 'app-parent-compnent',
  imports: [ChildComponent],
  standalone: true,
  templateUrl: './parent-compnent.html',
  styleUrl: './parent-compnent.scss'
})
export class ParentCompnent {

}
