import { Component, signal } from '@angular/core';
import { WsTitle } from "../ws-title/ws-title";
import { SignalBindingComponent } from './singal-binding-component/signal-binding-component';

@Component({
  selector: 'app-binding-component',
  imports: [WsTitle, SignalBindingComponent],
  standalone: true,
  templateUrl: './binding-component.html',
  styleUrl: './binding-component.scss'
})
export class BindingComponent {
 
}
