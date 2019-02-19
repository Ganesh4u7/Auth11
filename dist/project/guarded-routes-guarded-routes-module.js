(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["guarded-routes-guarded-routes-module"],{

/***/ "./src/app/guarded-routes/guarded-routes.component.html":
/*!**************************************************************!*\
  !*** ./src/app/guarded-routes/guarded-routes.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\"  class=\"components-container-gt-xs\"  [ngClass.xs]=\"'components-container-xs'\"  fxLayoutGap=\"20px\">\n\n\t<div fxLayout=\"row\" fxLayout.sm=\"column\" fxLayoutAlign=\"start space-between\"  fxLayoutGap=\"10px\">\n\n\t\t<div fxFlex.sm=\"100\" class=\"cdk-routes-holder\"  fxFlex.lg=\"50\" fxFlex.md=\"50\" fxFlex.sm=\"100\" >\n\n\t\t\t<mat-toolbar class=\"routes-header\">\n\t\t\t<h1 class=\"mat-headline center-align\" >Guarded Routes</h1>\n\t\t</mat-toolbar>\n\t\t<div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutAlign=\"space-around center\" style=\"background-color: white;\" class=\"routes-container\" >\n\t\n\t\t\t <button mat-raised-button color=\"primary\" (click)=\"Onclick()\" > Click Here</button>\n\t\t\n\t\t\n\t\t\t <button mat-raised-button color=\"warn\" (click)=\"Onclicked()\" > Click Here</button>\n\t\t\n\t\t</div>\n    \t</div>\n    \t<div fxFlex.xs=\"100\"  class=\"cdk-routes-holder\"  fxFlex.lg=\"50\" fxFlex.md=\"50\" fxFlex.sm=\"100\" >\n\t\t\t<router-outlet >\n\t\t\n\t\t\t</router-outlet>\t\t\t\n    \t</div>\n    </div>\n\n\t    \n\n</div>\n"

/***/ }),

/***/ "./src/app/guarded-routes/guarded-routes.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/guarded-routes/guarded-routes.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".routes-header {\n  background-color: #15980d;\n  color: white;\n  padding: 0 5px; }\n\n.routes-container {\n  padding: 5px 15px 15px 15px;\n  height: 350px; }\n\n.routes-header {\n  background-color: #327ebd;\n  color: white;\n  padding: 0 5px; }\n\n.cdk-routes-holder {\n  border: 1px solid #327ebd;\n  background-color: white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ3VhcmRlZC1yb3V0ZXMvQzpcXFVzZXJzXFxSb2dlckZlZGVyZXJcXERlc2t0b3BcXEltYnVlRGVza1xcTmV3IGZvbGRlciAoMilcXGNkay1hZG1pbi1tYXN0ZXIvc3JjXFxhcHBcXGd1YXJkZWQtcm91dGVzXFxndWFyZGVkLXJvdXRlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osY0FBYyxFQUFBOztBQUVmO0VBQ0MsMkJBQTJCO0VBQzNCLGFBQVksRUFBQTs7QUFHYjtFQUNDLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osY0FBYyxFQUFBOztBQUVmO0VBQ0MseUJBQXlCO0VBQ3pCLHVCQUF1QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvZ3VhcmRlZC1yb3V0ZXMvZ3VhcmRlZC1yb3V0ZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm91dGVzLWhlYWRlciB7XG5cdGJhY2tncm91bmQtY29sb3I6ICMxNTk4MGQ7XG5cdGNvbG9yOiB3aGl0ZTtcblx0cGFkZGluZzogMCA1cHg7XG59XG4ucm91dGVzLWNvbnRhaW5lciB7XG5cdHBhZGRpbmc6IDVweCAxNXB4IDE1cHggMTVweDtcblx0aGVpZ2h0OjM1MHB4O1xufVxuXG4ucm91dGVzLWhlYWRlciB7XG5cdGJhY2tncm91bmQtY29sb3I6ICMzMjdlYmQ7XG5cdGNvbG9yOiB3aGl0ZTtcblx0cGFkZGluZzogMCA1cHg7XG59XG4uY2RrLXJvdXRlcy1ob2xkZXIge1xuXHRib3JkZXI6IDFweCBzb2xpZCAjMzI3ZWJkO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/guarded-routes/guarded-routes.component.ts":
/*!************************************************************!*\
  !*** ./src/app/guarded-routes/guarded-routes.component.ts ***!
  \************************************************************/
/*! exports provided: GuardedRoutesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuardedRoutesComponent", function() { return GuardedRoutesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GuardedRoutesComponent = /** @class */ (function () {
    function GuardedRoutesComponent(router, snackBar) {
        this.router = router;
        this.snackBar = snackBar;
        this.message = 'you do not have permission to access this link';
        this.action = 'exit';
    }
    GuardedRoutesComponent.prototype.ngOnInit = function () {
    };
    GuardedRoutesComponent.prototype.Onclick = function () {
        this.router.navigate(['/auth/guarded-routes/example']);
        // this.router.navigate(['/auth/guarded-routes/', { outlets: { popup: [ 'example' ] }}]); 
    };
    GuardedRoutesComponent.prototype.Onclicked = function () {
        this.router.navigate(['/auth/guarded-routes/ex']);
        this.snackBar.open(this.message, this.action, {
            duration: 2000,
        });
    };
    Object.defineProperty(GuardedRoutesComponent.prototype, "route", {
        get: function () {
            return this.router.routerState.snapshot.url.toString();
        },
        enumerable: true,
        configurable: true
    });
    GuardedRoutesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-guarded-routes',
            template: __webpack_require__(/*! ./guarded-routes.component.html */ "./src/app/guarded-routes/guarded-routes.component.html"),
            styles: [__webpack_require__(/*! ./guarded-routes.component.scss */ "./src/app/guarded-routes/guarded-routes.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]])
    ], GuardedRoutesComponent);
    return GuardedRoutesComponent;
}());



/***/ }),

/***/ "./src/app/guarded-routes/guarded-routes.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/guarded-routes/guarded-routes.module.ts ***!
  \*********************************************************/
/*! exports provided: GuardedRoutesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuardedRoutesModule", function() { return GuardedRoutesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _guarded_routes_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./guarded-routes.component */ "./src/app/guarded-routes/guarded-routes.component.ts");
/* harmony import */ var _guarded_routes_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./guarded-routes.router */ "./src/app/guarded-routes/guarded-routes.router.ts");
/* harmony import */ var _router_router_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./router/router.component */ "./src/app/guarded-routes/router/router.component.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _router_deactivate_router_deactivate_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./router-deactivate/router-deactivate.component */ "./src/app/guarded-routes/router-deactivate/router-deactivate.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var GuardedRoutesModule = /** @class */ (function () {
    function GuardedRoutesModule() {
    }
    GuardedRoutesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSnackBarModule"],
                _guarded_routes_router__WEBPACK_IMPORTED_MODULE_3__["GuardedRouter"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"]
            ],
            providers: [],
            declarations: [_guarded_routes_component__WEBPACK_IMPORTED_MODULE_2__["GuardedRoutesComponent"], _router_router_component__WEBPACK_IMPORTED_MODULE_4__["RouterComponent"], _router_deactivate_router_deactivate_component__WEBPACK_IMPORTED_MODULE_7__["RouterDeactivateComponent"]]
        })
    ], GuardedRoutesModule);
    return GuardedRoutesModule;
}());



/***/ }),

/***/ "./src/app/guarded-routes/guarded-routes.router.ts":
/*!*********************************************************!*\
  !*** ./src/app/guarded-routes/guarded-routes.router.ts ***!
  \*********************************************************/
/*! exports provided: UserToken, Permission, Permissions, CanActivateTeam, routes, GuardedRouter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserToken", function() { return UserToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Permission", function() { return Permission; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Permissions", function() { return Permissions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanActivateTeam", function() { return CanActivateTeam; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuardedRouter", function() { return GuardedRouter; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _guarded_routes_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./guarded-routes.component */ "./src/app/guarded-routes/guarded-routes.component.ts");
/* harmony import */ var _router_router_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./router/router.component */ "./src/app/guarded-routes/router/router.component.ts");
/* harmony import */ var _router_deactivate_router_deactivate_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./router-deactivate/router-deactivate.component */ "./src/app/guarded-routes/router-deactivate/router-deactivate.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserToken = /** @class */ (function () {
    function UserToken() {
    }
    return UserToken;
}());

var Permission = /** @class */ (function () {
    function Permission() {
    }
    Permission.prototype.canActivated = function (user, id) {
        return true;
    };
    return Permission;
}());

var Permissions = /** @class */ (function () {
    function Permissions() {
    }
    Permissions.prototype.canActivate = function (user, id) {
        return false;
    };
    return Permissions;
}());

var CanActivateTeam = /** @class */ (function () {
    function CanActivateTeam(permissions, currentUser) {
        this.permissions = permissions;
        this.currentUser = currentUser;
    }
    CanActivateTeam.prototype.canActivate = function (route, state) {
        return this.permissions.canActivate(this.currentUser, route.params.id);
    };
    CanActivateTeam = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [Permissions, UserToken])
    ], CanActivateTeam);
    return CanActivateTeam;
}());

var routes = [{
        path: '', component: _guarded_routes_component__WEBPACK_IMPORTED_MODULE_2__["GuardedRoutesComponent"],
        children: [{ path: 'example', component: _router_router_component__WEBPACK_IMPORTED_MODULE_3__["RouterComponent"] },
            { path: 'ex', component: _router_deactivate_router_deactivate_component__WEBPACK_IMPORTED_MODULE_4__["RouterDeactivateComponent"], canActivate: [CanActivateTeam] },]
    },
];
var GuardedRouter = /** @class */ (function () {
    function GuardedRouter() {
    }
    GuardedRouter = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
            ],
            providers: [
                CanActivateTeam, UserToken, Permissions,
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], GuardedRouter);
    return GuardedRouter;
}());



/***/ }),

/***/ "./src/app/guarded-routes/router-deactivate/router-deactivate.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/guarded-routes/router-deactivate/router-deactivate.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  router-deactivate works!\n</p>\n"

/***/ }),

/***/ "./src/app/guarded-routes/router-deactivate/router-deactivate.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/guarded-routes/router-deactivate/router-deactivate.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2d1YXJkZWQtcm91dGVzL3JvdXRlci1kZWFjdGl2YXRlL3JvdXRlci1kZWFjdGl2YXRlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/guarded-routes/router-deactivate/router-deactivate.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/guarded-routes/router-deactivate/router-deactivate.component.ts ***!
  \*********************************************************************************/
/*! exports provided: RouterDeactivateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouterDeactivateComponent", function() { return RouterDeactivateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RouterDeactivateComponent = /** @class */ (function () {
    function RouterDeactivateComponent() {
    }
    RouterDeactivateComponent.prototype.ngOnInit = function () {
    };
    RouterDeactivateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-router-deactivate',
            template: __webpack_require__(/*! ./router-deactivate.component.html */ "./src/app/guarded-routes/router-deactivate/router-deactivate.component.html"),
            styles: [__webpack_require__(/*! ./router-deactivate.component.scss */ "./src/app/guarded-routes/router-deactivate/router-deactivate.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], RouterDeactivateComponent);
    return RouterDeactivateComponent;
}());



/***/ }),

/***/ "./src/app/guarded-routes/router/router.component.html":
/*!*************************************************************!*\
  !*** ./src/app/guarded-routes/router/router.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxLayoutAlign=\"space-around center\"  style=\"background-color: white;\" class=\"container mat-headline center-align \">\n<h1> WELCOME </h1>\n<h2>THIS IS A NEW PAGE </h2>\n\t\n</div>\n"

/***/ }),

/***/ "./src/app/guarded-routes/router/router.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/guarded-routes/router/router.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  height: 350px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ3VhcmRlZC1yb3V0ZXMvcm91dGVyL0M6XFxVc2Vyc1xcUm9nZXJGZWRlcmVyXFxEZXNrdG9wXFxJbWJ1ZURlc2tcXE5ldyBmb2xkZXIgKDIpXFxjZGstYWRtaW4tbWFzdGVyL3NyY1xcYXBwXFxndWFyZGVkLXJvdXRlc1xccm91dGVyXFxyb3V0ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxhQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9ndWFyZGVkLXJvdXRlcy9yb3V0ZXIvcm91dGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcblx0aGVpZ2h0OjM1MHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/guarded-routes/router/router.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/guarded-routes/router/router.component.ts ***!
  \***********************************************************/
/*! exports provided: RouterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouterComponent", function() { return RouterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RouterComponent = /** @class */ (function () {
    function RouterComponent() {
    }
    RouterComponent.prototype.ngOnInit = function () {
    };
    RouterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-router',
            template: __webpack_require__(/*! ./router.component.html */ "./src/app/guarded-routes/router/router.component.html"),
            styles: [__webpack_require__(/*! ./router.component.scss */ "./src/app/guarded-routes/router/router.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], RouterComponent);
    return RouterComponent;
}());



/***/ })

}]);
//# sourceMappingURL=guarded-routes-guarded-routes-module.js.map