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
var FormControlsComponent = (function () {
    function FormControlsComponent() {
        // settings form
        this.genders = [
            { value: 'F', display: 'Female' },
            { value: 'M', display: 'Male' }
        ];
        this.roles = [
            { value: 'admin', display: 'Administrator' },
            { value: 'guest', display: 'Guest' },
            { value: 'custom', display: 'Custom' }
        ];
        this.themes = [
            { backgroundColor: 'black', fontColor: 'white', display: 'Dark' },
            { backgroundColor: 'white', fontColor: 'black', display: 'Light' },
            { backgroundColor: 'grey', fontColor: 'white', display: 'Sleek' }
        ];
        this.topics = [
            { value: 'game', display: 'Gaming' },
            { value: 'tech', display: 'Technology' },
            { value: 'life', display: 'Lifestyle' },
        ];
        this.toggles = [
            { value: 'toggled', display: 'Toggled' },
            { value: 'untoggled', display: 'UnToggled' },
        ];
    }
    // these settings will work when you initialize the component
    FormControlsComponent.prototype.ngOnInit = function () {
        this.user = {
            name: '',
            gender: this.genders[0].value,
            role: null,
            theme: this.themes[0],
            isActive: false,
            toggle: this.toggles[1].value,
            topics: [this.topics[1].value]
        };
    };
    FormControlsComponent.prototype.save = function (isValid, f) {
    };
    FormControlsComponent = __decorate([
        core_1.Component({
            selector: 'form-controls',
            templateUrl: 'app/forms/form-controls/form-controls.component.html',
            styleUrls: ['app/forms/form-controls/form-controls.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], FormControlsComponent);
    return FormControlsComponent;
}());
exports.FormControlsComponent = FormControlsComponent;
//# sourceMappingURL=form-controls.component.js.map