import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio5',
  templateUrl: './ejercicio5.page.html',
  styleUrls: ['./ejercicio5.page.scss'],
})
export class Ejercicio5Page implements OnInit {

  media = 0;
  desviacion = 0;
  numerosText = '';

  instrucciones = `Elaborar una interfaz web para lea n valores y después de un click,
                   muestre la media y la desviación estándar de los números insertados.
                   Para este problema la media y desviación estándar deberán realizarse con funciones.`;

  constructor() { }

  ngOnInit() {
  }

  calcular() {
    this.media = 0;
    const data = this.numerosText.split(' ').map(elemento => {
      return parseInt(elemento, 10);
    });
    this.calcMedia(data);
    this.calcDesviacion(data);
    console.log(this.media, this.desviacion);
  }

  calcMedia(data) {
    data.forEach(numero => {
      this.media += numero;
    });
    this.media = this.media / data.length;
  }

  calcDesviacion(data) {
    this.desviacion = Math.sqrt(data.reduce((sq, n) => {
      return sq + Math.pow(n - this.media, 2);
    }, 0) / (data.length - 1));
  }

}
