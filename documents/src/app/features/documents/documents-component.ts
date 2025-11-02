import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuModule } from 'primeng/menu';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { MenuItem } from 'primeng/api';
import { RippleModule } from 'primeng/ripple';
import { LayoutSidebarComponent } from '../../components/layout-sidebar/layout-sidebar-component';
import { SideMenuComponent } from "./side-menu/side-menu-component";

@Component({
  selector: 'app-documents-component',
  imports: [RouterOutlet, MenuModule, AvatarModule, BadgeModule, RippleModule, LayoutSidebarComponent, SideMenuComponent],
  standalone: true,
  templateUrl: './documents-component.html',
  styleUrl: './documents-component.scss',
})
export class DocumentsComponent implements OnInit {
  items: MenuItem[] | undefined;

  ngOnInit() {
    
  }
}
