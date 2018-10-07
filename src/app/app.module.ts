import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NamesComponent } from './names/names.component';
import { ManeTagComponent } from './mane-tag/mane-tag.component';

@NgModule({
  declarations: [
    AppComponent,
    NamesComponent,
    ManeTagComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
