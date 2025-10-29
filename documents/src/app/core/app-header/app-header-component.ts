import { Component, signal } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-header',
  imports: [ButtonModule],
  standalone: true,
  templateUrl: './app-header-component.html',
  styleUrl: './app-header-component.scss'
})
export class AppHeaderComponent {
}
