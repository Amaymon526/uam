import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserControllerService } from '../../../generated/rest/project';
import { User } from '../../../generated/rest/project';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  imports: [NgForOf, NgIf],
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
      },
      error: (err) => {
        console.error('Fehler beim Laden der Benutzer:', err);
      },
    });
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
