import { NgModule } from '@angular/core';

import { ListService } from './list.service';

@NgModule({
    // imports: [],
    // exports: [],
    // declarations: [NameComponent],
    // providers: [],
})
export class ListServiceModule {
    static forRoot() {
        return {
            ngModule: ListServiceModule,
            providers: [ListService]
        }
    }
}

export {
    ListService
}
