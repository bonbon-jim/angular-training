import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrimeNG } from 'primeng/config';
import { AppHeaderComponent } from './core/app-header/app-header-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AppHeaderComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  primeng: PrimeNG = inject(PrimeNG);
  protected readonly title = signal('angular-documents');

  ngOnInit() {
    this.primeng.ripple.set(true);
  }
}
