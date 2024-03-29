"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var FormNestedComponent = (function () {
    function FormNestedComponent(_fb) {
        this._fb = _fb;
    }
    // these settings will work when you initialize the component
    FormNestedComponent.prototype.ngOnInit = function () {
        this.myForm = this._fb.group({
            name: ['', [forms_1.Validators.required, forms_1.Validators.minLength(5)]],
            addresses: this._fb.array([
                this.initAddress(),
            ])
        });
    };
    // show link for create new address
    FormNestedComponent.prototype.initAddress = function () {
        return this._fb.group({
            street: ['', forms_1.Validators.required],
            postcode: ['']
        });
    };
    FormNestedComponent.prototype.addAddress = function () {
        var control = this.myForm.controls['addresses'];
        control.push(this.initAddress());
    };
    FormNestedComponent.prototype.removeAddress = function (i) {
        var control = this.myForm.controls['addresses'];
        control.removeAt(i);
    };
    // for future development
    FormNestedComponent.prototype.save = function (model) {
    };
    FormNestedComponent = __decorate([
        core_1.Component({
            selector: 'form-nested',
            templateUrl: 'app/forms/form-nested/form-nested.component.html',
            styleUrls: ['app/forms/form-nested/form-nested.component.css']
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder])
    ], FormNestedComponent);
    return FormNestedComponent;
}());
exports.FormNestedComponent = FormNestedComponent;
//# sourceMappingURL=form-nested.component.js.map