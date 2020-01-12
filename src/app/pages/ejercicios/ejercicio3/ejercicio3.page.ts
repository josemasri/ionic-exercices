import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio3',
  templateUrl: './ejercicio3.page.html',
  styleUrls: ['./ejercicio3.page.scss'],
})
export class Ejercicio3Page implements OnInit {

  instrucciones = `Elabora una interfaz web para que lea un número entero
                   y después de dar click en el botón muestre como resultado una pirámide de asteriscos.`;
  n = 0;
  pyramidStr: string[] = [];


  constructor() { }

  ngOnInit() {
  }

  pyramid() {
    this.pyramidStr = [];
    for (let i = 1; i <= this.n; i++) {
      let s = '';
      for (let j = 1; j <= (2 * this.n - 1); j++) {
        (j >= this.n + 1 - i && j <= this.n - 1 + i) ? s += '*' : s += ' ';
      }
      this.pyramidStr.push(s);
    }
  }

}
