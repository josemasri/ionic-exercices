import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio8',
  templateUrl: './ejercicio8.page.html',
  styleUrls: ['./ejercicio8.page.scss'],
})
export class Ejercicio8Page implements OnInit {

  instrucciones = `Se tiene el siguiente problema para una compañía telefónica.
                   Elaborar una interfaz web para lea el tiempo de llamada (TI) en minutos,
                    el tipo de día (DI) de los días de la semana, y el turno (TU) sea matutino o vespertino.
                    Y después de un click de botón deberá mostrar el pago, el impuesto y el total`;

  tiempo = 0;
  dia = '';
  turno = '';
  pago = 0;
  impuestos = 0;
  total = 0;

  constructor() { }

  ngOnInit() {
  }

  calcular() {
    this.calcularPago();
    this.calcularImpuestos();
    this.total = this.pago + this.impuestos;
  }

  calcularPago() {
    if (this.tiempo < 5) {
      this.pago = this.tiempo;
    } else if (this.tiempo < 8) {
      this.pago = (this.tiempo - 5) * 0.8 + 5;
    } else if (this.tiempo <= 10) {
      this.pago = (this.tiempo - 8) * 0.7 + 7.4;
    } else {
      this.pago = (this.tiempo - 10) * 0.5 + 8.8;
    }
  }

  calcularImpuestos() {
    if (this.dia === 'domingo') {
      this.impuestos = this.pago * 0.05;
    } else {
      if (this.turno === 'matutino') {
        this.impuestos = this.pago * 0.15;
      } else {
        this.impuestos = this.pago * 0.10;
      }
    }
  }

}
