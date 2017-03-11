import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { ListModule }   from './list/list.module';
import { ListServiceModule }   from './list/list-service.module';

@NgModule({
  imports:      [ BrowserModule, ListModule, ListServiceModule.forRoot() ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }