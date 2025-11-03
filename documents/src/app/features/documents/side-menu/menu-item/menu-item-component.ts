import { CommonModule } from '@angular/common';
import { Component, computed, Input, OnInit, signal } from '@angular/core';
import { MenuItem } from './menu-item.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'cp-menu-item',
  imports: [CommonModule, RouterLink],
  templateUrl: './menu-item-component.html',
  styleUrl: './menu-item-component.scss'
})
export class MenuItemComponent implements OnInit {
  @Input({ required: true }) menuItem!: MenuItem;

  constructor() {
    this.menuItem = {
      label: ''
    };
  }

  ngOnInit(): void {

  }
}
