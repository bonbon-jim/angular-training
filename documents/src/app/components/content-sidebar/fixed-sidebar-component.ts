import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'fixed-sidebar-component',
  imports: [],
  standalone: true,
  templateUrl: './fixed-sidebar-component.html',
  styleUrl: './fixed-sidebar-component.scss'
})
export class FixedSidebarComponent {
  @Input() width: string = '60';

}
