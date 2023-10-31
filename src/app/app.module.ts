import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


// Components
import { AppComponent } from './app.component';


// Modules
import { SharedModuleTs } from './shared/shared.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModuleTs
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
