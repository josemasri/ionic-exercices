import { Fecha } from './fecha';
import { Empleado } from './empleado';

export class Ingeniero extends Empleado {
    constructor(nombre: string, fecha: Fecha, salarioDiario: number, private departamento: string) {
        super(nombre, fecha, salarioDiario);
    }
    imprimeIngeniero() {
        return this.imprimeEmpleado() + `, Departamento: ${this.departamento}`;
    }
}
