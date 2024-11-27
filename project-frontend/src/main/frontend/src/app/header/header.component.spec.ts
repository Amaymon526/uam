import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [RouterTestingModule, MenubarModule, ButtonModule]
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the header component', () => {
    expect(component).toBeTruthy();
  });

  it('should render the menu with navigation links', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.logo')?.textContent).toContain('MyApp');
    expect(compiled.querySelector('a[routerLink="/"]')?.textContent).toContain('Home');
    expect(compiled.querySelector('a[routerLink="/about"]')?.textContent).toContain('About');
  });

  it('should render the login button', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('button')?.textContent).toContain('Login');
  });
});
