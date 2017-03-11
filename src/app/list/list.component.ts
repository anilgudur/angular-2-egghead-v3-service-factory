import { Component, OnInit } from '@angular/core';

import { ListService } from './list-service.module';
import { ListAnotherService } from './list-service.module';
import { LogDebugger } from '../core/log-debugger.service';

@Component({
    moduleId: module.id,
    selector: 'list-component',
    template:`
        <ul>
            <li *ngFor="let item of items">
                {{item.id}}: {{item.name}} lives in {{item.country}}
            </li>
        </ul>
    `,
    providers: [
        {
            provide: LogDebugger,
            useFactory: () => {
                return new LogDebugger(true);
            }
        }
    ]
})
export class ListComponent implements OnInit {

    constructor(
            private listService: ListService,
            private listAnotherService: ListAnotherService,
            private logDebugger: LogDebugger
    ){}

    items:Array<any>;

    ngOnInit(): void {
        this.logDebugger.debug("Getting list items...");
        // this.items = [
        //     { id:0, name:'Pascal Precht', country:'Germany' },
        //     { id:1, name:'Christoph Burgdorf', country:'Germany' },
        //     { id:2, name:'Thomos Burleson', country:'United States' }
        // ];

        //this.items = this.listService.getItems();
        //this.items = this.listAnotherService.getItems();
        this.items = this.listService.getItems();
    }

}