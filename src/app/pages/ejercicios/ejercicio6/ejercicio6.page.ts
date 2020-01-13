import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio6',
  templateUrl: './ejercicio6.page.html',
  styleUrls: ['./ejercicio6.page.scss'],
})
export class Ejercicio6Page implements OnInit {

  numerosText = '';
  numeros: number[] = [];
  numerosAs: number[] = [];
  numerosDe: number[] = [];

  instrucciones = `Elaborar una interfaz web para lea n valores y después de un click, 
                    muestre los valores ordenados de manera ascendente y también deberán ser ordenados de forma descendente. 
                    Utilizar dos funciones para cada tipo de ordenamiento.`;

  constructor() { }

  ngOnInit() {
  }

  ordenar() {
    this.numeros = this.numerosText.split(' ').map(item => {
      return parseFloat(item);
    });
    this.ordenarAs(this.numeros);
    this.ordenarDe(this.numeros);
    console.log(this.numerosAs, this.numerosDe);
  }

  ordenarAs(data: number[]) {
    this.numerosAs = [...data];
    this.numerosAs.sort((a, b) => a - b);
  }

  ordenarDe(data: number[]) {
    this.numerosDe = [...data];
    this.numerosDe.sort((a, b) => b - a);
  }

}
