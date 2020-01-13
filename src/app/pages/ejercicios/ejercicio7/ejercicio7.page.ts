import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio7',
  templateUrl: './ejercicio7.page.html',
  styleUrls: ['./ejercicio7.page.scss'],
})
export class Ejercicio7Page implements OnInit {

  instrucciones = `Elaborar una interfaz web para lea un valor y después de un click de botón,
                    muestre el triángulo de pascal, el valor a introducir indicará el número de 
                    niveles del triángulo de pascal.`;

  triangulo: number[][] = [];
  n = 0;

  constructor() { }

  ngOnInit() {
  }

  trianguloDePascal() {
    this.triangulo = [[1], [1, 1]];
    if (this.n === 0) {
      this.triangulo = [];
    } else if (this.n === 1) {
      this.triangulo = [[1]];
    } else if (this.n === 2) {
      this.triangulo = [[1], [1, 1]];
    } else {
      for (let i = 2; i < this.n; i++) {
        this.agregarFila();
      }
    }
  }

  private agregarFila() {
    const anterior = this.triangulo[this.triangulo.length - 1];
    const nuevaFila = [1];
    for (let i = 0; i < anterior.length - 1; i++) {
      const actual = anterior[i];
      const siguiente = anterior[i + 1];
      nuevaFila.push(actual + siguiente);
    }
    nuevaFila.push(1);
    this.triangulo.push(nuevaFila);
  }

}
