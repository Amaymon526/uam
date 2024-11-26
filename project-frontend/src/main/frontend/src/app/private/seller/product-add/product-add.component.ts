import { Component } from '@angular/core';
import {Product, ProductControllerService} from "../../../generated/rest/project";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})

export class ProductAddComponent {
  product: Product = {};

  constructor(private productClientService: ProductControllerService,
              private router: ActivatedRoute,
              private _location: Location) {
  }

  ngOnInit(): void {
    this.router.params.subscribe(p => {
      if (p['id']) {
        this.productClientService.getProduct(p['id']).subscribe(u => {
          this.product = u;
        })
      }
    })
  }



  save() {
    this.productClientService.saveProduct(this.product).subscribe(u => {
      this.product = u;
      this._location.back()
    })
  }

}



