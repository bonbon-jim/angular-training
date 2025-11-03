import { Component } from '@angular/core';
import { sideMenu } from './side-menu.const';
import { MenuItemComponent } from "./menu-item/menu-item-component";

@Component({
  selector: 'cp-side-menu',
  imports: [MenuItemComponent],
  standalone: true,
  templateUrl: './side-menu-component.html',
  styleUrl: './side-menu-component.scss'
})
export class SideMenuComponent {
  menuItems = sideMenu;
}
