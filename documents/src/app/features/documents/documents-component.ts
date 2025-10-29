import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuModule } from 'primeng/menu';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { MenuItem } from 'primeng/api';
import { RippleModule } from 'primeng/ripple';
import { FixedSidebarComponent } from '../../components/content-sidebar/fixed-sidebar-component';

@Component({
  selector: 'app-documents-component',
  imports: [RouterOutlet, MenuModule, AvatarModule, BadgeModule, RippleModule, FixedSidebarComponent],
  standalone: true,
  templateUrl: './documents-component.html',
  styleUrl: './documents-component.scss',
})
export class DocumentsComponent implements OnInit {
  items: MenuItem[] | undefined;
  loops: number[] = Array.from({ length: 9999 }, (_, i) => i + 1);

  ngOnInit() {
    this.items = [
      {
        separator: true,
      },
      {
        label: 'Documents',
        items: [
          {
            label: 'New',
            icon: 'pi pi-plus',
          },
          {
            label: 'Search',
            icon: 'pi pi-search',
          },
        ],
      },
      {
        label: 'Profile',
        items: [
          {
            label: 'Settings',
            icon: 'pi pi-cog',
          },
          {
            label: 'Messages',
            icon: 'pi pi-inbox',
          },
          {
            label: 'Logout',
            icon: 'pi pi-sign-out',
          },
        ],
      },
      {
        separator: true,
      },
    ];
  }
}
