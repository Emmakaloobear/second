import { Component, OnInit } from '@angular/core';
import{Product} from '../models/product';//不能打'../models/product.ts'
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
   Products: Product[] = [//: Product[]代表型別，一開始繪紅線是因為是在MODELS裡面宣告了一個型別，如果這裏要用到的話必須要IMPORT
    {
        'id': 11,
        'title': 'OPPO F5 Youth (Gold, 32 GB)',
        'modelName': 'F5 Youth',
        'color': 'Gold',
        'productType': 'Mobile',
        'brand': 'OPPO',
        'price': 16990
    },
    {
        'id': 12,
        'title': 'Dell Inspiron 7000',
        'modelName': 'Inspiron',
        'color': 'Gray',
        'productType': 'Laptop',
        'brand': 'DELL',
        'price': 59990
    }
];

  constructor() { }

  ngOnInit() {
  }

}