import { Engine } from './engine';
import { Doors } from './doors';
import { Car } from './car';

function main() {

    let engine = new Engine;
    let doors = new Doors;
    let car = new Car(engine, doors);

    car.startEngine();
}

main();

export class CarMain {

}