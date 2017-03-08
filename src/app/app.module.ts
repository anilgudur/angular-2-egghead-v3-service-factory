import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

//import { CarMain }  from './car.main';

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