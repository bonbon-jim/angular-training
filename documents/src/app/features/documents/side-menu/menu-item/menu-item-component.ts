import { Component, computed, Input, OnInit, signal } from '@angular/core';
import { MenuItem } from './menu-item.model';

@Component({
  selector: 'cp-menu-item',
  imports: [],
  templateUrl: './menu-item-component.html',
  styleUrl: './menu-item-component.scss'
})
export class MenuItemComponent implements OnInit {
  @Input({ required: true }) menuItem!: MenuItem;


  private menuItemSource = signal<MenuItem | null>(null);
  readonly hasSubGroups = computed(() => {
    const item = this.menuItemSource();
    return Array.isArray(item?.subGroups) && item.subGroups.length > 0;
  });

  constructor() {
    this.menuItem = {
      text: ''
    };
  }

  ngOnInit(): void {
    this.initializeMenuItemSignal();
  }

  private initializeMenuItemSignal(): void {
    if (!this.menuItem) {
      throw new Error('MenuItemComponent: menuItem input is required');
    }

    this.menuItemSource.set(this.menuItem);
  }

}
