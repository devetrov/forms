import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';

import { Client } from '../shared/client.model';

@Component({
  selector: 'form-nested',
  templateUrl: 'app/forms/form-nested/form-nested.component.html',
  styleUrls: ['app/forms/form-nested/form-nested.component.css']
})

export class FormNestedComponent implements OnInit{
  public myForm: FormGroup;

  constructor(private _fb: FormBuilder) { }

  // these settings will work when you initialize the component
  ngOnInit() {
    this.myForm = this._fb.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      addresses: this._fb.array([
          this.initAddress(),
      ])
    });
  }

  // show link for create new address
  initAddress() {
    return this._fb.group({
      street: ['', Validators.required],
      postcode: ['']
    });
  }

  addAddress() {
    const control = <FormArray>this.myForm.controls['addresses'];
    control.push(this.initAddress());
  }

  removeAddress(i: number) {
    const control = <FormArray>this.myForm.controls['addresses'];
    control.removeAt(i);
  }

  // for future development
  save(model: Client) {

  }
}