// @ts-nocheck
function Vehicle(type) {
    this.type = type;
}

Vehicle.prototype.move = function () {
    console.log(`${this.type} is moving`);
};

function Car(type) {
    Vehicle.call(this, type)
}

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car; // Восстанавливаем конструктор

Car.prototype.drive = function () {
    console.log(`This ${this.type} is driving`);
};

const car1 = new Car('Sedan');
const car2 = new Car('SUV');

car1.move();  // "This car is moving"
car1.drive(); // "This car is driving"

car2.move();  // "This car is moving"
car2.drive(); // "This car is driving"

