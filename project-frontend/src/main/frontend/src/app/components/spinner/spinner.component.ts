import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-spinner',
  imports: [CommonModule],
  templateUrl: './spinner.component.html',
  standalone: true,
  styleUrl: './spinner.component.scss'
})
export class SpinnerComponent {
  @Input() isLoading: boolean = false;

}
