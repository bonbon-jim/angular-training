import { Component, Inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrimeNG } from 'primeng/config';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  primeng: PrimeNG = Inject(PrimeNG);
  protected readonly title = signal('angular-tracker');

  ngOnInit() {
      this.primeng.ripple.set(true);
    }
}
