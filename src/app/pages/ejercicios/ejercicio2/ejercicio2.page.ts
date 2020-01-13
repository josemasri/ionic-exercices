import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio2',
  templateUrl: './ejercicio2.page.html',
  styleUrls: ['./ejercicio2.page.scss'],
})
export class Ejercicio2Page implements OnInit {

  instrucciones = `Elaborar una interfaz web para que lea el valor de x (número real) y de n (entero), 
  y después de dar click en el botón debe mostrar la siguiente suma parcial 
  de todas las potencias xk, empezando con k = 0 y hasta llegar a k = n, es decir:`;

  x = 0;
  k = 0;
  res = 0;

  constructor() { }

  ngOnInit() {
  }

  calculate() {
    this.res = 0;
    for (let i = 0; i <= this.k; i++) {
      this.res += Math.pow(this.x, i);
    }
  }

}
