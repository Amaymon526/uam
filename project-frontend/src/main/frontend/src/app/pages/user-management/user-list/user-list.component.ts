import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserControllerService } from '../../../generated/rest/project';
import { User } from '../../../generated/rest/project';
import {NgClass, NgForOf, NgIf} from '@angular/common';
import {TagModule} from 'primeng/tag';
import {TableModule} from 'primeng/table';
import {SliderModule} from 'primeng/slider';
import {FormsModule} from '@angular/forms';
import {DropdownModule} from 'primeng/dropdown';
import {MultiSelectModule} from 'primeng/multiselect';
import {Button} from 'primeng/button';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  imports: [NgForOf, NgIf, TagModule, TableModule, SliderModule, FormsModule, DropdownModule, MultiSelectModule, Button, NgClass],
  standalone: true
})
export class UserListComponent implements OnInit {
  users: User[] = [];

  constructor(
    private userService: UserControllerService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userService.getAllUsers().subscribe({
      next: (data: User[]) => {
        this.users = data;
        console.log(data)
      },
      error: (err) => {
        console.error('Fehler beim Laden der Benutzer:', err);
      },
    });


    this.userService.getAllUsers().subscribe(user =>{
      this.users = user;
    })
  }

  onCreateUser(): void {
    this.router.navigate(['/user/create']);
  }

  onEditUser(userId: string | undefined): void {
    if (userId) {
      this.router.navigate(['/user-management/edit', userId]);
    } else {
      console.error('Benutzer-ID fehlt.');
    }
  }

  onDeleteUser(userId: string): void {
    if (confirm('Möchten Sie diesen Benutzer wirklich löschen?')) {
      this.userService.deleteUser(userId).subscribe({
        next: () => {
          this.loadUsers();
        },
        error: (err) => {
          console.error('Fehler beim Löschen des Benutzers:', err);
        },
      });
    }
  }
}
