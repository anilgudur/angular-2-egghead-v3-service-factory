"use strict";
var engine_1 = require('./engine');
var doors_1 = require('./doors');
var Car = (function () {
    function Car() {
        this.engine = new engine_1.Engine;
        this.doors = new doors_1.Doors;
    }
    Car.prototype.startEngine = function () {
        this.engine.start();
    };
    return Car;
}());
exports.Car = Car;
//# sourceMappingURL=car.js.map