import { Component } from '@angular/core';
import {RouterModule, RouterOutlet} from '@angular/router';
import {HeaderComponent} from './header/header.component';
import { MenubarModule } from 'primeng/menubar';
import {SpinnerComponent} from './spinner/spinner.component';
import {LoadingService} from './loading.service';
import {Observable, of} from 'rxjs';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, RouterModule, MenubarModule, SpinnerComponent, AsyncPipe],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Work Time UserManagement';
  isLoading$ = of(false);

  constructor(private loadingService: LoadingService) {
    this.isLoading$ = this.loadingService.isLoading$;
  }


}
