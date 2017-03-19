import { Component } from '@angular/core';

import { Product } from './_models/product';
@Component({
  moduleId: "module.id",
  selector: 'app-root',
  templateUrl: './databinding.component.html',
})
export class AppComponent {
  age: number;
  fullName: string;
  active: boolean;
  productList: Product[];
  result1: string = 'one way';

  constructor() {
    this.age = 23;
    this.fullName = 'Vo Phu Quoi';
    this.active = true;
    this.productList = [
      {
        id: 'p01',
        name: 'Coffee',
        price: 100,
        quantity: 2,
        photo: 'coffee.jpg'
      },
      {
        id: 'p02',
        name: 'Coat',
        price: 200,
        quantity: 6,
        photo: 'couple_chibi.jpg'
      }
    ];

  }
  title = 'Angular app works!';

  display1(): string {
    return 'Display 1';
  }

  display2(name: string): string {
    return 'Display 2: ' + name;
  }

  
}
