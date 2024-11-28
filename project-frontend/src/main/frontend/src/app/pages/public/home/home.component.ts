import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  standalone: true,
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  isAuthorized = false;
}
