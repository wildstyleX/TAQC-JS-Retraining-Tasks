class Marker {
    #color;
    #ink;

    constructor(color) {
        this.#color = color;
        this.#ink = 100;
    }

    get color() {
        return this.#color;
    }

    get ink() {
        return this.#ink;
    }

    print(text) {
        for (const char of text) {
            if (this.#ink >= 10 || char === ' ') {
                console.log(char);
                if (char !== ' ') {
                    this.#ink -= 10;
                }
            } else {
                console.log('Out of ink!');
                break;
            }
        }
    }
}

class RefillableMarker extends Marker {
    #refillableInk;

    constructor(color) {
        super(color);
        this.#refillableInk = 100;
    }

    get ink() {
        return this.#refillableInk;
    }

    refill() {
        this.#refillableInk = 100;
        console.log('Marker refilled!');
    }
}

// Example usage:
const marker = new Marker('green');
console.log(`Marker color: ${marker.color}`);
console.log(`Marker ink level: ${marker.ink}%`);
marker.print('Hello World!');

const refillableMarker = new RefillableMarker('yellow');
console.log(`Refillable Marker color: ${refillableMarker.color}`);
console.log(`Refillable Marker ink level: ${refillableMarker.ink}%`);
refillableMarker.print('This is a refillable marker)');
refillableMarker.refill();
console.log(`Refillable Marker ink level after refill: ${refillableMarker.ink}%`);