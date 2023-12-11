class Circle {

    constructor(center, radius) {
        this.center = center
        this.radius = radius
    }

    getLength() {
        return 2 * Math.PI * this.radius
    }

    static getLengthFromRadius(radius) {
        return 2 * Math.PI * radius
    }

    getCopy() {
        return new Circle({x: this.center.x, y: this.center.y}, this.radius)
    }

    static createCircle(x, y, radius) {
        return new Circle( { x, y }, radius)
    }

    checkPointInside(point) {
        const distance = Math.sqrt(
            Math.pow(point.x - this.center.x, 2) + Math.pow(point.y - this.center.y, 2)
        );
        return distance <= this.radius;
    }

    toString() {
        return `Circle with center (${this.center.x}, ${this.center.y}) and radius ${this.radius}`;
    }
}

const circle1 = new Circle({ x: 2, y: 1 }, 7);
console.log(circle1.getLength());
console.log(Circle.getLengthFromRadius(3));

const circle2 = circle1.getCopy();
console.log(circle2.toString());

const circle3 = Circle.createCircle(2, 4, 5);
console.log(circle3.toString());

const point = { x: 6, y: 3 };
console.log(circle1.checkPointInside(point));