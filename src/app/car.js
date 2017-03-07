"use strict";
var Car = (function () {
    function Car(engine, doors) {
        this.engine = engine;
        this.doors = doors;
    }
    Car.prototype.startEngine = function () {
        this.engine.start();
    };
    return Car;
}());
exports.Car = Car;
//# sourceMappingURL=car.js.map