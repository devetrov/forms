import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'address',
    templateUrl: 'app/forms/form-nested/address.component.html'
})
export class AddressComponent {
    // pass in address from FormNestedComponent
    @Input('group')

    public adressForm: FormGroup;
}