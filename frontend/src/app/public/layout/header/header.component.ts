import { Component, OnInit } from '@angular/core';
import {NgClass, NgForOf, NgIf} from '@angular/common';
import {Avatar} from 'primeng/avatar';
import {Menubar} from 'primeng/menubar';
import {Badge} from 'primeng/badge';
import {Ripple} from 'primeng/ripple';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  imports: [
    NgForOf,
    NgIf,
    Avatar,
    NgClass,
    Menubar,
    Badge,
    Ripple
  ],
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  items = [
    {
      label: 'Home',
    },
    {
      label: 'Projects',
      badge: '3',
      items: [
        { label: 'User List', icon: 'pi pi-cog', shortcut: '⌘+S' },
        { label: 'Role List', icon: 'pi pi-server', shortcut: '⌘+B' },
        { separator: true },
        { label: 'UI Kit', icon: 'pi pi-pencil', shortcut: '⌘+U' },
      ],
    },
  ];

  username = 'Pixel';

  isDropdownOpen = false;


  isSecondDropdownOpen = false;


  userActions = [
    { label: 'Settings', icon: 'pi pi-cog' },
    { label: 'Messages', icon: 'pi pi-envelope' },
    { label: 'Logout', icon: 'pi pi-sign-out' },
  ];

  ngOnInit() {}

  toggleDropdown(): void {
    if (!this.isDropdownOpen) {
      this.isSecondDropdownOpen = false;
    }
    this.isDropdownOpen = !this.isDropdownOpen;

  }
}
