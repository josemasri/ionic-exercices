export class Punto {
    constructor(
        private x: number,
        private y: number
    ) { }

    to_string_cartesianas(): string {
        return `(x = ${this.x}, y = ${this.y})`;
    }

    to_string_polares(): string {
        const polar = this.cartesianoAPolar(this.x, this.y);
        return `( r = ${polar.distance.toFixed(4)}, alpha(radianes) = ${polar.radians.toFixed(4)})`;
    }

    private cartesianoAPolar(x, y) {
        const distance = Math.sqrt(x * x + y * y);
        const radians = Math.atan2(y, x);
        return { distance, radians };
    }

}
