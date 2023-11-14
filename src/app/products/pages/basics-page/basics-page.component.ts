import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css'],
})
export class BasicsPageComponent {
  public lowerName: string = 'ANDERSon';
  public upperName: string = 'Anderson';
  public fullName: string = 'ANDersON';
  public customDate: Date = new Date();
}
