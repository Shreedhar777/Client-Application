import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserPage1Component } from './user-page1/user-page1.component';
import { UserPage2Component } from './user-page2/user-page2.component';

@NgModule({
  declarations: [
    AppComponent,
    UserPage1Component,
    UserPage2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
