import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio1',
  templateUrl: './ejercicio1.page.html',
  styleUrls: ['./ejercicio1.page.scss'],
})
export class Ejercicio1Page implements OnInit {

  constructor() { }

  instrucciones = `Elaborar una interfaz web para que lea una cantidad n de números reales, y después de dar click en el botón,
  mostrar cuántos de estos números fueron positivos, cuántos negativos y cuántos cero, además de indicar cuál fue el
  valor más grande leído, y cuál el más pequeño.`;

  text = '';
  positivos = 0;
  negativos = 0;
  ceros = 0;

  ngOnInit() {
    this.text = '';
  }

  ionViewWillEnter() {
    this.text = '';
    this.positivos = 0;
    this.negativos = 0;
    this.ceros = 0;
  }

  calculate() {
    const numeros = this.text.split(' ');
    this.positivos = 0;
    this.negativos = 0;
    this.ceros = 0;
    numeros.forEach(numero => {
      const numeroInt = parseInt(numero, 10);
      if (numeroInt === 0) {
        this.negativos++;
      } else if (numeroInt > 0) {
        this.positivos++;
      } else {
        this.ceros++;
      }
    });
  }

}
