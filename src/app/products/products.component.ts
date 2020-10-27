import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {
  products: string [];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('./assets/products.json').subscribe(mydata => {
      this.products = mydata as string [];
      console.log(this.products);
    },
    )
  }

}
