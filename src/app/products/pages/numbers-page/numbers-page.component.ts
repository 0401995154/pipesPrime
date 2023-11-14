import { Component } from '@angular/core';

@Component({
  selector: 'app-numbers-page',
  templateUrl: './numbers-page.component.html',
  styleUrls: ['./numbers-page.component.css'],
})
export class NumbersPageComponent {
  public ventasNetas: number = 235412.42;
  public venta: number = 0.45;
}
