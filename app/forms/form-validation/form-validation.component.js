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
var FormValidationComponent = (function () {
    function FormValidationComponent(_fb) {
        this._fb = _fb;
        // standing data
        this.PAYMENT_METHOD_TYPE = {
            BANK: 'bank',
            CARD: 'card'
        };
    }
    FormValidationComponent.prototype.ngOnInit = function () {
        // initialize form with default value
        this.myForm = this._fb.group({
            name: ['Ilya Kaduk'],
            paymentMethod: this.initPaymentMethodFormGroup()
        });
        // subscribe to payment method type changes
        this.subscribePaymentTypeChanges();
        // set default type to BANK
        this.setPaymentMethodType(this.PAYMENT_METHOD_TYPE.BANK);
    };
    FormValidationComponent.prototype.initPaymentMethodFormGroup = function () {
        // payment method
        var group = this._fb.group({
            type: [''],
            card: this._fb.group(this.initPaymentMethodCardModel()),
            bank: this._fb.group(this.initPaymentMethodBankModel()),
        });
        return group;
    };
    FormValidationComponent.prototype.initPaymentMethodCardModel = function () {
        // regex for master and visa
        var cardNoRegex = "^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35d{3})d{11})$";
        // regex for expiry format MM/YY
        var expiryRegex = "^(0[1-9]|1[0-2])/?([0-9]{4}|[0-9]{2})$";
        var model = {
            cardNo: ['', [forms_1.Validators.required, forms_1.Validators.pattern(cardNoRegex)]],
            cardHolder: ['', forms_1.Validators.required],
            expiry: ['', [forms_1.Validators.required, forms_1.Validators.pattern(expiryRegex)]]
        };
        return model;
    };
    FormValidationComponent.prototype.initPaymentMethodBankModel = function () {
        var model = {
            accountNo: ['', forms_1.Validators.required],
            accountHolder: ['', forms_1.Validators.required],
            routingNo: ['', forms_1.Validators.required]
        };
        return model;
    };
    FormValidationComponent.prototype.setPaymentMethodType = function (type) {
        // update payment method type value
        var ctrl = this.myForm.controls.paymentMethod.controls.type;
        ctrl.setValue(type);
    };
    FormValidationComponent.prototype.subscribePaymentTypeChanges = function () {
        var _this = this;
        // controls
        var pmCtrl = this.myForm.controls.paymentMethod;
        var bankCtrl = pmCtrl.controls.bank;
        var cardCtrl = pmCtrl.controls.card;
        // initialize value changes stream
        var changes$ = pmCtrl.controls.type.valueChanges;
        // subscribe to the stream
        changes$.subscribe(function (paymentMethodType) {
            // BANK
            if (paymentMethodType === _this.PAYMENT_METHOD_TYPE.BANK) {
                // apply validators to each bank fields, retrieve validators from bank model
                Object.keys(bankCtrl.controls).forEach(function (key) {
                    bankCtrl.controls[key].setValidators(_this.initPaymentMethodBankModel()[key][1]);
                    bankCtrl.controls[key].updateValueAndValidity();
                });
                // remove all validators from card fields
                Object.keys(cardCtrl.controls).forEach(function (key) {
                    cardCtrl.controls[key].setValidators(null);
                    cardCtrl.controls[key].updateValueAndValidity();
                });
            }
            // CARD
            if (paymentMethodType === _this.PAYMENT_METHOD_TYPE.CARD) {
                // remove all validators from bank fields
                Object.keys(bankCtrl.controls).forEach(function (key) {
                    bankCtrl.controls[key].setValidators(null);
                    bankCtrl.controls[key].updateValueAndValidity();
                });
                // apply validators to each card fields, retrieve validators from card model
                Object.keys(cardCtrl.controls).forEach(function (key) {
                    cardCtrl.controls[key].setValidators(_this.initPaymentMethodCardModel()[key][1]);
                    cardCtrl.controls[key].updateValueAndValidity();
                });
            }
        });
    };
    FormValidationComponent = __decorate([
        core_1.Component({
            selector: 'form-validation',
            templateUrl: 'app/forms/form-validation/form-validation.component.html',
            styleUrls: ['app/forms/form-validation/form-validation.component.css'],
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder])
    ], FormValidationComponent);
    return FormValidationComponent;
}());
exports.FormValidationComponent = FormValidationComponent;
//# sourceMappingURL=form-validation.component.js.map