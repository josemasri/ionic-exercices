export class Complejo {
    constructor(
        private a: number,
        private b: number
    ) {
    }
    static suma(x: Complejo, y: Complejo): Complejo {
        return new Complejo(x.a + y.a, x.b + y.b);
    }
    static resta(x: Complejo, y: Complejo): Complejo {
        return new Complejo(x.a - y.a, x.b - y.b);
    }
    static multiplicacion(x: Complejo, y: Complejo): Complejo {
        return new Complejo((x.a * y.a) - (x.b * y.b), (x.a * y.b) + (x.b * y.a));
    }
    static modulo(x: Complejo): number {
        return Math.sqrt(Math.pow(x.a, 2) + Math.pow(x.b, 2));
    }
}
