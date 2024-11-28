import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCreateEditComponent } from './user-create-edit.component';

describe('UserCreateEditComponent', () => {
  let component: UserCreateEditComponent;
  let fixture: ComponentFixture<UserCreateEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserCreateEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserCreateEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
