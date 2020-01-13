import { Fecha } from './fecha';
export class Empleado {
    constructor(
        protected nombre: string,
        protected fecha: Fecha,
        protected salarioDiario: number
    ) {

    }
    calcularQuincena(): number {
        return this.salarioDiario * 15;
    }
    imprimeEmpleado(): string {
        return `Nombre: ${this.nombre}, Fecha: ${this.fecha.getFechaExt()},
                Salario Diario: ${this.salarioDiario}, Salario Quincena ${this.calcularQuincena()}`;
    }
}
