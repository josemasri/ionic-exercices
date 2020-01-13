export class Fecha {
    constructor(
        private dia: number,
        private mes: number,
        private ano: number
    ) {
    }

    public getDia(): number {
        return this.dia;
    }

    public getMes(): number {
        return this.mes;
    }

    public getAno(): number {
        return this.ano;
    }

    public getFechaAbbr(): string {
        let str = `${this.dia}/`;

        if (this.mes > 9) {
            str += `${this.mes}/`;
        } else {
            str += `0${this.mes}/`;
        }
        str += `${this.ano}`;
        return str;
    }

    public getFechaExt() {
        let mes;
        switch (this.mes) {
            case 1:
                mes = 'enero';
                break;
            case 2:
                mes = 'febrero';
                break;
            case 3:
                mes = 'marzo';
                break;
            case 4:
                mes = 'abril';
                break;
            case 5:
                mes = 'mayo';
                break;
            case 6:
                mes = 'junio';
                break;
            case 7:
                mes = 'julio';
                break;
            case 8:
                mes = 'agosto';
                break;
            case 9:
                mes = 'septiembre';
                break;
            case 10:
                mes = 'octubre';
                break;
            case 11:
                mes = 'noviembre';
                break;
            case 12:
                mes = 'diciembre';
                break;

            default:
                mes = 'enero';
                break;
        }
        return `${this.dia} de ${mes} de ${this.ano}`;
    }

}
