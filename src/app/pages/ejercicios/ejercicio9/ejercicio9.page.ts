import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio9',
  templateUrl: './ejercicio9.page.html',
  styleUrls: ['./ejercicio9.page.scss'],
})
export class Ejercicio9Page implements OnInit {

  instrucciones = `Un empleado de la tienda “Tiki Taka” realiza N ventas durante el día,
                    se requiere saber cuántas de ellas fueron mayores a $1000,
                    cuántas fueron mayores a $500 pero menores o iguales a $1000,
                    y cuántas fueron menores o iguales a $500. Además,
                    se requiere saber el monto de lo vendido en cada categoría y de forma global.`;

  ventas: number[] = [];
  A = 0;
  B = 0;
  C = 0;
  T1 = 0;
  T2 = 0;
  T3 = 0;
  TT = 0;


  constructor() { }

  ngOnInit() {
  }

  calcular() {
    this.A = 0;
    this.B = 0;
    this.C = 0;
    this.T1 = 0;
    this.T2 = 0;
    this.T3 = 0;
    this.TT = 0;
    this.ventas.forEach(venta => {
      if (venta > 1000) {
        this.A++;
        this.T1 += venta;
      } else if (venta > 500) {
        this.B++;
        this.T2 += venta;
      } else {
        this.C++;
        this.T3 += venta;
      }
      this.TT += venta;
    });
  }

}
