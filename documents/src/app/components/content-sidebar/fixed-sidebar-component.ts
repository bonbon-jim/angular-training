import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'fixed-sidebar-component',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './fixed-sidebar-component.html',
  styleUrl: './fixed-sidebar-component.scss'
})
export class FixedSidebarComponent {
  @Input() width: string = '100%';
  @Input() height: string = '100%';
}
