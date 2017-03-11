import { Injectable } from "@angular/core";
@Injectable()
export class ListAnotherService {
    items:Array<any> = [
        { id:0, name:'Anil', country:'Germany' },
        { id:1, name:'Anant', country:'Germany' },
        { id:2, name:'ABC', country:'CCC' }
    ];

    getItems() {
        return this.items;
    }
}