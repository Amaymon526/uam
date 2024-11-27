import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {SpinnerComponent} from '../../spinner/spinner.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, SpinnerComponent]
})
export class RegisterComponent {
  username = '';
  email = '';
  password = '';

  isLoading = true;

  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = false;
    }, 250); }



  onRegister() {

  }
}
