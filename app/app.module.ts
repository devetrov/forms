import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FormValidationComponent } from './forms/form-validation/form-validation.component';
import { FormNestedComponent } from './forms/form-nested/form-nested.component';
import { FormControlsComponent } from './forms/form-controls/form-controls.component';
import { AddressComponent } from './forms/form-nested/address.component';

import { AppRoutingModule } from './app-routing.module';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],

  declarations: [
    AppComponent,
    NavComponent,
    FormValidationComponent,
    FormNestedComponent,
    FormControlsComponent,
    AddressComponent
  ],

  bootstrap: [
    AppComponent,
  ],

  providers: [

  ]
})

export class AppModule { }