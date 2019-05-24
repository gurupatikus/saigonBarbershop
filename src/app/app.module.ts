import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatCheckboxModule, MatCardModule
} from '@angular/material';

import { AppComponent } from './root/app.component';
import { LandingLayoutComponent } from './layouts/landing-layout/landing-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingLayoutComponent
  ],
  imports: [
    // angular material
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    BrowserAnimationsModule,
    //
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
