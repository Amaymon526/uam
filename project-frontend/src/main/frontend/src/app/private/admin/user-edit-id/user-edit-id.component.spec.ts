import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserEditIdComponent } from './user-edit-id.component';

describe('UserEditIdComponent', () => {
  let component: UserEditIdComponent;
  let fixture: ComponentFixture<UserEditIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserEditIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserEditIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
