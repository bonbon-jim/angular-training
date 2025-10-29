import { Component } from '@angular/core';
import { ParentCompnent } from "./components/parent-compnent/parent-compnent";

@Component({
  selector: 'app-input-para-component',
  imports: [ParentCompnent],
  standalone: true,
  templateUrl: './input-para-component.html',
  styleUrl: './input-para-component.scss'
})
export class InputParaComponent {

}
