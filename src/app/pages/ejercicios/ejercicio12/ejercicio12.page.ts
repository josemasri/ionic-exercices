import { Component, OnInit } from '@angular/core';
import { Complejo } from './models/complejo';

@Component({
  selector: 'app-ejercicio12',
  templateUrl: './ejercicio12.page.html',
  styleUrls: ['./ejercicio12.page.scss'],
})
export class Ejercicio12Page implements OnInit {

  instrucciones = `Elaborar una clase Complejo que modele los números complejos implementando al menos las operaciones de suma,
                    resta y módulo de un número complejo a imitación de la suma o resta de los números reales o enteros.
                    Adecua la interfaz web para resolver este problema.`;

  sumaData = {
    a: 0,
    b: 0,
    c: 0,
    d: 0,
    res: null
  };
  restaData = {
    a: 0,
    b: 0,
    c: 0,
    d: 0,
    res: null
  };
  multiplicacionData = {
    a: 0,
    b: 0,
    c: 0,
    d: 0,
    res: null
  };
  moduloData = {
    a: 0,
    b: 0,
    res: null
  };

  constructor() { }

  ngOnInit() {
  }

  suma() {
    this.sumaData.res = Complejo.suma(new Complejo(this.sumaData.a, this.sumaData.b), new Complejo(this.sumaData.c, this.sumaData.d));
  }

  resta() {
    this.restaData.res = Complejo.resta(
      new Complejo(this.restaData.a, this.restaData.b),
      new Complejo(this.restaData.c, this.restaData.d)
    );
  }

  multiplicacion() {
    this.multiplicacionData.res = Complejo.multiplicacion(
      new Complejo(this.multiplicacionData.a, this.multiplicacionData.b),
      new Complejo(this.multiplicacionData.c, this.multiplicacionData.d)
    );
  }

  modulo() {
    this.moduloData.res = Complejo.modulo(new Complejo(this.moduloData.a, this.moduloData.b));
  }

}
