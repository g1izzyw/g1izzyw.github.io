import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ABitAboutMeComponent } from './a-bit-about-me/a-bit-about-me.component';

@NgModule({
  declarations: [
    AppComponent,
    ABitAboutMeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
