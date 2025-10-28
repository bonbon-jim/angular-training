import { Component } from '@angular/core';
import { HighlightDirective } from "./highlight-directive";

@Component({
  selector: 'app-directive-component',
  imports: [HighlightDirective],
  standalone: true,
  templateUrl: './directive-component.html',
  styleUrl: './directive-component.scss'
})
export class DirectiveComponent {

}
