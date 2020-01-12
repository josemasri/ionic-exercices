import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio4',
  templateUrl: './ejercicio4.page.html',
  styleUrls: ['./ejercicio4.page.scss'],
})
export class Ejercicio4Page implements OnInit {

  a: number[][] = [];
  b: number[][] = [];
  c: number[][] = [];


  instrucciones = `Elaborar una interfaz web para que lea los valores de dos matrices de 3 x 3
                    y se tenga dos botones, uno deberá suma las matrices y otro multiplicarlas.`;

  constructor() { }

  ngOnInit() {
    for (let i = 0; i < 3; i++) {
      this.a[i] = new Array(3);
      this.b[i] = new Array(3);
      this.c[i] = new Array(3);
    }
  }

  sumar() {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        this.c[i][j] = this.a[i][j] + this.b[i][j];
      }
    }
  }

  multiplicar() {
    for (let r = 0; r < 3; r++) {
      for (let c = 0; c < 3; ++c) {
        this.c[r][c] = 0;
        for (let i = 0; i < 3; ++i) {
          this.c[r][c] += this.a[r][i] * this.b[i][c];
        }
      }
    }
  }

}
