import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ws-title',
  imports: [],
  standalone: true,
  templateUrl: './ws-title.html',
  styleUrl: './ws-title.scss',
})
export class WsTitle {
  @Input() title!: string;
  @Input() subtitle: string | null = null;
}
