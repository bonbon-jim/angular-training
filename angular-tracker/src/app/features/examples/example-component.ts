import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-example-component',
  imports: [RouterOutlet],
  standalone: true,
  templateUrl: './example-component.html',
  styleUrl: './example-component.scss'
})
export class ExampleComponent {

}
