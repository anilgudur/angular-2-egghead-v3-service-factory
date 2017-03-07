"use strict";
var engine_1 = require('./engine');
var doors_1 = require('./doors');
var car_1 = require('./car');
function main() {
    var engine = new engine_1.Engine;
    var doors = new doors_1.Doors;
    var car = new car_1.Car(engine, doors);
    car.startEngine();
}
main();
var CarMain = (function () {
    function CarMain() {
    }
    return CarMain;
}());
exports.CarMain = CarMain;
//# sourceMappingURL=car.main.js.map