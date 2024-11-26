import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainShopProductAddComponent } from './main-shop-product-add.component';

describe('MainShopProductAddComponent', () => {
  let component: MainShopProductAddComponent;
  let fixture: ComponentFixture<MainShopProductAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainShopProductAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainShopProductAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
