import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListCompleteComponent } from './Component/list-complete/list-complete.component';
import { CreateTaskComponent } from './Component/create-task/create-task.component';

@NgModule({
  declarations: [
    AppComponent,
    ListCompleteComponent,
    CreateTaskComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
