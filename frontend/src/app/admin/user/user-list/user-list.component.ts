import { Component, OnInit } from '@angular/core';
import {User, UserControllerService} from '../../../gen';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import {Dialog} from 'primeng/dialog';
import {Button} from 'primeng/button';
import {InputText} from 'primeng/inputtext';


@Component({
  selector: 'app-user-list',
  imports: [
    TableModule,
    DropdownModule,
    FormsModule,
    Dialog,
    Button,
    InputText,
  ],
  templateUrl: './user-list.component.html',
  standalone: true,
  styleUrl: './user-list.component.css',
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  visible: boolean = false;

  constructor(
    private userService: UserControllerService
  ) {}

  ngOnInit() {
    this.loadUsers()
  }


  showDialog() {
    this.visible = true;
  }

  loadUsers(): void {
    this.userService.getAllUsers().subscribe({
      next: (data: any[]) => {
        console.log('Geladene Benutzer:', data);
        this.users = data;
      },
      error: (err) => {
        console.error('Fehler beim Laden der Benutzer:', err);
        this.users = [];
      },
    });


  }
}

