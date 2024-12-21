import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PswResetComponent } from './psw-reset.component';

describe('PswResetComponent', () => {
  let component: PswResetComponent;
  let fixture: ComponentFixture<PswResetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PswResetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PswResetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
