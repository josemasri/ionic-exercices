import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio6',
  templateUrl: './ejercicio6.page.html',
  styleUrls: ['./ejercicio6.page.scss'],
})
export class Ejercicio6Page implements OnInit {

  numerosText = '';
  numerosAs: number[] = [];
  numerosDe: number[] = [];

  instrucciones = `Elaborar una interfaz web para lea n valores y después de un click, 
                    muestre los valores ordenados de manera ascendente y también deberán ser ordenados de forma descendente. 
                    Utilizar dos funciones para cada tipo de ordenamiento.`;

  constructor() { }

  ngOnInit() {
  }

}
