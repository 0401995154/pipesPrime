import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css'],
})
export class UncommonPageComponent {
  public name: string = 'Anderson';
  public gender: 'male' | 'female' = 'male';

  public mapGender = {
    male: 'invitarlo',
    female: 'invitarla',
  };
  //i18 select

  cambiarPersona() {
    this.name = 'Melisa';
    this.gender = 'female';
  }

  //i18Plural

  public personas: string[] = [
    'Anderson',
    'Pedro',
    'Melissa',
    'Anaís',
    'Danilo',
    'Juan',
  ];

  mapaCliente = {
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'tenemos 1 cliente esperando',
    other: 'tenemos # clientes esperando',
  };

  borrarPersona() {
    this.personas.pop();
  }

  //Key value

  public objeto = {
    Name: 'Anderson',
    Edad: 27,
    Profesión: 'Informático',
  };

  //Async intervable crea un observable
  public myObservable: Observable<number> = interval(2000).pipe(
    tap((value) => console.log( 'tap: ',value))
  );
}
