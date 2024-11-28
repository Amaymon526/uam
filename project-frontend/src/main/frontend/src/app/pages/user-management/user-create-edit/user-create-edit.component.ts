import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserControllerService } from '../../../generated/rest/project';
import { User } from '../../../generated/rest/project'; // Importiere den Typ für Benutzer
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-create-edit',
  templateUrl: './user-create-edit.component.html',
  styleUrls: ['./user-create-edit.component.scss'],
  imports: [FormsModule],
  standalone: true
})
export class UserCreateEditComponent implements OnInit {
  user: Partial<User> = {};
  isEditMode = false;

  constructor(
    private userService: UserControllerService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const userId = this.route.snapshot.paramMap.get('id');
    if (userId) {
      this.isEditMode = true;
      this.loadUser(userId);
    }
  }

  loadUser(userId: string): void {
    this.userService.getUser(userId).subscribe({
      next: (data: User) => {
        this.user = data;
      },
      error: (err) => {
        console.error('Fehler beim Laden des Benutzers:', err);
      },
    });
  }

  onSubmit(): void {
    if (this.isEditMode) {
      this.userService.saveUser(this.user).subscribe({
        next: () => {
          this.router.navigate(['/user-management']);
        },
        error: (err) => {
          console.error('Fehler beim Bearbeiten des Benutzers:', err);
        },
      });
    } else {
      this.userService.saveUser(this.user).subscribe({
        next: () => {
          this.router.navigate(['/user-management']);
        },
        error: (err) => {
          console.error('Fehler beim Erstellen des Benutzers:', err);
        },
      });
    }
  }

  onCancel(): void {
    this.router.navigate(['/user-management']);
  }
}
