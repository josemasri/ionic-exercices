import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio10',
  templateUrl: './ejercicio10.page.html',
  styleUrls: ['./ejercicio10.page.scss'],
})
export class Ejercicio10Page implements OnInit {

  instrucciones = `Elaborar una interfaz web para que lea el valor de x (número real) y
                    de n (entero) que indica el número de términos, y después de dar click
                    en el botón debe mostrar la siguiente función exponencial.`;

  n = 0;
  x = 0;

  serie = '';

  constructor() { }

  ngOnInit() {
  }

  crear() {
    if (this.n === 0) {
      this.serie = 'e <sup>x</sup> = 1';
      return;
    }
    this.serie = 'e <sup>x</sup> = 1 + ';
    if (this.n === 1) {
      this.serie += `<sup>${this.x}</sup>&frasl;<sub>${1}!</sub>`;
      return;
    }
    if (this.n >= 2) {
      this.serie += `<sup>${this.x}</sup>&frasl;<sub>${1}!</sub> + `;
    }
    for (let i = 2; i <= this.n - 1; i++) {
      this.serie += `<sup>${this.x}<sup>${i}</sup></sup>&frasl;<sub>${i}!</sub> + `;
    }
    this.serie += `<sup>${this.x}<sup>${this.n}</sup></sup>&frasl;<sub>${this.n}!</sub>`;

  }

}
