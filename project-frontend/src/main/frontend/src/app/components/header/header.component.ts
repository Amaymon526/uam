import {Component, HostBinding, OnInit} from '@angular/core';
import {RouterModule} from '@angular/router';
import {MenubarModule} from 'primeng/menubar';
import {ButtonModule} from 'primeng/button';
import {NgClass, NgIf} from '@angular/common';
import {CurrentUserService} from '../../services/current-user.service';
import {Role, User} from '../../generated/rest/project';
import {DataRowOutlet} from '@angular/cdk/table';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  standalone: true,
  styleUrl: './header.component.scss',
  imports: [MenubarModule, ButtonModule, NgIf]

})
export class HeaderComponent implements OnInit{
  @HostBinding('class') mode: string = 'dark-mode';

  currentUser: User | null = null;

  constructor(private userService: CurrentUserService) {

  }

  ngOnInit(): void {
    this.userService.currentUser$.subscribe((user) => {
      this.currentUser = user;
      console.log(user)
    });
  }


  hasRole(roleName: string): boolean {
    return this.currentUser?.role?.some((role: Role) => role.name === roleName) ?? false;
  }

}
