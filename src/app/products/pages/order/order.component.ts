import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { SplitButton } from 'primeng/splitbutton';
import { Color, Hero } from '../../interfaces/hero';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styles: [],
})
export class OrderComponent {
  isUppercase: boolean = false;

  ordena?: keyof Hero;
  heroes: Hero[] = [
    {
      name: 'Superman',
      canFly: true,
      color: Color.blue,
    },
    {
      name: 'Batman',
      canFly: false,
      color: Color.black,
    },
    {
      name: 'Daredevil',
      canFly: false,
      color: Color.red,
    },
    {
      name: 'Robin',
      canFly: false,
      color: Color.green,
    },
    {
      name: 'Linterna verde',
      canFly: true,
      color: Color.green,
    },
  ];
  onUperrcase() {
    this.isUppercase = !this.isUppercase;
  }

  onOrder(valor: keyof Hero) {
    this.ordena = valor;
  }
}
