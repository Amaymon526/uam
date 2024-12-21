import { Component } from '@angular/core';
import {CurrencyPipe, DatePipe, NgClass} from '@angular/common';
import {ProgressBar} from 'primeng/progressbar';
import {Tag} from 'primeng/tag';
import {Table, TableModule} from 'primeng/table';
import {Slider} from 'primeng/slider';
import {FormsModule} from '@angular/forms';
import {DropdownModule} from 'primeng/dropdown';
import {MultiSelect} from 'primeng/multiselect';
import {InputIcon} from 'primeng/inputicon';
import {IconField} from 'primeng/iconfield';
import {Button} from 'primeng/button';
import {InputText} from 'primeng/inputtext';

@Component({
  selector: 'app-user-list',
  imports: [
    TableModule,
    FormsModule,
    DropdownModule,
  ],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css',
})
export class UserListComponent {


}
