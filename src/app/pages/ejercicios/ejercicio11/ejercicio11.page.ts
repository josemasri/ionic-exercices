import { Punto } from './models/punto';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio11',
  templateUrl: './ejercicio11.page.html',
  styleUrls: ['./ejercicio11.page.scss'],
})
export class Ejercicio11Page implements OnInit {

  instrucciones = `Realizar la clase punto que tenga como atributos los ejes coordenados en X y Y.
                    Añadir métodos to_string_cartesianas y to_string_polares que devuelvan las coordenadas
                    en cartesianas y polares respectivamente representadas en una cadena de caracteres,
                    entre paréntesis y separadas por una coma. Adecua la interfaz web para resolver este problema.`;

  x: number;
  y: number;
  punto: Punto;


  constructor() { }

  ngOnInit() {
  }

  convertir() {
    this.punto = new Punto(this.x, this.y);
  }

}
