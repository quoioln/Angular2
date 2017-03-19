import { Component } from '@angular/core';

import { Service1 } from './_services/service1.service';
import { Product } from './_models/product';
@Component({
  moduleId: "module.id",
  selector: 'app-root',
  templateUrl: './template.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  result1: string = 'one way';  
  firstName: string = '';
  lastName: string = '';
  result2: string = '';

  constructor(private service1: Service1) {

  }
  title = 'Angular app works!';

  display1(): string {
    return 'Display 1';
  }

  display2(name: string): string {
    return 'Display 2: ' + name;
  }

  display3(): string {
    return 'Hi ' + this.firstName + ' ' + this.lastName;
  }

  clickMe(event: any):void {
    alert('Click me');
  }

  display4(event: any):void {
    this.result2 = event.target.value;
  }

  display5(): string {
    return this.service1.work1();
  }
}
