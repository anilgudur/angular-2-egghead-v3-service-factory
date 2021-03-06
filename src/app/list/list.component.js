"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var list_service_module_1 = require('./list-service.module');
var logs_module_1 = require('../core/logs/logs.module');
var ListComponent = (function () {
    function ListComponent(listService, listAnotherService, logDebugger) {
        this.listService = listService;
        this.listAnotherService = listAnotherService;
        this.logDebugger = logDebugger;
    }
    ListComponent.prototype.ngOnInit = function () {
        this.logDebugger.debug("Getting list items...");
        this.items = this.listService.getItems();
        //this.items = this.listAnotherService.getItems();
    };
    ListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'list-component',
            template: "\n        <ul>\n            <li *ngFor=\"let item of items\">\n                {{item.id}}: {{item.name}} lives in {{item.country}}\n            </li>\n        </ul>\n    ",
            providers: []
        }), 
        __metadata('design:paramtypes', [list_service_module_1.ListService, list_service_module_1.ListAnotherService, logs_module_1.LogDebugger])
    ], ListComponent);
    return ListComponent;
}());
exports.ListComponent = ListComponent;
//# sourceMappingURL=list.component.js.map