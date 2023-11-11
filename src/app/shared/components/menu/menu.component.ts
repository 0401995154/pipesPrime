import { Component, OnInit } from '@angular/core';
import { MenuItem, PrimeIcons } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styles: [],
})
export class MenuComponent {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Pipes de Angular',
        icon: 'pi pi-desktop',
        items: [
          {
            label: 'Textos y fechas',
            icon: 'pi pi-align-left',
          },
          {
            label: 'Números',
            icon: 'pi pi-dollar',
          },
          {
            label: 'No comunes',
            icon: 'pi pi-globe',
          },
        ],
      },
      {
        label: 'Pipes Personalizados',
        icon: 'pi pi-cog',
        items: [
          {
            label: 'Elemento',
            icon: 'pi pi-cog',
          },
        ],
      },
    ];
  }
}
