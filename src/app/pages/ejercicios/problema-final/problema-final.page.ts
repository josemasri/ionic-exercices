import { Ingeniero } from './models/ingeniero';
import { Empleado } from './models/empleado';
import { Fecha } from './models/fecha';
import { Component, OnInit } from '@angular/core';
import { IonDatetime } from '@ionic/angular';

@Component({
  selector: 'app-problema-final',
  templateUrl: './problema-final.page.html',
  styleUrls: ['./problema-final.page.scss'],
})
export class ProblemaFinalPage implements OnInit {

  instrucciones = `
                    Elaborar una clase Fecha que modele una fecha.
                    La clase deberá disponer de características que devuelvan el día, el mes y el año,
                    además de métodos que que devuelvan un STRING con la fecha en forma abreviada
                    (16/02/2000) y extendida (16 de febrero de 2000).
                    Elabore la clase Empleado que contenga como atributos nombre, Fecha y salario diario, 
                    donde Fecha es del tipo indicado en el punto 13 de este problemario. 
                    Elabora un método que calcule la quincena del Empleado, 
                    que corresponde al salario diario por quince. Elabora un método que imprima los atributos de esta clase.
                    Elabore la clase Ingeniero que herede de la clase Empleado y tenga como atributo extra el departamento 
                    donde trabaja el ingeniero. Elabora un método que imprima los atributos de esta clase.
  `;

  fechaInput;
  empleadoInput = {
    nombre: '',
    salario: 0,
    fecha: ''
  };

  ingeInput = {
    nombre: '',
    salario: 0,
    fecha: '',
    departamento: ''
  };

  fechaAbreviadaStr = '';
  fechaExtendidaStr = '';
  empleadoStr = '';
  ingenieroStr = '';



  constructor() { }

  ngOnInit() { }

  abreviada() {
    this.fechaExtendidaStr = '';
    const fecha = this.getFechaInput(this.fechaInput);
    this.fechaAbreviadaStr = fecha.getFechaAbbr();
  }
  extendida() {
    this.fechaAbreviadaStr = '';
    const fecha = this.getFechaInput(this.fechaInput);
    this.fechaExtendidaStr = fecha.getFechaExt();
  }

  getFechaInput(fechaInput): Fecha {
    const fechaTemp = new Date(fechaInput);
    return new Fecha(fechaTemp.getDate(), fechaTemp.getMonth() + 1, fechaTemp.getFullYear());
  }

  displayEmpleado() {
    const fecha = this.getFechaInput(this.empleadoInput.fecha);
    const empleado = new Empleado(this.empleadoInput.nombre, fecha, this.empleadoInput.salario);
    this.empleadoStr = empleado.imprimeEmpleado();
  }

  displayInge() {
    const fecha = this.getFechaInput(this.ingeInput.fecha);
    const ingeniero = new Ingeniero(this.ingeInput.nombre, fecha, this.ingeInput.salario, this.ingeInput.departamento);
    this.ingenieroStr = ingeniero.imprimeIngeniero();
  }

}
