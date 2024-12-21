import { Component } from '@angular/core';
import {SplitButton} from 'primeng/splitbutton';
import {InputIcon} from 'primeng/inputicon';
import {IconField} from 'primeng/iconfield';
import {Button} from 'primeng/button';
import {Toolbar} from 'primeng/toolbar';
import {InputText} from 'primeng/inputtext';
import {Avatar} from 'primeng/avatar';
import {NgClass, NgIf} from '@angular/common';
import {Badge} from 'primeng/badge';
import {Menubar} from 'primeng/menubar';
import {MegaMenuItem, MenuItem} from 'primeng/api';
import {Ripple} from 'primeng/ripple';
import {MegaMenu} from 'primeng/megamenu';

@Component({
  selector: 'app-header',
  imports: [
    NgClass,
    Avatar,
    Ripple,
    NgIf,
    Menubar,
    Badge,
    InputText
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  items: MegaMenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Company',
        root: true,
        items: [
          [
            {
              items: [
                { label: 'Features', icon: 'pi pi-list', subtext: 'Subtext of item' },
                { label: 'Customers', icon: 'pi pi-users', subtext: 'Subtext of item' },
                { label: 'Case Studies', icon: 'pi pi-file', subtext: 'Subtext of item' }
              ]
            }
          ],
          [
            {
              items: [
                { label: 'Solutions', icon: 'pi pi-shield', subtext: 'Subtext of item' },
                { label: 'Faq', icon: 'pi pi-question', subtext: 'Subtext of item' },
                { label: 'Library', icon: 'pi pi-search', subtext: 'Subtext of item' }
              ]
            }
          ],
          [
            {
              items: [
                { label: 'Community', icon: 'pi pi-comments', subtext: 'Subtext of item' },
                { label: 'Rewards', icon: 'pi pi-star', subtext: 'Subtext of item' },
                { label: 'Investors', icon: 'pi pi-globe', subtext: 'Subtext of item' }
              ]
            }
          ],
          [
            {
              items: [{ image: 'https://primefaces.org/cdn/primeng/images/uikit/uikit-system.png', label: 'GET STARTED', subtext: 'Build spectacular apps in no time.' }]
            }
          ]
        ]
      },
      {
        label: 'Resources',
        root: true
      },
      {
        label: 'Contact',
        root: true
      }
    ];
  }
}
