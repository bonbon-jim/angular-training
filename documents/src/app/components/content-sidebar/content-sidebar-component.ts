import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'content-sidebar-component',
  imports: [],
  standalone: true,
  templateUrl: './content-sidebar-component.html',
  styleUrl: './content-sidebar-component.scss'
})
export class ContentSidebarComponent {
  @Input() width: string = '60';

}
