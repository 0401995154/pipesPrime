import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'pipeApp';

  constructor(private primeNg: PrimeNGConfig) {}

  ngOnInit() {
    this.primeNg.ripple = true;
  }
}
