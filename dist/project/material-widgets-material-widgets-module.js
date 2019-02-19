(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["material-widgets-material-widgets-module"],{

/***/ "./src/app/material-widgets/autocomplete/autocomplete.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/material-widgets/autocomplete/autocomplete.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\"  class=\"components-container-gt-xs\"  [ngClass.xs]=\"'components-container-xs'\"  fxLayoutGap=\"20px\">\n\t<div fxFlex class=\"autocomplete-component-holder mat-elevation-z4\">\n\t\t<mat-toolbar class=\"autocomplete-header\">\n\t\t\t<h1 class=\"mat-headline center-align\" >Autocomplete</h1>\n\t\t</mat-toolbar>\n\t\t\n\t\t<div class=\"autocomplete-container\">\n\t\t\t\n\t\t\t<div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"20px\">\n\n\t\t\t\t<div fxFlex.xs=\"100\" fxFlex.lg=\"50\" fxFlex.md=\"50\" fxFlex.sm=\"50\" >\n\t\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\t<form class=\"example-form\">\n\t\t\t\t\t\t<mat-form-field class=\"width\">\n\t\t\t\t\t\t\t<input matInput placeholder=\"State\" aria-label=\"State\" [matAutocomplete]=\"auto\" [formControl]=\"stateCtrl\">\n\t\t\t\t\t\t\t<mat-autocomplete #auto=\"matAutocomplete\">\n\t\t\t\t\t\t\t\t<mat-option *ngFor=\"let state of filteredStates | async\" [value]=\"state.name\">\n\t\t\t\t\t\t\t\t<img style=\"vertical-align:middle;\" aria-hidden src=\"{{state.flag}}\" height=\"25\" />\n\t\t\t\t\t\t\t\t<span >{{ state.name }}</span> \n\t\t\t\t\t\t\t\t</mat-option>\n\t\t\t\t\t\t\t</mat-autocomplete>\n\t\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t\t<br />\n\t\t\t\t\t\t<mat-slide-toggle class=\"width\"\n\t\t\t\t\t\t\t[checked]=\"stateCtrl.disabled\"\n\t\t\t\t\t\t\t(change)=\"stateCtrl.disabled ? stateCtrl.enable() : stateCtrl.disable()\">\n\t\t\t\t\t\t\tDisable Input?\n\t\t\t\t\t\t</mat-slide-toggle>\n\t\t\t\t\t</form>\n\t\t\t\t\t\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div fxFlex class=\"autocomplete-component-holder mat-elevation-z4\">\n\t\t<mat-toolbar class=\"autocomplete-header\" >\n\t\t\t<h1 class=\"mat-headline center-align\" >Examples</h1>\n\t\t</mat-toolbar>\n\n\t\t<mat-tab-group fxFlexFill>\n\t\t\t<mat-tab label=\"TS\">\n\t\t\t\t<div class=\"component-preview\">\n\t            \t<pre style=\"white-space:pre-line;\"><code mwlHighlightJs [source]=\"autocompleteHelpers?.tsSourceAutocomplete\" language=\"typescript\"></code></pre>\n\t        \t</div>\n\t        </mat-tab>\n\t        <mat-tab label=\"HTML\">\n\t        \t<div class=\"component-preview\">\n\t            \t<pre style=\"white-space:pre-line;\"><code mwlHighlightJs [source]=\"autocompleteHelpers?.htmlSourceAutocomplete\" language=\"html\"></code></pre>\n\t            </div>\n\t        </mat-tab>\n\n\t        <mat-tab label=\"PREVIEW\">\n\t        \t<div class=\"component-preview\">\n\t        \t\t\n\t        \t\t<form class=\"example-form\">\n\t\t\t\t\t\t<mat-form-field class=\"example-full-width\">\n\t\t\t\t\t\t\t<input matInput placeholder=\"State\" aria-label=\"State\" [matAutocomplete]=\"auto\" [formControl]=\"stateCtrl\">\n\t\t\t\t\t\t\t<mat-autocomplete #auto=\"matAutocomplete\">\n\t\t\t\t\t\t\t\t<mat-option *ngFor=\"let state of filteredStates | async\" [value]=\"state.name\">\n\t\t\t\t\t\t\t\t<img style=\"vertical-align:middle;\" aria-hidden src=\"{{state.flag}}\" height=\"25\" />\n\t\t\t\t\t\t\t\t<span>{{ state.name }}</span> \n\t\t\t\t\t\t\t\t</mat-option>\n\t\t\t\t\t\t\t</mat-autocomplete>\n\t\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t\t<br/>\n\t\t\t\t\t\t<mat-slide-toggle\n\t\t\t\t\t\t\t[checked]=\"stateCtrl.disabled\"\n\t\t\t\t\t\t\t(change)=\"stateCtrl.disabled ? stateCtrl.enable() : stateCtrl.disable()\">\n\t\t\t\t\t\t\tDisable Input?\n\t\t\t\t\t\t</mat-slide-toggle>\n\t\t\t\t\t</form>\n\n\t\t\t\t</div>\n\t\t\t</mat-tab>\n\t\t</mat-tab-group>\t\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/material-widgets/autocomplete/autocomplete.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/material-widgets/autocomplete/autocomplete.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".width {\n  width: 100%;\n  padding-left: 15px; }\n\n.autocomplete-header {\n  background-color: #327ebd;\n  color: white;\n  padding: 0 5px; }\n\n.autocomplete-container {\n  padding: 5px; }\n\n.autocomplete-component-holder {\n  border: 1px solid #327ebd;\n  background-color: white; }\n\n.autocomplete-component-holder h4 {\n    color: #327ebd;\n    margin: 14px 0; }\n\n.autocomplete-component-holder mat-divider {\n    margin-bottom: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWF0ZXJpYWwtd2lkZ2V0cy9hdXRvY29tcGxldGUvQzpcXFVzZXJzXFxSb2dlckZlZGVyZXJcXERlc2t0b3BcXEltYnVlRGVza1xcTmV3IGZvbGRlciAoMilcXGNkay1hZG1pbi1tYXN0ZXIvc3JjXFxhcHBcXG1hdGVyaWFsLXdpZGdldHNcXGF1dG9jb21wbGV0ZVxcYXV0b2NvbXBsZXRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsV0FBVTtFQUNWLGtCQUFpQixFQUFBOztBQUVsQjtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osY0FBYyxFQUFBOztBQUVoQjtFQUNFLFlBQVksRUFBQTs7QUFHZDtFQUNDLHlCQUF5QjtFQUN6Qix1QkFBdUIsRUFBQTs7QUFGeEI7SUFLRSxjQUFjO0lBQ2QsY0FBYyxFQUFBOztBQU5oQjtJQVVFLG1CQUFtQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbWF0ZXJpYWwtd2lkZ2V0cy9hdXRvY29tcGxldGUvYXV0b2NvbXBsZXRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndpZHRoe1xuXHR3aWR0aDoxMDAlO1xuXHRwYWRkaW5nLWxlZnQ6MTVweDtcbn1cbi5hdXRvY29tcGxldGUtaGVhZGVyIHtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjMzI3ZWJkO1xuXHRcdGNvbG9yOiB3aGl0ZTtcblx0XHRwYWRkaW5nOiAwIDVweDtcblx0fVxuLmF1dG9jb21wbGV0ZS1jb250YWluZXIge1xuXHRcdHBhZGRpbmc6IDVweDtcblx0XHQvLyBjb2xvcjogd2hpdGU7XG5cdH1cbi5hdXRvY29tcGxldGUtY29tcG9uZW50LWhvbGRlciB7XG5cdGJvcmRlcjogMXB4IHNvbGlkICMzMjdlYmQ7XG5cdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuXG5cdGg0IHtcblx0XHRjb2xvcjogIzMyN2ViZDtcblx0XHRtYXJnaW46IDE0cHggMDtcblx0fVxuXG5cdG1hdC1kaXZpZGVyIHtcblx0XHRtYXJnaW4tYm90dG9tOiAxMHB4O1xuXHR9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/material-widgets/autocomplete/autocomplete.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/material-widgets/autocomplete/autocomplete.component.ts ***!
  \*************************************************************************/
/*! exports provided: AutocompleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutocompleteComponent", function() { return AutocompleteComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _helpers_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers.data */ "./src/app/material-widgets/autocomplete/helpers.data.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AutocompleteComponent = /** @class */ (function () {
    function AutocompleteComponent() {
        var _this = this;
        this.states = [
            {
                name: 'Arkansas',
                flag: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Arkansas.svg'
            },
            {
                name: 'California',
                flag: 'https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_California.svg'
            },
            {
                name: 'Florida',
                flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Florida.svg'
            },
            {
                name: 'Texas',
                flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Texas.svg'
            }
        ];
        this.autocompleteHelpers = _helpers_data__WEBPACK_IMPORTED_MODULE_3__["AUTOCOMPLETE_HELPERS"];
        this.stateCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.filteredStates = this.stateCtrl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (state) { return state ? _this.filterStates(state) : _this.states.slice(); }));
    }
    AutocompleteComponent.prototype.filterStates = function (name) {
        return this.states.filter(function (state) {
            return state.name.toLowerCase().indexOf(name.toLowerCase()) === 0;
        });
    };
    AutocompleteComponent.prototype.getRouterOutletState = function (outlet) {
        return outlet.isActivated ? outlet.activatedRoute : '';
    };
    AutocompleteComponent.prototype.ngOnInit = function () {
    };
    AutocompleteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'cdk-autocomplete',
            template: __webpack_require__(/*! ./autocomplete.component.html */ "./src/app/material-widgets/autocomplete/autocomplete.component.html"),
            styles: [__webpack_require__(/*! ./autocomplete.component.scss */ "./src/app/material-widgets/autocomplete/autocomplete.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AutocompleteComponent);
    return AutocompleteComponent;
}());



/***/ }),

/***/ "./src/app/material-widgets/autocomplete/helpers.data.ts":
/*!***************************************************************!*\
  !*** ./src/app/material-widgets/autocomplete/helpers.data.ts ***!
  \***************************************************************/
/*! exports provided: AUTOCOMPLETE_HELPERS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTOCOMPLETE_HELPERS", function() { return AUTOCOMPLETE_HELPERS; });
var AUTOCOMPLETE_HELPERS = {
    tsSourceAutocomplete: "\nimport { MatAutocompleteModule } from '@angular/material';\n  \n    @NgModule({\n      imports: [\n       MatAutocompleteModule\n    })\n    export class AppModule { }\n\nimport { Component, OnInit } from '@angular/core';\nimport { FormControl } from '@angular/forms';\nimport { Observable } from 'rxjs/Observable';\nimport 'rxjs/add/operator/startWith';\nimport 'rxjs/add/operator/map';\n@Component({\n  selector: 'cdk-autocomplete',\n  templateUrl: './autocomplete.component.html',\n  styleUrls: ['./autocomplete.component.scss']\n})\nexport class AutocompleteComponent implements OnInit {\n\n  constructor() { \n  this.stateCtrl = new FormControl();\n    this.filteredStates = this.stateCtrl.valueChanges\n        .startWith(null)\n        .map(state => state ? this.filterStates(state) : this.states.slice());\n    }\n    filterStates(name: string) {\n    return this.states.filter(state =>\n      state.name.toLowerCase().indexOf(name.toLowerCase()) === 0);\n}\n\n  ngOnInit() {\n  }\n\tstateCtrl: FormControl;\n  \tfilteredStates: Observable<any[]>;\n  \tstates: any[] = [\n    {\n      name: 'Arkansas',\n      flag: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Arkansas.svg'\n    },\n    {\n      name: 'California',\n      flag: 'https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_California.svg'\n    },\n    {\n      name: 'Florida',\n      flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Florida.svg'\n    },\n    {\n      name: 'Texas',\n      flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Texas.svg'\n    }\n  ];\n\n}\n".trim(),
    htmlSourceAutocomplete: "\n<form class=\"example-form\">\n\t<mat-form-field class=\"example-full-width\">\n\t\t<input matInput placeholder=\"State\" aria-label=\"State\" [matAutocomplete]=\"auto\" [formControl]=\"stateCtrl\">\n\t\t<mat-autocomplete #auto=\"matAutocomplete\">\n\t\t\t<mat-option *ngFor=\"let state of filteredStates | async\" [value]=\"state.name\">\n\t\t\t<img style=\"vertical-align:middle;\" aria-hidden src=\"{{state.flag}}\" height=\"25\" />\n\t\t\t<span>{{ state.name }}</span> \n\t\t\t</mat-option>\n\t\t</mat-autocomplete>\n\t</mat-form-field>\n\t<br />\n\t<mat-slide-toggle\n\t\t[checked]=\"stateCtrl.disabled\"\n\t\t(change)=\"stateCtrl.disabled ? stateCtrl.enable() : stateCtrl.disable()\">\n\t\tDisable Input?\n\t</mat-slide-toggle>\n</form>\n".trim(),
};


/***/ }),

/***/ "./src/app/material-widgets/buttons/buttons.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/material-widgets/buttons/buttons.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\"  class=\"components-container-gt-xs\"  [ngClass.xs]=\"'components-container-xs'\"  fxLayoutGap=\"20px\">\n\n\t<div fxFlex class=\"button-component-holder mat-elevation-z4\">\n\n\t\t<mat-toolbar class=\"button-header\">\n\t\t\t<h1 class=\"mat-headline center-align\">Buttons</h1>\n\t\t</mat-toolbar>\n\t\n\t\t<div class=\"button-container\">\n\t\t\t\n\t\t\t<div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"20px\">\n\n\t\t\t\t<div fxFlex.xs=\"100\" fxFlex.lg=\"50\" fxFlex.md=\"50\" fxFlex.sm=\"50\" >\n\n\t\t\t\t\t<h4 class=\"mat-subheading-1 center-align\">Raised Buttons</h4>\n\n\t\t\t\t\t<mat-divider></mat-divider>\n\t\t\t\n\t\t\t\t\t<button mat-raised-button>Basic</button>\n\t\t\t\t    <button mat-raised-button color=\"primary\">Primary</button>\n\t\t\t\t    <button mat-raised-button color=\"accent\">Accent</button>\n\t\t\t\t    <button mat-raised-button color=\"warn\">Warn</button>\n\t\t\t\t    <button mat-raised-button disabled>Disabled</button>\n\t\t\t\t    <a mat-raised-button routerLink=\".\">Link</a>\t\t\t           \n\n\t\t\t\t</div>\n\t\t\t\t<div fxFlex.xs=\"100\" fxFlex.lg=\"50\" fxFlex.md=\"50\" fxFlex.sm=\"50\" >\n\t\t\t\t\t<h4 class=\"mat-subheading-1 center-align\">Primary Buttons</h4>\n\t\t\t\t\t<mat-divider></mat-divider>\n\n\t\t\t\t\t<button mat-button >Basic</button>\n\t                <button mat-button color=\"primary\">Primary</button>\n\t                <button mat-button color=\"accent\">Accent</button>\n\t                <button mat-button color=\"warn\">Warn</button>\n\t                <button mat-button disabled>Disabled</button>\n\t                <a mat-button routerLink=\".\">Link</a>\t\t           \n\t\t\t\t\t\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"20px\">\n\n\t\t\t\t<div fxFlex.xs=\"100\" fxFlex.lg=\"50\" fxFlex.md=\"50\" fxFlex.sm=\"50\" >\n\n\t\t\t\t\t<h4 class=\"mat-subheading-1 center-align\">Fab Buttons</h4>\n\t\t\t\t\t<mat-divider></mat-divider>\n\t\t\t\n\t\t\t\t\t<button mat-fab>Basic</button>\n\t                <button mat-fab color=\"primary\">Primary</button>\n\t                <button mat-fab color=\"accent\">Accent</button>\n\t                <button mat-fab color=\"warn\">Warn</button>\n\t                <button mat-fab disabled>Disabled</button>\n\t                <button mat-fab>\n\t                <mat-icon aria-label=\"Example icon-button with a heart icon\">favorite</mat-icon>\n\t                </button>\n\t                <a mat-fab routerLink=\".\">Link</a>\t\n\t\t\t\t\t\t\t           \n\n\t\t\t\t</div>\n\t\t\t\t<div fxFlex.xs=\"100\" fxFlex.lg=\"50\" fxFlex.md=\"50\" fxFlex.sm=\"50\" >\n\t\t\t\t\t<h4 class=\"mat-subheading-1 center-align\">Icon Buttons</h4>\n\t\t\t\t\t<mat-divider></mat-divider>\n\t\t\t\n\t\t\t\t\t<button mat-icon-button >\n\t                <mat-icon aria-label=\"Example icon-button with a heart icon\">favorite</mat-icon>\n\t                </button>\n\t                <button mat-icon-button color=\"primary\">\n\t                <mat-icon aria-label=\"Example icon-button with a heart icon\">favorite</mat-icon>\n\t                </button>\n\t                <button mat-icon-button color=\"accent\">\n\t                <mat-icon aria-label=\"Example icon-button with a heart icon\">favorite</mat-icon>\n\t                </button>\n\t                <button mat-icon-button color=\"warn\">\n\t                <mat-icon aria-label=\"Example icon-button with a heart icon\">favorite</mat-icon>\n\t                </button>\n\t                <button mat-icon-button disabled>\n\t                <mat-icon aria-label=\"Example icon-button with a heart icon\">favorite</mat-icon>\n\t                </button>\t\t\t           \n\t\t\t\t\t\n\t\t\t\t</div>\n\t\t\t</div>\n\n\n\t\t\t<div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"20px\">\n\n\t\t\t\t<div fxFlex.xs=\"100\" fxFlex.lg=\"50\" fxFlex.md=\"50\" fxFlex.sm=\"50\" >\n\n\t\t\t\t\t<h4 class=\"mat-subheading-1 center-align\">MiniFab Buttons</h4>\n\t\t\t\t\t<mat-divider></mat-divider>\n\t\t\t\n\t\t\t\t\t<button mat-mini-fab >Basic</button>\n\t                <button mat-mini-fab color=\"primary\">Primary</button>\n\t                <button mat-mini-fab color=\"accent\">Accent</button>\n\t                <button mat-mini-fab color=\"warn\">Warn</button>\n\t                <button mat-mini-fab disabled>Disabled</button>\n\t                <button mat-mini-fab>\n\t                <mat-icon aria-label=\"Example icon-button with a heart icon\">favorite</mat-icon>\n\t                </button>\n\t                <a mat-mini-fab routerLink=\".\">Link</a>\t\t           \n\n\t\t\t\t</div>\n\t\t\t\t<div fxFlex.xs=\"100\" fxFlex.lg=\"50\" fxFlex.md=\"50\" fxFlex.sm=\"50\" >\n\t\t\t\t\t\t\t           \n\t\t\t\t\t\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t\t\t\t\n\n\t\t</div>\n\n\t</div>\n\n\t<div fxFlex class=\"button-component-holder mat-elevation-z4\">\n\n\t\t<mat-toolbar class=\"button-header\" >\n\t\t\t<h1 class=\"mat-headline\" >Examples</h1>\n\t\t</mat-toolbar>\n\n\t\t<mat-tab-group fxFlexFill>\n\t\t\t\n\t\t\t<mat-tab label=\"TS\">\n\t\t\t\t<div class=\"component-preview\">\n\t            \t<pre style=\"white-space:pre-line;\"><code mwlHighlightJs [source]=\"buttonHelpers?.tsSourceRaisedButton\" language=\"typescript\"></code></pre>\n\t            </div>\n\t        </mat-tab>\n\t        <mat-tab label=\"HTML\">\n\t        \t<div class=\"component-preview\">\n\t            \t<pre style=\"white-space:pre-line;\"><code mwlHighlightJs [source]=\"buttonHelpers?.htmlSourceRaisedButton\" language=\"html\"></code></pre>\n\t            </div>\n\t        </mat-tab>\n\n\t        <mat-tab label=\"PREVIEW\">\n\t        \t<div class=\"component-preview\">\n\t\t        \t<button mat-raised-button>Basic</button>\n\t\t\t\t\t<button mat-button color=\"primary\">Primary</button>\n\t\t\t\t\t<button mat-icon-button color=\"accent\">\n\t\t            <mat-icon aria-label=\"Example icon-button with a heart icon\">favorite</mat-icon>\n\t\t                </button>\n\t\t\t\t  \t<button mat-raised-button disabled>Disabled</button>\n\t\t            <button mat-mini-fab>\n\t\t            <mat-icon aria-label=\"Example icon-button with a heart icon\">favorite</mat-icon>\n\t\t                </button>\n\t\t\t\t  \t<a mat-button routerLink=\".\">Link</a>\n\t\t\t  \t</div>\n\t        </mat-tab>\n\t    </mat-tab-group>\n\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/material-widgets/buttons/buttons.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/material-widgets/buttons/buttons.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".button-header {\n  background-color: #327ebd;\n  color: white;\n  padding: 0 5px; }\n\n.button-container {\n  padding: 5px 15px 15px 15px; }\n\n.button-component-holder {\n  border: 1px solid #327ebd;\n  background-color: white; }\n\n.button-component-holder h4 {\n    color: #327ebd;\n    margin: 14px 0; }\n\n.button-component-holder mat-divider {\n    margin-bottom: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWF0ZXJpYWwtd2lkZ2V0cy9idXR0b25zL0M6XFxVc2Vyc1xcUm9nZXJGZWRlcmVyXFxEZXNrdG9wXFxJbWJ1ZURlc2tcXE5ldyBmb2xkZXIgKDIpXFxjZGstYWRtaW4tbWFzdGVyL3NyY1xcYXBwXFxtYXRlcmlhbC13aWRnZXRzXFxidXR0b25zXFxidXR0b25zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixjQUFjLEVBQUE7O0FBRWY7RUFDQywyQkFBMkIsRUFBQTs7QUFFNUI7RUFDQyx5QkFBeUI7RUFDekIsdUJBQXVCLEVBQUE7O0FBRnhCO0lBS0UsY0FBYztJQUNkLGNBQWMsRUFBQTs7QUFOaEI7SUFVRSxtQkFBbUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21hdGVyaWFsLXdpZGdldHMvYnV0dG9ucy9idXR0b25zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ1dHRvbi1oZWFkZXIge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMzI3ZWJkO1xuXHRjb2xvcjogd2hpdGU7XG5cdHBhZGRpbmc6IDAgNXB4O1xufVxuLmJ1dHRvbi1jb250YWluZXIge1xuXHRwYWRkaW5nOiA1cHggMTVweCAxNXB4IDE1cHg7XG59XG4uYnV0dG9uLWNvbXBvbmVudC1ob2xkZXIge1xuXHRib3JkZXI6IDFweCBzb2xpZCAjMzI3ZWJkO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcblxuXHRoNCB7XG5cdFx0Y29sb3I6ICMzMjdlYmQ7XG5cdFx0bWFyZ2luOiAxNHB4IDA7XG5cdH1cblxuXHRtYXQtZGl2aWRlciB7XG5cdFx0bWFyZ2luLWJvdHRvbTogMTBweDtcblx0fVxufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/material-widgets/buttons/buttons.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/material-widgets/buttons/buttons.component.ts ***!
  \***************************************************************/
/*! exports provided: ButtonsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonsComponent", function() { return ButtonsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _helpers_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers.data */ "./src/app/material-widgets/buttons/helpers.data.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { fadeAnimation } from '../animation';
var ButtonsComponent = /** @class */ (function () {
    function ButtonsComponent() {
        this.buttonHelpers = _helpers_data__WEBPACK_IMPORTED_MODULE_1__["BUTTON_HELPERS"];
    }
    ButtonsComponent.prototype.ngOnInit = function () {
    };
    ButtonsComponent.prototype.getRouterOutletState = function (outlet) {
        return outlet.isActivated ? outlet.activatedRoute : '';
    };
    ButtonsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'cdk-buttons',
            template: __webpack_require__(/*! ./buttons.component.html */ "./src/app/material-widgets/buttons/buttons.component.html"),
            styles: [__webpack_require__(/*! ./buttons.component.scss */ "./src/app/material-widgets/buttons/buttons.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ButtonsComponent);
    return ButtonsComponent;
}());



/***/ }),

/***/ "./src/app/material-widgets/buttons/helpers.data.ts":
/*!**********************************************************!*\
  !*** ./src/app/material-widgets/buttons/helpers.data.ts ***!
  \**********************************************************/
/*! exports provided: BUTTON_HELPERS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BUTTON_HELPERS", function() { return BUTTON_HELPERS; });
var BUTTON_HELPERS = {
    tsSourceRaisedButton: "\n \t\timport { MatButtonModule } from '@angular/material/button';\n\n\t  \t@NgModule({\n\t\t  imports: [\n\t\t    MatButtonModule,\n\t\t})\n\t\texport class AppModule { }\n\n\t\timport { Component, OnInit } from '@angular/core';\n\n        @Component({\n          selector: 'cdk-buttons',\n          templateUrl: './buttons.component.html',\n          styleUrls: ['./buttons.component.scss']\n        })\n        export class ButtonsComponent implements OnInit {\n        }\n\n\t\t".trim(),
    htmlSourceRaisedButton: "\n  \t\t\n\t\t  <button mat-raised-button>Basic</button>\n\t\t  <button mat-button color=\"primary\">Primary</button>\n\t\t  <button mat-icon-button color=\"accent\">\n                <mat-icon aria-label=\"Example icon-button with a heart icon\">favorite</mat-icon>\n                </button>\n\t\t  <button mat-raised-button disabled>Disabled</button>\n                <button mat-mini-fab>\n                <mat-icon aria-label=\"Example icon-button with a heart icon\">favorite</mat-icon>\n                </button>\n\t\t  <a mat-button routerLink=\".\">Link</a>\n\t\t".trim(),
};


/***/ }),

/***/ "./src/app/material-widgets/cards/cards.component.html":
/*!*************************************************************!*\
  !*** ./src/app/material-widgets/cards/cards.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\"  class=\"components-container-gt-xs\"  [ngClass.xs]=\"'components-container-xs'\"  fxLayoutGap=\"20px\">\n\n\t<div fxLayout=\"row\" fxLayout.sm=\"column\" fxLayout.lt-sm=\"column\" fxLayoutAlign=\"start space-between\"  fxLayoutGap=\"10px\">\n\n\t\t<div fxFlex.sm=\"100\" class=\"cdk-card-holder\"  fxFlex.lg=\"50\" fxFlex.md=\"50\" fxFlex.sm=\"100\" >\n\n\t\t\t<mat-toolbar class=\"cards-header\">\n\t\t\t\t<h1 class=\"mat-headline center-align\" >Basic Card</h1>\n\t\t\t</mat-toolbar>\n\n\t\t\t<div class=\"cards-container\">\n\t            \n\t\t            <div  fxLayoutAlign=\"space-around stretch\" fxLayoutWrap >\n\t\t                <mat-card>\n\t\t                    <mat-card-header>\n\t\t                        <div mat-card-avatar class=\"example-header-image\">\n\t\t                        </div>\n\t\t                        <mat-card-title>Shiba Inu</mat-card-title>\n\t\t                        <mat-card-subtitle>Dog Breed</mat-card-subtitle>\n\t\t                    </mat-card-header>\n\t\t                    <img mat-card-image src=\"/assets/220px-Taka_Shiba.jpg\" alt=\"Photo of a Shiba Inu\">\n\n\t\t                    <mat-card-content>\n\t\t                        <p class=\"mat-body-1\">\n\t\t                            The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.\n\t\t                            A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally\n\t\t                            bred for hunting.\n\t\t                        </p>\n\t\t                    </mat-card-content>\n\t\t                    <mat-card-actions>\n\t\t                        <button mat-button class=\"mat-subheading-1 center-align\" >LIKE</button>\n\t\t                        <button mat-button class=\"mat-subheading-1 center-align\">SHARE</button>\n\t\t                    </mat-card-actions>\n\t\t                </mat-card>\n\t\t            </div>\n\t        \t</div>\n\t     </div>\n\n\t    <div fxFlex.xs=\"100\"  class=\"cdk-card-holder\"  fxFlex.lg=\"50\" fxFlex.md=\"50\" fxFlex.sm=\"100\" >\n\t\t\t\t\t\n\t\t\t\t\t<mat-toolbar class=\"cards-header\">\n\t\t\t\t\t\t<h1 class=\"mat-headline center-align\" >Example</h1>\n\t\t\t\t\t</mat-toolbar>\n\t            \n\t\t            <div  fxLayoutAlign=\"space-around stretch\" fxLayoutWrap >\n\n\t\t                <mat-tab-group fxFlexFill>\n\t\t\t\n\t\t\t\t\t\t\t<mat-tab label=\"TS\">\n\t\t\t\t\t\t\t\t<div class=\"component-preview\">\n\t\t\t\t\t            \t<pre style=\"white-space:pre-line;\"><code mwlHighlightJs [source]=\"cardsHelpers?.tsSourceCards\" language=\"typescript\"></code></pre>\n\t\t\t\t\t            </div>\n\t\t\t\t\t        </mat-tab>\n\t\t\t\t\t        <mat-tab label=\"HTML\">\n\t\t\t\t\t        \t<div class=\"component-preview\">\n\t\t\t\t\t            \t<pre style=\"white-space:pre-line;\"><code mwlHighlightJs [source]=\"cardsHelpers?.htmlSourceCards\" language=\"html\"></code></pre>\n\t\t\t\t\t            </div>\n\t\t\t\t\t        </mat-tab>\n\n\t\t\t\t\t    </mat-tab-group>\n\n\t\t            </div>\n\t        \t</div>\n\n\t        </div>\n</div>\n"

/***/ }),

/***/ "./src/app/material-widgets/cards/cards.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/material-widgets/cards/cards.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cards-header {\n  background-color: #327ebd;\n  color: white;\n  padding: 0 5px; }\n\n.cards-container {\n  padding: 5px; }\n\n.example-header-image {\n  background-image: url('shibainu.jpg');\n  background-size: cover; }\n\n.cdk-card-holder {\n  border: 1px solid #327ebd;\n  background-color: white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWF0ZXJpYWwtd2lkZ2V0cy9jYXJkcy9DOlxcVXNlcnNcXFJvZ2VyRmVkZXJlclxcRGVza3RvcFxcSW1idWVEZXNrXFxOZXcgZm9sZGVyICgyKVxcY2RrLWFkbWluLW1hc3Rlci9zcmNcXGFwcFxcbWF0ZXJpYWwtd2lkZ2V0c1xcY2FyZHNcXGNhcmRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNDO0VBQ0MseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixjQUFjLEVBQUE7O0FBRWY7RUFDQyxZQUFZLEVBQUE7O0FBR2I7RUFDQyxxQ0FBcUQ7RUFDckQsc0JBQXNCLEVBQUE7O0FBSXhCO0VBQ0MseUJBQXlCO0VBQ3pCLHVCQUF1QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbWF0ZXJpYWwtd2lkZ2V0cy9jYXJkcy9jYXJkcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGNkay1jYXJkcyB7XG5cdC5jYXJkcy1oZWFkZXIge1xuXHRcdGJhY2tncm91bmQtY29sb3I6ICMzMjdlYmQ7XG5cdFx0Y29sb3I6IHdoaXRlO1xuXHRcdHBhZGRpbmc6IDAgNXB4O1xuXHR9XG5cdC5jYXJkcy1jb250YWluZXIge1xuXHRcdHBhZGRpbmc6IDVweDtcblx0XHQvLyBjb2xvcjogd2hpdGU7XG5cdH1cblx0LmV4YW1wbGUtaGVhZGVyLWltYWdlIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvc2hpYmFpbnUuanBnJyk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG4vLyB9XG5cbi5jZGstY2FyZC1ob2xkZXIge1xuXHRib3JkZXI6IDFweCBzb2xpZCAjMzI3ZWJkO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/material-widgets/cards/cards.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/material-widgets/cards/cards.component.ts ***!
  \***********************************************************/
/*! exports provided: CardsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardsComponent", function() { return CardsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _helpers_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers.data */ "./src/app/material-widgets/cards/helpers.data.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CardsComponent = /** @class */ (function () {
    function CardsComponent() {
        this.cardsHelpers = _helpers_data__WEBPACK_IMPORTED_MODULE_1__["CARDS_HELPERS"];
    }
    CardsComponent.prototype.ngOnInit = function () {
    };
    CardsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'cdk-cards',
            template: __webpack_require__(/*! ./cards.component.html */ "./src/app/material-widgets/cards/cards.component.html"),
            styles: [__webpack_require__(/*! ./cards.component.scss */ "./src/app/material-widgets/cards/cards.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CardsComponent);
    return CardsComponent;
}());



/***/ }),

/***/ "./src/app/material-widgets/cards/helpers.data.ts":
/*!********************************************************!*\
  !*** ./src/app/material-widgets/cards/helpers.data.ts ***!
  \********************************************************/
/*! exports provided: CARDS_HELPERS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CARDS_HELPERS", function() { return CARDS_HELPERS; });
var CARDS_HELPERS = {
    tsSourceCards: "\n\n        import { MatCardModule } from '@angular/material/button';\n\n          @NgModule({\n          imports: [\n            MatCardModule,\n        })\n        export class AppModule { }\n\n        import { Component, OnInit } from '@angular/core';\n\n        @Component({\n          selector: 'cdk-cards',\n          templateUrl: './cards.component.html',\n          styleUrls: ['./cards.component.scss']\n        })\n        export class CardsComponent implements OnInit {\n        }\n".trim(),
    htmlSourceCards: "\n<div  fxLayoutAlign=\"space-around stretch\" fxLayoutWrap >\n    <mat-card>\n        <mat-card-header>\n            <div mat-card-avatar class=\"example-header-image\">\n            </div>\n            <mat-card-title>Shiba Inu</mat-card-title>\n            <mat-card-subtitle>Dog Breed</mat-card-subtitle>\n        </mat-card-header>\n        <img mat-card-image src=\"/assets/220px-Taka_Shiba.jpg\" alt=\"Photo of a Shiba Inu\">\n\n        <mat-card-content>\n            <p>\n                The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.\n                A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally\n                bred for hunting.\n            </p>\n        </mat-card-content>\n        <mat-card-actions>\n            <button mat-button>LIKE</button>\n            <button mat-button>SHARE</button>\n        </mat-card-actions>\n    </mat-card>\n</div>\n".trim(),
};


/***/ }),

/***/ "./src/app/material-widgets/checkbox/checkbox.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/material-widgets/checkbox/checkbox.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout.lt-sm=\"column\" fxLayout=\"row\" class=\"mat-elevation-z1 \" class=\"components-container-gt-xs\"  [ngClass.xs]=\"'components-container-xs'\"  fxLayoutGap=\"20px\">\n\t<div fxFlex class=\"checkbox-component-holder mat-elevation-z4\">\n\t\n\t\t<mat-toolbar class=\"checkbox-header\">\n\t\t\t<h1 class=\"mat-headline center-align\" >Checkbox</h1>\n\t\t</mat-toolbar>\n\t\t\n\t\t<div class=\"checkbox-container\">\n\t\t\t\n\t\t\t<div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"20px\">\n\n\t\t\t\t<div fxFlex.xs=\"100\" fxFlex.lg=\"50\" fxFlex.md=\"50\" fxFlex.sm=\"50\" >\n\t\t\t\t\t<h4  class=\"mat-subheading-2 center-align\">Checkbox Configuration</h4>\n\t\t\t\t\t<mat-divider></mat-divider>\n\t\t\t\t\t<mat-list>\n\t\t\t\t\t\t<mat-list-item>\n\t\t\t\t\t\t\t<section>\n\t\t\t\t\t\t\t\t<mat-checkbox [(ngModel)]=\"checked\">Checked</mat-checkbox>\n\t\t\t\t\t\t\t</section>\n\n\t\t\t\t\t\t\t<section>\n\t\t\t\t\t\t\t\t<mat-checkbox [(ngModel)]=\"indeterminate\">Indeterminate</mat-checkbox>\n\t\t\t\t\t\t\t</section>\n\t\t\t\t\t\t</mat-list-item>\n\t\t\t\t\t\t\n\t\t\t\t\t\t<mat-list-item>\n\t\t\t\t\t\t\t<section  fxLayout=\"row\">\n\t\t\t\t\t\t\t\t<label>Align:</label>\n\t\t\t\t\t\t\t\t<mat-radio-group [(ngModel)]=\"align\" fxLayoutGap=10px>\n\t\t\t\t\t\t\t\t\t<mat-radio-button value=\"start\">Start</mat-radio-button>\n\t\t\t\t\t\t\t\t\t<mat-radio-button value=\"end\">End</mat-radio-button>\n\t\t\t\t\t\t\t\t</mat-radio-group>\n\t\t\t\t\t\t\t</section>\n\t\t\t\t\t\t</mat-list-item>\n\t\t\t\t\t\t<mat-list-item>\n\t\t\t\t\t\t\t<section>\n\t\t\t\t\t\t\t\t<mat-checkbox [(ngModel)]=\"disabled\">Disabled</mat-checkbox>\n\t\t\t\t\t\t\t</section>\n\t\t\t\t\t\t</mat-list-item>\n\t\t\t\t\t</mat-list>\n\n\t\t\t\t\t<section>\n\t                    <label class=\"mat-title\">Result:</label>\n\t                    \n\t\t\t\t\t\t<mat-checkbox\n\t\t\t\t\t\t\t[(ngModel)]=\"checked\"\n\t\t\t\t\t\t\t[(indeterminate)]=\"indeterminate\"\n\t\t\t\t\t\t\t[disabled]=\"disabled\">\n\t\t\t\t\t\t\tI'm a checkbox\n\t\t\t\t\t\t</mat-checkbox>\n\t\t\t\t\t</section>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div fxFlex class=\"checkbox-component-holder mat-elevation-z4\">\n\t\t<mat-toolbar class=\"checkbox-header\" >\n\t\t\t<h1 class=\"mat-headline center-align\" >Examples</h1>\n\t\t</mat-toolbar>\n\n\t\t<mat-tab-group fxFlexFill>\n\t\t\t<mat-tab label=\"TS\">\n\t\t\t\t<div class=\"component-preview\">\n\t            \t<pre style=\"white-space:pre-line;\"><code mwlHighlightJs [source]=\"checkboxHelpers?.tsSourceCheckbox\" language=\"typescript\"></code></pre>\n\t            </div>\n\t        </mat-tab>\n\t        <mat-tab label=\"HTML\">\n\t        \t<div class=\"component-preview\">\n\t            \t<pre style=\"white-space:pre-line;\"><code mwlHighlightJs [source]=\"checkboxHelpers?.htmlSourceCheckbox\" language=\"html\"></code></pre>\n\t        \t</div>\n\t        </mat-tab>\n\n\t        <mat-tab label=\"PREVIEW\">\n\t        \t<div class=\"component-preview\">\n\t        \t\t\n\t        \t\t<mat-list>\n\t\t\t\t\t\t<mat-list-item>\n\t\t\t\t\t\t\t<section class=\"example-section\">\n\t\t\t\t\t\t\t\t<mat-checkbox class=\"example-margin\" [(ngModel)]=\"checked\">Checked</mat-checkbox>\n\t\t\t\t\t\t\t\t<mat-checkbox class=\"example-margin\" [(ngModel)]=\"indeterminate\">Indeterminate</mat-checkbox>\n\t\t\t\t\t\t\t</section>\n\t\t\t\t\t\t</mat-list-item>\n\t\t\t\t\t\t<mat-list-item>\n\t\t\t\t\t\t\t<section class=\"example-section\">\n\t\t\t\t\t\t\t\t<label class=\"example-margin\">Align:</label>\n\t\t\t\t\t\t\t\t<mat-radio-group [(ngModel)]=\"align\">\n\t\t\t\t\t\t\t\t\t<mat-radio-button class=\"example-margin\" value=\"start\">Start</mat-radio-button>\n\t\t\t\t\t\t\t\t\t<mat-radio-button class=\"example-margin\" value=\"end\">End</mat-radio-button>\n\t\t\t\t\t\t\t\t</mat-radio-group>\n\t\t\t\t\t\t\t</section>\n\t\t\t\t\t\t</mat-list-item>\n\t\t\t\t\t\t<mat-list-item>\n\t\t\t\t\t\t\t<section class=\"example-section\">\n\t\t\t\t\t\t\t\t<mat-checkbox class=\"example-margin\" [(ngModel)]=\"disabled\">Disabled</mat-checkbox>\n\t\t\t\t\t\t\t</section>\n\t\t\t\t\t\t</mat-list-item>\n\t\t\t\t\t</mat-list>\n\t\t\t\t\t\n\t\t\t\t\t<section class=\"example-section\">\n\t                    <label class=\"mat-title\">Result:</label>\n\t                    \n\t\t\t\t\t\t<mat-checkbox\n\t\t\t\t\t\t\tclass=\"example-margin\"\n\t\t\t\t\t\t\t[(ngModel)]=\"checked\"\n\t\t\t\t\t\t\t[(indeterminate)]=\"indeterminate\"\n\t\t\t\t\t\t\t[disabled]=\"disabled\">\n\t\t\t\t\t\t\tI'm a checkbox\n\t\t\t\t\t\t</mat-checkbox>\n\t\t\t\t\t</section>\n\t\t\t\t\t\n\t\t\t\t</div>\n\t\t\t</mat-tab>\n\t\t</mat-tab-group>\t\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/material-widgets/checkbox/checkbox.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/material-widgets/checkbox/checkbox.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".checkbox-header {\n  background-color: #327ebd;\n  color: white;\n  padding: 0 5px; }\n\n.checkbox-component-holder {\n  border: 1px solid #327ebd;\n  background-color: white; }\n\n.checkbox-component-holder h4 {\n    color: #327ebd;\n    margin: 14px 0; }\n\n.checkbox-component-holder mat-divider {\n    margin-bottom: 10px; }\n\n.checkbox-container {\n  padding: 5px 15px 15px 15px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWF0ZXJpYWwtd2lkZ2V0cy9jaGVja2JveC9DOlxcVXNlcnNcXFJvZ2VyRmVkZXJlclxcRGVza3RvcFxcSW1idWVEZXNrXFxOZXcgZm9sZGVyICgyKVxcY2RrLWFkbWluLW1hc3Rlci9zcmNcXGFwcFxcbWF0ZXJpYWwtd2lkZ2V0c1xcY2hlY2tib3hcXGNoZWNrYm94LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNDO0VBQ0MseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixjQUFjLEVBQUE7O0FBSWhCO0VBQ0MseUJBQXlCO0VBQ3pCLHVCQUF1QixFQUFBOztBQUZ4QjtJQUtFLGNBQWM7SUFDZCxjQUFjLEVBQUE7O0FBTmhCO0lBVUUsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0MsMkJBQTJCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tYXRlcmlhbC13aWRnZXRzL2NoZWNrYm94L2NoZWNrYm94LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gY2RrLWNoZWNrYm94IHtcblx0LmNoZWNrYm94LWhlYWRlciB7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogIzMyN2ViZDtcblx0XHRjb2xvcjogd2hpdGU7XG5cdFx0cGFkZGluZzogMCA1cHg7XG5cdH1cblx0XG4vLyB9XG4uY2hlY2tib3gtY29tcG9uZW50LWhvbGRlciB7XG5cdGJvcmRlcjogMXB4IHNvbGlkICMzMjdlYmQ7XG5cdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuXG5cdGg0IHtcblx0XHRjb2xvcjogIzMyN2ViZDtcblx0XHRtYXJnaW46IDE0cHggMDtcblx0fVxuXG5cdG1hdC1kaXZpZGVyIHtcblx0XHRtYXJnaW4tYm90dG9tOiAxMHB4O1xuXHR9XG59XG4uY2hlY2tib3gtY29udGFpbmVyIHtcblx0cGFkZGluZzogNXB4IDE1cHggMTVweCAxNXB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/material-widgets/checkbox/checkbox.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/material-widgets/checkbox/checkbox.component.ts ***!
  \*****************************************************************/
/*! exports provided: CheckboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxComponent", function() { return CheckboxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _helpers_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers.data */ "./src/app/material-widgets/checkbox/helpers.data.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CheckboxComponent = /** @class */ (function () {
    function CheckboxComponent() {
        this.checked = false;
        this.indeterminate = false;
        this.align = 'start';
        this.disabled = false;
        this.checkboxHelpers = _helpers_data__WEBPACK_IMPORTED_MODULE_1__["CHECKBOX_HELPERS"];
    }
    CheckboxComponent.prototype.ngOnInit = function () {
    };
    CheckboxComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'cdk-checkbox',
            template: __webpack_require__(/*! ./checkbox.component.html */ "./src/app/material-widgets/checkbox/checkbox.component.html"),
            styles: [__webpack_require__(/*! ./checkbox.component.scss */ "./src/app/material-widgets/checkbox/checkbox.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CheckboxComponent);
    return CheckboxComponent;
}());



/***/ }),

/***/ "./src/app/material-widgets/checkbox/helpers.data.ts":
/*!***********************************************************!*\
  !*** ./src/app/material-widgets/checkbox/helpers.data.ts ***!
  \***********************************************************/
/*! exports provided: CHECKBOX_HELPERS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHECKBOX_HELPERS", function() { return CHECKBOX_HELPERS; });
var CHECKBOX_HELPERS = {
    tsSourceCheckbox: "\nimport { MatCheckboxModule } from '@angular/material'\n\t\n\t\t@NgModule({\n\t\t  imports: [\n\t\t   MatCheckboxModule \n\t\t})\n\t\texport class AppModule { }\n\nimport { Component, OnInit } from '@angular/core';\n\n@Component({\n  selector: 'cdk-checkbox',\n  templateUrl: './checkbox.component.html',\n  styleUrls: ['./checkbox.component.scss']\n})\nexport class CheckboxComponent implements OnInit {\n\n  constructor() { }\n\n  ngOnInit() {\n  }\n\n  \tchecked = false;\n\tindeterminate = false;\n\talign = 'start';\n\tdisabled = false;\n}\n".trim(),
    htmlSourceCheckbox: "\n<section class=\"example-section\">\n\t<mat-checkbox class=\"example-margin\" [(ngModel)]=\"checked\">Checked</mat-checkbox>\n\t<mat-checkbox class=\"example-margin\" [(ngModel)]=\"indeterminate\">Indeterminate</mat-checkbox>\n</section>\n\n<section class=\"example-section\">\n\t<label class=\"example-margin\">Align:</label>\n\t<mat-radio-group [(ngModel)]=\"align\">\n\t\t<mat-radio-button class=\"example-margin\" value=\"start\">Start</mat-radio-button>\n\t\t<mat-radio-button class=\"example-margin\" value=\"end\">End</mat-radio-button>\n\t</mat-radio-group>\n</section>\n\n<section class=\"example-section\">\n\t<mat-checkbox class=\"example-margin\" [(ngModel)]=\"disabled\">Disabled</mat-checkbox>\n</section>\n\n<section class=\"example-section\">\n    <h2 class=\"example-h2\">Result</h2>\n\t<mat-checkbox\n\t\tclass=\"example-margin\"\n\t\t[(ngModel)]=\"checked\"\n\t\t[(indeterminate)]=\"indeterminate\"\n\t\t[align]=\"align\"\n\t\t[disabled]=\"disabled\">\n\t\tI'm a checkbox\n\t</mat-checkbox>\n</section>\n".trim(),
};


/***/ }),

/***/ "./src/app/material-widgets/datepicker/datepicker.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/material-widgets/datepicker/datepicker.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\"  class=\"components-container-gt-xs\"  [ngClass.xs]=\"'components-container-xs'\"  fxLayoutGap=\"20px\">\n\t<div fxFlex class=\"datepicker-component-holder mat-elevation-z4\">\n\t\t<mat-toolbar class=\"datepicker-header\">\n\t\t\t<h3 class=\"mat-headline center-align\">Datepicker</h3>\n\t\t</mat-toolbar>\n\t\t\n\t\t<div class=\"datepicker-container\">\n\t\t\t\n\t\t\t<div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"20px\">\n\n\t\t\t\t<div fxFlex.xs=\"100\" fxFlex.lg=\"50\" fxFlex.md=\"50\" fxFlex.sm=\"50\" >\n\t\t\t\t\t<h4  class=\"mat-subheading-2 center-align\">Basic DatePicker</h4>\n\t\t\t\t\t<mat-divider></mat-divider>\n\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t\t<input matInput [matDatepicker]=\"picker\" placeholder=\"Choose a date\">\n\t\t\t\t\t\t<mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n\t\t\t\t\t\t<mat-datepicker #picker></mat-datepicker>\n\t\t\t\t\t</mat-form-field>\n\t\t\t\t</div>\n\n\t\t\t\t<div fxFlex.xs=\"100\" fxFlex.lg=\"50\" fxFlex.md=\"50\" fxFlex.sm=\"50\" >\n\t\t\t\t\t<h4  class=\"mat-subheading-2 center-align\">Datepicker start date</h4>\n\t\t\t\t\t<mat-divider></mat-divider>\n\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t\t\t<input matInput [matDatepicker]=\"pick\" placeholder=\"Choose a date\">\n\t\t\t\t\t\t\t<mat-datepicker-toggle matSuffix [for]=\"pick\"></mat-datepicker-toggle>\n\t\t\t\t\t\t\t<mat-datepicker #pick startView=\"year\" [startAt]=\"startDate\"></mat-datepicker>\n\t\t\t\t\t</mat-form-field>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"20px\">\n\t\t\t\t<div fxFlex.xs=\"100\" fxFlex.lg=\"50\" fxFlex.md=\"50\" fxFlex.sm=\"50\" >\n\t\t\t\t\t<h4 class=\"mat-subheading-2 center-align\">Datepicker selected value</h4>\n\t\t\t\t\t<mat-divider></mat-divider>\n\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t\t\t<input matInput [matDatepicker]=\"picker1\" placeholder=\"Angular forms\" [formControl]=\"date\">\n\t\t\t\t\t\t\t<mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n\t\t\t\t\t  \t<mat-datepicker #picker1></mat-datepicker>\n\t\t\t\t\t</mat-form-field>\n\n\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t  \t<input matInput [matDatepicker]=\"picker2\" placeholder=\"Angular forms (w/ deserialization)\"\n\t\t\t\t\t         [formControl]=\"serializedDate\">\n\t\t\t\t\t  \t<mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\n\t\t\t\t\t  \t<mat-datepicker #picker2></mat-datepicker>\n\t\t\t\t\t</mat-form-field>\n\n\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t  \t<input matInput [matDatepicker]=\"picker3\" placeholder=\"Value binding\" [value]=\"date.value\">\n\t\t\t\t\t  \t<mat-datepicker-toggle matSuffix [for]=\"picker3\"></mat-datepicker-toggle>\n\t\t\t\t\t  \t<mat-datepicker #picker3></mat-datepicker>\n\t\t\t\t\t</mat-form-field>\n\t\t\t\t</div>\n\n\t\t\t\t<div fxFlex.xs=\"100\" fxFlex.lg=\"50\" fxFlex.md=\"50\" fxFlex.sm=\"50\" >\n\t\t\t\t\t<h4  class=\"mat-subheading-2 center-align\">Datepicker with min And max validation</h4>\n\t\t\t\t\t<mat-divider></mat-divider>\n\t\t\t\t\t<mat-form-field class=\"example-full-width\">\n\t\t\t\t\t  \t<input matInput [min]=\"minDate\" [max]=\"maxDate\" [matDatepicker]=\"picker4\" placeholder=\"Choose a date\">\n\t\t\t\t\t  \t<mat-datepicker-toggle matSuffix [for]=\"picker4\"></mat-datepicker-toggle>\n\t\t\t\t\t  \t<mat-datepicker #picker4></mat-datepicker>\n\t\t\t\t\t</mat-form-field>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"20px\">\n\t\t\t\t<div fxFlex.xs=\"100\" fxFlex.lg=\"50\" fxFlex.md=\"50\" fxFlex.sm=\"50\" >\n\t\t\t\t\t<h4 class=\"mat-subheading-2 center-align\">Datepicker with filter validation</h4>\n\t\t\t\t\t<mat-divider></mat-divider>\n\t\t\t\t\t<mat-form-field class=\"example-full-width\">\n\t\t\t\t\t\t\t<input matInput [matDatepickerFilter]=\"myFilter\" [matDatepicker]=\"picker5\" placeholder=\"Choose a date\">\n\t\t\t\t\t  \t\t<mat-datepicker-toggle matSuffix [for]=\"picker5\"></mat-datepicker-toggle>\n\t\t\t\t\t  \t\t<mat-datepicker #picker5></mat-datepicker>\n\t\t\t\t\t</mat-form-field>\n\t\t\t\t</div>\n\n\t\t\t\t<div fxFlex.xs=\"100\" fxFlex.lg=\"50\" fxFlex.md=\"50\" fxFlex.sm=\"50\" >\n\t\t\t\t\t<h4  class=\"mat-subheading-2 center-align\">Datepicker input and change events</h4>\n\t\t\t\t\t<mat-divider></mat-divider>\n\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t    <input matInput [matDatepicker]=\"picker6\" placeholder=\"Input & change events\"\n\t\t\t\t\t         (dateInput)=\"addEvent('input', $event)\" (dateChange)=\"addEvent('change', $event)\">\n\t\t\t\t\t    <mat-datepicker-toggle matSuffix [for]=\"picker6\"></mat-datepicker-toggle>\n\t\t\t\t\t    <mat-datepicker #picker6></mat-datepicker>\n\t\t\t\t\t</mat-form-field>\n\n\t\t\t\t\t<div class=\"example-events\">\n\t\t\t\t\t    <div *ngFor=\"let e of events\">{{e}}</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"20px\">\n\t\t\t\t<div fxFlex.xs=\"100\" fxFlex.lg=\"50\" fxFlex.md=\"50\" fxFlex.sm=\"50\" >\n\t\t\t\t\t<h4  class=\"mat-subheading-2 center-align\">Disabled datepicker</h4>\n\t\t\t\t\t<mat-divider></mat-divider>\n\t\t\t\t\t<p>\n\t\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t\t    <input matInput [matDatepicker]=\"dp1\" placeholder=\"Completely disabled\" disabled>\n\t\t\t\t\t\t    <mat-datepicker-toggle matSuffix [for]=\"dp1\"></mat-datepicker-toggle>\n\t\t\t\t\t\t    <mat-datepicker #dp1></mat-datepicker>\n\t\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t</p>\n\n\t\t\t\t\t<p>\n\t\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t\t    <input matInput [matDatepicker]=\"dp3\" placeholder=\"Input disabled\" disabled>\n\t\t\t\t\t\t    <mat-datepicker-toggle matSuffix [for]=\"dp3\"></mat-datepicker-toggle>\n\t\t\t\t\t\t    <mat-datepicker #dp3 disabled=\"false\"></mat-datepicker>\n\t\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t</p>\n\t\t\t\t</div>\n\n\t\t\t\t<div fxFlex.xs=\"100\" fxFlex.lg=\"50\" fxFlex.md=\"50\" fxFlex.sm=\"50\" >\n\t\t\t\t\t<h4  class=\"mat-subheading-2 center-align\">Datepicker open method</h4>\n\t\t\t\t\t<mat-divider></mat-divider>\n\t\t\t\t\t<mat-form-field class=\"example-full-width\">\n\t\t\t\t\t\t<input matInput [matDatepicker]=\"picker8\" placeholder=\"Choose a date\">\n\t\t\t\t\t\t<mat-datepicker #picker8></mat-datepicker>\n\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t<button mat-raised-button (click)=\"picker8.open()\">Open</button>\n\t\t\t\t\t\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t</div>\n\t</div>\n\t<div fxFlex class=\"datepicker-component-holder mat-elevation-z4\">\n\t\t<mat-toolbar class=\"datepicker-header\">\n\t\t\t<h3 class=\"mat-headline center-align\">Examples</h3>\n\t\t</mat-toolbar>\n\n\t\t<mat-tab-group fxFlexFill>\n\t\t\t<mat-tab label=\"TS\">\n\t\t\t\t<div class=\"component-preview\">\n\t            \t<pre style=\"white-space:pre-line;\"><code mwlHighlightJs [source]=\"datepickerHelpers?.tsSourceDatepicker\" language=\"typescript\"></code></pre>\n\t            </div>\n\t        </mat-tab>\n\t        <mat-tab label=\"HTML\">\n\t        \t<div class=\"component-preview\">\n\t            \t<pre style=\"white-space:pre-line;\"><code mwlHighlightJs [source]=\"datepickerHelpers?.htmlSourceDatepicker\" language=\"html\"></code></pre>\n\t            </div>\n\t        </mat-tab>\n\n\t        <mat-tab label=\"PREVIEW\">\n\t        \t<div class=\"component-preview\">\n\t        \t\t<h4 >Datepicker touch UI</h4>\n\t\t\t\t\t<mat-divider></mat-divider>\n\t\t        \t<mat-form-field class=\"example-full-width\">\n\t\t\t\t\t\t<input matInput [matDatepicker]=\"picker7\" placeholder=\"Choose a date\">\n\t\t\t\t\t\t<mat-datepicker-toggle matSuffix [for]=\"picker7\"></mat-datepicker-toggle>\n\t\t\t\t\t\t<mat-datepicker touchUi=\"true\" #picker7></mat-datepicker>\n\t\t\t\t\t</mat-form-field>\n\t\t\t  \t</div>\n\t        </mat-tab>\n\t    </mat-tab-group>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/material-widgets/datepicker/datepicker.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/material-widgets/datepicker/datepicker.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".datepicker-header {\n  background-color: #327ebd;\n  color: white;\n  padding: 0 5px; }\n\n.datepicker-container {\n  padding: 5px 15px 15px 15px; }\n\n.datepicker-component-holder {\n  border: 1px solid #327ebd;\n  background-color: white; }\n\n.datepicker-component-holder h4 {\n    color: #327ebd;\n    margin: 14px 0; }\n\n.datepicker-component-holder mat-divider {\n    margin-bottom: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWF0ZXJpYWwtd2lkZ2V0cy9kYXRlcGlja2VyL0M6XFxVc2Vyc1xcUm9nZXJGZWRlcmVyXFxEZXNrdG9wXFxJbWJ1ZURlc2tcXE5ldyBmb2xkZXIgKDIpXFxjZGstYWRtaW4tbWFzdGVyL3NyY1xcYXBwXFxtYXRlcmlhbC13aWRnZXRzXFxkYXRlcGlja2VyXFxkYXRlcGlja2VyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNDO0VBQ0MseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixjQUFjLEVBQUE7O0FBRWY7RUFDQywyQkFBMkIsRUFBQTs7QUFJN0I7RUFDQyx5QkFBeUI7RUFDekIsdUJBQXVCLEVBQUE7O0FBRnhCO0lBS0UsY0FBYztJQUNkLGNBQWMsRUFBQTs7QUFOaEI7SUFVRSxtQkFBbUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21hdGVyaWFsLXdpZGdldHMvZGF0ZXBpY2tlci9kYXRlcGlja2VyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gY2RrLWRhdGVwaWNrZXIge1xuXHQuZGF0ZXBpY2tlci1oZWFkZXIge1xuXHRcdGJhY2tncm91bmQtY29sb3I6ICMzMjdlYmQ7XG5cdFx0Y29sb3I6IHdoaXRlO1xuXHRcdHBhZGRpbmc6IDAgNXB4O1xuXHR9XG5cdC5kYXRlcGlja2VyLWNvbnRhaW5lciB7XG5cdFx0cGFkZGluZzogNXB4IDE1cHggMTVweCAxNXB4O1xuXHRcdC8vIGNvbG9yOiB3aGl0ZTtcblx0fVxuLy8gfVxuLmRhdGVwaWNrZXItY29tcG9uZW50LWhvbGRlciB7XG5cdGJvcmRlcjogMXB4IHNvbGlkICMzMjdlYmQ7XG5cdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuXG5cdGg0IHtcblx0XHRjb2xvcjogIzMyN2ViZDtcblx0XHRtYXJnaW46IDE0cHggMDtcblx0fVxuXG5cdG1hdC1kaXZpZGVyIHtcblx0XHRtYXJnaW4tYm90dG9tOiAxMHB4O1xuXHR9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/material-widgets/datepicker/datepicker.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/material-widgets/datepicker/datepicker.component.ts ***!
  \*********************************************************************/
/*! exports provided: DatepickerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatepickerComponent", function() { return DatepickerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _helpers_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers.data */ "./src/app/material-widgets/datepicker/helpers.data.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DatepickerComponent = /** @class */ (function () {
    function DatepickerComponent() {
        this.startDate = new Date(1990, 0, 1);
        this.date = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](new Date());
        this.serializedDate = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]((new Date()).toISOString());
        this.minDate = new Date(2000, 0, 1);
        this.maxDate = new Date(2020, 0, 1);
        this.events = [];
        this.myFilter = function (d) {
            var day = d.getDay();
            return day !== 0 && day !== 6;
        };
        this.datepickerHelpers = _helpers_data__WEBPACK_IMPORTED_MODULE_2__["DATEPICKER_HELPERS"];
    }
    DatepickerComponent.prototype.addEvent = function (type, event) {
        this.events.push(type + ": " + event.value);
    };
    DatepickerComponent.prototype.ngOnInit = function () {
    };
    DatepickerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'cdk-datepicker',
            template: __webpack_require__(/*! ./datepicker.component.html */ "./src/app/material-widgets/datepicker/datepicker.component.html"),
            styles: [__webpack_require__(/*! ./datepicker.component.scss */ "./src/app/material-widgets/datepicker/datepicker.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DatepickerComponent);
    return DatepickerComponent;
}());



/***/ }),

/***/ "./src/app/material-widgets/datepicker/helpers.data.ts":
/*!*************************************************************!*\
  !*** ./src/app/material-widgets/datepicker/helpers.data.ts ***!
  \*************************************************************/
/*! exports provided: DATEPICKER_HELPERS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DATEPICKER_HELPERS", function() { return DATEPICKER_HELPERS; });
var DATEPICKER_HELPERS = {
    tsSourceDatepicker: "\nimport { MatDatepickerModule } from '@angular/material';\n\t\n\t\t@NgModule({\n\t\t  imports: [\n\t\t   MatDatepickerModule  \n\t\t})\n\t\texport class AppModule { }\n\nimport { Component, OnInit } from '@angular/core';\nimport { FormControl } from '@angular/forms';\nimport { MatDatepickerInputEvent } from '@angular/material/datepicker';\n\n@Component({\n  selector: 'cdk-datepicker',\n  templateUrl: './datepicker.component.html',\n  styleUrls: ['./datepicker.component.scss']\n})\nexport class DatepickerComponent implements OnInit {\n\n\tstartDate = new Date(1990, 0, 1);\n\tdate = new FormControl(new Date());\n\tserializedDate = new FormControl((new Date()).toISOString())\n\tminDate = new Date(2000, 0, 1);\n\tmaxDate = new Date(2020, 0, 1);\n\tevents: string[] = [];\n\tmyFilter = (d: Date): boolean => {\n\t\tconst day = d.getDay();\n\t\t\n\t\treturn day !== 0 && day !== 6;\n\t}\n}\n".trim(),
    htmlSourceDatepicker: "\n<mat-form-field class=\"example-full-width\">\n\t<input matInput [matDatepicker]=\"picker7\" placeholder=\"Choose a date\">\n\t<mat-datepicker-toggle matSuffix [for]=\"picker7\"></mat-datepicker-toggle>\n\t<mat-datepicker touchUi=\"true\" #picker7></mat-datepicker>\n</mat-form-field>\n\t".trim(),
};


/***/ }),

/***/ "./src/app/material-widgets/expansion-panel/expansion-panel.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/material-widgets/expansion-panel/expansion-panel.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" class=\"components-container-gt-xs\"  [ngClass.xs]=\"'components-container-xs'\"  fxLayoutGap=\"20px\">\n\n\t<div fxFlex class=\"expansion-component-holder mat-elevation-z4\">\n\t\t<mat-toolbar class=\"expansion-header\">\n\t\t\t<h1 class=\"mat-headline center-align\" >Expansion Panel</h1>\n\t\t</mat-toolbar>\n\t\t\n\t\t<div class=\"expansion-container\">\n\t\t\t\n\t\t\t<div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"20px\">\n\t\t\t\t\n\t\t\t\t<div fxFlexLayoutWrap fxFlex.xs=\"100\" fxFlex.lg=\"50\" fxFlex.md=\"50\" fxFlex.sm=\"50\">\n\n\t\t\t\t\t<h4 class=\"mat-subheading-2 center-align\">Basic expansion panel</h4>\n\n\t\t\t\t\t<mat-divider></mat-divider>\n\t\t\t\n\t\t\t\t\t<mat-accordion>\n\t\t\t\t\t<mat-expansion-panel>\n\t\t\t\t\t\t<mat-expansion-panel-header>\n\t\t\t\t\t\t\t<mat-panel-title>\n\t\t\t\t\t\t\tPersonal data\n\t\t\t\t\t\t\t</mat-panel-title>\n\t\t\t\t\t\t\t<mat-panel-description>\n\t\t\t\t\t\t\tType your name and age\n\t\t\t\t\t\t\t</mat-panel-description>\n\t\t\t\t\t\t</mat-expansion-panel-header>\n\n\t\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t\t\t<input matInput placeholder=\"First name\">\n\t\t\t\t\t\t</mat-form-field>\n\n\t\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t\t<input matInput placeholder=\"Age\">\n\t\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t</mat-expansion-panel>\n\t\t\t\t\t<mat-expansion-panel (opened)=\"basicPanelOpenState = true\"\n\t\t\t\t\t\t(closed)=\"basicPanelOpenState = false\">\n\t\t\t\t\t\t<mat-expansion-panel-header>\n\t\t\t\t\t\t<mat-panel-title>\n\t\t\t\t\t\t\tSelf aware panel\n\t\t\t\t\t\t</mat-panel-title>\n\t\t\t\t\t\t<mat-panel-description>\n\t\t\t\t\t\t\tCurrently I am {{basicPanelOpenState ? 'open' : 'closed'}}\n\t\t\t\t\t\t</mat-panel-description>\n\t\t\t\t\t\t</mat-expansion-panel-header>\n\t\t\t\t\t\t<p>I'm visible because I am open</p>\n\t\t\t\t\t</mat-expansion-panel>\n\t\t\t\t</mat-accordion>\n\n\t\t\t\t\t           \n\n\t\t\t\t</div>\n\n\n\t\t\t\t<div fxFlexLayoutWrap fxFlex.xs=\"100\" fxFlex.lg=\"50\" fxFlex.md=\"50\" fxFlex.sm=\"50\">\n\n\t\t\t\t\t<h4 class=\"mat-subheading-2 center-align\">Expansion panel as accordion</h4>\n\n\t\t\t\t\t<mat-divider></mat-divider>\n\t\t\t\n\t\t\t\t\t<mat-accordion class=\"example-headers-align\">\n\t\t\t\t  \t<mat-expansion-panel [expanded]=\"step === 0\" (opened)=\"setStep(0)\" hideToggle=\"true\">\n\t\t\t\t    \t<mat-expansion-panel-header>\n\t\t\t\t      \t\t<mat-panel-title>\n\t\t\t\t        \tPersonal data\n\t\t\t\t     \t\t</mat-panel-title>\n\t\t\t\t      \t\t<mat-panel-description>\n\t\t\t\t\t       \t \tType your name and age\n\t\t\t\t\t        \t<mat-icon>account_circle</mat-icon>\n\t\t\t\t      \t\t</mat-panel-description>\n\t\t\t\t    \t</mat-expansion-panel-header>\n\n\t\t\t\t\t    <mat-form-field>\n\t\t\t\t\t      <input matInput placeholder=\"First name\">\n\t\t\t\t\t    </mat-form-field>\n\n\t\t\t\t\t    <mat-form-field>\n\t\t\t\t\t      <input matInput type=\"number\" min=\"1\" placeholder=\"Age\">\n\t\t\t\t\t    </mat-form-field>\n\n\t\t\t\t\t    <mat-action-row>\n\t\t\t\t\t      <button mat-button color=\"primary\" (click)=\"nextStep()\">Next</button>\n\t\t\t\t\t    </mat-action-row>\n\t\t\t\t  \t</mat-expansion-panel>\n\n\t\t\t\t  \t<mat-expansion-panel [expanded]=\"step === 1\" (opened)=\"setStep(1)\" hideToggle=\"true\">\n\t\t\t\t    <mat-expansion-panel-header>\n\t\t\t\t\t    <mat-panel-title>\n\t\t\t\t\t        Destination\n\t\t\t\t    \t</mat-panel-title>\n\t\t\t\t    \t<mat-panel-description>\n\t\t\t\t        \tType the country name\n\t\t\t\t        \t<mat-icon>map</mat-icon>\n\t\t\t\t   \t \t</mat-panel-description>\n\t\t\t\t \t</mat-expansion-panel-header>\n\n\t\t\t\t    <mat-form-field>\n\t\t\t\t      <input matInput placeholder=\"Country\">\n\t\t\t\t    </mat-form-field>\n\n\t\t\t\t    <mat-action-row>\n\t\t\t\t      <button mat-button color=\"warn\" (click)=\"prevStep()\">Previous</button>\n\t\t\t\t      <button mat-button color=\"primary\" (click)=\"nextStep()\">Next</button>\n\t\t\t\t    </mat-action-row>\n\t\t\t\t  </mat-expansion-panel>\n\n\t\t\t\t  <mat-expansion-panel [expanded]=\"step === 2\" (opened)=\"setStep(2)\" hideToggle=\"true\">\n\t\t\t\t    <mat-expansion-panel-header>\n\t\t\t\t      <mat-panel-title>\n\t\t\t\t        Day of the trip\n\t\t\t\t      </mat-panel-title>\n\t\t\t\t      <mat-panel-description>\n\t\t\t\t        Inform the date you wish to travel\n\t\t\t\t        <mat-icon>date_range</mat-icon>\n\t\t\t\t      </mat-panel-description>\n\t\t\t\t    </mat-expansion-panel-header>\n\n\t\t\t\t    <mat-form-field>\n\t\t\t\t      <input matInput placeholder=\"Date\" [matDatepicker]=\"picker\" (focus)=\"picker.open()\" readonly>\n\t\t\t\t    </mat-form-field>\n\t\t\t\t    <mat-datepicker #picker></mat-datepicker>\n\n\t\t\t\t    <mat-action-row>\n\t\t\t\t      <button mat-button color=\"warn\" (click)=\"prevStep()\">Previous</button>\n\t\t\t\t      <button mat-button color=\"primary\" (click)=\"nextStep()\">End</button>\n\t\t\t\t    </mat-action-row>\n\t\t\t\t  </mat-expansion-panel>\n\n\t\t\t\t</mat-accordion>\n\t\t\t\t\n\t\t\t\t\t           \n\n\t\t\t\t</div>\n\t\t\t\t\n\t\t\t</div>\n\n\t\t\t\t\t\t\n\n\t\t</div>\n\t</div>\n\n\t<div fxFlex class=\"expansion-component-holder mat-elevation-z4\">\n\t\t<mat-toolbar class=\"expansion-header\"  >\n\t\t\t<h1 class=\"mat-headline center-align\" >Examples</h1>\n\t\t</mat-toolbar>\n\n\t\t<mat-tab-group fxFlexFill>\n\t\t\t<mat-tab label=\"TS\">\n\t\t\t\t<div class=\"component-preview\">\n\t            \t<pre style=\"white-space:pre-line;\"><code mwlHighlightJs [source]=\"expansionHelpers?.tsSourceRaisedButton\" language=\"typescript\"></code></pre>\n\t        \t</div>\n\t        </mat-tab>\n\t        <mat-tab label=\"HTML\">\n\t        \t<div class=\"component-preview\">\n\t            \t<pre style=\"white-space:pre-line;\"><code mwlHighlightJs [source]=\"expansionHelpers?.htmlSourceRaisedButton\" language=\"html\"></code></pre>\n\t            </div>\n\t        </mat-tab>\n\n\t        <mat-tab label=\"PREVIEW\">\n\t        \t<div class=\"component-preview\">\n\t\t        \t<mat-accordion>\n\t\t\t\t\t<mat-expansion-panel>\n\t\t\t\t\t\t<mat-expansion-panel-header>\n\t\t\t\t\t\t\t<mat-panel-title>\n\t\t\t\t\t\t\tPersonal data\n\t\t\t\t\t\t\t</mat-panel-title>\n\t\t\t\t\t\t\t<mat-panel-description>\n\t\t\t\t\t\t\tType your name and age\n\t\t\t\t\t\t\t</mat-panel-description>\n\t\t\t\t\t\t</mat-expansion-panel-header>\n\n\t\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t\t\t<input matInput placeholder=\"First name\">\n\t\t\t\t\t\t</mat-form-field>\n\n\t\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t\t<input matInput placeholder=\"Age\">\n\t\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t</mat-expansion-panel>\n\t\t\t\t\t<mat-expansion-panel (opened)=\"basicPanelOpenState = true\"\n\t\t\t\t\t\t(closed)=\"basicPanelOpenState = false\">\n\t\t\t\t\t\t<mat-expansion-panel-header>\n\t\t\t\t\t\t<mat-panel-title>\n\t\t\t\t\t\t\tSelf aware panel\n\t\t\t\t\t\t</mat-panel-title>\n\t\t\t\t\t\t<mat-panel-description>\n\t\t\t\t\t\t\tCurrently I am {{basicPanelOpenState ? 'open' : 'closed'}}\n\t\t\t\t\t\t</mat-panel-description>\n\t\t\t\t\t\t</mat-expansion-panel-header>\n\t\t\t\t\t\t<p>I'm visible because I am open</p>\n\t\t\t\t\t</mat-expansion-panel>\n\t\t\t\t</mat-accordion>\n\t\t\t  \t</div>\n\t        </mat-tab>\n\t    </mat-tab-group>\n\t</div>\n\n</div>"

/***/ }),

/***/ "./src/app/material-widgets/expansion-panel/expansion-panel.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/material-widgets/expansion-panel/expansion-panel.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".expansion-header {\n  background-color: #327ebd;\n  color: white;\n  padding: 0 5px; }\n\n.expansion-container {\n  padding: 5px; }\n\n.expansion-component-holder {\n  border: 1px solid #327ebd;\n  background-color: white; }\n\n.expansion-component-holder h4 {\n    color: #327ebd;\n    margin: 14px 0; }\n\n.expansion-component-holder mat-divider {\n    margin-bottom: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWF0ZXJpYWwtd2lkZ2V0cy9leHBhbnNpb24tcGFuZWwvQzpcXFVzZXJzXFxSb2dlckZlZGVyZXJcXERlc2t0b3BcXEltYnVlRGVza1xcTmV3IGZvbGRlciAoMilcXGNkay1hZG1pbi1tYXN0ZXIvc3JjXFxhcHBcXG1hdGVyaWFsLXdpZGdldHNcXGV4cGFuc2lvbi1wYW5lbFxcZXhwYW5zaW9uLXBhbmVsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixjQUFjLEVBQUE7O0FBRWhCO0VBQ0UsWUFBWSxFQUFBOztBQUdkO0VBQ0MseUJBQXlCO0VBQ3pCLHVCQUF1QixFQUFBOztBQUZ4QjtJQUtFLGNBQWM7SUFDZCxjQUFjLEVBQUE7O0FBTmhCO0lBVUUsbUJBQW1CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tYXRlcmlhbC13aWRnZXRzL2V4cGFuc2lvbi1wYW5lbC9leHBhbnNpb24tcGFuZWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhwYW5zaW9uLWhlYWRlciB7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogIzMyN2ViZDtcblx0XHRjb2xvcjogd2hpdGU7XG5cdFx0cGFkZGluZzogMCA1cHg7XG5cdH1cbi5leHBhbnNpb24tY29udGFpbmVyIHtcblx0XHRwYWRkaW5nOiA1cHg7XG5cdFx0Ly8gY29sb3I6IHdoaXRlO1xuXHR9XG4uZXhwYW5zaW9uLWNvbXBvbmVudC1ob2xkZXIge1xuXHRib3JkZXI6IDFweCBzb2xpZCAjMzI3ZWJkO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcblxuXHRoNCB7XG5cdFx0Y29sb3I6ICMzMjdlYmQ7XG5cdFx0bWFyZ2luOiAxNHB4IDA7XG5cdH1cblxuXHRtYXQtZGl2aWRlciB7XG5cdFx0bWFyZ2luLWJvdHRvbTogMTBweDtcblx0fVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/material-widgets/expansion-panel/expansion-panel.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/material-widgets/expansion-panel/expansion-panel.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ExpansionPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpansionPanelComponent", function() { return ExpansionPanelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _helpers_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers.data */ "./src/app/material-widgets/expansion-panel/helpers.data.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ExpansionPanelComponent = /** @class */ (function () {
    function ExpansionPanelComponent() {
        this.step = 0;
        this.expansionHelpers = _helpers_data__WEBPACK_IMPORTED_MODULE_1__["EXPANSION_HELPERS"];
    }
    ExpansionPanelComponent.prototype.ngOnInit = function () {
    };
    ExpansionPanelComponent.prototype.setStep = function (index) {
        this.step = index;
    };
    ExpansionPanelComponent.prototype.nextStep = function () {
        this.step++;
    };
    ExpansionPanelComponent.prototype.prevStep = function () {
        this.step--;
    };
    ExpansionPanelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'cdk-expansion-panel',
            template: __webpack_require__(/*! ./expansion-panel.component.html */ "./src/app/material-widgets/expansion-panel/expansion-panel.component.html"),
            styles: [__webpack_require__(/*! ./expansion-panel.component.scss */ "./src/app/material-widgets/expansion-panel/expansion-panel.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ExpansionPanelComponent);
    return ExpansionPanelComponent;
}());



/***/ }),

/***/ "./src/app/material-widgets/expansion-panel/helpers.data.ts":
/*!******************************************************************!*\
  !*** ./src/app/material-widgets/expansion-panel/helpers.data.ts ***!
  \******************************************************************/
/*! exports provided: EXPANSION_HELPERS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXPANSION_HELPERS", function() { return EXPANSION_HELPERS; });
var EXPANSION_HELPERS = {
    tsSourceRaisedButton: "\n \t\timport { MatExpansionModule } from '@angular/material/expansion';\n\t\t\n\t  \t@NgModule({\n\t\t  imports: [\n\t\t    MatExpansionModule\n\t\t})\n\t\texport class AppModule { }\n\t\t\n\t\timport { Component, OnInit } from '@angular/core';\n\t\timport { EXPANSION_HELPERS } from './helpers.data';\n\n\t\t@Component({\n\t\t  selector: 'cdk-expansion-panel',\n\t\t  templateUrl: './expansion-panel.component.html',\n\t\t  styleUrls: ['./expansion-panel.component.scss']\n\t\t})\n\t\texport class ExpansionPanelComponent implements OnInit {\n\t\t\tstep = 0;\n\t\t\tpublic basicPanelOpenState:any;\n\t\t\texpansionHelpers = EXPANSION_HELPERS;\n\t\t  \tconstructor() { }\n\n\t\t  \tngOnInit() {\n\t\t  \t}\n\t\t  \tsetStep(index: number) {\n\t\t\t    this.step = index;\n\t\t\t}\n\n\t\t\tnextStep() {\n\t\t\t    this.step++;\n\t\t\t}\n\n\t\t\tprevStep() {\n\t\t\t    this.step--;\n\t\t\t}\n\n\t\t}\n".trim(),
    htmlSourceRaisedButton: "\n  \t\t\n\t\t  <mat-accordion>\n\t\t\t\t<mat-expansion-panel>\n\t\t\t\t\t<mat-expansion-panel-header>\n\t\t\t\t\t\t<mat-panel-title>\n\t\t\t\t\t\tPersonal data\n\t\t\t\t\t\t</mat-panel-title>\n\t\t\t\t\t\t<mat-panel-description>\n\t\t\t\t\t\tType your name and age\n\t\t\t\t\t\t</mat-panel-description>\n\t\t\t\t\t</mat-expansion-panel-header>\n\n\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t\t<input matInput placeholder=\"First name\">\n\t\t\t\t\t</mat-form-field>\n\n\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t<input matInput placeholder=\"Age\">\n\t\t\t\t\t</mat-form-field>\n\t\t\t\t</mat-expansion-panel>\n\t\t\t\t<mat-expansion-panel (opened)=\"basicPanelOpenState = true\"\n\t\t\t\t\t(closed)=\"basicPanelOpenState = false\">\n\t\t\t\t\t<mat-expansion-panel-header>\n\t\t\t\t\t<mat-panel-title>\n\t\t\t\t\t\tSelf aware panel\n\t\t\t\t\t</mat-panel-title>\n\t\t\t\t\t<mat-panel-description>\n\t\t\t\t\t\tCurrently I am {{basicPanelOpenState ? 'open' : 'closed'}}\n\t\t\t\t\t</mat-panel-description>\n\t\t\t\t\t</mat-expansion-panel-header>\n\t\t\t\t\t<p>I'm visible because I am open</p>\n\t\t\t\t</mat-expansion-panel>\n\t\t\t</mat-accordion>\n\t\t".trim(),
};


/***/ }),

/***/ "./src/app/material-widgets/icons/helpers.data.ts":
/*!********************************************************!*\
  !*** ./src/app/material-widgets/icons/helpers.data.ts ***!
  \********************************************************/
/*! exports provided: ICON_HELPERS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ICON_HELPERS", function() { return ICON_HELPERS; });
var ICON_HELPERS = {
    tsSourceIcons: "\nimport { MatIconModule} from '@angular/material';\n\t\n\t\t@NgModule({\n\t\t  imports: [\n\t\t   MatIconModule\n\t\t})\n\t\texport class AppModule { }\n\nimport { Component, OnInit } from '@angular/core';\n@Component({\n  selector: 'cdk-icons',\n  templateUrl: './icons.component.html',\n  styleUrls: ['./icons.component.scss']\n})\nexport class IconsComponent implements OnInit {\n}\n\t".trim(),
    htmlSourceIcons: "\n<mat-card class=\"example at-elevation-z12\">\n\t<mat-icon class=\"space\" aria-label=\"Example icon-button with a heart icon\">favorite</mat-icon>\n\t<mat-icon class=\"space\">home</mat-icon>\n\t<mat-icon class=\"space\">menu</mat-icon>\n\t<mat-icon class=\"space\">code</mat-icon>\n</mat-card>\n\t".trim(),
};


/***/ }),

/***/ "./src/app/material-widgets/icons/icons.component.html":
/*!*************************************************************!*\
  !*** ./src/app/material-widgets/icons/icons.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout.lt-sm=\"column\" fxLayout=\"row\" class=\"components-container-gt-xs\"  [ngClass.xs]=\"'components-container-xs'\"  fxLayoutGap=\"20px\" >\n\t<div fxFlex class=\"icons-component-holder mat-elevation-z4\">\n\t\t<mat-toolbar class=\"icon-header\">\n\t\t\t<h1 class=\"mat-headline center-align\" >Icons</h1>\n\t\t</mat-toolbar >\n\t\t\n\t\t<div class=\"icon-container\">\n\t\t\t\n\t\t\t<div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"20px\">\n\n\t\t\t\t<div fxFlex.xs=\"100\" >\n\n\t\t\t\t\t<h4  class=\"mat-subheading-2 center-align\">Basic Icons</h4>\n\t\t\t\t\t<mat-divider></mat-divider>\n\t\t\t\t\t\n\t\t\t\t\t<mat-card class=\" at-elevation-z12\">\n\t\t\t\t\t\t<mat-icon class=\"space\" aria-label=\"Example icon-button with a heart icon\">favorite</mat-icon>\n\t\t\t\t\t\t<mat-icon class=\"space\">home</mat-icon>\n\t\t\t\t\t\t<mat-icon class=\"space\">menu</mat-icon>\n\t\t\t\t\t\t<mat-icon class=\"space\">code</mat-icon>\n\t\t\t\t\t\t<mat-icon class=\"space\">assignment</mat-icon>\n\t\t\t\t\t\t<mat-icon class=\"space\">delete</mat-icon>\n\t\t\t\t\t\t<mat-icon class=\"space\">accessibility</mat-icon>\n\t\t\t\t\t\t<mat-icon class=\"space\">backup</mat-icon>\n\t\t\t\t\t\t<mat-icon class=\"space\">autorenew</mat-icon>\n\t\t\t\t\t\t<mat-icon class=\"space\">bookmark</mat-icon>\n\t\t\t\t\t\t<mat-icon class=\"space\">build</mat-icon>\n\t\t\t\t\t\t<mat-icon class=\"space\">event</mat-icon>\n\t\t\t\t\t\t<mat-icon class=\"space\">help</mat-icon>\n\t\t\t\t\t\t<mat-icon class=\"space\">label</mat-icon>\n\t\t\t\t\t\t<mat-icon class=\"space\">extension</mat-icon>\n\t\t\t\t\t\t<mat-icon class=\"space\">info</mat-icon>\n\t\t\t\t\t\t<mat-icon class=\"space\">https</mat-icon>\n\t\t\t\t\t\t<mat-icon class=\"space\">input</mat-icon>\n\t\t\t\t\t\t<mat-icon class=\"space\">launch</mat-icon>\n\t\t\t\t\t\t<mat-icon class=\"space\">3d_rotation</mat-icon>\n\t\t\t\t\t\t<mat-icon class=\"space\">accessibility</mat-icon>\n\t\t\t\t\t\t<mat-icon class=\"space\">accessible</mat-icon>\n\t\t\t\t\t\t<mat-icon class=\"space\">account_balance</mat-icon>\n\t\t\t\t\t\t<mat-icon class=\"space\">account_balance_wallet</mat-icon>\n\t\t\t\t\t\t<mat-icon class=\"space\">account_box</mat-icon>\n\t\t\t\t\t\t<mat-icon class=\"space\">account_circle</mat-icon>\n\t\t\t\t\t\t<mat-icon class=\"space\">add_shopping_cart</mat-icon>\n\t\t\t\t\t\t<mat-icon class=\"space\">alarm</mat-icon>\n\t\t\t\t\t\t<mat-icon class=\"space\">alarm_add</mat-icon>\n\t\t\t\t\t\t<mat-icon class=\"space\">alarm_off</mat-icon>\n\t\t\t\t\t\t<mat-icon class=\"space\">alarm_on</mat-icon>\n\t\t\t\t\t\t<mat-icon class=\"space\">all_out</mat-icon>\n\t\t\t\t\t\t<mat-icon class=\"space\">android</mat-icon>\n\t\t\t\t\t\t<mat-icon class=\"space\">bookmark</mat-icon>\n\t\t\t\t\t\t<mat-icon class=\"space\">announcement</mat-icon>\n\t\t\t\t\t\t<mat-icon class=\"space\">aspect_ratio</mat-icon>\n\t\t\t\t\t\t<mat-icon class=\"space\">assessment</mat-icon>\n\t\t\t\t\t\t<mat-icon class=\"space\">bug_report</mat-icon>\n\t\t\t\t\t\t<mat-icon class=\"space\">cached</mat-icon>\n\t\t\t\t\t\t<mat-icon class=\"space\">compare_arrows</mat-icon>\n\t\t\t\t\t\t<mat-icon class=\"space\">copyright</mat-icon>\n\t\t\t\t\t\t<mat-icon class=\"space\">credit_card</mat-icon>\n\t\t\t\t\t\t<mat-icon class=\"space\">dashboard</mat-icon>\n\t\t\t\t\t\t<mat-icon class=\"space\">description</mat-icon>\n\t\t\t\t\t\t<mat-icon class=\"space\">done_all</mat-icon>\n\t\t\t\t\t\t<mat-icon class=\"space\">eject</mat-icon>\n\t\t\t\t\t\t<mat-icon class=\"space\">exit_to_app</mat-icon>\n\t\t\t\t\t\t<mat-icon class=\"space\">find_replace</mat-icon>\n\t\t\t\t\t\t<mat-icon class=\"space\">get_app</mat-icon>\n\t\t\t\t\t\t<mat-icon class=\"space\">gif</mat-icon>\n\t\t\t\t\t\t<mat-icon class=\"space\">group_work</mat-icon>\n\t\t\t\t\t\t<mat-icon class=\"space\">help</mat-icon>\n\t\t\t\t\t\t<mat-icon class=\"space\">compare_arrows</mat-icon>\n\t\t\t\t\t\t<mat-icon class=\"space\">history</mat-icon>\n\t\t\t\t\t\t<mat-icon class=\"space\">http</mat-icon>\n\t\t\t\t\t\t<mat-icon class=\"space\">important_devices</mat-icon>\n\t\t\t\t\t\t<mat-icon class=\"space\">language</mat-icon>\n\t\t\t\t\t\t<mat-icon class=\"space\">list</mat-icon>\n\t\t\t\t\t\t<mat-icon class=\"space\">note_add</mat-icon>\n\t\t\t\t\t\t<mat-icon class=\"space\">open_in_browser</mat-icon>\n\t\t\t\t\t\t<mat-icon class=\"space\">open_in_new</mat-icon>\n\t\t\t\t\t\t<mat-icon class=\"space\">open_with</mat-icon>\n\t\t\t\t\t\t<mat-icon class=\"space\">pageview</mat-icon>\n\t\t\t\t\t\t<mat-icon class=\"space\">power_settings_new</mat-icon>\n\t\t\t\t\t\t<mat-icon class=\"space\">print</mat-icon>\n\t\t\t\t\t\t<mat-icon class=\"space\">query_builder</mat-icon>\n\t\t\t\t\t\t<mat-icon class=\"space\">question_answer</mat-icon>\n\t\t\t\t\t\t<mat-icon class=\"space\">receipt</mat-icon>\n\t\t\t\t\t\t<mat-icon class=\"space\">remove_shopping_cart</mat-icon>\n\t\t\t\t\t\t<mat-icon class=\"space\">reorder</mat-icon>\n\t\t\t\t\t\t<mat-icon class=\"space\">report_problem</mat-icon>\n\t\t\t\t\t\t<mat-icon class=\"space\">restore</mat-icon>\n\t\t\t\t\t\t<mat-icon class=\"space\">restore_page</mat-icon>\n\t\t\t\t\t\t<mat-icon class=\"space\">room</mat-icon>\n\t\t\t\t\t\t<mat-icon class=\"space\">search</mat-icon>\n\t\t\t\t\t\t<mat-icon class=\"space\">settings</mat-icon>\n\t\t\t\t\t\t<mat-icon class=\"space\">star_rate</mat-icon>\n\t\t\t\t\t\t<mat-icon class=\"space\">subject</mat-icon>\n\t\t\t\t\t\t<mat-icon class=\"space\">supervisor_account</mat-icon>\n\t\t\t\t\t\t<mat-icon class=\"space\">swap_horiz</mat-icon>\n\t\t\t\t\t\t<mat-icon class=\"space\">swap_vert</mat-icon>\n\t\t\t\t\t\t<mat-icon class=\"space\">thumb_down</mat-icon>\n\t\t\t\t\t\t<mat-icon class=\"space\">thumb_up</mat-icon>\n\t\t\t\t\t\t<mat-icon class=\"space\">timeline</mat-icon>\n\t\t\t\t\t\t<mat-icon class=\"space\">today</mat-icon>\n\t\t\t\t\t\t<mat-icon class=\"space\">track_changes</mat-icon>\n\t\t\t\t\t\t<mat-icon class=\"space\">translate</mat-icon>\n\t\t\t\t\t\t<mat-icon class=\"space\">trending_down</mat-icon>\n\t\t\t\t\t\t<mat-icon class=\"space\">trending_flat</mat-icon>\n\t\t\t\t\t</mat-card>\t\n\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div fxFlex class=\"icons-component-holder mat-elevation-z4\">\n\t\t<mat-toolbar class=\"icon-header\" >\n\t\t\t<h1 class=\"mat-headline center-align\" >Examples</h1>\n\t\t</mat-toolbar>\n\n\t\t<mat-tab-group fxFlexFill>\n\t\t\t<mat-tab label=\"TS\">\n\t\t\t\t<div class=\"component-preview\">\n\t            \t<pre style=\"white-space:pre-line;\"><code mwlHighlightJs [source]=\"iconHelpers?.tsSourceIcons\" language=\"typescript\"></code></pre>\n\t            </div>\n\t        </mat-tab>\n\t        <mat-tab label=\"HTML\">\n\t        \t<div class=\"component-preview\">\n\t            \t<pre style=\"white-space:pre-line;\"><code mwlHighlightJs [source]=\"iconHelpers?.htmlSourceIcons\" language=\"html\"></code></pre>\n\t        \t</div>\n\t        </mat-tab>\n\n\t        <mat-tab label=\"PREVIEW\">\n\t        \t <div class=\"component-preview\">\n\t        \t\t<mat-card class=\"example at-elevation-z12\">\n\t\t\t\t\t\t<mat-icon class=\"space\" aria-label=\"Example icon-button with a heart icon\">favorite</mat-icon>\n\t\t\t\t\t\t<mat-icon class=\"space\">home</mat-icon>\n\t\t\t\t\t\t<mat-icon class=\"space\">menu</mat-icon>\n\t\t\t\t\t\t<mat-icon class=\"space\">code</mat-icon>\n\t\t\t\t\t\t\n\t\t\t\t\t</mat-card>\n\t\t\t\t</div>\n\t\t\t</mat-tab>\n\t\t</mat-tab-group>\n\t</div>\t\n</div>"

/***/ }),

/***/ "./src/app/material-widgets/icons/icons.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/material-widgets/icons/icons.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".icon-header {\n  background-color: #327ebd;\n  color: white;\n  padding: 0 5px; }\n\n.icons-component-holder {\n  border: 1px solid #327ebd;\n  background-color: white; }\n\n.icons-component-holder h4 {\n    color: #327ebd;\n    margin: 14px 0; }\n\n.icons-component-holder mat-divider {\n    margin-bottom: 10px; }\n\n.icon-container {\n  padding: 5px 15px 15px 15px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWF0ZXJpYWwtd2lkZ2V0cy9pY29ucy9DOlxcVXNlcnNcXFJvZ2VyRmVkZXJlclxcRGVza3RvcFxcSW1idWVEZXNrXFxOZXcgZm9sZGVyICgyKVxcY2RrLWFkbWluLW1hc3Rlci9zcmNcXGFwcFxcbWF0ZXJpYWwtd2lkZ2V0c1xcaWNvbnNcXGljb25zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixjQUFjLEVBQUE7O0FBSWhCO0VBQ0MseUJBQXlCO0VBQ3pCLHVCQUF1QixFQUFBOztBQUZ4QjtJQUtFLGNBQWM7SUFDZCxjQUFjLEVBQUE7O0FBTmhCO0lBVUUsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0MsMkJBQTJCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tYXRlcmlhbC13aWRnZXRzL2ljb25zL2ljb25zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uaWNvbi1oZWFkZXIge1xuXHRcdGJhY2tncm91bmQtY29sb3I6ICMzMjdlYmQ7XG5cdFx0Y29sb3I6IHdoaXRlO1xuXHRcdHBhZGRpbmc6IDAgNXB4O1xuXHR9XG5cdFxuXG4uaWNvbnMtY29tcG9uZW50LWhvbGRlciB7XG5cdGJvcmRlcjogMXB4IHNvbGlkICMzMjdlYmQ7XG5cdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuXG5cdGg0IHtcblx0XHRjb2xvcjogIzMyN2ViZDtcblx0XHRtYXJnaW46IDE0cHggMDtcblx0fVxuXG5cdG1hdC1kaXZpZGVyIHtcblx0XHRtYXJnaW4tYm90dG9tOiAxMHB4O1xuXHR9XG59XG4uaWNvbi1jb250YWluZXIge1xuXHRwYWRkaW5nOiA1cHggMTVweCAxNXB4IDE1cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/material-widgets/icons/icons.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/material-widgets/icons/icons.component.ts ***!
  \***********************************************************/
/*! exports provided: IconsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconsComponent", function() { return IconsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _helpers_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers.data */ "./src/app/material-widgets/icons/helpers.data.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var IconsComponent = /** @class */ (function () {
    function IconsComponent() {
        this.iconHelpers = _helpers_data__WEBPACK_IMPORTED_MODULE_1__["ICON_HELPERS"];
    }
    IconsComponent.prototype.ngOnInit = function () {
    };
    IconsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'cdk-icons',
            template: __webpack_require__(/*! ./icons.component.html */ "./src/app/material-widgets/icons/icons.component.html"),
            styles: [__webpack_require__(/*! ./icons.component.scss */ "./src/app/material-widgets/icons/icons.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], IconsComponent);
    return IconsComponent;
}());



/***/ }),

/***/ "./src/app/material-widgets/input/helpers.data.ts":
/*!********************************************************!*\
  !*** ./src/app/material-widgets/input/helpers.data.ts ***!
  \********************************************************/
/*! exports provided: input_HELPERS, Messages, Links */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "input_HELPERS", function() { return input_HELPERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Messages", function() { return Messages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Links", function() { return Links; });
var input_HELPERS = {
    tsSourceInput: "\nimport { MatInputModule } from '@angular/material';\n\t\t@NgModule({\n\t\t  imports: [\n\t\t   MatInputModule\n\t\t})\n\t\texport class AppModule { }\n\t\t\nimport { Component, OnInit } from '@angular/core';\n@Component({\n  selector: 'cdk-input',\n  templateUrl: './input.component.html',\n  styleUrls: ['./input.component.scss']\n})\nexport class inputComponent implements OnInit {\n\n  constructor() { }\n\n  ngOnInit() {\n  }\n }\n\t".trim(),
    htmlSourceInput: "\n\t<form class=\"example-form\">\n\t  <mat-form-field class=\"example-full-width\">\n\t    <input matInput placeholder=\"Favorite food\" value=\"Sushi\">\n\t  </mat-form-field>\n\t</form>\n\n\t".trim(),
};
var Messages = [
    { from: 'codetok', subject: 'client', content: 'hi there' },
    { from: 'client', subject: 'codetok', content: 'yes' },
    { from: 'jay', subject: 'tom', content: 'yes please' }
];
var Links = ['/home', '/admin'];


/***/ }),

/***/ "./src/app/material-widgets/input/input.component.html":
/*!*************************************************************!*\
  !*** ./src/app/material-widgets/input/input.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" class=\"components-container-gt-xs\"  [ngClass.xs]=\"'components-container-xs'\"  fxLayoutGap=\"20px\">\n\t<div fxFlex class=\"input-component-holder mat-elevation-z4\">\n\t\t<mat-toolbar class=\"input-header\">\n\t\t\t<h1 class=\"mat-headline center-align\" >Input</h1>\n\t\t</mat-toolbar>\n\t\t<div class=\"input-container\">\n\t\t\t\n\t\t\t<div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"20px\">\n\n\t\t\t\t<div fxFlex.xs=\"100\" fxFlex.lg=\"50\" fxFlex.md=\"50\" fxFlex.sm=\"50\" >\n\t\t\t\t\t<h4  class=\"mat-subheading-2 center-align\">Basic Input</h4>\n\t\t\t\t\t<mat-divider></mat-divider>\n\t\t\t\t\t<form class=\"example-form\">\n\t\t\t\t\t  <mat-form-field class=\"example-full-width\">\n\t\t\t\t\t    <input matInput placeholder=\"Favorite food\" value=\"Sushi\">\n\t\t\t\t\t  </mat-form-field>\n\t\t\t\t\t</form>\n\t\t\t\t</div>\n\t\t\t\t<div fxFlex.xs=\"100\" fxFlex.lg=\"50\" fxFlex.md=\"50\" fxFlex.sm=\"50\" >\n\t\t\t\t\t<h4 class=\"mat-subheading-2 center-align\">Input with a custom ErrorStateMatcher</h4>\n\t\t\t\t\t<mat-divider></mat-divider>\n\t\t\t\t\t<form class=\"example-form\">\n\t\t\t\t\t  <mat-form-field class=\"example-full-width\">\n\t\t\t\t\t    <input matInput placeholder=\"Email\" [formControl]=\"emailFormControl\"\n\t\t\t\t\t           [errorStateMatcher]=\"matcher\">\n\t\t\t\t\t    <mat-hint>Errors appear instantly!</mat-hint>\n\t\t\t\t\t    <mat-error *ngIf=\"emailFormControl.hasError('email') && !emailFormControl.hasError('required')\">\n\t\t\t\t\t      Please enter a valid email address\n\t\t\t\t\t    </mat-error>\n\t\t\t\t\t    <mat-error *ngIf=\"emailFormControl.hasError('required')\">\n\t\t\t\t\t      Email is <strong>required</strong>\n\t\t\t\t\t    </mat-error>\n\t\t\t\t\t  </mat-form-field>\n\t\t\t\t\t</form>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"20px\">\n\n\t\t\t\t<div fxFlex.xs=\"100\" fxFlex.lg=\"50\" fxFlex.md=\"50\" fxFlex.sm=\"50\" >\n\t\t\t\t\t<h4 class=\"mat-subheading-2 center-align\">Auto-resizing textarea</h4>\n\t\t\t\t\t<mat-divider></mat-divider>\n\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t  <textarea matInput placeholder=\"Autosize textarea\" matTextareaAutosize matAutosizeMinRows=\"2\"\n\t\t\t\t\t            matAutosizeMaxRows=\"5\"></textarea>\n\t\t\t\t\t</mat-form-field>\n\t\t\t\t</div>\n\t\t\t\t<div fxFlex.xs=\"100\" fxFlex.lg=\"50\" fxFlex.md=\"50\" fxFlex.sm=\"50\" >\n\t\t\t\t\t<h4 class=\"mat-subheading-2 center-align\">Input with a clear button</h4>\n\t\t\t\t\t<mat-divider></mat-divider>\n\t\t\t\t\t<mat-form-field class=\"example-form-field\">\n\t\t\t\t\t  <input matInput type=\"text\" placeholder=\"Clearable input\" [(ngModel)]=\"value\"/>\n\t\t\t\t\t  <button mat-button *ngIf=\"value\" matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"value=''\">\n\t\t\t\t\t    <mat-icon>close</mat-icon>\n\t\t\t\t\t  </button>\n\t\t\t\t\t</mat-form-field>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"20px\">\n\n\t\t\t\t<div fxFlex.xs=\"100\" fxFlex.lg=\"50\" fxFlex.md=\"50\" fxFlex.sm=\"50\" >\n\t\t\t\t\t<h4 class=\"mat-subheading-2 center-align\">Input with error messages</h4>\n\t\t\t\t\t<mat-divider></mat-divider>\n\t\t\t\t\t<form class=\"example-form\">\n\t\t\t\t\t  <mat-form-field class=\"example-full-width\">\n\t\t\t\t\t    <input matInput placeholder=\"Email\" [formControl]=\"emailFormControls\">\n\t\t\t\t\t    <mat-error *ngIf=\"emailFormControls.hasError('pattern')\">\n\t\t\t\t\t      Please enter a valid email address\n\t\t\t\t\t    </mat-error>\n\t\t\t\t\t    <mat-error *ngIf=\"emailFormControls.hasError('required')\">\n\t\t\t\t\t      Email is <strong>required</strong>\n\t\t\t\t\t    </mat-error>\n\t\t\t\t\t  </mat-form-field>\n\t\t\t\t\t</form>\n\t\t\t\t</div>\n\t\t\t\t<div fxFlex.xs=\"100\" fxFlex.lg=\"50\" fxFlex.md=\"50\" fxFlex.sm=\"50\" >\n\t\t\t\t\t<h4 class=\"mat-subheading-2 center-align\">Input with hints</h4>\n\t\t\t\t\t<mat-divider></mat-divider>\n\t\t\t\t\t<form class=\"example-form\">\n\n\t\t\t\t\t  <mat-form-field class=\"example-full-width\">\n\t\t\t\t\t    <input matInput #message maxlength=\"256\" placeholder=\"Message\">\n\t\t\t\t\t    <mat-hint align=\"start\"><strong>Don't disclose personal info</strong> </mat-hint>\n\t\t\t\t\t    <mat-hint align=\"end\">{{message.value.length}} / 256</mat-hint>\n\t\t\t\t\t  </mat-form-field>\n\t\t\t\t\t  \n\t\t\t\t\t</form>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"20px\">\n\n\t\t\t\t<div fxFlex.xs=\"100\" fxFlex.lg=\"50\" fxFlex.md=\"50\" fxFlex.sm=\"50\" >\n\t\t\t\t\t<h4 class=\"mat-subheading-2 center-align\">Inputs in a form</h4>\n\t\t\t\t\t<mat-divider></mat-divider>\n\t\t\t\t\t<form class=\"example-form\">\n\t\t\t\t\t  <mat-form-field class=\"example-full-width\">\n\t\t\t\t\t    <input matInput placeholder=\"Company (disabled)\" disabled value=\"Google\">\n\t\t\t\t\t  </mat-form-field>\n\n\t\t\t\t\t  <table class=\"example-full-width\" cellspacing=\"0\"><tr>\n\t\t\t\t\t    <td><mat-form-field class=\"example-full-width\">\n\t\t\t\t\t      <input matInput placeholder=\"First name\">\n\t\t\t\t\t    </mat-form-field></td>\n\t\t\t\t\t    <td><mat-form-field class=\"example-full-width\">\n\t\t\t\t\t      <input matInput placeholder=\"Long Last Name That Will Be Truncated\">\n\t\t\t\t\t    </mat-form-field></td>\n\t\t\t\t\t  </tr></table>\n\n\t\t\t\t\t  <p>\n\t\t\t\t\t    <mat-form-field class=\"example-full-width\">\n\t\t\t\t\t      <textarea matInput placeholder=\"Address\">1600 Amphitheatre Pkwy</textarea>\n\t\t\t\t\t    </mat-form-field>\n\t\t\t\t\t    <mat-form-field class=\"example-full-width\">\n\t\t\t\t\t      <textarea matInput placeholder=\"Address 2\"></textarea>\n\t\t\t\t\t    </mat-form-field>\n\t\t\t\t\t  </p>\n\n\t\t\t\t\t  <table class=\"example-full-width\" cellspacing=\"0\"><tr>\n\t\t\t\t\t    <td><mat-form-field class=\"example-full-width\">\n\t\t\t\t\t      <input matInput placeholder=\"City\">\n\t\t\t\t\t    </mat-form-field></td>\n\t\t\t\t\t    <td><mat-form-field class=\"example-full-width\">\n\t\t\t\t\t      <input matInput placeholder=\"State\">\n\t\t\t\t\t    </mat-form-field></td>\n\t\t\t\t\t    <td><mat-form-field class=\"example-full-width\">\n\t\t\t\t\t      <input matInput #postalCode maxlength=\"5\" placeholder=\"Postal Code\" value=\"94043\">\n\t\t\t\t\t      <mat-hint align=\"end\">{{postalCode.value.length}} / 5</mat-hint>\n\t\t\t\t\t    </mat-form-field></td>\n\t\t\t\t\t  </tr></table>\n\t\t\t\t\t</form>\n\n\t\t\t\t</div>\n\t\t\t\t<div fxFlex.xs=\"100\" fxFlex.lg=\"50\" fxFlex.md=\"50\" fxFlex.sm=\"50\" >\n\t\t\t\t\t<h4 class=\"mat-subheading-2 center-align\">Inputs with prefixes and suffixes</h4>\n\t\t\t\t\t<mat-divider></mat-divider>\n\t\t\t\t\t<form class=\"example-form\">\n\n\t\t\t\t\t  <mat-form-field class=\"example-full-width\">\n\t\t\t\t\t    <span matPrefix>+1 &nbsp;</span>\n\t\t\t\t\t    <input type=\"tel\" matInput placeholder=\"Telephone\">\n\t\t\t\t\t    <mat-icon matSuffix>mode_edit</mat-icon>\n\t\t\t\t\t  </mat-form-field>\n\t\t\t\t\t  \n\t\t\t\t\t</form>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div fxFlex class=\"input-component-holder mat-elevation-z4\">\n\t\t<mat-toolbar class=\"input-header\" >\n\t\t\t<h1 class=\"mat-headline center-align\" >Examples</h1>\n\t\t</mat-toolbar >\n\n\t\t<mat-tab-group fxFlexFill>\n\t\t\t<mat-tab label=\"TS\">\n\t\t\t\t<div class=\"component-preview\">\n\t            \t<pre style=\"white-space:pre-line;\"><code mwlHighlightJs [source]=\"InputHelpers?.tsSourceInput\" language=\"typescript\"></code></pre>\n\t            </div>\n\t        </mat-tab>\n\t        <mat-tab label=\"HTML\">\n\t        \t<div class=\"component-preview\">\n\t            \t<pre style=\"white-space:pre-line;\"><code mwlHighlightJs [source]=\"InputHelpers?.htmlSourceInput\" language=\"html\"></code></pre>\n\t            </div>\n\t        </mat-tab>\n\n\t        <mat-tab label=\"PREVIEW\">\n\t        \t<div class=\"component-preview\">\n\t\t        \t<form class=\"example-form\">\n\t\t        \t  <mat-form-field class=\"example-full-width\">\n\t\t        \t    <input matInput placeholder=\"Favorite food\" value=\"Sushi\">\n\t\t        \t  </mat-form-field>\n\t\t        \t</form>\n\t\t\t\t</div>\n\t        </mat-tab>\n\t    </mat-tab-group>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/material-widgets/input/input.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/material-widgets/input/input.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input-header {\n  background-color: #327ebd;\n  color: white;\n  padding: 0 5px; }\n\n.input-container {\n  padding: 5px 15px 15px 15px; }\n\n.input-component-holder {\n  border: 1px solid #327ebd;\n  background-color: white; }\n\n.input-component-holder h4 {\n    color: #327ebd;\n    margin: 14px 0; }\n\n.input-component-holder mat-divider {\n    margin-bottom: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWF0ZXJpYWwtd2lkZ2V0cy9pbnB1dC9DOlxcVXNlcnNcXFJvZ2VyRmVkZXJlclxcRGVza3RvcFxcSW1idWVEZXNrXFxOZXcgZm9sZGVyICgyKVxcY2RrLWFkbWluLW1hc3Rlci9zcmNcXGFwcFxcbWF0ZXJpYWwtd2lkZ2V0c1xcaW5wdXRcXGlucHV0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNDO0VBQ0MseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixjQUFjLEVBQUE7O0FBRWY7RUFDQywyQkFBMkIsRUFBQTs7QUFHN0I7RUFDQyx5QkFBeUI7RUFDekIsdUJBQXVCLEVBQUE7O0FBRnhCO0lBS0UsY0FBYztJQUNkLGNBQWMsRUFBQTs7QUFOaEI7SUFVRSxtQkFBbUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21hdGVyaWFsLXdpZGdldHMvaW5wdXQvaW5wdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcblx0LmlucHV0LWhlYWRlciB7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogIzMyN2ViZDtcblx0XHRjb2xvcjogd2hpdGU7XG5cdFx0cGFkZGluZzogMCA1cHg7XG5cdH1cblx0LmlucHV0LWNvbnRhaW5lciB7XG5cdFx0cGFkZGluZzogNXB4IDE1cHggMTVweCAxNXB4O1xuXHRcdFxuXHR9XG4uaW5wdXQtY29tcG9uZW50LWhvbGRlciB7XG5cdGJvcmRlcjogMXB4IHNvbGlkICMzMjdlYmQ7XG5cdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuXG5cdGg0IHtcblx0XHRjb2xvcjogIzMyN2ViZDtcblx0XHRtYXJnaW46IDE0cHggMDtcblx0fVxuXG5cdG1hdC1kaXZpZGVyIHtcblx0XHRtYXJnaW4tYm90dG9tOiAxMHB4O1xuXHR9XG59Il19 */"

/***/ }),

/***/ "./src/app/material-widgets/input/input.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/material-widgets/input/input.component.ts ***!
  \***********************************************************/
/*! exports provided: MyErrorStateMatcher, InputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function() { return MyErrorStateMatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputComponent", function() { return InputComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _helpers_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers.data */ "./src/app/material-widgets/input/helpers.data.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MyErrorStateMatcher = /** @class */ (function () {
    function MyErrorStateMatcher() {
    }
    MyErrorStateMatcher.prototype.isErrorState = function (control, form) {
        var isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    };
    return MyErrorStateMatcher;
}());

var EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
var InputComponent = /** @class */ (function () {
    function InputComponent() {
        this.InputHelpers = _helpers_data__WEBPACK_IMPORTED_MODULE_2__["input_HELPERS"];
        this.links = _helpers_data__WEBPACK_IMPORTED_MODULE_2__["Links"];
        this.showMultiListCode = false;
        this.messages = _helpers_data__WEBPACK_IMPORTED_MODULE_2__["Messages"];
        this.value = 'Clear me';
        this.emailFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email,
        ]);
        this.emailFormControls = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(EMAIL_REGEX)
        ]);
        this.matcher = new MyErrorStateMatcher();
    }
    InputComponent.prototype.ngOnInit = function () {
    };
    InputComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'cdk-input',
            template: __webpack_require__(/*! ./input.component.html */ "./src/app/material-widgets/input/input.component.html"),
            styles: [__webpack_require__(/*! ./input.component.scss */ "./src/app/material-widgets/input/input.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], InputComponent);
    return InputComponent;
}());



/***/ }),

/***/ "./src/app/material-widgets/list/helpers.data.ts":
/*!*******************************************************!*\
  !*** ./src/app/material-widgets/list/helpers.data.ts ***!
  \*******************************************************/
/*! exports provided: LIST_HELPERS, Messages, Links */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIST_HELPERS", function() { return LIST_HELPERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Messages", function() { return Messages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Links", function() { return Links; });
var LIST_HELPERS = {
    tsSourceSelectionList: "\n\t\timport { MatListModule } from '@angular/material';\n\t\t@NgModule({\n\t\t  imports: [\n\t\t   MatListModule\n\t\t})\n\t\texport class AppModule { }\n\t\t\n\t\timport { Component, OnInit } from '@angular/core';\n\t\t@Component({\n\t\t\t  selector: 'cdk-list',\n\t\t\t  templateUrl: './list.component.html',\n\t\t\t  styleUrls: ['./list.component.scss']\n\t\t})\n\t\texport class ListComponent implements OnInit {\n\n\t\t\t  constructor() { }\n\n\t\t\t  ngOnInit() {\n\t\t\t  }\n\t\t }\n\t".trim(),
    htmlSourceSelectionList: "\n\t<mat-selection-list #shoes>\n\t\t<mat-list-option *ngFor=\"let shoe of ['Boots', 'Sneaker', 'Casual']\">\n\t\t\t{{shoe}}\n\t\t</mat-list-option>\n\t</mat-selection-list>\n\t<p>\n\t\tOptions selected: {{shoes.selectedOptions.selected.length}}\n\t</p>\n\t".trim(),
};
var Messages = [
    { from: 'codetok', subject: 'client', content: 'hi there' },
    { from: 'client', subject: 'codetok', content: 'yes' },
    { from: 'jay', subject: 'tom', content: 'yes please' }
];
var Links = ['/home', '/admin'];
//export const shoetypes: Array<any> = ['Boots', 'Sneaker', 'Casual'];


/***/ }),

/***/ "./src/app/material-widgets/list/list.component.html":
/*!***********************************************************!*\
  !*** ./src/app/material-widgets/list/list.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div fxLayout=\"column\"  class=\"components-container-gt-xs\"  [ngClass.xs]=\"'components-container-xs'\"  fxLayoutGap=\"20px\">\n\n\t<div fxFlex class=\"list-component-holder mat-elevation-z4\">\n\t\t<mat-toolbar class=\"list-header\">\n\t\t\t<h1 class=\"mat-headline center-align\" >Lists</h1>\n\t\t</mat-toolbar>\n\t\t\n\t\t<div class=\"list-container\">\n\t\t\t\n\t\t\t<div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"20px\">\n\n\t\t\t\t<div fxFlex.xs=\"100\" fxFlex.lg=\"50\" fxFlex.md=\"50\" fxFlex.sm=\"50\" >\n\t\t\t\t\t<h4 class=\"mat-subheading-2 center-align\">Simple List</h4>\n\t\t\t\t\t\t<mat-divider></mat-divider>\n\t\t\t\t\t\t<mat-list>\n\t\t\t\t\t\t\t<mat-list-item> Pepper </mat-list-item>\n\t\t\t\t\t\t\t<mat-list-item> Salt </mat-list-item>\n\t\t\t\t\t\t\t<mat-list-item> Paprika </mat-list-item>\n\t\t\t\t\t\t</mat-list>\n\t\t\t\t</div>\n\n\t\t\t\t<div fxFlex.xs=\"100\" fxFlex.lg=\"50\" fxFlex.md=\"50\" fxFlex.sm=\"50\" >\n\t\t\t\t\t<h4 class=\"mat-subheading-2 center-align\">Navigation list</h4>\n\t\t\t\t\t<mat-divider></mat-divider>\n\n\t\t\t\t\t<mat-nav-list>\n\t\t\t\t\t  \t<mat-list-item *ngFor=\"let link of links\">\n\t\t\t\t\t     \t<a matLine href=\"...\">{{ link }}</a>\n\t\t\t\t\t     \t<button mat-icon-button>\n\t\t\t\t\t        \t<mat-icon>info</mat-icon>\n\t\t\t\t\t     \t</button>\n\t\t\t\t\t  \t</mat-list-item>\n\t\t\t\t\t</mat-nav-list>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"20px\">\n\n\t\t\t\t<div fxFlex.xs=\"100\" fxFlex.lg=\"50\" fxFlex.md=\"50\" fxFlex.sm=\"50\" >\n\n\t\t\t\t\t<h4 class=\"mat-subheading-2 center-align\">Selection list</h4>\n\t\t\t\t\t<mat-divider></mat-divider>\n\t\t\t\n\t\t\t\t\t<mat-selection-list #shoess>\n\t\t\t\t\t  \t<mat-list-option *ngFor=\"let shoe of ['Boots', 'Sneaker', 'Casual', 'Moccasins', 'Clogs']\">\n\t\t\t\t\t    {{shoe}}\n\t\t\t\t\t  \t</mat-list-option>\n\t\t\t\t\t</mat-selection-list>\n\t\t\t\t<!-- <label class=\"mat-title center-align\">Result :</label> -->\n\t\t\t\t<p class=\"list-container\">\n\t\t\t\t  Options selected: {{shoess.selectedOptions.selected.length}}\n\t\t\t\t</p>\n\t\t\t\t</div>\n\t\t\t\t<!-- <div fxFlex.xs=\"100\" fxFlex.lg=\"50\" fxFlex.md=\"50\" fxFlex.sm=\"50\" > -->\n\t\t\t\t<div fxFlex.xs=\"100\" fxFlex.lg=\"50\" fxFlex.md=\"50\" fxFlex.sm=\"50\">\n\t\t\t\t\t<h4 class=\"mat-subheading-2 center-align\">Multi-line lists</h4>\n\t\t\t\t\t<mat-divider></mat-divider>\n\n\t\t\t\t\t<div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"80px\">\n\t\t\t\t\t<!-- two line list -->\n\t\t\t\t\t\t<mat-list>\n\t\t\t\t\t\t\t<h3>Two line</h3>\n\t\t\t\t\t\t  <mat-list-item *ngFor=\"let message of messages\">\n\t\t\t\t\t\t    <h3 matLine> {{message.from}} </h3>\n\t\t\t\t\t\t    <p matLine>\n\t\t\t\t\t\t      <span> {{message.subject}} </span>\n\t\t\t\t\t\t      <span class=\"demo-2\"> -- {{message.content}} </span>\n\t\t\t\t\t\t    </p>\n\t\t\t\t\t\t  </mat-list-item>\n\t\t\t\t\t\t</mat-list>\n\n\t\t\t\t\t\t<!-- three line list -->\n\t\t\t\t\t\t<mat-list>\n\t\t\t\t\t\t\t<h3>Three line</h3>\n\t\t\t\t\t\t  <mat-list-item *ngFor=\"let message of messages\">\n\t\t\t\t\t\t    <h3 matLine> {{message.from}} </h3>\n\t\t\t\t\t\t    <p matLine> {{message.subject}} </p>\n\t\t\t\t\t\t    <p matLine class=\"demo-2\"> {{message.content}} </p>\n\t\t\t\t\t\t  </mat-list-item>\n\t\t\t\t\t\t</mat-list>\t\t           \n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\n\t\t\t<div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"20px\">\n\n\t\t\t\t<div fxFlex.xs=\"100\" fxFlex.lg=\"50\" fxFlex.md=\"50\" fxFlex.sm=\"50\" >\n\n\t\t\t\t\t<h4 class=\"mat-subheading-2 center-align\">Lists with icons</h4>\n\t\t\t\t\t<mat-divider></mat-divider>\n\t\t\t\n\t\t\t\t\t<mat-list>\n\t\t\t\t\t  <mat-list-item *ngFor=\"let message of messages\">\n\t\t\t\t\t    <mat-icon matListIcon>folder</mat-icon>\n\t\t\t\t\t    <h3 matLine> {{message.from}} </h3>\n\t\t\t\t\t    <p matLine>\n\t\t\t\t\t      <span> {{message.subject}} </span>\n\t\t\t\t\t      <span class=\"demo-2\"> -- {{message.content}} </span>\n\t\t\t\t\t    </p>\n\t\t\t\t\t  </mat-list-item>\n\t\t\t\t\t</mat-list>\n\t\t\t\t\t\t\t           \n\n\t\t\t\t</div>\n\t\t\t\t<div fxFlex.xs=\"100\" fxFlex.lg=\"50\" fxFlex.md=\"50\" fxFlex.sm=\"50\" >\n\t\t\t\t\t<h4  class=\"mat-subheading-2 center-align\">Lists with avatar</h4>\n\t\t\t\t\t<mat-divider></mat-divider>\n\t\t\t\n\t\t\t\t\t<mat-list>\n\t\t\t\t\t  <mat-list-item *ngFor=\"let message of messages\">\n\t\t\t\t\t    <img matListAvatar src=\"assets/man.jpeg\" alt=\"...\">\n\t\t\t\t\t    <h3 matLine> {{message.from}} </h3>\n\t\t\t\t\t    <p matLine>\n\t\t\t\t\t      <span> {{message.subject}} </span>\n\t\t\t\t\t      <span class=\"demo-2\"> -- {{message.content}} </span>\n\t\t\t\t\t    </p>\n\t\t\t\t\t  </mat-list-item>\n\t\t\t\t\t</mat-list>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div fxFlex class=\"list-component-holder mat-elevation-z4\">\n\t\t<mat-toolbar class=\"list-header\" >\n\t\t\t<h1 class=\"mat-headline \" >Examples</h1>\n\t\t</mat-toolbar >\n\n\t\t<mat-tab-group fxFlexFill>\n\t\t\t<mat-tab label=\"TS\">\n\t\t\t\t<div class=\"component-preview\">\n\t            \t<pre style=\"white-space:pre-line;\"><code mwlHighlightJs [source]=\"listHelpers?.tsSourceSelectionList\" language=\"typescript\"></code></pre>\n\t           \t</div>\n\t        </mat-tab>\n\t        <mat-tab label=\"HTML\">\n\t        \t<div class=\"component-preview\">\n\t            \t<pre style=\"white-space:pre-line;\"><code mwlHighlightJs [source]=\"listHelpers?.htmlSourceSelectionList\" language=\"html\"></code></pre>\n\t            </div>\n\t        </mat-tab>\n\n\t        <mat-tab label=\"PREVIEW\">\n\t        \t<div class=\"component-preview\">\n\t\t        \t<mat-selection-list #shoes>\n\t\t\t\t\t  \t<mat-list-option *ngFor=\"let shoe of ['Boots', 'Sneaker', 'Casual']\">\n\t\t\t\t\t    {{shoe}}\n\t\t\t\t\t  \t</mat-list-option>\n\t\t\t\t\t</mat-selection-list>\n\n\t\t\t\t<p>\n\t\t\t\t  Options selected: {{shoes.selectedOptions.selected.length}}\n\t\t\t\t</p>\n\t\t\t  \t</div>\n\t        </mat-tab>\n\t    </mat-tab-group>\n\t</div>\n\n</div>"

/***/ }),

/***/ "./src/app/material-widgets/list/list.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/material-widgets/list/list.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".list-header {\n  background-color: #327ebd;\n  color: white;\n  padding: 0 5px; }\n\n.list-container {\n  padding: 5px 15px 15px 15px; }\n\n.list-component-holder {\n  border: 1px solid #327ebd;\n  background-color: white; }\n\n.list-component-holder h4 {\n    color: #327ebd;\n    margin: 14px 0; }\n\n.list-component-holder mat-divider {\n    margin-bottom: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWF0ZXJpYWwtd2lkZ2V0cy9saXN0L0M6XFxVc2Vyc1xcUm9nZXJGZWRlcmVyXFxEZXNrdG9wXFxJbWJ1ZURlc2tcXE5ldyBmb2xkZXIgKDIpXFxjZGstYWRtaW4tbWFzdGVyL3NyY1xcYXBwXFxtYXRlcmlhbC13aWRnZXRzXFxsaXN0XFxsaXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixjQUFjLEVBQUE7O0FBRWY7RUFDQywyQkFBMkIsRUFBQTs7QUFFNUI7RUFDQyx5QkFBeUI7RUFDekIsdUJBQXVCLEVBQUE7O0FBRnhCO0lBS0UsY0FBYztJQUNkLGNBQWMsRUFBQTs7QUFOaEI7SUFVRSxtQkFBbUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21hdGVyaWFsLXdpZGdldHMvbGlzdC9saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxpc3QtaGVhZGVyIHtcblx0YmFja2dyb3VuZC1jb2xvcjogIzMyN2ViZDtcblx0Y29sb3I6IHdoaXRlO1xuXHRwYWRkaW5nOiAwIDVweDtcbn1cbi5saXN0LWNvbnRhaW5lciB7XG5cdHBhZGRpbmc6IDVweCAxNXB4IDE1cHggMTVweDtcbn1cbi5saXN0LWNvbXBvbmVudC1ob2xkZXIge1xuXHRib3JkZXI6IDFweCBzb2xpZCAjMzI3ZWJkO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcblxuXHRoNCB7XG5cdFx0Y29sb3I6ICMzMjdlYmQ7XG5cdFx0bWFyZ2luOiAxNHB4IDA7XG5cdH1cblxuXHRtYXQtZGl2aWRlciB7XG5cdFx0bWFyZ2luLWJvdHRvbTogMTBweDtcblx0fVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/material-widgets/list/list.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/material-widgets/list/list.component.ts ***!
  \*********************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _helpers_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers.data */ "./src/app/material-widgets/list/helpers.data.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListComponent = /** @class */ (function () {
    function ListComponent() {
        this.listHelpers = _helpers_data__WEBPACK_IMPORTED_MODULE_1__["LIST_HELPERS"];
        this.links = _helpers_data__WEBPACK_IMPORTED_MODULE_1__["Links"];
        this.showMultiListCode = false;
        this.messages = _helpers_data__WEBPACK_IMPORTED_MODULE_1__["Messages"];
    }
    ListComponent.prototype.ngOnInit = function () {
    };
    ListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'cdk-list',
            template: __webpack_require__(/*! ./list.component.html */ "./src/app/material-widgets/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.scss */ "./src/app/material-widgets/list/list.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/material-widgets/material-widgets.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/material-widgets/material-widgets.module.ts ***!
  \*************************************************************/
/*! exports provided: highlightJsFactory, MaterialWidgetsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "highlightJsFactory", function() { return highlightJsFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialWidgetsModule", function() { return MaterialWidgetsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/esm5/stepper.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _material_widgets_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./material-widgets.router */ "./src/app/material-widgets/material-widgets.router.ts");
/* harmony import */ var highlight_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! highlight.js */ "./node_modules/highlight.js/lib/index.js");
/* harmony import */ var highlight_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(highlight_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var angular_highlight_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! angular-highlight-js */ "./node_modules/angular-highlight-js/dist/esm/src/index.js");
/* harmony import */ var highlight_js_lib_languages_typescript__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! highlight.js/lib/languages/typescript */ "./node_modules/highlight.js/lib/languages/typescript.js");
/* harmony import */ var highlight_js_lib_languages_typescript__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(highlight_js_lib_languages_typescript__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./list/list.component */ "./src/app/material-widgets/list/list.component.ts");
/* harmony import */ var _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./buttons/buttons.component */ "./src/app/material-widgets/buttons/buttons.component.ts");
/* harmony import */ var _stepper_stepper_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./stepper/stepper.component */ "./src/app/material-widgets/stepper/stepper.component.ts");
/* harmony import */ var _expansion_panel_expansion_panel_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./expansion-panel/expansion-panel.component */ "./src/app/material-widgets/expansion-panel/expansion-panel.component.ts");
/* harmony import */ var _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./spinner/spinner.component */ "./src/app/material-widgets/spinner/spinner.component.ts");
/* harmony import */ var _cards_cards_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./cards/cards.component */ "./src/app/material-widgets/cards/cards.component.ts");
/* harmony import */ var _icons_icons_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./icons/icons.component */ "./src/app/material-widgets/icons/icons.component.ts");
/* harmony import */ var _autocomplete_autocomplete_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./autocomplete/autocomplete.component */ "./src/app/material-widgets/autocomplete/autocomplete.component.ts");
/* harmony import */ var _checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./checkbox/checkbox.component */ "./src/app/material-widgets/checkbox/checkbox.component.ts");
/* harmony import */ var _datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./datepicker/datepicker.component */ "./src/app/material-widgets/datepicker/datepicker.component.ts");
/* harmony import */ var _slider_slider_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./slider/slider.component */ "./src/app/material-widgets/slider/slider.component.ts");
/* harmony import */ var _slidetoggle_slidetoggle_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./slidetoggle/slidetoggle.component */ "./src/app/material-widgets/slidetoggle/slidetoggle.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/material-widgets/menu/menu.component.ts");
/* harmony import */ var _progressbar_progressbar_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./progressbar/progressbar.component */ "./src/app/material-widgets/progressbar/progressbar.component.ts");
/* harmony import */ var _input_input_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./input/input.component */ "./src/app/material-widgets/input/input.component.ts");
/* harmony import */ var _radio_radio_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./radio/radio.component */ "./src/app/material-widgets/radio/radio.component.ts");
/* harmony import */ var _select_select_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./select/select.component */ "./src/app/material-widgets/select/select.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





























//import { SelectComponent } from './select/select.component';








function highlightJsFactory() {
    highlight_js__WEBPACK_IMPORTED_MODULE_16__["registerLanguage"]('typescript', highlight_js_lib_languages_typescript__WEBPACK_IMPORTED_MODULE_18__);
    return highlight_js__WEBPACK_IMPORTED_MODULE_16__;
}
var MaterialWidgetsModule = /** @class */ (function () {
    function MaterialWidgetsModule() {
    }
    MaterialWidgetsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatAutocompleteModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatProgressSpinnerModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatRadioModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_8__["MatListModule"],
                _angular_material_stepper__WEBPACK_IMPORTED_MODULE_9__["MatStepperModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatMenuModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__["MatExpansionModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatProgressBarModule"],
                angular_highlight_js__WEBPACK_IMPORTED_MODULE_17__["HighlightJsModule"].forRoot({
                    provide: angular_highlight_js__WEBPACK_IMPORTED_MODULE_17__["HIGHLIGHT_JS"],
                    useFactory: highlightJsFactory
                }),
                _material_widgets_router__WEBPACK_IMPORTED_MODULE_15__["MaterialWidgetsRouterModule"]
            ],
            declarations: [
                _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_20__["ButtonsComponent"],
                _list_list_component__WEBPACK_IMPORTED_MODULE_19__["ListComponent"],
                _stepper_stepper_component__WEBPACK_IMPORTED_MODULE_21__["StepperComponent"],
                _expansion_panel_expansion_panel_component__WEBPACK_IMPORTED_MODULE_22__["ExpansionPanelComponent"],
                _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_23__["SpinnerComponent"],
                _cards_cards_component__WEBPACK_IMPORTED_MODULE_24__["CardsComponent"],
                _icons_icons_component__WEBPACK_IMPORTED_MODULE_25__["IconsComponent"],
                _autocomplete_autocomplete_component__WEBPACK_IMPORTED_MODULE_26__["AutocompleteComponent"],
                _checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_27__["CheckboxComponent"],
                _select_select_component__WEBPACK_IMPORTED_MODULE_35__["SelectComponent"],
                _datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_28__["DatepickerComponent"],
                _slider_slider_component__WEBPACK_IMPORTED_MODULE_29__["SliderComponent"],
                _slidetoggle_slidetoggle_component__WEBPACK_IMPORTED_MODULE_30__["SlidetoggleComponent"],
                _menu_menu_component__WEBPACK_IMPORTED_MODULE_31__["MenuComponent"],
                _progressbar_progressbar_component__WEBPACK_IMPORTED_MODULE_32__["ProgressbarComponent"],
                _input_input_component__WEBPACK_IMPORTED_MODULE_33__["InputComponent"],
                _radio_radio_component__WEBPACK_IMPORTED_MODULE_34__["RadioComponent"],
                _select_select_component__WEBPACK_IMPORTED_MODULE_35__["SelectComponent"],
            ],
            exports: []
        })
    ], MaterialWidgetsModule);
    return MaterialWidgetsModule;
}());



/***/ }),

/***/ "./src/app/material-widgets/material-widgets.router.ts":
/*!*************************************************************!*\
  !*** ./src/app/material-widgets/material-widgets.router.ts ***!
  \*************************************************************/
/*! exports provided: MaterialWidgetsRouterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialWidgetsRouterModule", function() { return MaterialWidgetsRouterModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./buttons/buttons.component */ "./src/app/material-widgets/buttons/buttons.component.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list/list.component */ "./src/app/material-widgets/list/list.component.ts");
/* harmony import */ var _stepper_stepper_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./stepper/stepper.component */ "./src/app/material-widgets/stepper/stepper.component.ts");
/* harmony import */ var _expansion_panel_expansion_panel_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./expansion-panel/expansion-panel.component */ "./src/app/material-widgets/expansion-panel/expansion-panel.component.ts");
/* harmony import */ var _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./spinner/spinner.component */ "./src/app/material-widgets/spinner/spinner.component.ts");
/* harmony import */ var _cards_cards_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cards/cards.component */ "./src/app/material-widgets/cards/cards.component.ts");
/* harmony import */ var _icons_icons_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./icons/icons.component */ "./src/app/material-widgets/icons/icons.component.ts");
/* harmony import */ var _autocomplete_autocomplete_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./autocomplete/autocomplete.component */ "./src/app/material-widgets/autocomplete/autocomplete.component.ts");
/* harmony import */ var _checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./checkbox/checkbox.component */ "./src/app/material-widgets/checkbox/checkbox.component.ts");
/* harmony import */ var _select_select_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./select/select.component */ "./src/app/material-widgets/select/select.component.ts");
/* harmony import */ var _input_input_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./input/input.component */ "./src/app/material-widgets/input/input.component.ts");
/* harmony import */ var _radio_radio_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./radio/radio.component */ "./src/app/material-widgets/radio/radio.component.ts");
/* harmony import */ var _datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./datepicker/datepicker.component */ "./src/app/material-widgets/datepicker/datepicker.component.ts");
/* harmony import */ var _slider_slider_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./slider/slider.component */ "./src/app/material-widgets/slider/slider.component.ts");
/* harmony import */ var _slidetoggle_slidetoggle_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./slidetoggle/slidetoggle.component */ "./src/app/material-widgets/slidetoggle/slidetoggle.component.ts");
/* harmony import */ var _progressbar_progressbar_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./progressbar/progressbar.component */ "./src/app/material-widgets/progressbar/progressbar.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/material-widgets/menu/menu.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var materialWidgetRoutes = [
    { path: 'buttons', component: _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_2__["ButtonsComponent"], data: { animation: 'buttons' } },
    { path: 'list', component: _list_list_component__WEBPACK_IMPORTED_MODULE_3__["ListComponent"], data: { animation: 'list' } },
    { path: 'stepper', component: _stepper_stepper_component__WEBPACK_IMPORTED_MODULE_4__["StepperComponent"], data: { animation: 'stepper' } },
    { path: 'expansion', component: _expansion_panel_expansion_panel_component__WEBPACK_IMPORTED_MODULE_5__["ExpansionPanelComponent"], data: { animation: 'expansion' } },
    { path: 'spinner', component: _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_6__["SpinnerComponent"], data: { animation: 'spinner' } },
    { path: 'cards', component: _cards_cards_component__WEBPACK_IMPORTED_MODULE_7__["CardsComponent"], data: { animation: 'cards' } },
    { path: 'icons', component: _icons_icons_component__WEBPACK_IMPORTED_MODULE_8__["IconsComponent"], data: { animation: 'icons' } },
    { path: 'autocomplete', component: _autocomplete_autocomplete_component__WEBPACK_IMPORTED_MODULE_9__["AutocompleteComponent"], data: { animation: 'autocomplete' } },
    { path: 'checkbox', component: _checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_10__["CheckboxComponent"], data: { animation: 'checkbox' } },
    { path: 'select', component: _select_select_component__WEBPACK_IMPORTED_MODULE_11__["SelectComponent"], data: { animation: 'select' } },
    { path: 'input', component: _input_input_component__WEBPACK_IMPORTED_MODULE_12__["InputComponent"], data: { animation: 'input' } },
    { path: 'radio', component: _radio_radio_component__WEBPACK_IMPORTED_MODULE_13__["RadioComponent"], data: { animation: 'radio' } },
    { path: 'datepicker', component: _datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_14__["DatepickerComponent"], data: { animation: 'datepicker' } },
    { path: 'slider', component: _slider_slider_component__WEBPACK_IMPORTED_MODULE_15__["SliderComponent"], data: { animation: 'slider' } },
    { path: 'slide-toggle', component: _slidetoggle_slidetoggle_component__WEBPACK_IMPORTED_MODULE_16__["SlidetoggleComponent"], data: { animation: 'slide-toggle' } },
    { path: 'progress-bar', component: _progressbar_progressbar_component__WEBPACK_IMPORTED_MODULE_17__["ProgressbarComponent"], data: { animation: 'progress-bar' } },
    { path: 'menu', component: _menu_menu_component__WEBPACK_IMPORTED_MODULE_18__["MenuComponent"], data: { animation: 'menu' } },
    { path: '', redirectTo: '/buttons', pathMatch: 'full', }
];
var MaterialWidgetsRouterModule = /** @class */ (function () {
    function MaterialWidgetsRouterModule() {
    }
    MaterialWidgetsRouterModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(materialWidgetRoutes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], MaterialWidgetsRouterModule);
    return MaterialWidgetsRouterModule;
}());



/***/ }),

/***/ "./src/app/material-widgets/menu/helpers.data.ts":
/*!*******************************************************!*\
  !*** ./src/app/material-widgets/menu/helpers.data.ts ***!
  \*******************************************************/
/*! exports provided: MENU_HELPERS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MENU_HELPERS", function() { return MENU_HELPERS; });
var MENU_HELPERS = {
    tsSourceMenu: "\nimport { MatMenuModule } from '@angular/material';\n@NgModule({\n      imports: [\n        MatMenuModule,\n    })\nexport class AppModule { }\n\nimport { Component, OnInit } from '@angular/core';\n@Component({\n  selector: 'cdk-menu',\n  templateUrl: './menu.component.html',\n  styleUrls: ['./menu.component.scss']\n})\nexport class MenuComponent implements OnInit {\n\n  constructor() { }\n\n  ngOnInit() {\n  }\n\n}\n\t".trim(),
    htmlSourceMenu: "\n<div>\n    <button mat-button [matMenuTriggerFor]=\"menu\">Menu</button>\n    <mat-menu #menu=\"matMenu\">\n        <button mat-menu-item>Item 1</button>\n        <button mat-menu-item>Item 2</button>\n    </mat-menu>\n</div>\n\t".trim(),
};


/***/ }),

/***/ "./src/app/material-widgets/menu/menu.component.html":
/*!***********************************************************!*\
  !*** ./src/app/material-widgets/menu/menu.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayout.lt-sm=\"column\" class=\"components-container-gt-xs\"  [ngClass.xs]=\"'components-container-xs'\"  fxLayoutGap=\"20px\">\n\n\t<div fxFlex class=\"menu-component-holder mat-elevation-z4\">\n\n\t\t<mat-toolbar class=\"menu-header\">\n\t\t\t<h1 class=\"mat-headline center-align\" >Menus</h1>\n\t\t</mat-toolbar>\n\t\n\t\t<div class=\"menu-container\">\n\t\t\n\t\t\t<div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"20px\">\n\n\t\t\t\t<div fxFlex.xs=\"100\" fxFlex.lg=\"50\" fxFlex.md=\"50\" fxFlex.sm=\"50\" >\n\n\t\t\t\t\t<h4 class=\"mat-subheading-2 center-align\">Basic Menu</h4>\n\t\t\t\t\t<mat-divider></mat-divider>\n\t\t\t\t\t\n\t\t\t\t\t<div>\n\t\t                <button mat-button [matMenuTriggerFor]=\"menu\">Menu</button>\n\t\t                <mat-menu #menu=\"matMenu\">\n\t\t                    <button mat-menu-item>Item 1</button>\n\t\t                    <button mat-menu-item>Item 2</button>\n\t\t                </mat-menu>\n\t\t            </div>\n\t\t\t\t</div>\n\n\t\t\t\t<div fxFlex.xs=\"100\" fxFlex.lg=\"50\" fxFlex.md=\"50\" fxFlex.sm=\"50\" >\n\n\t\t\t\t\t<h4 class=\"mat-subheading-2 center-align\">Nested Menu</h4>\n\t\t\t\t\t<mat-divider></mat-divider>\n\n\t\t\t\t\t<div>\n\t\t                <button mat-button [matMenuTriggerFor]=\"animals\">Animal index</button>\n\n\t\t                <mat-menu #animals=\"matMenu\">\n\t\t                \t<button mat-menu-item [matMenuTriggerFor]=\"vertebrates\">Vertebrates</button>\n\t\t                \t<button mat-menu-item [matMenuTriggerFor]=\"invertebrates\">Invertebrates</button>\n\t\t                </mat-menu>\n\n\t\t                <mat-menu #vertebrates=\"matMenu\">\n\t\t                    <button mat-menu-item [matMenuTriggerFor]=\"fish\">Fishes</button>\n\t\t                    <button mat-menu-item [matMenuTriggerFor]=\"amphibians\">Amphibians</button>\n\t\t                    <button mat-menu-item [matMenuTriggerFor]=\"reptiles\">Reptiles</button>\n\t\t                    <button mat-menu-item>Birds</button>\n\t\t                    <button mat-menu-item>Mammals</button>\n\t\t                </mat-menu>\n\n\t\t                <mat-menu #invertebrates=\"matMenu\">\n\t\t                    <button mat-menu-item>Insects</button>\n\t\t                    <button mat-menu-item>Molluscs</button>\n\t\t                    <button mat-menu-item>Crustaceans</button>\n\t\t                    <button mat-menu-item>Corals</button>\n\t\t                    <button mat-menu-item>Arachnids</button>\n\t\t                    <button mat-menu-item>Velvet worms</button>\n\t\t                    <button mat-menu-item>Horseshoe crabs</button>\n\t\t                </mat-menu>\n\n\t\t                <mat-menu #fish=\"matMenu\">\n\t\t                    <button mat-menu-item>Baikal oilfish</button>\n\t\t                    <button mat-menu-item>Bala shark</button>\n\t\t                    <button mat-menu-item>Ballan wrasse</button>\n\t\t                    <button mat-menu-item>Bamboo shark</button>\n\t\t                    <button mat-menu-item>Banded killifish</button>\n\t\t                </mat-menu>\n\n\t\t                <mat-menu #amphibians=\"matMenu\">\n\t\t                    <button mat-menu-item>Sonoran desert toad</button>\n\t\t                    <button mat-menu-item>Western toad</button>\n\t\t                    <button mat-menu-item>Arroyo toad</button>\n\t\t                    <button mat-menu-item>Yosemite toad</button>\n\t\t                </mat-menu>\n\n\t\t                <mat-menu #reptiles=\"matMenu\">\n\t\t                    <button mat-menu-item>Banded Day Gecko</button>\n\t\t                    <button mat-menu-item>Banded Gila Monster</button>\n\t\t                    <button mat-menu-item>Black Tree Monitor</button>\n\t\t                    <button mat-menu-item>Blue Spiny Lizard</button>\n\t\t                    <button mat-menu-item disabled>Velociraptor</button>\n\t\t                </mat-menu>\n\t            \t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"20px\">\n\n\t\t\t\t<div fxFlex.xs=\"100\" fxFlex.lg=\"50\" fxFlex.md=\"50\" fxFlex.sm=\"50\" >\n\n\t\t\t\t\t<h4 class=\"mat-subheading-2 center-align\">Menu with icons</h4>\n\t\t\t\t\t<mat-divider></mat-divider>\n\t\t\t\n\t\t\t\t\t<div>\n\t\t                <button mat-icon-button [matMenuTriggerFor]=\"menu\">\n\t\t                    <mat-icon>more_vert</mat-icon>\n\t\t                </button>\n\t\t                <mat-menu #menu=\"matMenu\">\n\t\t                    <button mat-menu-item>\n\t\t                        <mat-icon>dialpad</mat-icon>\n\t\t                        <span>Redial</span>\n\t\t                    </button>\n\t\t                    <button mat-menu-item disabled>\n\t\t                        <mat-icon>voicemail</mat-icon>\n\t\t                        <span>Check voicemail</span>\n\t\t                    </button>\n\t\t                    <button mat-menu-item>\n\t\t                        <mat-icon>notifications_off</mat-icon>\n\t\t                        <span>Disable alerts</span>\n\t\t                    </button>\n\t\t                </mat-menu>\n\t\t            </div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<div fxFlex class=\"menu-component-holder mat-elevation-z4\">\n\n\t\t<mat-toolbar class=\"menu-header\">\n\t\t\t<h1 class=\"mat-headline center-align\">Examples</h1>\n\t\t</mat-toolbar>\n\n\t\t<mat-tab-group fxFlexFill>\n\n\t\t\t<mat-tab label=\"TS\">\n\t\t\t\t<div class=\"component-preview\">\n\t            \t<pre style=\"white-space:pre-line;\"><code mwlHighlightJs [source]=\"menuHelpers?.tsSourceMenu\" language=\"typescript\"></code></pre>\n\t            </div>\n\t        </mat-tab>\n\n\t        <mat-tab label=\"HTML\">\n\t        \t<div class=\"component-preview\">\n\t            \t<pre style=\"white-space:pre-line;\"><code mwlHighlightJs [source]=\"menuHelpers?.htmlSourceMenu\" language=\"html\"></code></pre>\n\t            </div>\n\t        </mat-tab>\n\n\t        <mat-tab label=\"PREVIEW\">\n\t        \t<div class=\"component-preview\">\n\t        \t\t<div style=\"padding: 20px;\">\n\t\t        \t\n\t\t\t        \t<div>\n\t\t\t                <button mat-button [matMenuTriggerFor]=\"menu\">Menu</button>\n\t\t\t                <mat-menu #menu=\"matMenu\">\n\t\t\t                    <button mat-menu-item>Item 1</button>\n\t\t\t                    <button mat-menu-item>Item 2</button>\n\t\t\t                </mat-menu>\n\t\t\t            </div>\n\t\t            </div>\n\t\t\t\t</div>\n\t        </mat-tab>\n\t    </mat-tab-group>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/material-widgets/menu/menu.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/material-widgets/menu/menu.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".menu-header {\n  background-color: #327ebd;\n  color: white;\n  padding: 0 5px; }\n\n.menu-container {\n  padding: 5px 15px 15px 15px; }\n\n.menu-component-holder {\n  border: 1px solid #327ebd;\n  background-color: white; }\n\n.menu-component-holder h4 {\n    color: #327ebd;\n    margin: 14px 0; }\n\n.menu-component-holder mat-divider {\n    margin-bottom: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWF0ZXJpYWwtd2lkZ2V0cy9tZW51L0M6XFxVc2Vyc1xcUm9nZXJGZWRlcmVyXFxEZXNrdG9wXFxJbWJ1ZURlc2tcXE5ldyBmb2xkZXIgKDIpXFxjZGstYWRtaW4tbWFzdGVyL3NyY1xcYXBwXFxtYXRlcmlhbC13aWRnZXRzXFxtZW51XFxtZW51LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixjQUFjLEVBQUE7O0FBRWY7RUFDQywyQkFBMkIsRUFBQTs7QUFFNUI7RUFDQyx5QkFBeUI7RUFDekIsdUJBQXVCLEVBQUE7O0FBRnhCO0lBS0UsY0FBYztJQUNkLGNBQWMsRUFBQTs7QUFOaEI7SUFVRSxtQkFBbUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21hdGVyaWFsLXdpZGdldHMvbWVudS9tZW51LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1lbnUtaGVhZGVyIHtcblx0YmFja2dyb3VuZC1jb2xvcjogIzMyN2ViZDtcblx0Y29sb3I6IHdoaXRlO1xuXHRwYWRkaW5nOiAwIDVweDtcbn1cbi5tZW51LWNvbnRhaW5lciB7XG5cdHBhZGRpbmc6IDVweCAxNXB4IDE1cHggMTVweDtcbn1cbi5tZW51LWNvbXBvbmVudC1ob2xkZXIge1xuXHRib3JkZXI6IDFweCBzb2xpZCAjMzI3ZWJkO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcblxuXHRoNCB7XG5cdFx0Y29sb3I6ICMzMjdlYmQ7XG5cdFx0bWFyZ2luOiAxNHB4IDA7XG5cdH1cblxuXHRtYXQtZGl2aWRlciB7XG5cdFx0bWFyZ2luLWJvdHRvbTogMTBweDtcblx0fVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/material-widgets/menu/menu.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/material-widgets/menu/menu.component.ts ***!
  \*********************************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _helpers_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers.data */ "./src/app/material-widgets/menu/helpers.data.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MenuComponent = /** @class */ (function () {
    function MenuComponent() {
        this.menuHelpers = _helpers_data__WEBPACK_IMPORTED_MODULE_1__["MENU_HELPERS"];
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'cdk-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/material-widgets/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.scss */ "./src/app/material-widgets/menu/menu.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/material-widgets/progressbar/helpers.data.ts":
/*!**************************************************************!*\
  !*** ./src/app/material-widgets/progressbar/helpers.data.ts ***!
  \**************************************************************/
/*! exports provided: PROGRESSBAR_HELPERS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROGRESSBAR_HELPERS", function() { return PROGRESSBAR_HELPERS; });
var PROGRESSBAR_HELPERS = {
    tsSourceProgressbar: "\nimport { MatProgressBarModule } from '@angular/material';\n@NgModule({\n\t\t  imports: [\n\t\t    MatProgressBarModule,\n\t\t})\nexport class AppModule { }\n\nimport { Component, OnInit } from '@angular/core';\n@Component({\n  selector: 'cdk-progressbar',\n  templateUrl: './progressbar.component.html',\n  styleUrls: ['./progressbar.component.scss']\n})\nexport class ProgressbarComponent implements OnInit {\n\n  constructor() { }\n\n  ngOnInit() {\n  }\n\n  public color;\n  public mode;\n  public value;\n  public bufferValue;\n  \n\n}\n\n\t".trim(),
    htmlSourceProgressbar: "\n<div fxLayout=\"column\" fxLayoutGap=15px>\n\t<section class=\"example-section\" fxLayout=\"row\"  >\n\t\t<label class=\"example-margin\">Color:</label>\n\t\t<mat-radio-group [(ngModel)]=\"color\" fxLayout=\"column\"  fxLayoutGap=10px>\n\t\t\t<mat-radio-button class=\"example-margin\" value=\"primary\">\n\t\t\tPrimary\n\t\t\t</mat-radio-button>\n\t\t\t<mat-radio-button class=\"example-margin\" value=\"accent\">\n\t\t\tAccent\n\t\t\t</mat-radio-button>\n\t\t\t<mat-radio-button class=\"example-margin\" value=\"warn\">\n\t\t\tWarn\n\t\t\t</mat-radio-button>\n\t\t\t\n\t\t</mat-radio-group>\n\t</section>\n\n\t<section class=\"example-section\" fxLayout=\"row\" >\n\t\t<label class=\"example-margin\" >Mode:</label>\n\t\t<mat-radio-group [(ngModel)]=\"mode\" fxLayout=\"column\"  fxLayoutGap=10px>\n\t\t\t<mat-radio-button class=\"example-margin\" value=\"determinate\">\n\t\t\tDeterminate\n\t\t\t</mat-radio-button>\n\t\t\t<mat-radio-button class=\"example-margin\" value=\"indeterminate\">\n\t\t\tIndeterminate\n\t\t\t</mat-radio-button>\n\t\t\t<mat-radio-button class=\"example-margin\" value=\"buffer\">\n\t\t\tBuffer\n\t\t\t</mat-radio-button>\n\t\t\t<mat-radio-button class=\"example-margin\" value=\"query\">\n\t\t\tQuery\n\t\t\t</mat-radio-button>\n\t\t</mat-radio-group>\n\t</section>\n</div>\n\n<section class=\"example-section\" *ngIf=\"mode == 'determinate' || mode == 'buffer'\">\n\t<label class=\"example-margin\">Progress:</label>\n\t<mat-slider class=\"example-margin\" [(ngModel)]=\"value\"></mat-slider>\n</section>\n\n<section class=\"example-section\" *ngIf=\"mode == 'buffer'\">\n\t<label class=\"example-margin\">Buffer:</label>\n\t<mat-slider class=\"example-margin\" [(ngModel)]=\"bufferValue\"></mat-slider>\n</section>\n\n<label class=\"mat-title\">Result</label>\n\n<section class=\"example-section\">\n\t<mat-progress-bar\n\tclass=\"example-margin\"\n\t[color]=\"color\"\n\t[mode]=\"mode\"\n\t[value]=\"value\"\n\t[bufferValue]=\"bufferValue\">\n\t</mat-progress-bar>\n</section>\n\t".trim(),
};


/***/ }),

/***/ "./src/app/material-widgets/progressbar/progressbar.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/material-widgets/progressbar/progressbar.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayout.lt-sm=\"column\" class=\"components-container-gt-xs\"  fxLayoutGap=\"20px\">\n\n\t<div fxFlex class=\"progressbar-component-holder mat-elevation-z4\">\n\n\t\t<mat-toolbar class=\"progressbar-header\">\n\t\t\t<h1 class=\"mat-headline center-align\">Progress Bar</h1>\n\t\t</mat-toolbar>\n\t\t\n\t\t<div class=\"progressbar-container\">\n\n\t\t\t<div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"20px\">\n\n\t\t\t\t<div fxFlex.xs=\"100\" fxFlex.lg=\"50\" fxFlex.md=\"50\" fxFlex.sm=\"50\" >\n\n\t\t\t\t\t<h4 class=\"mat-subheading-2\">Progressbar configuration</h4>\n\t\t\t\t\t<mat-divider></mat-divider>\n\t\t\t\t\t\t\n\t\t\t\t\t\t<!-- <h2 class=\"mat-subheading-2\">Progress bar configuration</h2> -->\n\t\t\t\t\t\t<div fxLayout=\"column\" fxLayoutGap=15px>\n\t\t\t\t\t\t\t<section class=\"example-section\" fxLayout=\"row\"  >\n\t\t\t\t\t\t\t\t<label class=\"example-margin\">Color:</label>\n\t\t\t\t\t\t\t\t<mat-radio-group [(ngModel)]=\"color\" fxLayout=\"column\"  fxLayoutGap=10px>\n\t\t\t\t\t\t\t\t\t<mat-radio-button class=\"example-margin\" value=\"primary\">\n\t\t\t\t\t\t\t\t\tPrimary\n\t\t\t\t\t\t\t\t\t</mat-radio-button>\n\t\t\t\t\t\t\t\t\t<mat-radio-button class=\"example-margin\" value=\"accent\">\n\t\t\t\t\t\t\t\t\tAccent\n\t\t\t\t\t\t\t\t\t</mat-radio-button>\n\t\t\t\t\t\t\t\t\t<mat-radio-button class=\"example-margin\" value=\"warn\">\n\t\t\t\t\t\t\t\t\tWarn\n\t\t\t\t\t\t\t\t\t</mat-radio-button>\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t</mat-radio-group>\n\t\t\t\t\t\t\t</section>\n\n\t\t\t\t\t\t\t<section class=\"example-section\" fxLayout=\"row\" >\n\t\t\t\t\t\t\t\t<label class=\"example-margin\" >Mode:</label>\n\t\t\t\t\t\t\t\t<mat-radio-group [(ngModel)]=\"mode\" fxLayout=\"column\"  fxLayoutGap=10px>\n\t\t\t\t\t\t\t\t\t<mat-radio-button class=\"example-margin\" value=\"determinate\">\n\t\t\t\t\t\t\t\t\tDeterminate\n\t\t\t\t\t\t\t\t\t</mat-radio-button>\n\t\t\t\t\t\t\t\t\t<mat-radio-button class=\"example-margin\" value=\"indeterminate\">\n\t\t\t\t\t\t\t\t\tIndeterminate\n\t\t\t\t\t\t\t\t\t</mat-radio-button>\n\t\t\t\t\t\t\t\t\t<mat-radio-button class=\"example-margin\" value=\"buffer\">\n\t\t\t\t\t\t\t\t\tBuffer\n\t\t\t\t\t\t\t\t\t</mat-radio-button>\n\t\t\t\t\t\t\t\t\t<mat-radio-button class=\"example-margin\" value=\"query\">\n\t\t\t\t\t\t\t\t\tQuery\n\t\t\t\t\t\t\t\t\t</mat-radio-button>\n\t\t\t\t\t\t\t\t</mat-radio-group>\n\t\t\t\t\t\t\t</section>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<section class=\"example-section\" *ngIf=\"mode == 'determinate' || mode == 'buffer'\">\n\t\t\t\t\t\t\t<label class=\"example-margin\">Progress:</label>\n\t\t\t\t\t\t\t<mat-slider class=\"example-margin\" [(ngModel)]=\"value\"></mat-slider>\n\t\t\t\t\t\t</section>\n\t\t\t\t\t\t<section class=\"example-section\" *ngIf=\"mode == 'buffer'\">\n\t\t\t\t\t\t\t<label class=\"example-margin\">Buffer:</label>\n\t\t\t\t\t\t\t<mat-slider class=\"example-margin\" [(ngModel)]=\"bufferValue\"></mat-slider>\n\t\t\t\t\t\t</section>\n\n\t\t\t\t\t\t<label class=\"mat-title\">Result</label>\n\n\t\t\t\t\t\t<section class=\"example-section\">\n\t\t\t\t\t\t\t<mat-progress-bar\n\t\t\t\t\t\t\tclass=\"example-margin\"\n\t\t\t\t\t\t\t[color]=\"color\"\n\t\t\t\t\t\t\t[mode]=\"mode\"\n\t\t\t\t\t\t\t[value]=\"value\"\n\t\t\t\t\t\t\t[bufferValue]=\"bufferValue\">\n\t\t\t\t\t\t\t</mat-progress-bar>\n\t\t\t\t\t\t</section>\n\t\t\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<div fxFlex class=\"progressbar-component-holder mat-elevation-z4\">\n\n\t\t<mat-toolbar  class=\"progressbar-header\">\n\t\t\t<h1 class=\"mat-headline\" >Examples</h1>\n\t\t</mat-toolbar>\n\n\t\t<mat-tab-group fxFlexFill>\n\n\t\t\t<mat-tab label=\"TS\">\n\t\t\t\t<div class=\"component-preview\">\n\t            \t<pre style=\"white-space:pre-line;\"><code mwlHighlightJs [source]=\"progressbarHelpers?.tsSourceProgressbar\" language=\"typescript\"></code></pre>\n\t            </div>\n\t        </mat-tab>\n\n\t        <mat-tab label=\"HTML\">\n\t        \t<div class=\"component-preview\">\n\t            \t<pre style=\"white-space:pre-line;\"><code mwlHighlightJs [source]=\"progressbarHelpers?.htmlSourceProgressbar\" language=\"html\"></code></pre>\n\t            </div>\n\t        </mat-tab>\n\n\t        <mat-tab label=\"PREVIEW\">\n\t        \t<div class=\"component-preview\">\n\t\t        \t<div>\n\t\t        \t\t<div class=\"progressbar-container\">\n\t\t\t\t\t\t\t<div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"20px\">\n\t\t\t\t\t\t\t\t<div fxFlex.xs=\"100\" fxFlex.lg=\"50\" fxFlex.md=\"50\" fxFlex.sm=\"50\" >\n\t\t\t\t\t\t\t\t\t<h4 class=\"mat-subheading-2 center-align\">Progressbar configuration</h4>\n\t\t\t\t\t\t\t\t\t<mat-divider></mat-divider>\n\t\t\t\t\t\t\t\t\t\t<div fxLayout=\"column\" fxLayoutGap=15px>\n\t\t\t\t\t\t\t\t\t\t\t<section class=\"example-section\" fxLayout=\"row\"  >\n\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"example-margin\">Color:</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<mat-radio-group [(ngModel)]=\"colors\" fxLayout=\"column\"  fxLayoutGap=10px>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<mat-radio-button class=\"example-margin\" value=\"primary\">\n\t\t\t\t\t\t\t\t\t\t\t\t\tPrimary\n\t\t\t\t\t\t\t\t\t\t\t\t\t</mat-radio-button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<mat-radio-button class=\"example-margin\" value=\"accent\">\n\t\t\t\t\t\t\t\t\t\t\t\t\tAccent\n\t\t\t\t\t\t\t\t\t\t\t\t\t</mat-radio-button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<mat-radio-button class=\"example-margin\" value=\"warn\">\n\t\t\t\t\t\t\t\t\t\t\t\t\tWarn\n\t\t\t\t\t\t\t\t\t\t\t\t\t</mat-radio-button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t</mat-radio-group>\n\t\t\t\t\t\t\t\t\t\t\t</section>\n\n\t\t\t\t\t\t\t\t\t\t\t<section class=\"example-section\" fxLayout=\"row\" >\n\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"example-margin\" >Mode:</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<mat-radio-group [(ngModel)]=\"modes\" fxLayout=\"column\"  fxLayoutGap=10px>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<mat-radio-button class=\"example-margin\" value=\"determinate\">\n\t\t\t\t\t\t\t\t\t\t\t\t\tDeterminate\n\t\t\t\t\t\t\t\t\t\t\t\t\t</mat-radio-button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<mat-radio-button class=\"example-margin\" value=\"indeterminate\">\n\t\t\t\t\t\t\t\t\t\t\t\t\tIndeterminate\n\t\t\t\t\t\t\t\t\t\t\t\t\t</mat-radio-button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<mat-radio-button class=\"example-margin\" value=\"buffer\">\n\t\t\t\t\t\t\t\t\t\t\t\t\tBuffer\n\t\t\t\t\t\t\t\t\t\t\t\t\t</mat-radio-button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<mat-radio-button class=\"example-margin\" value=\"query\">\n\t\t\t\t\t\t\t\t\t\t\t\t\tQuery\n\t\t\t\t\t\t\t\t\t\t\t\t\t</mat-radio-button>\n\t\t\t\t\t\t\t\t\t\t\t\t</mat-radio-group>\n\t\t\t\t\t\t\t\t\t\t\t</section>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t<section class=\"example-section\" *ngIf=\"modes == 'determinate' || modes == 'buffer'\">\n\t\t\t\t\t\t\t\t\t\t\t<label class=\"example-margin\">Progress:</label>\n\t\t\t\t\t\t\t\t\t\t\t<mat-slider class=\"example-margin\" [(ngModel)]=\"values\"></mat-slider>\n\t\t\t\t\t\t\t\t\t\t</section>\n\n\t\t\t\t\t\t\t\t\t\t<section class=\"example-section\" *ngIf=\"modes == 'buffer'\">\n\t\t\t\t\t\t\t\t\t\t\t<label class=\"example-margin\">Buffer:</label>\n\t\t\t\t\t\t\t\t\t\t\t<mat-slider class=\"example-margin\" [(ngModel)]=\"bufferValues\"></mat-slider>\n\t\t\t\t\t\t\t\t\t\t</section>\n\n\t\t\t\t\t\t\t\t\t\t<label class=\"mat-title\">Result</label>\n\n\t\t\t\t\t\t\t\t\t\t<section class=\"example-section\">\n\t\t\t\t\t\t\t\t\t\t\t<mat-progress-bar\n\t\t\t\t\t\t\t\t\t\t\tclass=\"example-margin\"\n\t\t\t\t\t\t\t\t\t\t\t[color]=\"colors\"\n\t\t\t\t\t\t\t\t\t\t\t[mode]=\"modes\"\n\t\t\t\t\t\t\t\t\t\t\t[value]=\"values\"\n\t\t\t\t\t\t\t\t\t\t\t[bufferValue]=\"bufferValues\">\n\t\t\t\t\t\t\t\t\t\t\t</mat-progress-bar>\n\t\t\t\t\t\t\t\t\t\t</section>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</mat-tab>\n\t    </mat-tab-group>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/material-widgets/progressbar/progressbar.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/material-widgets/progressbar/progressbar.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".progressbar-header {\n  background-color: #327ebd;\n  color: white;\n  padding: 0 5px; }\n\n.progressbar-container {\n  padding: 5px 15px 15px 15px; }\n\n.progressbar-component-holder {\n  border: 1px solid #327ebd;\n  background-color: white; }\n\n.progressbar-component-holder h4 {\n    color: #327ebd;\n    margin: 14px 0; }\n\n.progressbar-component-holder mat-divider {\n    margin-bottom: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWF0ZXJpYWwtd2lkZ2V0cy9wcm9ncmVzc2Jhci9DOlxcVXNlcnNcXFJvZ2VyRmVkZXJlclxcRGVza3RvcFxcSW1idWVEZXNrXFxOZXcgZm9sZGVyICgyKVxcY2RrLWFkbWluLW1hc3Rlci9zcmNcXGFwcFxcbWF0ZXJpYWwtd2lkZ2V0c1xccHJvZ3Jlc3NiYXJcXHByb2dyZXNzYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixjQUFjLEVBQUE7O0FBRWY7RUFDQywyQkFBMkIsRUFBQTs7QUFFNUI7RUFDQyx5QkFBeUI7RUFDekIsdUJBQXVCLEVBQUE7O0FBRnhCO0lBS0UsY0FBYztJQUNkLGNBQWMsRUFBQTs7QUFOaEI7SUFVRSxtQkFBbUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21hdGVyaWFsLXdpZGdldHMvcHJvZ3Jlc3NiYXIvcHJvZ3Jlc3NiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZ3Jlc3NiYXItaGVhZGVyIHtcblx0YmFja2dyb3VuZC1jb2xvcjogIzMyN2ViZDtcblx0Y29sb3I6IHdoaXRlO1xuXHRwYWRkaW5nOiAwIDVweDtcbn1cbi5wcm9ncmVzc2Jhci1jb250YWluZXIge1xuXHRwYWRkaW5nOiA1cHggMTVweCAxNXB4IDE1cHg7XG59XG4ucHJvZ3Jlc3NiYXItY29tcG9uZW50LWhvbGRlciB7XG5cdGJvcmRlcjogMXB4IHNvbGlkICMzMjdlYmQ7XG5cdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuXG5cdGg0IHtcblx0XHRjb2xvcjogIzMyN2ViZDtcblx0XHRtYXJnaW46IDE0cHggMDtcblx0fVxuXG5cdG1hdC1kaXZpZGVyIHtcblx0XHRtYXJnaW4tYm90dG9tOiAxMHB4O1xuXHR9XG59Il19 */"

/***/ }),

/***/ "./src/app/material-widgets/progressbar/progressbar.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/material-widgets/progressbar/progressbar.component.ts ***!
  \***********************************************************************/
/*! exports provided: ProgressbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressbarComponent", function() { return ProgressbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _helpers_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers.data */ "./src/app/material-widgets/progressbar/helpers.data.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProgressbarComponent = /** @class */ (function () {
    function ProgressbarComponent() {
        this.progressbarHelpers = _helpers_data__WEBPACK_IMPORTED_MODULE_1__["PROGRESSBAR_HELPERS"];
    }
    ProgressbarComponent.prototype.ngOnInit = function () {
    };
    ProgressbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'cdk-progressbar',
            template: __webpack_require__(/*! ./progressbar.component.html */ "./src/app/material-widgets/progressbar/progressbar.component.html"),
            styles: [__webpack_require__(/*! ./progressbar.component.scss */ "./src/app/material-widgets/progressbar/progressbar.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProgressbarComponent);
    return ProgressbarComponent;
}());



/***/ }),

/***/ "./src/app/material-widgets/radio/helpers.data.ts":
/*!********************************************************!*\
  !*** ./src/app/material-widgets/radio/helpers.data.ts ***!
  \********************************************************/
/*! exports provided: RADIO_HELPERS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RADIO_HELPERS", function() { return RADIO_HELPERS; });
var RADIO_HELPERS = {
    tsSourceRadio: "\nimport { MatRadioModule } from '@angular/material';\n@NgModule({\n      imports: [\n        MatRadioModule,\n    })\nexport class AppModule { }\n\nimport { Component, OnInit } from '@angular/core';\n@Component({\n  selector: 'cdk-radio',\n  templateUrl: './radio.component.html',\n  styleUrls: ['./radio.component.scss']\n})\nexport class RadioComponent implements OnInit {\n\n  constructor() { }\n\n  ngOnInit() {\n  }\n\n  favoriteSeason: string;\n\n  seasons = [\n    'Winter',\n    'Spring',\n    'Summer',\n    'Autumn',\n  ];\n}\n\t".trim(),
    htmlSourceRadio: "\n<h4 class=\"mat-title\">Season:</h4>\n<mat-radio-group  [(ngModel)]=\"favoriteSeason\" class=\"example-radio-button\">\n    <mat-radio-button  *ngFor=\"let season of seasons\" [value]=\"season\" class=\"example-radio-button\">\n                  {{season}}\n    </mat-radio-button>\n</mat-radio-group>\n\n<div class=\"example-selected-value mat-title\">Your favorite season is: {{favoriteSeason}}\n</div>\n\t".trim(),
};


/***/ }),

/***/ "./src/app/material-widgets/radio/radio.component.html":
/*!*************************************************************!*\
  !*** ./src/app/material-widgets/radio/radio.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayout.lt-sm=\"column\" class=\"components-container-gt-xs\"  [ngClass.xs]=\"'components-container-xs'\"  fxLayoutGap=\"20px\">\n\n\t<div fxFlex class=\"radio-component-holder mat-elevation-z4\">\n\n\t\t<mat-toolbar class=\"radio-header\">\n\t\t\t<h1 class=\"mat-headline center-align\" >Radio Button</h1>\n\t\t</mat-toolbar>\n\t\n\t\t<div class=\"radio-container\" fxLayout=\"column\">\n\n\t\t\t<h4 class=\"mat-title\">Season:</h4>\n\n\t\t\t<mat-radio-group  [(ngModel)]=\"favoriteSeason\" class=\"example-radio-button\">\n\t\t\t\t<mat-radio-button  *ngFor=\"let season of seasons\" [value]=\"season\" class=\"example-radio-button\">\n\t\t\t\t\t\t\t\t\t\t{{season}}\n\t\t\t\t</mat-radio-button>\n\t\t\t</mat-radio-group>\n\n\t\t\t<div class=\"example-selected-value mat-title\">Your favorite season is: {{favoriteSeason}}\n\t\t\t</div>\n\t\t\t\t\t    \t\n\n\t\t</div>\n\t</div>\n\n\t<div fxFlex class=\"radio-component-holder mat-elevation-z4\">\n\n\t\t<mat-toolbar  class=\"radio-header\">\n\t\t\t<h1 class=\"mat-headline\" >Examples</h1>\n\t\t</mat-toolbar>\n\n\t\t<mat-tab-group fxFlexFill>\n\n\t\t\t<mat-tab label=\"TS\">\n\t\t\t\t<div class=\"component-preview\">\n\t            \t<pre style=\"white-space:pre-line;\"><code mwlHighlightJs [source]=\"radioHelpers?.tsSourceRadio\" language=\"typescript\"></code></pre>\n\t            </div>\n\t        </mat-tab>\n\t        <mat-tab label=\"HTML\">\n\t        \t<div class=\"component-preview\">\n\t            \t<pre style=\"white-space:pre-line;\"><code mwlHighlightJs [source]=\"radioHelpers?.htmlSourceRadio\" language=\"html\"></code></pre>\n\t            </div>\n\t        </mat-tab>\n\n\t        <mat-tab label=\"PREVIEW\">\n\t\t        <div class=\"component-preview\">\n\t\t        \t<div>\n\t\t        \t\t<div class=\"radio-container\" fxLayout=\"column\">\n\n\t\t\t\t\t\t\t<h4 class=\"mat-title\">Season:</h4>\n\n\t\t\t\t\t\t\t<mat-radio-group  [(ngModel)]=\"favoriteSeason\" class=\"example-radio-button\">\n\t\t\t\t\t\t\t\t<mat-radio-button  *ngFor=\"let season of seasons\" [value]=\"season\" class=\"example-radio-button\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{season}}\n\t\t\t\t\t\t\t\t</mat-radio-button>\n\t\t\t\t\t\t\t</mat-radio-group>\n\n\t\t\t\t\t\t\t<div class=\"example-selected-value mat-title\">Your favorite season is: {{favoriteSeason}}\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t    \t\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</mat-tab>\n\t    </mat-tab-group>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/material-widgets/radio/radio.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/material-widgets/radio/radio.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-radio-button {\n  margin: 5px; }\n\n.radio-header {\n  background-color: #327ebd;\n  color: white;\n  padding: 0 5px; }\n\n.radio-container {\n  padding: 5px 15px 15px 15px; }\n\n.radio-component-holder {\n  border: 1px solid #327ebd;\n  background-color: white; }\n\n.radio-component-holder h4 {\n    color: #327ebd;\n    margin: 14px 0; }\n\n.radio-component-holder mat-divider {\n    margin-bottom: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWF0ZXJpYWwtd2lkZ2V0cy9yYWRpby9DOlxcVXNlcnNcXFJvZ2VyRmVkZXJlclxcRGVza3RvcFxcSW1idWVEZXNrXFxOZXcgZm9sZGVyICgyKVxcY2RrLWFkbWluLW1hc3Rlci9zcmNcXGFwcFxcbWF0ZXJpYWwtd2lkZ2V0c1xccmFkaW9cXHJhZGlvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsV0FBVyxFQUFBOztBQUViO0VBQ0MseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixjQUFjLEVBQUE7O0FBRWY7RUFDQywyQkFBMkIsRUFBQTs7QUFFNUI7RUFDQyx5QkFBeUI7RUFDekIsdUJBQXVCLEVBQUE7O0FBRnhCO0lBS0UsY0FBYztJQUNkLGNBQWMsRUFBQTs7QUFOaEI7SUFVRSxtQkFBbUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21hdGVyaWFsLXdpZGdldHMvcmFkaW8vcmFkaW8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuLmV4YW1wbGUtcmFkaW8tYnV0dG9uIHtcbiAgbWFyZ2luOiA1cHg7XG59XG4ucmFkaW8taGVhZGVyIHtcblx0YmFja2dyb3VuZC1jb2xvcjogIzMyN2ViZDtcblx0Y29sb3I6IHdoaXRlO1xuXHRwYWRkaW5nOiAwIDVweDtcbn1cbi5yYWRpby1jb250YWluZXIge1xuXHRwYWRkaW5nOiA1cHggMTVweCAxNXB4IDE1cHg7XG59XG4ucmFkaW8tY29tcG9uZW50LWhvbGRlciB7XG5cdGJvcmRlcjogMXB4IHNvbGlkICMzMjdlYmQ7XG5cdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuXG5cdGg0IHtcblx0XHRjb2xvcjogIzMyN2ViZDtcblx0XHRtYXJnaW46IDE0cHggMDtcblx0fVxuXG5cdG1hdC1kaXZpZGVyIHtcblx0XHRtYXJnaW4tYm90dG9tOiAxMHB4O1xuXHR9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/material-widgets/radio/radio.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/material-widgets/radio/radio.component.ts ***!
  \***********************************************************/
/*! exports provided: RadioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioComponent", function() { return RadioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _helpers_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers.data */ "./src/app/material-widgets/radio/helpers.data.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RadioComponent = /** @class */ (function () {
    function RadioComponent() {
        this.seasons = [
            'Winter',
            'Spring',
            'Summer',
            'Autumn',
        ];
        this.radioHelpers = _helpers_data__WEBPACK_IMPORTED_MODULE_1__["RADIO_HELPERS"];
    }
    RadioComponent.prototype.ngOnInit = function () {
    };
    RadioComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'cdk-radio',
            template: __webpack_require__(/*! ./radio.component.html */ "./src/app/material-widgets/radio/radio.component.html"),
            styles: [__webpack_require__(/*! ./radio.component.scss */ "./src/app/material-widgets/radio/radio.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], RadioComponent);
    return RadioComponent;
}());



/***/ }),

/***/ "./src/app/material-widgets/select/helpers.data.ts":
/*!*********************************************************!*\
  !*** ./src/app/material-widgets/select/helpers.data.ts ***!
  \*********************************************************/
/*! exports provided: select_HELPERS, Messages, Links */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "select_HELPERS", function() { return select_HELPERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Messages", function() { return Messages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Links", function() { return Links; });
var select_HELPERS = {
    tsSourceSelectionselect: "\nimport { MatSelectModule } from '@angular/material';\n\n\n\t  \t@NgModule({\n\t\t  imports: [\n\t\t    MatSelectModule\n\t\t})\n\t\texport class AppModule { }\nimport { Component, OnInit } from '@angular/core';\n\n@Component({\n  selector: 'cdk-select',\n  templateUrl: './select.component.html',\n  styleUrls: ['./select.component.scss']\n})\nexport class selectComponent implements OnInit {\n\n  constructor() { }\n\n  ngOnInit() {\n  }\n }\n\t".trim(),
    htmlSourceSelectionselect: "\n\t<mat-form-field>\n\t  <mat-select placeholder=\"Select an option\" disableRipple>\n\t    <mat-option value=\"1\">Option 1</mat-option>\n\t    <mat-option value=\"2\">Option 2</mat-option>\n\t    <mat-option value=\"3\">Option 3</mat-option>\n\t  </mat-select>\n\t</mat-form-field>\n\n\t".trim(),
};
var Messages = [
    { from: 'codetok', subject: 'client', content: 'hi there' },
    { from: 'client', subject: 'codetok', content: 'yes' },
    { from: 'jay', subject: 'tom', content: 'yes please' }
];
var Links = ['/home', '/admin'];


/***/ }),

/***/ "./src/app/material-widgets/select/select.component.html":
/*!***************************************************************!*\
  !*** ./src/app/material-widgets/select/select.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" class=\"components-container-gt-xs\"  [ngClass.xs]=\"'components-container-xs'\"  fxLayoutGap=\"20px\"  >\n\t<div fxFlex class=\"select-component-holder mat-elevation-z4\">\n\t\t<mat-toolbar class=\"list-header\">\n\t\t\t<h1 class=\"mat-headline center-align\" >Select</h1>\n\t\t</mat-toolbar>\n\t\t<div class=\"list-container\">\n\t\t\t\n\t\t\t<div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"20px\">\n\n\t\t\t\t<div fxFlex.xs=\"100\" fxFlex.lg=\"50\" fxFlex.md=\"50\" fxFlex.sm=\"50\" >\n\t\t\t\t\t<h4  class=\"mat-subheading-2 center-align\">Basic select</h4>\n\t\t\t\t\t<mat-divider></mat-divider>\n\t\t\t\t\t<mat-form-field>\n\t  \t\t\t\t\t<mat-select placeholder=\"Favorite food\">\n\t\t    \t\t\t\t<mat-option *ngFor=\"let food of foods\" [value]=\"food.value\">\n\t\t      \t\t\t\t\t\t\t\t{{ food.viewValue }}\n\t\t    \t\t\t\t</mat-option>\n\t  \t\t\t\t\t</mat-select>\n\t\t\t\t\t</mat-form-field>\n\t\t\t\t</div>\n\t\t\t\t<div fxFlex.xs=\"100\" fxFlex.lg=\"50\" fxFlex.md=\"50\" fxFlex.sm=\"50\" >\n\t\t\t\t\t<h4  class=\"mat-subheading-2 center-align\">Select with 2-way value binding</h4>\n\t\t\t\t\t<mat-divider></mat-divider>\n\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t  <mat-select [(value)]=\"select\">\n\t\t\t\t\t    <mat-option>None</mat-option>\n\t\t\t\t\t    <mat-option value=\"option1\">Option 1</mat-option>\n\t\t\t\t\t    <mat-option value=\"option2\">Option 2</mat-option>\n\t\t\t\t\t    <mat-option value=\"option3\">Option 3</mat-option>\n\t\t\t\t\t  </mat-select>\n\t\t\t\t\t</mat-form-field>\n\n\t\t\t\t\t<h2 class=\"mat-body-2 center-align\">You selected: {{select}}</h2>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\n\t\t\t<div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"20px\">\n\t\t\t\t<div fxFlex.xs=\"100\" fxFlex.lg=\"50\" fxFlex.md=\"50\" fxFlex.sm=\"50\" >\n\t\t\t\t\t<h4 class=\"mat-subheading-2 center-align\">Select in a form</h4>\n\t\t\t\t\t<mat-divider></mat-divider>\n\t\t\t\t\t<form>\n\t\t\t\t\t  \t<mat-form-field>\n\t\t\t\t\t\t    <mat-select placeholder=\"Favorite food\" [(ngModel)]=\"selectedValue\" name=\"food\">\n\t\t\t\t\t\t      <mat-option *ngFor=\"let food of foods\" [value]=\"food.value\">\n\t\t\t\t\t\t        {{food.viewValue}}\n\t\t\t\t\t\t      </mat-option>\n\t\t\t\t\t\t    </mat-select>\n\t\t\t\t\t  \t</mat-form-field>\n\n\t\t\t\t\t  \t<p> Selected value: {{selectedValue}} </p>\n\t\t\t\t\t</form>\n\t\t\t\t</div>\n\t\t\t\t\n\t\t\t\n\t\t\t\n\t\t\t\t<div fxFlex.xs=\"100\" fxFlex.lg=\"50\" fxFlex.md=\"50\" fxFlex.sm=\"50\" >\n\t\t\t\t\t<h4  class=\"mat-subheading-2 center-align\">Select with form field features</h4>\n\t\t\t\t\t<mat-divider></mat-divider>\n\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t  \t<mat-select placeholder=\"Favorite animal\" [formControl]=\"animalControl\" required>\n\t\t\t\t\t\t    <mat-option>--</mat-option>\n\t\t\t\t\t\t    <mat-option *ngFor=\"let animal of animals\" [value]=\"animal\">\n\t\t\t\t\t\t      {{animal.name}}\n\t\t\t\t\t\t    </mat-option>\n\t\t\t\t\t  \t</mat-select>\n\t\t\t\t\t  \t<mat-error *ngIf=\"animalControl.hasError('required')\">Please choose an animal</mat-error>\n\t\t\t\t\t  \t<mat-hint>{{animalControl.value?.sound}}</mat-hint>\n\t\t\t\t\t</mat-form-field>\n\t\t\t\t</div>\n\t\t\t</div>\t\n\t\t\t<div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"20px\">\n\t\t\t\t<div fxFlex.xs=\"100\" fxFlex.lg=\"50\" fxFlex.md=\"50\" fxFlex.sm=\"50\" >\n\t\t\t\t\t<h4  class=\"mat-subheading-2 center-align\">Disabled select</h4>\n\t\t\t\t\t<mat-divider></mat-divider>\n\t\t\t\t\t<p>\n\t\t\t\t\t  <mat-checkbox [formControl]=\"disableSelect\">Disable select</mat-checkbox>\n\t\t\t\t\t</p>\n\t\t\t\t\t<p>\n\t\t\t\t\t  <mat-form-field>\n\t\t\t\t\t    <mat-select placeholder=\"Choose an option\" [disabled]=\"disableSelect.value\">\n\t\t\t\t\t      <mat-option value=\"option1\">Option 1</mat-option>\n\t\t\t\t\t      <mat-option value=\"option2\" disabled>Option 2 (disabled)</mat-option>\n\t\t\t\t\t      <mat-option value=\"option3\">Option 3</mat-option>\n\t\t\t\t\t    </mat-select>\n\t\t\t\t\t  </mat-form-field>\n\t\t\t\t\t</p>\n\t\t\t\t</div>\n\t\t\t\t<div fxFlex.xs=\"100\" fxFlex.lg=\"50\" fxFlex.md=\"50\" fxFlex.sm=\"50\" >\n\t\t\t\t\t<h4  class=\"mat-subheading-2 center-align\">Select with reset option</h4>\n\t\t\t\t\t<mat-divider></mat-divider>\n\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t  <mat-select placeholder=\"State\">\n\t\t\t\t\t    <mat-option>None</mat-option>\n\t\t\t\t\t    <mat-option *ngFor=\"let state of states\" [value]=\"state\">{{state}}</mat-option>\n\t\t\t\t\t  </mat-select>\n\t\t\t\t\t</mat-form-field>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"20px\">\n\t\t\t\t<div fxFlex.xs=\"100\" fxFlex.lg=\"50\" fxFlex.md=\"50\" fxFlex.sm=\"50\" >\n\t\t\t\t\t<h4 class=\"mat-subheading-2 center-align\">Select with option groups</h4>\n\t\t\t\t\t<mat-divider></mat-divider>\n\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t\t<mat-select placeholder=\"Pokemon\" [formControl]=\"pokemonControl\">\n\t\t\t\t\t\t    <mat-option>-- None --</mat-option>\n\t\t\t\t\t\t    <mat-optgroup *ngFor=\"let group of pokemonGroups\" [label]=\"group.name\"\n\t\t\t\t\t\t                  [disabled]=\"group.disabled\">\n\t\t\t\t\t\t      <mat-option *ngFor=\"let pokemon of group.pokemon\" [value]=\"pokemon.value\">\n\t\t\t\t\t\t        {{ pokemon.viewValue }}\n\t\t\t\t\t\t      </mat-option>\n\t\t\t\t\t\t    </mat-optgroup>\n\t\t\t\t\t\t  </mat-select>\n\t\t\t\t\t</mat-form-field>\n\t\t\t\t</div>\n\t\t\t\t<div fxFlex.xs=\"100\" fxFlex.lg=\"50\" fxFlex.md=\"50\" fxFlex.sm=\"50\" >\n\t\t\t\t\t<h4 class=\"mat-subheading-2 center-align\">Select with multiple selection</h4>\n\t\t\t\t\t<mat-divider></mat-divider>\n\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t  <mat-select placeholder=\"Toppings\" [formControl]=\"toppings\" multiple>\n\t\t\t\t\t    <mat-option *ngFor=\"let topping of toppingList\" [value]=\"topping\">{{topping}}</mat-option>\n\t\t\t\t\t  </mat-select>\n\t\t\t\t\t</mat-form-field>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"20px\">\n\t\t\t\t<div fxFlex.xs=\"100\" fxFlex.lg=\"50\" fxFlex.md=\"50\" fxFlex.sm=\"50\" >\n\t\t\t\t\t<h4  class=\"mat-subheading-2 center-align\">Select with custom trigger text</h4>\n\t\t\t\t\t<mat-divider></mat-divider>\n\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t\t  <mat-select placeholder=\"Toppings\" [formControl]=\"topping\" multiple>\n\t\t\t\t\t\t    <mat-select-trigger>\n\t\t\t\t\t\t      {{topping.value ? topping.value[0] : ''}}\n\t\t\t\t\t\t      <span *ngIf=\"topping.value?.length > 1\" class=\"example-additional-selection\">\n\t\t\t\t\t\t        (+{{topping.value.length - 1}} others)\n\t\t\t\t\t\t      </span>\n\t\t\t\t\t\t    </mat-select-trigger>\n\t\t\t\t\t\t    <mat-option *ngFor=\"let topping of toppingLists\" [value]=\"topping\">{{topping}}</mat-option>\n\t\t\t\t\t\t  </mat-select>\n\t\t\t\t\t</mat-form-field>\n\t\t\t\t</div>\n\t\t\t\t<div fxFlex.xs=\"100\" fxFlex.lg=\"50\" fxFlex.md=\"50\" fxFlex.sm=\"50\" >\n\t\t\t\t\t<h4 class=\"mat-subheading-2 center-align\">Select with no option ripple</h4>\n\t\t\t\t\t<mat-divider></mat-divider>\n\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t  <mat-select placeholder=\"Select an option\" disableRipple>\n\t\t\t\t\t    <mat-option value=\"1\">Option 1</mat-option>\n\t\t\t\t\t    <mat-option value=\"2\">Option 2</mat-option>\n\t\t\t\t\t    <mat-option value=\"3\">Option 3</mat-option>\n\t\t\t\t\t  </mat-select>\n\t\t\t\t\t</mat-form-field>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"20px\">\n\t\t\t\t<div fxFlex.xs=\"100\" fxFlex.lg=\"50\" fxFlex.md=\"50\" fxFlex.sm=\"50\" >\n\t\t\t\t\t<h4  class=\"mat-subheading-2 center-align\">Select with custom panel styling</h4>\n\t\t\t\t\t<mat-divider></mat-divider>\n\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t  <mat-select placeholder=\"Panel color\" [formControl]=\"panelColor\"\n\t\t\t\t\t              panelClass=\"example-panel-{{panelColor.value}}\">\n\t\t\t\t\t    <mat-option value=\"red\">Red</mat-option>\n\t\t\t\t\t    <mat-option value=\"green\">Green</mat-option>\n\t\t\t\t\t    <mat-option value=\"blue\">Blue</mat-option>\n\t\t\t\t\t  </mat-select>\n\t\t\t\t\t</mat-form-field>\n\t\t\t\t</div>\n\t\t\t\t<div fxFlex.xs=\"100\" fxFlex.lg=\"50\" fxFlex.md=\"50\" fxFlex.sm=\"50\" >\n\t\t\t\t\t<h4  class=\"mat-subheading-2 center-align\">Select with a custom ErrorStateMatcher</h4>\n\t\t\t\t\t<mat-divider></mat-divider>\n\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t  <mat-select placeholder=\"Choose one\" [formControl]=\"selected\" [errorStateMatcher]=\"matcher\">\n\t\t\t\t\t    <mat-option>Clear</mat-option>\n\t\t\t\t\t    <mat-option value=\"valid\">Valid option</mat-option>\n\t\t\t\t\t    <mat-option value=\"invalid\">Invalid option</mat-option>\n\t\t\t\t\t  </mat-select>\n\t\t\t\t\t  <mat-hint>Errors appear instantly!</mat-hint>\n\t\t\t\t\t  <mat-error *ngIf=\"selected.hasError('required')\">You must make a selection</mat-error>\n\t\t\t\t\t  <mat-error *ngIf=\"selected.hasError('pattern') && !selected.hasError('required')\">\n\t\t\t\t\t    Your selection is invalid\n\t\t\t\t\t  </mat-error>\n\t\t\t\t\t</mat-form-field>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div fxFlex class=\"select-component-holder mat-elevation-z4\">\n\t\t<mat-toolbar class=\"list-header\">\n\t\t\t<h1 class=\"mat-headline center-align\" >Examples</h1>\n\t\t</mat-toolbar >\n\n\t\t<mat-tab-group fxFlexFill>\n\t\t\t<mat-tab label=\"TS\">\n\t\t\t\t<div class=\"component-preview\">\n\t            \t<pre style=\"white-space:pre-line;\"><code mwlHighlightJs [source]=\"SelectHelpers?.tsSourceSelectionselect\" language=\"typescript\"></code></pre>\n\t            </div>\n\t        </mat-tab>\n\t        <mat-tab label=\"HTML\">\n\t        \t<div class=\"component-preview\">\n\t            \t<pre style=\"white-space:pre-line;\"><code mwlHighlightJs [source]=\"SelectHelpers?.htmlSourceSelectionselect\" language=\"html\"></code></pre>\n\t            </div>\n\t        </mat-tab>\n\n\t        <mat-tab label=\"PREVIEW\">\n\t        \t<div class=\"component-preview\">\n\t\t        \t<mat-form-field>\n\t\t        \t  <mat-select placeholder=\"Select an option\" disableRipple>\n\t\t        \t    <mat-option value=\"1\">Option 1</mat-option>\n\t\t        \t    <mat-option value=\"2\">Option 2</mat-option>\n\t\t        \t    <mat-option value=\"3\">Option 3</mat-option>\n\t\t        \t  </mat-select>\n\t\t        \t</mat-form-field>\n\n\t\t\t\t</div>\n\t        </mat-tab>\n\t    </mat-tab-group>\n\t</div>\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/material-widgets/select/select.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/material-widgets/select/select.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".list-header {\n  background-color: #327ebd;\n  color: white;\n  padding: 0 5px; }\n\n.list-container {\n  padding: 5px 15px 15px 15px; }\n\n.example-panel-red .mat-select-content {\n  background: #327ebd; }\n\n.example-panel-green .mat-select-content {\n  background: #327ebd; }\n\n.example-panel-blue .mat-select-content {\n  background: #327ebd; }\n\n.select-component-holder {\n  border: 1px solid #327ebd;\n  background-color: white; }\n\n.select-component-holder h4 {\n    color: #327ebd;\n    margin: 14px 0; }\n\n.select-component-holder mat-divider {\n    margin-bottom: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWF0ZXJpYWwtd2lkZ2V0cy9zZWxlY3QvQzpcXFVzZXJzXFxSb2dlckZlZGVyZXJcXERlc2t0b3BcXEltYnVlRGVza1xcTmV3IGZvbGRlciAoMilcXGNkay1hZG1pbi1tYXN0ZXIvc3JjXFxhcHBcXG1hdGVyaWFsLXdpZGdldHNcXHNlbGVjdFxcc2VsZWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNDO0VBQ0MseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixjQUFjLEVBQUE7O0FBRWY7RUFDQywyQkFBMkIsRUFBQTs7QUFJN0I7RUFDRSxtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSxtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSxtQkFBbUIsRUFBQTs7QUFFckI7RUFDQyx5QkFBeUI7RUFDekIsdUJBQXVCLEVBQUE7O0FBRnhCO0lBS0UsY0FBYztJQUNkLGNBQWMsRUFBQTs7QUFOaEI7SUFVRSxtQkFBbUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21hdGVyaWFsLXdpZGdldHMvc2VsZWN0L3NlbGVjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGNkay1saXN0IHtcblx0Lmxpc3QtaGVhZGVyIHtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjMzI3ZWJkO1xuXHRcdGNvbG9yOiB3aGl0ZTtcblx0XHRwYWRkaW5nOiAwIDVweDtcblx0fVxuXHQubGlzdC1jb250YWluZXIge1xuXHRcdHBhZGRpbmc6IDVweCAxNXB4IDE1cHggMTVweDtcblx0XHQvLyBjb2xvcjogd2hpdGU7XG5cdH1cbi8vIH1cbi5leGFtcGxlLXBhbmVsLXJlZCAubWF0LXNlbGVjdC1jb250ZW50IHtcbiAgYmFja2dyb3VuZDogIzMyN2ViZDtcbn1cblxuLmV4YW1wbGUtcGFuZWwtZ3JlZW4gLm1hdC1zZWxlY3QtY29udGVudCB7XG4gIGJhY2tncm91bmQ6ICMzMjdlYmQ7XG59XG5cbi5leGFtcGxlLXBhbmVsLWJsdWUgLm1hdC1zZWxlY3QtY29udGVudCB7XG4gIGJhY2tncm91bmQ6ICMzMjdlYmQ7XG59XG4uc2VsZWN0LWNvbXBvbmVudC1ob2xkZXIge1xuXHRib3JkZXI6IDFweCBzb2xpZCAjMzI3ZWJkO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcblxuXHRoNCB7XG5cdFx0Y29sb3I6ICMzMjdlYmQ7XG5cdFx0bWFyZ2luOiAxNHB4IDA7XG5cdH1cblxuXHRtYXQtZGl2aWRlciB7XG5cdFx0bWFyZ2luLWJvdHRvbTogMTBweDtcblx0fVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/material-widgets/select/select.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/material-widgets/select/select.component.ts ***!
  \*************************************************************/
/*! exports provided: MyErrorStateMatcher, SelectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function() { return MyErrorStateMatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectComponent", function() { return SelectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _helpers_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers.data */ "./src/app/material-widgets/select/helpers.data.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MyErrorStateMatcher = /** @class */ (function () {
    function MyErrorStateMatcher() {
    }
    MyErrorStateMatcher.prototype.isErrorState = function (control, form) {
        var isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    };
    return MyErrorStateMatcher;
}());

var SelectComponent = /** @class */ (function () {
    function SelectComponent() {
        this.SelectHelpers = _helpers_data__WEBPACK_IMPORTED_MODULE_2__["select_HELPERS"];
        this.links = _helpers_data__WEBPACK_IMPORTED_MODULE_2__["Links"];
        this.showMultiListCode = false;
        this.messages = _helpers_data__WEBPACK_IMPORTED_MODULE_2__["Messages"];
        this.select = 'option2';
        this.selected = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('valid', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('valid'),
        ]);
        this.matcher = new MyErrorStateMatcher();
        this.foods = [
            { value: 'steak-0', viewValue: 'Steak' },
            { value: 'pizza-1', viewValue: 'Pizza' },
            { value: 'tacos-2', viewValue: 'Tacos' }
        ];
        this.animalControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
        this.animals = [
            { name: 'Dog', sound: 'Woof!' },
            { name: 'Cat', sound: 'Meow!' },
            { name: 'Cow', sound: 'Moo!' },
            { name: 'Fox', sound: 'Wa-pa-pa-pa-pa-pa-pow!' },
        ];
        this.states = [
            'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware',
            'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
            'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
            'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico',
            'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania',
            'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
            'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
        ];
        this.disableSelect = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false);
        this.pokemonControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.pokemonGroups = [
            {
                name: 'Grass',
                pokemon: [
                    { value: 'bulbasaur-0', viewValue: 'Bulbasaur' },
                    { value: 'oddish-1', viewValue: 'Oddish' },
                    { value: 'bellsprout-2', viewValue: 'Bellsprout' }
                ]
            },
            {
                name: 'Water',
                pokemon: [
                    { value: 'squirtle-3', viewValue: 'Squirtle' },
                    { value: 'psyduck-4', viewValue: 'Psyduck' },
                    { value: 'horsea-5', viewValue: 'Horsea' }
                ]
            },
            {
                name: 'Fire',
                disabled: true,
                pokemon: [
                    { value: 'charmander-6', viewValue: 'Charmander' },
                    { value: 'vulpix-7', viewValue: 'Vulpix' },
                    { value: 'flareon-8', viewValue: 'Flareon' }
                ]
            },
            {
                name: 'Psychic',
                pokemon: [
                    { value: 'mew-9', viewValue: 'Mew' },
                    { value: 'mewtwo-10', viewValue: 'Mewtwo' },
                ]
            }
        ];
        this.toppings = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.toppingList = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
        this.topping = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.toppingLists = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
        this.panelColor = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('red');
    }
    SelectComponent.prototype.ngOnInit = function () {
    };
    SelectComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'cdk-select',
            template: __webpack_require__(/*! ./select.component.html */ "./src/app/material-widgets/select/select.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./select.component.scss */ "./src/app/material-widgets/select/select.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SelectComponent);
    return SelectComponent;
}());



/***/ }),

/***/ "./src/app/material-widgets/slider/helpers.data.ts":
/*!*********************************************************!*\
  !*** ./src/app/material-widgets/slider/helpers.data.ts ***!
  \*********************************************************/
/*! exports provided: SLIDER_HELPERS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SLIDER_HELPERS", function() { return SLIDER_HELPERS; });
var SLIDER_HELPERS = {
    tsSourceSlider: "\nimport { MatSliderModule } from '@angular/material';\n\n\n\t  \t@NgModule({\n\t\t  imports: [\n\t\t    MatSliderModule,\n\t\t})\n\t\texport class AppModule { }\n\nimport { Component, OnInit } from '@angular/core';\n\n@Component({\n  selector: 'cdk-slider',\n  templateUrl: './slider.component.html',\n  styleUrls: ['./slider.component.scss']\n})\nexport class SliderComponent implements OnInit {\n\n\tautoTicks = false;\n\tdisabled = false;\n\tinvert = false;\n\tmax = 100;\n\tmin = 0;\n\tshowTicks = false;\n\tstep = 1;\n\tthumbLabel = false;\n\tvalue = 0;\n\tvertical = false;\n}\n\t".trim(),
    htmlSourceSlider: "\n<mat-slider></mat-slider>\n\t".trim(),
};


/***/ }),

/***/ "./src/app/material-widgets/slider/slider.component.html":
/*!***************************************************************!*\
  !*** ./src/app/material-widgets/slider/slider.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\"  class=\"components-container-gt-xs\"  [ngClass.xs]=\"'components-container-xs'\"  fxLayoutGap=\"20px\" >\n    <div fxFlex class=\"slider-component-holder mat-elevation-z4\">\n    \t<mat-toolbar class=\"slider-header\">\n    \t\t<h3 class=\"mat-headline center-align\">Slider</h3>\n    \t</mat-toolbar>\n    \t\n    \t<div class=\"slider-container\">\n    \t\t\n    \t\t\n            <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"20px\">\n\n                <div fxFlex.xs=\"100\" fxFlex.lg=\"50\" fxFlex.md=\"50\" fxFlex.sm=\"50\" >\n                    <h4  class=\"mat-subheading-2 center-align\">Basic Slider</h4>\n                        <mat-divider></mat-divider>\n                        <!-- <mat-slider></mat-slider> -->\n                </div>\n           \n\n    \t\t\t<div fxFlex.xs=\"100\" fxFlex.lg=\"50\" fxFlex.md=\"50\" fxFlex.sm=\"50\" >\n    \t\t\t\t<h4 class=\"mat-subheading-2 center-align\">Slider configuration</h4>\n    \t\t\t\t<mat-divider></mat-divider>\n\n    \t\t\t\t<section class=\"example-section\">\n                        <mat-form-field class=\"example-margin\">\n                        \t<input matInput type=\"number\" placeholder=\"Value\" [(ngModel)]=\"value\">\n                        </mat-form-field>\n                        <mat-form-field class=\"example-margin\">\n                        \t<input matInput type=\"number\" placeholder=\"Min value\" [(ngModel)]=\"min\">\n                        </mat-form-field>\n                        <mat-form-field class=\"example-margin\">\n                        \t<input matInput type=\"number\" placeholder=\"Max value\" [(ngModel)]=\"max\">\n                        </mat-form-field>\n                        <mat-form-field class=\"example-margin\">\n                        \t<input matInput type=\"number\" placeholder=\"Step size\" [(ngModel)]=\"step\">\n                        </mat-form-field>\n                    </section>\n\n\n                    <section class=\"example-section\">\n                        <mat-checkbox class=\"example-margin\" [(ngModel)]=\"showTicks\">Show ticks</mat-checkbox>\n                        <mat-checkbox class=\"example-margin\" [(ngModel)]=\"autoTicks\" *ngIf=\"showTicks\">\n                            Auto ticks\n                        </mat-checkbox>\n                        <mat-form-field class=\"example-margin\" *ngIf=\"showTicks && !autoTicks\">\n                            <input matInput type=\"number\" placeholder=\"Tick interval\" [(ngModel)]=\"tickInterval\">\n                        </mat-form-field>\n                    </section>\n                    <br>\n                    <section class=\"example-section\">\n                      <mat-checkbox class=\"example-margin\" [(ngModel)]=\"thumbLabel\">Show thumb label</mat-checkbox>\n                    </section>\n\n                    <section class=\"example-section\">\n                      <mat-checkbox class=\"example-margin\" [(ngModel)]=\"vertical\">Vertical</mat-checkbox>\n                      <mat-checkbox class=\"example-margin\" [(ngModel)]=\"invert\">Inverted</mat-checkbox>\n                    </section>\n\n                    <section class=\"example-section\">\n                      <mat-checkbox class=\"example-margin\" [(ngModel)]=\"disabled\">Disabled</mat-checkbox>\n                    </section>\n\n\n                    <section>\n            \n                        <label class=\"mat-title center-align\" >Result</label>\n                       \n\n                        <!-- <mat-slider\n                            class=\"example-margin\"\n                            [disabled]=\"disabled\"\n                            [invert]=\"invert\"\n                            [max]=\"max\"\n                            [min]=\"min\"\n                            [step]=\"step\"\n                            [thumb-label]=\"thumbLabel\"\n                            [tick-interval]=\"tickInterval\"\n                            [value]=\"value\"\n                            [vertical]=\"vertical\">\n                        </mat-slider> -->\n                    </section>\n    \t\t\t</div>\n            </div>\n        </div>\n    </div>\n    <div fxFlex class=\"slider-component-holder mat-elevation-z4\">\n\t\t<mat-toolbar class=\"slider-header\" >\n\t\t\t<h3 class=\"mat-headline center-align\">Examples</h3>\n\t\t</mat-toolbar >\n\n\t\t<mat-tab-group fxFlexFill>\n\t\t\t<mat-tab label=\"TS\">\n                <div class=\"component-preview\">\n\t               <pre style=\"white-space:pre-line;\"><code mwlHighlightJs [source]=\"sliderHelpers?.tsSourceSlider\" language=\"typescript\"></code></pre>\n                </div>\n\t        </mat-tab>\n\t        <mat-tab label=\"HTML\">\n                <div class=\"component-preview\">\n\t               <pre style=\"white-space:pre-line;\"><code mwlHighlightJs [source]=\"sliderHelpers?.htmlSourceSlider\" language=\"html\"></code></pre>\n                </div>\n\t        </mat-tab>\n\n\t        <mat-tab label=\"PREVIEW\">\n\t        \t<div class=\"component-preview\">\n\t\t        \t<!-- <mat-slider></mat-slider> -->\n\t\t\t  \t</div>\n\t        </mat-tab>\n\t    </mat-tab-group>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/material-widgets/slider/slider.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/material-widgets/slider/slider.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".slider-header {\n  background-color: #327ebd;\n  color: white;\n  padding: 0 5px; }\n\n.slider-container {\n  padding: 5px 15px 15px 15px; }\n\n.slider-component-holder {\n  border: 1px solid #327ebd;\n  background-color: white; }\n\n.slider-component-holder h4 {\n    color: #327ebd;\n    margin: 14px 0; }\n\n.slider-component-holder mat-divider {\n    margin-bottom: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWF0ZXJpYWwtd2lkZ2V0cy9zbGlkZXIvQzpcXFVzZXJzXFxSb2dlckZlZGVyZXJcXERlc2t0b3BcXEltYnVlRGVza1xcTmV3IGZvbGRlciAoMilcXGNkay1hZG1pbi1tYXN0ZXIvc3JjXFxhcHBcXG1hdGVyaWFsLXdpZGdldHNcXHNsaWRlclxcc2xpZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNDO0VBQ0MseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixjQUFjLEVBQUE7O0FBRWY7RUFDQywyQkFBMkIsRUFBQTs7QUFJN0I7RUFDQyx5QkFBeUI7RUFDekIsdUJBQXVCLEVBQUE7O0FBRnhCO0lBS0UsY0FBYztJQUNkLGNBQWMsRUFBQTs7QUFOaEI7SUFVRSxtQkFBbUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21hdGVyaWFsLXdpZGdldHMvc2xpZGVyL3NsaWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGNkay1zbGlkZXIge1xuXHQuc2xpZGVyLWhlYWRlciB7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogIzMyN2ViZDtcblx0XHRjb2xvcjogd2hpdGU7XG5cdFx0cGFkZGluZzogMCA1cHg7XG5cdH1cblx0LnNsaWRlci1jb250YWluZXIge1xuXHRcdHBhZGRpbmc6IDVweCAxNXB4IDE1cHggMTVweDtcblx0XHQvLyBjb2xvcjogd2hpdGU7XG5cdH1cbi8vIH1cbi5zbGlkZXItY29tcG9uZW50LWhvbGRlciB7XG5cdGJvcmRlcjogMXB4IHNvbGlkICMzMjdlYmQ7XG5cdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuXG5cdGg0IHtcblx0XHRjb2xvcjogIzMyN2ViZDtcblx0XHRtYXJnaW46IDE0cHggMDtcblx0fVxuXG5cdG1hdC1kaXZpZGVyIHtcblx0XHRtYXJnaW4tYm90dG9tOiAxMHB4O1xuXHR9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/material-widgets/slider/slider.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/material-widgets/slider/slider.component.ts ***!
  \*************************************************************/
/*! exports provided: SliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderComponent", function() { return SliderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _helpers_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers.data */ "./src/app/material-widgets/slider/helpers.data.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SliderComponent = /** @class */ (function () {
    function SliderComponent() {
        this.autoTicks = false;
        this.disabled = false;
        this.invert = false;
        this.max = 100;
        this.min = 0;
        this.showTicks = false;
        this.step = 1;
        this.thumbLabel = false;
        this.value = 0;
        this.vertical = false;
        this.sliderHelpers = _helpers_data__WEBPACK_IMPORTED_MODULE_1__["SLIDER_HELPERS"];
    }
    SliderComponent.prototype.ngOnInit = function () {
    };
    SliderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'cdk-slider',
            template: __webpack_require__(/*! ./slider.component.html */ "./src/app/material-widgets/slider/slider.component.html"),
            styles: [__webpack_require__(/*! ./slider.component.scss */ "./src/app/material-widgets/slider/slider.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SliderComponent);
    return SliderComponent;
}());



/***/ }),

/***/ "./src/app/material-widgets/slidetoggle/helpers.data.ts":
/*!**************************************************************!*\
  !*** ./src/app/material-widgets/slidetoggle/helpers.data.ts ***!
  \**************************************************************/
/*! exports provided: SLIDETOGGLE_HELPERS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SLIDETOGGLE_HELPERS", function() { return SLIDETOGGLE_HELPERS; });
var SLIDETOGGLE_HELPERS = {
    tsSourceSlideToggle: "\nimport { MatSlideToggleModule } from '@angular/material';\n@NgModule({\n\t\t  imports: [\n\t\t    MatSlideToggleModule,\n\t\t})\nexport class AppModule { }\n\nimport { Component, OnInit } from '@angular/core';\n@Component({\n  selector: 'cdk-slidetoggle',\n  templateUrl: './slidetoggle.component.html',\n  styleUrls: ['./slidetoggle.component.scss']\n})\nexport class SlidetoggleComponent implements OnInit {\n\n\tcolor = 'accent';\n\tchecked = false;\n\tdisabled = false;\n}\n\t".trim(),
    htmlSourceSlideToggle: "\n<mat-slide-toggle>Slide me!</mat-slide-toggle>\n\t".trim(),
};


/***/ }),

/***/ "./src/app/material-widgets/slidetoggle/slidetoggle.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/material-widgets/slidetoggle/slidetoggle.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div fxLayout=\"column\"  class=\"components-container-gt-xs\"  [ngClass.xs]=\"'components-container-xs'\"  fxLayoutGap=\"20px\">\n\n    <div fxFlex class=\"slidetoggle-component-holder mat-elevation-z4\">\n\n    \t<mat-toolbar class=\"slidetoggle-header\">\n    \t\t<h1 class=\"mat-headline\" >Slide-Toggle</h1>\n    \t</mat-toolbar>\n    \t\n    \t<div class=\"slidetoggle-container\">\n    \t\t\n    \t   <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"20px\">\n\n                <div fxFlex.xs=\"100\" fxFlex.lg=\"50\" fxFlex.md=\"50\" fxFlex.sm=\"50\" >\n\n                    <h4 class=\"mat-subheading-1\">Basic Slide-Toggles</h4>\n                    <mat-divider></mat-divider>\n\n                    <mat-slide-toggle>Slide me!</mat-slide-toggle>\n                </div>\n           \n\n    \t\t\t<div fxFlex.xs=\"100\" fxFlex.lg=\"50\" fxFlex.md=\"50\" fxFlex.sm=\"50\" >\n\n    \t\t\t\t<h4 class=\"mat-subheading-1\">Slide-Toggle configuration</h4>\n    \t\t\t\t<mat-divider></mat-divider>\n\n                    <section>\n                        <label>Color:</label>\n                        <mat-radio-group [(ngModel)]=\"color\">\n                            <mat-radio-button value=\"primary\">\n                            Primary\n                            </mat-radio-button>\n                            <mat-radio-button value=\"accent\">\n                            Accent\n                            </mat-radio-button>\n                            <mat-radio-button value=\"warn\">\n                            Warn\n                            </mat-radio-button>\n                        </mat-radio-group>\n                    </section>\n\n                    <section>\n                        <mat-checkbox [(ngModel)]=\"checked\">Checked</mat-checkbox>\n                    </section>\n\n                    <section>\n                        <mat-checkbox [(ngModel)]=\"disabled\">Disabled</mat-checkbox>\n                    </section>\n\n                    <label class=\"mat-title\">Result</label>\n                    <section>\n                        <mat-slide-toggle\n                        [color]=\"color\"\n                        [checked]=\"checked\"\n                        [disabled]=\"disabled\">\n                        Slide me!\n                        </mat-slide-toggle>\n                    </section>\n\n                </div>\n\n            </div>\n        </div>\n    </div>\n\n    <div fxFlex class=\"slidetoggle-component-holder mat-elevation-z4\">\n\n\n    \t<mat-toolbar class=\"slidetoggle-header\">\n    \t\t<h1 class=\"mat-headline\">Examples</h1>\n\n\t\t</mat-toolbar>\n\n\t\t<mat-tab-group fxFlexFill>\n\n\t\t\t<mat-tab label=\"TS\">\n                <div class=\"component-preview\">\n\t               <pre style=\"white-space:pre-line;\"><code mwlHighlightJs [source]=\"slidetoggleHelpers?.tsSourceSlideToggle\" language=\"typescript\"></code></pre>\n                </div>\n\t        </mat-tab>\n\n\t        <mat-tab label=\"HTML\">\n                <div class=\"component-preview\">\n\t               <pre style=\"white-space:pre-line;\"><code mwlHighlightJs [source]=\"slidetoggleHelpers?.htmlSourceSlideToggle\" language=\"html\"></code></pre>\n                </div>\n\t        </mat-tab>\n\n\t        <mat-tab label=\"PREVIEW\">\n                <div class=\"component-preview\">\n\t        \t    <div style=\"padding: 20px;\">\n\t\t        \t   <mat-slide-toggle>Slide me!</mat-slide-toggle>\n\t\t\t  \t    </div>\n                </div>\n\t        </mat-tab>\n\n\t    </mat-tab-group>\n\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/material-widgets/slidetoggle/slidetoggle.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/material-widgets/slidetoggle/slidetoggle.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".slidetoggle-header {\n  background-color: #327ebd;\n  color: white;\n  padding: 0 5px; }\n\n.slidetoggle-container {\n  padding: 5px 15px 15px 15px; }\n\n.slidetoggle-component-holder {\n  border: 1px solid #327ebd;\n  background-color: white; }\n\n.slidetoggle-component-holder h4 {\n    color: #327ebd;\n    margin: 14px 0; }\n\n.slidetoggle-component-holder mat-divider {\n    margin-bottom: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWF0ZXJpYWwtd2lkZ2V0cy9zbGlkZXRvZ2dsZS9DOlxcVXNlcnNcXFJvZ2VyRmVkZXJlclxcRGVza3RvcFxcSW1idWVEZXNrXFxOZXcgZm9sZGVyICgyKVxcY2RrLWFkbWluLW1hc3Rlci9zcmNcXGFwcFxcbWF0ZXJpYWwtd2lkZ2V0c1xcc2xpZGV0b2dnbGVcXHNsaWRldG9nZ2xlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixjQUFjLEVBQUE7O0FBRWY7RUFDQywyQkFBMkIsRUFBQTs7QUFFNUI7RUFDQyx5QkFBeUI7RUFDekIsdUJBQXVCLEVBQUE7O0FBRnhCO0lBS0UsY0FBYztJQUNkLGNBQWMsRUFBQTs7QUFOaEI7SUFVRSxtQkFBbUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21hdGVyaWFsLXdpZGdldHMvc2xpZGV0b2dnbGUvc2xpZGV0b2dnbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2xpZGV0b2dnbGUtaGVhZGVyIHtcblx0YmFja2dyb3VuZC1jb2xvcjogIzMyN2ViZDtcblx0Y29sb3I6IHdoaXRlO1xuXHRwYWRkaW5nOiAwIDVweDtcbn1cbi5zbGlkZXRvZ2dsZS1jb250YWluZXIge1xuXHRwYWRkaW5nOiA1cHggMTVweCAxNXB4IDE1cHg7XG59XG4uc2xpZGV0b2dnbGUtY29tcG9uZW50LWhvbGRlciB7XG5cdGJvcmRlcjogMXB4IHNvbGlkICMzMjdlYmQ7XG5cdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuXG5cdGg0IHtcblx0XHRjb2xvcjogIzMyN2ViZDtcblx0XHRtYXJnaW46IDE0cHggMDtcblx0fVxuXG5cdG1hdC1kaXZpZGVyIHtcblx0XHRtYXJnaW4tYm90dG9tOiAxMHB4O1xuXHR9XG59Il19 */"

/***/ }),

/***/ "./src/app/material-widgets/slidetoggle/slidetoggle.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/material-widgets/slidetoggle/slidetoggle.component.ts ***!
  \***********************************************************************/
/*! exports provided: SlidetoggleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlidetoggleComponent", function() { return SlidetoggleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _helpers_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers.data */ "./src/app/material-widgets/slidetoggle/helpers.data.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SlidetoggleComponent = /** @class */ (function () {
    function SlidetoggleComponent() {
        this.color = 'accent';
        this.checked = false;
        this.disabled = false;
        this.slidetoggleHelpers = _helpers_data__WEBPACK_IMPORTED_MODULE_1__["SLIDETOGGLE_HELPERS"];
    }
    SlidetoggleComponent.prototype.ngOnInit = function () {
    };
    SlidetoggleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'cdk-slidetoggle',
            template: __webpack_require__(/*! ./slidetoggle.component.html */ "./src/app/material-widgets/slidetoggle/slidetoggle.component.html"),
            styles: [__webpack_require__(/*! ./slidetoggle.component.scss */ "./src/app/material-widgets/slidetoggle/slidetoggle.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SlidetoggleComponent);
    return SlidetoggleComponent;
}());



/***/ }),

/***/ "./src/app/material-widgets/spinner/helpers.data.ts":
/*!**********************************************************!*\
  !*** ./src/app/material-widgets/spinner/helpers.data.ts ***!
  \**********************************************************/
/*! exports provided: SPINNER_HELPERS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPINNER_HELPERS", function() { return SPINNER_HELPERS; });
var SPINNER_HELPERS = {
    tsSourceProgressSpinner: "\nimport { MatProgressSpinnerModule } from '@angular/material';\n    @NgModule({\n      imports: [\n       MatProgressSpinnerModule]\n    })\n    export class AppModule { }\n\nimport { Component, OnInit } from '@angular/core';\n\n@Component({\n  selector: 'cdk-spinner',\n  templateUrl: './spinner.component.html',\n  styleUrls: ['./spinner.component.scss']\n})\n\nexport class SpinnerComponent implements OnInit {\n\tshowProgressBarCode;\n\tshowSource;\n\t\tcolor = 'primary';\n\t  \tmode = 'determinate';\n\t  \tvalue = 50;\n\n}\n".trim(),
    htmlSourceProgressSpinner: "\n<div fxLayout=\"column\" fxLayoutGap=15px>\n    <section class=\"example-section\">\n          <label class=\"example-margin\">Color:</label>\n          <mat-radio-group [(ngModel)]=\"color\" fxLayout=\"column\"  fxLayoutGap=10px>\n            <mat-radio-button class=\"example-margin\" value=\"primary\">\n              Primary\n            </mat-radio-button>\n            <mat-radio-button class=\"example-margin\" value=\"accent\">\n              Accent\n            </mat-radio-button>\n               <mat-radio-button class=\"example-margin\" value=\"warn\">\n              Warn\n            </mat-radio-button>\n        </mat-radio-group>\n    </section>\n\n    <section class=\"example-section\">\n        <label class=\"example-margin\">Mode:</label>\n        <mat-radio-group [(ngModel)]=\"mode\" fxLayout=\"column\"  fxLayoutGap=10px>\n            <mat-radio-button class=\"example-margin\" value=\"determinate\">\n              Determinate\n            </mat-radio-button>\n            <mat-radio-button class=\"example-margin\" value=\"indeterminate\">\n              Indeterminate\n            </mat-radio-button>\n        </mat-radio-group>\n    </section>\n\n    <section class=\"example-section \" *ngIf=\"mode == 'determinate'\">\n        <label class=\"mat-subheading-2 center-align\">Progress:</label>\n        <mat-slider class=\"example-margin\" [(ngModel)]=\"value\"></mat-slider>\n    </section>\n</div>\n\n<div fxFlex.xs=\"100\" fxFlex.lg=\"50\" fxFlex.md=\"50\" fxFlex.sm=\"50\" >\n    <h4 class=\"mat-subheading-2 center-align\">Result</h4>\n    <mat-divider></mat-divider>\n        \n    <mat-progress-spinner\n        class=\"example-margin\"\n        [color]=\"color\"\n        [mode]=\"mode\"\n        [value]=\"value\">\n    </mat-progress-spinner>\n</div>\n\n".trim(),
};


/***/ }),

/***/ "./src/app/material-widgets/spinner/spinner.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/material-widgets/spinner/spinner.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayout.lt-sm=\"column\" class=\"components-container-gt-xs\"   fxLayoutGap=\"20px\">\n\n\t<div fxFlex class=\"spinner-component-holder mat-elevation-z4\">\n\n\t\t<mat-toolbar class=\"spinner-header\">\n\t\t\t<h1 class=\"mat-headline center-align\" >Progress Spinner</h1>\n\t\t</mat-toolbar>\n\t\t\n\t\t<div class=\"spinner-container\">\n\t\t\t\n\t\t\t<div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"20px\">\n\n\t\t\t\t<div fxFlex.xs=\"100\" fxFlex.lg=\"50\" fxFlex.md=\"50\" fxFlex.sm=\"50\" >\n\n\t\t\t\t\t<h4 class=\"mat-subheading-2 center-align\">Configurable Progress Spinner</h4>\n\t\t\t\t\t<mat-divider></mat-divider>\n\t\t\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\t<div fxLayout=\"column\" fxLayoutGap=15px>\n\t\t    \t\t\t<section class=\"example-section\" fxLayout=\"row\">\n\t\t      \t\t\t\t<label class=\"example-margin\">Color:</label>\n\t      \t\t\t\t\t<mat-radio-group [(ngModel)]=\"color\" fxLayout=\"column\"  fxLayoutGap=10px>\n\t\t\t\t        \t\t<mat-radio-button class=\"example-margin\" value=\"primary\">\n\t\t\t\t          \t\tPrimary\n\t\t\t\t        \t\t</mat-radio-button>\n\t\t\t\t        \t\t<mat-radio-button class=\"example-margin\" value=\"accent\">\n\t\t\t\t          \t\tAccent\n\t\t\t\t        \t\t</mat-radio-button>\n\t\t\t\t       \t\t\t<mat-radio-button class=\"example-margin\" value=\"warn\">\n\t\t\t\t          \t\tWarn\n\t\t\t\t        \t\t</mat-radio-button>\n\t\t\t\t     \t\t</mat-radio-group>\n\t\t     \t\t\t</section>\n\t\t    \t\n\t\t\t\t\t    <section class=\"example-section\" fxLayout=\"row\">\n\t\t\t\t\t\t    <label class=\"example-margin\">Mode:</label>\n\t\t\t\t\t\t    <mat-radio-group [(ngModel)]=\"mode\" fxLayout=\"column\"  fxLayoutGap=10px>\n\t\t\t\t\t\t        <mat-radio-button class=\"example-margin\" value=\"determinate\">\n\t\t\t\t\t\t          Determinate\n\t\t\t\t\t\t        </mat-radio-button>\n\t\t\t\t\t\t        <mat-radio-button class=\"example-margin\" value=\"indeterminate\">\n\t\t\t\t\t\t          Indeterminate\n\t\t\t\t\t\t        </mat-radio-button>\n\t\t\t\t\t\t    </mat-radio-group>\n\t\t\t\t\t    </section>\n\t\t\t\t\t</div>\n\t\t\t\t\t\t\n\n\t\t\t\t\t<section class=\"example-section \" *ngIf=\"mode == 'determinate'\">\n\t\t\t\t\t    <label class=\"mat-subheading-2 center-align\">Progress:</label>\n\t\t\t\t\t    <mat-slider class=\"example-margin\" [(ngModel)]=\"value\"></mat-slider>\n\t\t\t\t\t</section>\n\t\t\t\t</div>\n\n\t\t\t\t<div fxFlex.xs=\"100\" fxFlex.lg=\"50\" fxFlex.md=\"50\" fxFlex.sm=\"50\" >\n\t\t\t\t\t<h4 class=\"mat-subheading-2 center-align\">Result</h4>\n\t\t\t\t\t<mat-divider></mat-divider>\n\t\t\t\t\t\t\n\t\t\t\t\t<mat-progress-spinner\n\t\t\t\t        class=\"example-margin\"\n\t\t\t\t        [color]=\"color\"\n\t\t\t\t        [mode]=\"mode\"\n\t\t\t\t        [value]=\"value\">\n\t\t\t\t    </mat-progress-spinner>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t\n\n\t<div fxFlex class=\"spinner-component-holder mat-elevation-z4\">\n\n\t\t<mat-toolbar  class=\"spinner-header\">\n\t\t\t<h1 class=\"mat-headline center-align\" >Examples</h1>\n\t\t</mat-toolbar>\n\n\t\t<mat-tab-group fxFlexFill>\n\t\t\t<mat-tab label=\"TS\">\n\t\t\t\t<div class=\"component-preview\">\n\t            \t<pre style=\"white-space:pre-line;\"><code mwlHighlightJs [source]=\"spinnerHelpers?.tsSourceProgressSpinner\" language=\"typescript\"></code></pre>\n\t            </div>\n\t        </mat-tab>\n\n\t        <mat-tab label=\"HTML\">\n\t        \t<div class=\"component-preview\">\n\t            \t<pre style=\"white-space:pre-line;\"><code mwlHighlightJs [source]=\"spinnerHelpers?.htmlSourceProgressSpinner\" language=\"html\"></code></pre>\n\t            </div>\n\t        </mat-tab>\n\n\t        <mat-tab label=\"PREVIEW\">\n\t\t        <div class=\"component-preview\">\n\t\t        \t<div style=\"padding: 20px;\">\n\t\t        \t\t<div class=\"spinner-container\">\n\t\t\t\t\n\t\t\t\t\t\t\t<div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"20px\">\n\n\t\t\t\t\t\t\t\t<div fxFlex.xs=\"100\" fxFlex.lg=\"50\" fxFlex.md=\"50\" fxFlex.sm=\"50\" >\n\t\t\t\t\t\t\t\t\t<h4 class=\"mat-subheading-2 center-align\">Configurable Progress Spinner</h4>\n\t\t\t\t\t\t\t\t\t<mat-divider></mat-divider>\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<div fxLayout=\"column\" fxLayoutGap=15px>\n\t\t\t\t\t\t    \t\t\t<section class=\"example-section\">\n\t\t\t\t\t\t      \t\t\t\t<label class=\"example-margin\">Color:</label>\n\t\t\t\t\t      \t\t\t\t\t<mat-radio-group [(ngModel)]=\"colors\" fxLayout=\"column\"  fxLayoutGap=10px>\n\t\t\t\t\t\t\t\t        \t\t<mat-radio-button class=\"example-margin\" value=\"primary\">\n\t\t\t\t\t\t\t\t          \t\tPrimary\n\t\t\t\t\t\t\t\t        \t\t</mat-radio-button>\n\t\t\t\t\t\t\t\t        \t\t<mat-radio-button class=\"example-margin\" value=\"accent\">\n\t\t\t\t\t\t\t\t          \t\tAccent\n\t\t\t\t\t\t\t\t        \t\t</mat-radio-button>\n\t\t\t\t\t\t\t\t       \t\t\t<mat-radio-button class=\"example-margin\" value=\"warn\">\n\t\t\t\t\t\t\t\t          \t\tWarn\n\t\t\t\t\t\t\t\t        \t\t</mat-radio-button>\n\t\t\t\t\t\t\t\t     \t\t</mat-radio-group>\n\t\t\t\t\t\t     \t\t\t</section>\n\t\t\t\t\t\t    \t\n\t\t\t\t\t\t\t\t\t    <section class=\"example-section\">\n\t\t\t\t\t\t\t\t\t\t    <label class=\"example-margin\">Mode:</label>\n\t\t\t\t\t\t\t\t\t\t    <mat-radio-group [(ngModel)]=\"modes\" fxLayout=\"column\"  fxLayoutGap=10px>\n\t\t\t\t\t\t\t\t\t\t        <mat-radio-button class=\"example-margin\" value=\"determinate\">\n\t\t\t\t\t\t\t\t\t\t          Determinate\n\t\t\t\t\t\t\t\t\t\t        </mat-radio-button>\n\t\t\t\t\t\t\t\t\t\t        <mat-radio-button class=\"example-margin\" value=\"indeterminate\">\n\t\t\t\t\t\t\t\t\t\t          Indeterminate\n\t\t\t\t\t\t\t\t\t\t        </mat-radio-button>\n\t\t\t\t\t\t\t\t\t\t    </mat-radio-group>\n\t\t\t\t\t\t\t\t\t    </section>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t<section class=\"example-section \" *ngIf=\"modes == 'determinate'\">\n\t\t\t\t\t\t\t\t\t    <label class=\"mat-subheading-2 center-align\">Progress:</label>\n\t\t\t\t\t\t\t\t\t    <mat-slider class=\"example-margin\" [(ngModel)]=\"values\"></mat-slider>\n\t\t\t\t\t\t\t\t\t</section>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div fxFlex.xs=\"100\" fxFlex.lg=\"50\" fxFlex.md=\"50\" fxFlex.sm=\"50\" >\n\t\t\t\t\t\t\t\t\t<h4 class=\"mat-subheading-2 center-align\">Result</h4>\n\t\t\t\t\t\t\t\t\t<mat-divider></mat-divider>\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<mat-progress-spinner\n\t\t\t\t\t\t\t\t        class=\"example-margin\"\n\t\t\t\t\t\t\t\t        [color]=\"colors\"\n\t\t\t\t\t\t\t\t        [mode]=\"modes\"\n\t\t\t\t\t\t\t\t        [value]=\"values\">\n\t\t\t\t\t\t\t\t    </mat-progress-spinner>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t        \t</div>\t\n\t\t        </div>\n\t\t\t</mat-tab>\n\t    </mat-tab-group>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/material-widgets/spinner/spinner.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/material-widgets/spinner/spinner.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".spinner-header {\n  background-color: #327ebd;\n  color: white;\n  padding: 0 5px; }\n\n.spinner-container {\n  padding: 5px 15px 15px 15px; }\n\n.spinner-component-holder {\n  border: 1px solid #327ebd;\n  background-color: white; }\n\n.spinner-component-holder h4 {\n    color: #327ebd;\n    margin: 14px 0; }\n\n.spinner-component-holder mat-divider {\n    margin-bottom: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWF0ZXJpYWwtd2lkZ2V0cy9zcGlubmVyL0M6XFxVc2Vyc1xcUm9nZXJGZWRlcmVyXFxEZXNrdG9wXFxJbWJ1ZURlc2tcXE5ldyBmb2xkZXIgKDIpXFxjZGstYWRtaW4tbWFzdGVyL3NyY1xcYXBwXFxtYXRlcmlhbC13aWRnZXRzXFxzcGlubmVyXFxzcGlubmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixjQUFjLEVBQUE7O0FBRWY7RUFDQywyQkFBMkIsRUFBQTs7QUFFNUI7RUFDQyx5QkFBeUI7RUFDekIsdUJBQXVCLEVBQUE7O0FBRnhCO0lBS0UsY0FBYztJQUNkLGNBQWMsRUFBQTs7QUFOaEI7SUFVRSxtQkFBbUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21hdGVyaWFsLXdpZGdldHMvc3Bpbm5lci9zcGlubmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNwaW5uZXItaGVhZGVyIHtcblx0YmFja2dyb3VuZC1jb2xvcjogIzMyN2ViZDtcblx0Y29sb3I6IHdoaXRlO1xuXHRwYWRkaW5nOiAwIDVweDtcbn1cbi5zcGlubmVyLWNvbnRhaW5lciB7XG5cdHBhZGRpbmc6IDVweCAxNXB4IDE1cHggMTVweDtcbn1cbi5zcGlubmVyLWNvbXBvbmVudC1ob2xkZXIge1xuXHRib3JkZXI6IDFweCBzb2xpZCAjMzI3ZWJkO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcblxuXHRoNCB7XG5cdFx0Y29sb3I6ICMzMjdlYmQ7XG5cdFx0bWFyZ2luOiAxNHB4IDA7XG5cdH1cblxuXHRtYXQtZGl2aWRlciB7XG5cdFx0bWFyZ2luLWJvdHRvbTogMTBweDtcblx0fVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/material-widgets/spinner/spinner.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/material-widgets/spinner/spinner.component.ts ***!
  \***************************************************************/
/*! exports provided: SpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerComponent", function() { return SpinnerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _helpers_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers.data */ "./src/app/material-widgets/spinner/helpers.data.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SpinnerComponent = /** @class */ (function () {
    function SpinnerComponent() {
        this.colors = 'primary';
        this.modes = 'determinate';
        this.values = 50;
        this.spinnerHelpers = _helpers_data__WEBPACK_IMPORTED_MODULE_1__["SPINNER_HELPERS"];
    }
    SpinnerComponent.prototype.ngOnInit = function () {
    };
    SpinnerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'cdk-spinner',
            template: __webpack_require__(/*! ./spinner.component.html */ "./src/app/material-widgets/spinner/spinner.component.html"),
            styles: [__webpack_require__(/*! ./spinner.component.scss */ "./src/app/material-widgets/spinner/spinner.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SpinnerComponent);
    return SpinnerComponent;
}());



/***/ }),

/***/ "./src/app/material-widgets/stepper/helpers.data.ts":
/*!**********************************************************!*\
  !*** ./src/app/material-widgets/stepper/helpers.data.ts ***!
  \**********************************************************/
/*! exports provided: STEPPER_HELPERS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STEPPER_HELPERS", function() { return STEPPER_HELPERS; });
var STEPPER_HELPERS = {
    tsSourceRaisedButton: "\n \t\timport { MatStepperModule } from '@angular/material/button';\n\n\t  \t@NgModule({\n\t\t  imports: [\n\t\t    MatStepperModule,\n\t\t})\n\t\texport class AppModule { }\n\t\t\n\t\timport { Component, OnInit } from '@angular/core';\n\n        @Component({\n          selector: 'cdk-stepper',\n          templateUrl: './stepper.component.html',\n          styleUrls: ['./stepper.component.scss']\n        })\n        export class CardsComponent implements OnInit {\n        }".trim(),
    htmlSourceRaisedButton: "\n  \t\t\n\t\t  \t<button mat-raised-button (click)=\"isLinear = true\" id=\"toggle-linear\">Enable linear mode</button>\n\t\t\t<mat-horizontal-stepper [linear]=\"isLinear\">\n\t\t\t  <mat-step [stepControl]=\"firstFormGroup\">\n\t\t\t    <form [formGroup]=\"firstFormGroup\">\n\t\t\t      <ng-template matStepLabel>Fill out your name</ng-template>\n\t\t\t      <mat-form-field>\n\t\t\t        <input matInput placeholder=\"Last name, First name\" formControlName=\"firstCtrl\" required>\n\t\t\t      </mat-form-field>\n\t\t\t      <div>\n\t\t\t        <button mat-button matStepperNext>Next</button>\n\t\t\t      </div>\n\t\t\t    </form>\n\t\t\t  </mat-step>\n\t\t\t  <mat-step [stepControl]=\"secondFormGroup\">\n\t\t\t    <form [formGroup]=\"secondFormGroup\">\n\t\t\t      <ng-template matStepLabel>Fill out your address</ng-template>\n\t\t\t      <mat-form-field>\n\t\t\t        <input matInput placeholder=\"Address\" formControlName=\"secondCtrl\" required>\n\t\t\t      </mat-form-field>\n\t\t\t      <div>\n\t\t\t        <button mat-button matStepperPrevious>Back</button>\n\t\t\t        <button mat-button matStepperNext>Next</button>\n\t\t\t      </div>\n\t\t\t    </form>\n\t\t\t  </mat-step>\n\t\t\t  <mat-step>\n\t\t\t    <ng-template matStepLabel>Done</ng-template>\n\t\t\t    You are now done.\n\t\t\t    <div>\n\t\t\t      <button mat-button matStepperPrevious>Back</button>\n\t\t\t    </div>\n\t\t\t  </mat-step>\n\t\t\t</mat-horizontal-stepper>\n\t\t".trim(),
};


/***/ }),

/***/ "./src/app/material-widgets/stepper/stepper.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/material-widgets/stepper/stepper.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div fxLayout=\"column\" class=\"components-container-gt-xs\"  [ngClass.xs]=\"'components-container-xs'\"  fxLayoutGap=\"20px\" >\n\n\t<div fxFlex class=\"stepper-component-holder mat-elevation-z4\">\n\t\t<mat-toolbar class=\"stepper-header\">\n\t\t\t<h1 class=\"mat-headline center-align\" >Stepper</h1>\n\t\t</mat-toolbar>\n\t\t\n\t\t<div class=\"stepper-container\">\n\t\t\t\n\t\t\t<div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"20px\">\n\t\t\t\t<div fxFlex.xs=\"100\" fxFlex.lg=\"50\" fxFlex.md=\"50\" fxFlex.sm=\"50\" >\n\t\t\t\t\n\n\t\t\t\t\t<h4 class=\"mat-subheading-2 center-align\">Basic Stepper</h4>\n\n\t\t\t\t\t<mat-divider></mat-divider>\n\t\t\t\n\t\t\t\t\t<button mat-raised-button color=\"accent\" (click)=\"isLinear = !isLinear\" id=\"toggle-linear\">Toggle linear mode</button> \n\t\t\t\t\t<span *ngIf=\"isLinear\">Linear mode enabled</span>\n\n\t\t\t\t\t<mat-horizontal-stepper [linear]=\"isLinear\" fxFlexfill>\n\t\t\t\t\t  <mat-step [stepControl]=\"firstFormGroup\">\n\t\t\t\t\t    <form [formGroup]=\"firstFormGroup\">\n\t\t\t\t\t      <ng-template matStepLabel >Fill out your name</ng-template>\n\t\t\t\t\t      <mat-form-field>\n\t\t\t\t\t        <input matInput placeholder=\"Last name, First name\" formControlName=\"firstCtrl\" required>\n\t\t\t\t\t      </mat-form-field>\n\t\t\t\t\t      <div>\n\t\t\t\t\t        <button mat-button matStepperNext>Next</button>\n\t\t\t\t\t      </div>\n\t\t\t\t\t    </form>\n\t\t\t\t\t  </mat-step>\n\t\t\t\t\t  <mat-step [stepControl]=\"secondFormGroup\">\n\t\t\t\t\t    <form [formGroup]=\"secondFormGroup\">\n\t\t\t\t\t      <ng-template matStepLabel>Fill out your address</ng-template>\n\t\t\t\t\t      <mat-form-field>\n\t\t\t\t\t        <input matInput placeholder=\"Address\" formControlName=\"secondCtrl\" required>\n\t\t\t\t\t      </mat-form-field>\n\t\t\t\t\t      <div>\n\t\t\t\t\t        <button mat-button matStepperPrevious>Back</button>\n\t\t\t\t\t        <button mat-button matStepperNext>Next</button>\n\t\t\t\t\t      </div>\n\t\t\t\t\t    </form>\n\t\t\t\t\t  </mat-step>\n\t\t\t\t\t  <mat-step>\n\t\t\t\t\t\t<ng-template matStepLabel>Done</ng-template>\n\t\t\t\t\t    You are now done.\n\t\t\t\t\t    <div>\n\t\t\t\t\t      <button mat-button matStepperPrevious>Back</button>\n\t\t\t\t\t    </div>\n\t\t\t\t\t  </mat-step>\n\t\t\t\t\t</mat-horizontal-stepper>\t           \n\n\t\t\t\t</div>\n\t\t\t\t\n\t\t\t</div>\n\n\t\t</div>\t\t\n\n\t</div>\n\n\t<div fxFlex class=\"stepper-component-holder mat-elevation-z4\">\n\t<mat-toolbar class=\"stepper-header\">\n\t\t<h1 class=\"mat-headline\" >Examples</h1>\n\t</mat-toolbar>\n\n\t<mat-tab-group fxFlexFill>\n\t\t<mat-tab label=\"TS\">\n\t\t\t<div class=\"component-preview\">\n            \t<pre style=\"white-space:pre-line;\"><code mwlHighlightJs [source]=\"stepperHelpers?.tsSourceRaisedButton\" language=\"typescript\"></code></pre>\n        \t</div>\n        </mat-tab>\n        <mat-tab label=\"HTML\">\n        \t<div class=\"component-preview\">\n            \t<pre style=\"white-space:pre-line;\"><code mwlHighlightJs [source]=\"stepperHelpers?.htmlSourceRaisedButton\" language=\"html\"></code></pre>\n            </div>\n        </mat-tab>\n\n        <mat-tab label=\"PREVIEW\">\n        \t<div >\n\t        \t<button mat-raised-button (click)=\"isLinear = true\" id=\"toggle-linear\">Enable linear mode</button>\n\t\t\t\t<mat-horizontal-stepper [linear]=\"isLinear\">\n\t\t\t\t  <mat-step [stepControl]=\"firstFormGroup\">\n\t\t\t\t    <form [formGroup]=\"firstFormGroup\">\n\t\t\t\t      <ng-template matStepLabel>Fill out your name</ng-template>\n\t\t\t\t      <mat-form-field>\n\t\t\t\t        <input matInput placeholder=\"Last name, First name\" formControlName=\"firstCtrl\" required>\n\t\t\t\t      </mat-form-field>\n\t\t\t\t      <div>\n\t\t\t\t        <button mat-button matStepperNext>Next</button>\n\t\t\t\t      </div>\n\t\t\t\t    </form>\n\t\t\t\t  </mat-step>\n\t\t\t\t  <mat-step [stepControl]=\"secondFormGroup\">\n\t\t\t\t    <form [formGroup]=\"secondFormGroup\">\n\t\t\t\t      <ng-template matStepLabel>Fill out your address</ng-template>\n\t\t\t\t      <mat-form-field>\n\t\t\t\t        <input matInput placeholder=\"Address\" formControlName=\"secondCtrl\" required>\n\t\t\t\t      </mat-form-field>\n\t\t\t\t      <div>\n\t\t\t\t        <button mat-button matStepperPrevious>Back</button>\n\t\t\t\t        <button mat-button matStepperNext>Next</button>\n\t\t\t\t      </div>\n\t\t\t\t    </form>\n\t\t\t\t  </mat-step>\n\t\t\t\t  <mat-step>\n\t\t\t\t    <ng-template matStepLabel>Done</ng-template>\n\t\t\t\t    You are now done.\n\t\t\t\t    <div>\n\t\t\t\t      <button mat-button matStepperPrevious>Back</button>\n\t\t\t\t    </div>\n\t\t\t\t  </mat-step>\n\t\t\t\t</mat-horizontal-stepper>\n\t\t  \t</div>\n        </mat-tab>\n    </mat-tab-group>\n\n</div>"

/***/ }),

/***/ "./src/app/material-widgets/stepper/stepper.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/material-widgets/stepper/stepper.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".stepper-header {\n  background-color: #327ebd;\n  color: white;\n  padding: 0 5px; }\n\n.stepper-component-holder {\n  border: 1px solid #327ebd;\n  background-color: white; }\n\n.stepper-component-holder h4 {\n    color: #327ebd;\n    margin: 14px 0; }\n\n.stepper-component-holder mat-divider {\n    margin-bottom: 10px; }\n\n.stepper-container {\n  padding: 5px 15px 15px 15px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWF0ZXJpYWwtd2lkZ2V0cy9zdGVwcGVyL0M6XFxVc2Vyc1xcUm9nZXJGZWRlcmVyXFxEZXNrdG9wXFxJbWJ1ZURlc2tcXE5ldyBmb2xkZXIgKDIpXFxjZGstYWRtaW4tbWFzdGVyL3NyY1xcYXBwXFxtYXRlcmlhbC13aWRnZXRzXFxzdGVwcGVyXFxzdGVwcGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixjQUFjLEVBQUE7O0FBRWhCO0VBQ0MseUJBQXlCO0VBQ3pCLHVCQUF1QixFQUFBOztBQUZ4QjtJQUtFLGNBQWM7SUFDZCxjQUFjLEVBQUE7O0FBTmhCO0lBVUUsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0MsMkJBQTJCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tYXRlcmlhbC13aWRnZXRzL3N0ZXBwZXIvc3RlcHBlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdGVwcGVyLWhlYWRlciB7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogIzMyN2ViZDtcblx0XHRjb2xvcjogd2hpdGU7XG5cdFx0cGFkZGluZzogMCA1cHg7XG5cdH1cbi5zdGVwcGVyLWNvbXBvbmVudC1ob2xkZXIge1xuXHRib3JkZXI6IDFweCBzb2xpZCAjMzI3ZWJkO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcblxuXHRoNCB7XG5cdFx0Y29sb3I6ICMzMjdlYmQ7XG5cdFx0bWFyZ2luOiAxNHB4IDA7XG5cdH1cblxuXHRtYXQtZGl2aWRlciB7XG5cdFx0bWFyZ2luLWJvdHRvbTogMTBweDtcblx0fVxufVxuLnN0ZXBwZXItY29udGFpbmVyIHtcblx0cGFkZGluZzogNXB4IDE1cHggMTVweCAxNXB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/material-widgets/stepper/stepper.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/material-widgets/stepper/stepper.component.ts ***!
  \***************************************************************/
/*! exports provided: StepperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StepperComponent", function() { return StepperComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _helpers_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers.data */ "./src/app/material-widgets/stepper/helpers.data.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StepperComponent = /** @class */ (function () {
    function StepperComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.isLinear = false;
        this.stepperHelpers = _helpers_data__WEBPACK_IMPORTED_MODULE_2__["STEPPER_HELPERS"];
    }
    StepperComponent.prototype.ngOnInit = function () {
        this.firstFormGroup = this.formBuilder.group({
            firstCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
        });
        this.secondFormGroup = this.formBuilder.group({
            secondCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
        });
    };
    StepperComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'cdk-stepper',
            template: __webpack_require__(/*! ./stepper.component.html */ "./src/app/material-widgets/stepper/stepper.component.html"),
            styles: [__webpack_require__(/*! ./stepper.component.scss */ "./src/app/material-widgets/stepper/stepper.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]])
    ], StepperComponent);
    return StepperComponent;
}());



/***/ })

}]);
//# sourceMappingURL=material-widgets-material-widgets-module.js.map