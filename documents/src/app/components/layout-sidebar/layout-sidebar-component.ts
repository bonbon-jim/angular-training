import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'cp-layout-sidebar',
  imports: [CommonModule],
  templateUrl: './layout-sidebar-component.html',
  styleUrl: './layout-sidebar-component.scss'
})
export class LayoutSidebarComponent {
  @Input() width: string = '100%';
  @Input() height: string = '100%';
}
