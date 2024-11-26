import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainShopProductComponent } from './main-shop-product.component';

describe('MainShopProductComponent', () => {
  let component: MainShopProductComponent;
  let fixture: ComponentFixture<MainShopProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainShopProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainShopProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
