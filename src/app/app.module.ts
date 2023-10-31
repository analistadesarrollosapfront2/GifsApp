import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


// Components
import { AppComponent } from './app.component';


// Modules
import { SharedModuleTs } from './shared/shared.module';
import { GifsModule } from './gifs/gifs.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModuleTs,
    GifsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
