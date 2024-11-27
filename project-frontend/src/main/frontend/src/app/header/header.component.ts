import {Component, HostBinding} from '@angular/core';
import {RouterModule} from '@angular/router';
import {MenubarModule} from 'primeng/menubar';
import {ButtonModule} from 'primeng/button';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  standalone: true,
  styleUrl: './header.component.scss',
  imports: [MenubarModule, ButtonModule]

})
export class HeaderComponent {
  @HostBinding('class') mode: string = 'dark-mode';


}
