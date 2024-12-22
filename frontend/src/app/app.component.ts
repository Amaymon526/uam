import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Button} from "primeng/button";
import {HeaderComponent} from "./public/layout/header/header.component";
import {Avatar} from "primeng/avatar";
import {Badge} from "primeng/badge";
import {InputText} from "primeng/inputtext";
import {Menubar} from "primeng/menubar";
import {Ripple} from "primeng/ripple";
import {MenuItem} from "primeng/api";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Button, HeaderComponent,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
      },
      {
        label: 'Projects',
        icon: 'pi pi-search',
        badge: '3',
        items: [
          {
            label: 'Core',
            icon: 'pi pi-bolt',
            shortcut: '⌘+S',
          },
          {
            label: 'Blocks',
            icon: 'pi pi-server',
            shortcut: '⌘+B',
          },
          {
            separator: true,
          },
          {
            label: 'UI Kit',
            icon: 'pi pi-pencil',
            shortcut: '⌘+U',
          },
        ],
      },
    ];
  }
}
