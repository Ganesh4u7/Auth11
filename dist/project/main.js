(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../auth/auth.module": [
		"./src/app/auth/auth.module.ts",
		"default~auth-auth-module~charts-charts-module",
		"auth-auth-module"
	],
	"../charts/charts.module": [
		"./src/app/charts/charts.module.ts",
		"default~auth-auth-module~charts-charts-module",
		"charts-charts-module"
	],
	"../forms/forms.module": [
		"./src/app/forms/forms.module.ts",
		"forms-forms-module"
	],
	"../guarded-routes/guarded-routes.module": [
		"./src/app/guarded-routes/guarded-routes.module.ts",
		"guarded-routes-guarded-routes-module"
	],
	"../maps/maps.module": [
		"./src/app/maps/maps.module.ts",
		"default~maps-maps-module~material-widgets-material-widgets-module~tables-tables-module",
		"maps-maps-module"
	],
	"../material-widgets/material-widgets.module": [
		"./src/app/material-widgets/material-widgets.module.ts",
		"default~maps-maps-module~material-widgets-material-widgets-module~tables-tables-module",
		"material-widgets-material-widgets-module"
	],
	"../pages/pages.module": [
		"./src/app/pages/pages.module.ts",
		"pages-pages-module"
	],
	"../register/register.module": [
		"./src/app/register/register.module.ts",
		"register-register-module"
	],
	"../scrumboard/scrumboard.module": [
		"./src/app/scrumboard/scrumboard.module.ts",
		"scrumboard-scrumboard-module"
	],
	"../tables/tables.module": [
		"./src/app/tables/tables.module.ts",
		"default~maps-maps-module~material-widgets-material-widgets-module~tables-tables-module",
		"tables-tables-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<router-outlet ></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(afAuth) {
        this.afAuth = afAuth;
        this.title = 'app';
    }
    AppComponent.prototype.getRouteAnimation = function (outlet) {
        return outlet.activatedRouteData.animation;
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.afAuth.authState
            .subscribe(function (user) {
            console.log(user);
            _this.user = user;
        });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: firebaseConfig, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "firebaseConfig", function() { return firebaseConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _lazy_load_lazy_load_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lazy-load/lazy-load.module */ "./src/app/lazy-load/lazy-load.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./auth/login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./auth/auth.guard */ "./src/app/auth/auth.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var firebaseConfig = {
    apiKey: "AIzaSyA0-qXDC2iVfitEiAD_EonyXektpDRVkFk",
    authDomain: "fir-auth-7b5d8.firebaseapp.com",
    databaseURL: "https://fir-auth-7b5d8.firebaseio.com",
    projectId: "fir-auth-7b5d8",
    storageBucket: "fir-auth-7b5d8.appspot.com",
    messagingSenderId: "404412576606"
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _auth_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _lazy_load_lazy_load_module__WEBPACK_IMPORTED_MODULE_3__["LazyLoadModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_6__["AngularFireModule"].initializeApp(firebaseConfig),
                _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__["AngularFireAuthModule"]
            ],
            providers: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.guard.ts":
/*!************************************!*\
  !*** ./src/app/auth/auth.guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.service */ "./src/app/auth/login.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = /** @class */ (function () {
    function AuthGuard(service) {
        this.service = service;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        return this.service.isLoggedStatus;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth/login.service.ts":
/*!***************************************!*\
  !*** ./src/app/auth/login.service.ts ***!
  \***************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginService = /** @class */ (function () {
    function LoginService(afAuth) {
        this.afAuth = afAuth;
        this.isLoggedin = false;
    }
    LoginService.prototype.login = function () {
        console.log('Redirecting to Google login provider');
        this.afAuth.auth.signInWithRedirect(new firebase__WEBPACK_IMPORTED_MODULE_2__["auth"].GoogleAuthProvider());
    };
    LoginService.prototype.loginFB = function () {
        console.log('Redirecting to Facebook login provider');
        this.afAuth.auth.signInWithRedirect(new firebase__WEBPACK_IMPORTED_MODULE_2__["auth"].FacebookAuthProvider());
    };
    LoginService.prototype.logout = function () {
        this.afAuth.auth.signOut();
    };
    LoginService.prototype.getLoggedInUser = function () {
        return this.afAuth.authState;
    };
    LoginService.prototype.setLoggedin = function (val) {
        this.isLoggedin = val;
    };
    Object.defineProperty(LoginService.prototype, "isLoggedStatus", {
        get: function () {
            return this.isLoggedin;
        },
        enumerable: true,
        configurable: true
    });
    LoginService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/auth/login/login.component.html":
/*!*************************************************!*\
  !*** ./src/app/auth/login/login.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\">\n<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css\">\n<script src=\"https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js\"></script>\n<script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js\"></script>\n\n\n<div>&nbsp;</div>\n<div>&nbsp;</div>\n<div>&nbsp;</div>\n<div>&nbsp;</div>\n<div>&nbsp;</div>\n<div>&nbsp;</div>\n<div>&nbsp;</div>\n<div>&nbsp;</div><div>&nbsp;</div>\n<div>&nbsp;</div><div>&nbsp;</div>\n\n\n\n\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col text-center\">\n      <button class=\" loginBtn loginBtn--google\" (click)=\"loginGoogle()\">\n        Login with Google\n      </button>\n\n      <div>&nbsp;</div>\n      <button class=\"  loginBtn loginBtn--facebook  \" (click)=\"loginFB()\">\n        Login with Facebook\n      </button>\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/auth/login/login.component.scss":
/*!*************************************************!*\
  !*** ./src/app/auth/login/login.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  padding: 2em; }\n\n/* Shared */\n\n.loginBtn {\n  box-sizing: border-box;\n  position: relative;\n  /* width: 13em;  - apply for fixed size */\n  margin: 0.2em;\n  padding: 0 15px 0 46px;\n  border: none;\n  text-align: left;\n  line-height: 34px;\n  white-space: nowrap;\n  border-radius: 0.2em;\n  font-size: 16px;\n  color: #FFF; }\n\n.loginBtn:before {\n  content: \"\";\n  box-sizing: border-box;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 34px;\n  height: 100%; }\n\n.loginBtn:focus {\n  outline: none; }\n\n.loginBtn:active {\n  box-shadow: inset 0 0 0 32px rgba(0, 0, 0, 0.1); }\n\n/* Facebook */\n\n.loginBtn--facebook {\n  background-color: #4C69BA;\n  background-image: linear-gradient(#4C69BA, #3B55A0);\n  /*font-family: \"Helvetica neue\", Helvetica Neue, Helvetica, Arial, sans-serif;*/\n  text-shadow: 0 -1px 0 #354C8C; }\n\n.loginBtn--facebook:before {\n  border-right: #364e92 1px solid;\n  background: url(\"https://s3-us-west-2.amazonaws.com/s.cdpn.io/14082/icon_facebook.png\") 6px 6px no-repeat; }\n\n.loginBtn--facebook:hover,\n.loginBtn--facebook:focus {\n  background-color: #5B7BD5;\n  background-image: linear-gradient(#5B7BD5, #4864B1); }\n\n/* Google */\n\n.loginBtn--google {\n  /*font-family: \"Roboto\", Roboto, arial, sans-serif;*/\n  background: #DD4B39; }\n\n.loginBtn--google:before {\n  border-right: #BB3F30 1px solid;\n  background: url(\"https://s3-us-west-2.amazonaws.com/s.cdpn.io/14082/icon_google.png\") 6px 6px no-repeat; }\n\n.loginBtn--google:hover,\n.loginBtn--google:focus {\n  background: #E74B37; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9sb2dpbi9DOlxcVXNlcnNcXFJvZ2VyRmVkZXJlclxcRGVza3RvcFxcSW1idWVEZXNrXFxOZXcgZm9sZGVyICgyKVxcY2RrLWFkbWluLW1hc3Rlci9zcmNcXGFwcFxcYXV0aFxcbG9naW5cXGxvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQU8sWUFBWSxFQUFBOztBQUduQixXQUFBOztBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQix5Q0FBQTtFQUNBLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsV0FBVyxFQUFBOztBQUViO0VBQ0UsV0FBVztFQUNYLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxXQUFXO0VBQ1gsWUFBWSxFQUFBOztBQUVkO0VBQ0UsYUFBYSxFQUFBOztBQUVmO0VBQ0UsK0NBQTRDLEVBQUE7O0FBSTlDLGFBQUE7O0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsbURBQW1EO0VBQ25ELCtFQUFBO0VBQ0EsNkJBQTZCLEVBQUE7O0FBRS9CO0VBQ0UsK0JBQStCO0VBQy9CLHlHQUF5RyxFQUFBOztBQUUzRzs7RUFFRSx5QkFBeUI7RUFDekIsbURBQW1ELEVBQUE7O0FBSXJELFdBQUE7O0FBQ0E7RUFDRSxvREFBQTtFQUNBLG1CQUFtQixFQUFBOztBQUVyQjtFQUNFLCtCQUErQjtFQUMvQix1R0FBdUcsRUFBQTs7QUFFekc7O0VBRUUsbUJBQW1CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hdXRoL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7IHBhZGRpbmc6IDJlbTsgfVxyXG5cclxuXHJcbi8qIFNoYXJlZCAqL1xyXG4ubG9naW5CdG4ge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIC8qIHdpZHRoOiAxM2VtOyAgLSBhcHBseSBmb3IgZml4ZWQgc2l6ZSAqL1xyXG4gIG1hcmdpbjogMC4yZW07XHJcbiAgcGFkZGluZzogMCAxNXB4IDAgNDZweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBsaW5lLWhlaWdodDogMzRweDtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuMmVtO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBjb2xvcjogI0ZGRjtcclxufVxyXG4ubG9naW5CdG46YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAzNHB4O1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG4ubG9naW5CdG46Zm9jdXMge1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuLmxvZ2luQnRuOmFjdGl2ZSB7XHJcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMzJweCByZ2JhKDAsMCwwLDAuMSk7XHJcbn1cclxuXHJcblxyXG4vKiBGYWNlYm9vayAqL1xyXG4ubG9naW5CdG4tLWZhY2Vib29rIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNEM2OUJBO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgjNEM2OUJBLCAjM0I1NUEwKTtcclxuICAvKmZvbnQtZmFtaWx5OiBcIkhlbHZldGljYSBuZXVlXCIsIEhlbHZldGljYSBOZXVlLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmOyovXHJcbiAgdGV4dC1zaGFkb3c6IDAgLTFweCAwICMzNTRDOEM7XHJcbn1cclxuLmxvZ2luQnRuLS1mYWNlYm9vazpiZWZvcmUge1xyXG4gIGJvcmRlci1yaWdodDogIzM2NGU5MiAxcHggc29saWQ7XHJcbiAgYmFja2dyb3VuZDogdXJsKCdodHRwczovL3MzLXVzLXdlc3QtMi5hbWF6b25hd3MuY29tL3MuY2Rwbi5pby8xNDA4Mi9pY29uX2ZhY2Vib29rLnBuZycpIDZweCA2cHggbm8tcmVwZWF0O1xyXG59XHJcbi5sb2dpbkJ0bi0tZmFjZWJvb2s6aG92ZXIsXHJcbi5sb2dpbkJ0bi0tZmFjZWJvb2s6Zm9jdXMge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM1QjdCRDU7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCM1QjdCRDUsICM0ODY0QjEpO1xyXG59XHJcblxyXG5cclxuLyogR29vZ2xlICovXHJcbi5sb2dpbkJ0bi0tZ29vZ2xlIHtcclxuICAvKmZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBSb2JvdG8sIGFyaWFsLCBzYW5zLXNlcmlmOyovXHJcbiAgYmFja2dyb3VuZDogI0RENEIzOTtcclxufVxyXG4ubG9naW5CdG4tLWdvb2dsZTpiZWZvcmUge1xyXG4gIGJvcmRlci1yaWdodDogI0JCM0YzMCAxcHggc29saWQ7XHJcbiAgYmFja2dyb3VuZDogdXJsKCdodHRwczovL3MzLXVzLXdlc3QtMi5hbWF6b25hd3MuY29tL3MuY2Rwbi5pby8xNDA4Mi9pY29uX2dvb2dsZS5wbmcnKSA2cHggNnB4IG5vLXJlcGVhdDtcclxufVxyXG4ubG9naW5CdG4tLWdvb2dsZTpob3ZlcixcclxuLmxvZ2luQnRuLS1nb29nbGU6Zm9jdXMge1xyXG4gIGJhY2tncm91bmQ6ICNFNzRCMzc7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/auth/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../login.service */ "./src/app/auth/login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(route, router, service) {
        this.route = route;
        this.router = router;
        this.service = service;
        this.isAuthenticated = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getLoggedInUser()
            .subscribe(function (user) {
            if (user) {
                console.log(user.emailVerified);
                _this.user = user;
                if (user.emailVerified == true) {
                    _this.router.navigate(['auth/dashboard']);
                    _this.service.setLoggedin(true);
                }
            }
        });
    };
    LoginComponent.prototype.loginGoogle = function () {
        console.log('Login..');
        this.service.login();
    };
    LoginComponent.prototype.loginFB = function () {
        console.log("Login..");
        this.service.loginFB();
    };
    LoginComponent.prototype.logout = function () {
        this.service.logout();
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/auth/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/auth/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _sidemenu_sidemenu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidemenu/sidemenu.component */ "./src/app/core/sidemenu/sidemenu.component.ts");
/* harmony import */ var _sidemenu_item_sidemenu_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sidemenu-item/sidemenu-item.component */ "./src/app/core/sidemenu-item/sidemenu-item.component.ts");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm5/chips.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _toolbar_notification_toolbar_notification_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./toolbar-notification/toolbar-notification.component */ "./src/app/core/toolbar-notification/toolbar-notification.component.ts");
/* harmony import */ var _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./toolbar/toolbar.component */ "./src/app/core/toolbar/toolbar.component.ts");
/* harmony import */ var _search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./search-bar/search-bar.component */ "./src/app/core/search-bar/search-bar.component.ts");
/* harmony import */ var _fullscreen_fullscreen_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./fullscreen/fullscreen.component */ "./src/app/core/fullscreen/fullscreen.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/core/sidebar/sidebar.component.ts");
/* harmony import */ var _user_menu_user_menu_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./user-menu/user-menu.component */ "./src/app/core/user-menu/user-menu.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true
};
var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _sidemenu_sidemenu_component__WEBPACK_IMPORTED_MODULE_2__["SidemenuComponent"],
                _sidemenu_item_sidemenu_item_component__WEBPACK_IMPORTED_MODULE_3__["SidemenuItemComponent"],
                _toolbar_notification_toolbar_notification_component__WEBPACK_IMPORTED_MODULE_15__["ToolbarNotificationComponent"],
                _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_16__["ToolbarComponent"],
                _search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_17__["SearchBarComponent"],
                _fullscreen_fullscreen_component__WEBPACK_IMPORTED_MODULE_18__["FullscreenComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_19__["SidebarComponent"],
                _user_menu_user_menu_component__WEBPACK_IMPORTED_MODULE_20__["UserMenuComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_4__["MatListModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__["MatChipsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_13__["PerfectScrollbarModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_14__["FlexLayoutModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatProgressBarModule"],
            ],
            exports: [
                _sidemenu_sidemenu_component__WEBPACK_IMPORTED_MODULE_2__["SidemenuComponent"],
                _sidemenu_item_sidemenu_item_component__WEBPACK_IMPORTED_MODULE_3__["SidemenuItemComponent"],
                _toolbar_notification_toolbar_notification_component__WEBPACK_IMPORTED_MODULE_15__["ToolbarNotificationComponent"],
                _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_16__["ToolbarComponent"],
                _search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_17__["SearchBarComponent"],
                _fullscreen_fullscreen_component__WEBPACK_IMPORTED_MODULE_18__["FullscreenComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_19__["SidebarComponent"],
                _user_menu_user_menu_component__WEBPACK_IMPORTED_MODULE_20__["UserMenuComponent"]
            ],
            providers: [
                {
                    provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_13__["PERFECT_SCROLLBAR_CONFIG"],
                    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
                }
            ]
        })
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/core/fullscreen/fullscreen.component.html":
/*!***********************************************************!*\
  !*** ./src/app/core/fullscreen/fullscreen.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button mat-icon-button [fxHide]=\"true\" [fxHide.gt-xs]=\"false\" (click)=\"toggleFullscreen()\">\n    <mat-icon *ngIf=\"!isFullscreen\">fullscreen</mat-icon>\n    <mat-icon *ngIf=\"isFullscreen\">fullscreen_exit</mat-icon>\n</button>"

/***/ }),

/***/ "./src/app/core/fullscreen/fullscreen.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/core/fullscreen/fullscreen.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvZnVsbHNjcmVlbi9mdWxsc2NyZWVuLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/core/fullscreen/fullscreen.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/core/fullscreen/fullscreen.component.ts ***!
  \*********************************************************/
/*! exports provided: FullscreenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullscreenComponent", function() { return FullscreenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var screenfull__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! screenfull */ "./node_modules/screenfull/dist/screenfull.js");
/* harmony import */ var screenfull__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(screenfull__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FullscreenComponent = /** @class */ (function () {
    function FullscreenComponent() {
        this.isFullscreen = false;
    }
    FullscreenComponent.prototype.ngOnInit = function () {
    };
    FullscreenComponent.prototype.toggleFullscreen = function () {
        if (screenfull__WEBPACK_IMPORTED_MODULE_1__["enabled"]) {
            screenfull__WEBPACK_IMPORTED_MODULE_1__["toggle"]();
            this.isFullscreen = !this.isFullscreen;
        }
    };
    FullscreenComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'cdk-fullscreen',
            template: __webpack_require__(/*! ./fullscreen.component.html */ "./src/app/core/fullscreen/fullscreen.component.html"),
            styles: [__webpack_require__(/*! ./fullscreen.component.scss */ "./src/app/core/fullscreen/fullscreen.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FullscreenComponent);
    return FullscreenComponent;
}());



/***/ }),

/***/ "./src/app/core/search-bar/search-bar.component.html":
/*!***********************************************************!*\
  !*** ./src/app/core/search-bar/search-bar.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field class=\"search\"  [ngClass]=\"{'search-open': open == true}\"> \n  <input matInput placeholder=\"Search\" autocomplete=\"off\" (focus)=\"bigMenu = true\" (focusout)=\"bigMenu = false\">\n</mat-form-field>"

/***/ }),

/***/ "./src/app/core/search-bar/search-bar.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/core/search-bar/search-bar.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".search {\n  width: 0;\n  overflow: hidden;\n  opacity: 0;\n  visibility: hidden;\n  transition: all 0.4s cubic-bezier(0.35, 0, 0.25, 1);\n  margin-top: 7px; }\n\n.search.search-open {\n  width: 250px;\n  visibility: visible;\n  opacity: 1;\n  margin-top: 11px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9zZWFyY2gtYmFyL0M6XFxVc2Vyc1xcUm9nZXJGZWRlcmVyXFxEZXNrdG9wXFxJbWJ1ZURlc2tcXE5ldyBmb2xkZXIgKDIpXFxjZGstYWRtaW4tbWFzdGVyL3NyY1xcYXBwXFxjb3JlXFxzZWFyY2gtYmFyXFxzZWFyY2gtYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsUUFBUTtFQUNSLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLG1EQUE2QztFQUM3QyxlQUFlLEVBQUE7O0FBR2hCO0VBQ0MsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1YsZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb3JlL3NlYXJjaC1iYXIvc2VhcmNoLWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWFyY2gge1xuXHR3aWR0aDogMDtcblx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0b3BhY2l0eTogMDtcblx0dmlzaWJpbGl0eTogaGlkZGVuO1xuXHR0cmFuc2l0aW9uOiBhbGwgLjRzIGN1YmljLWJlemllciguMzUsMCwuMjUsMSk7XG5cdG1hcmdpbi10b3A6IDdweDtcbn1cblxuLnNlYXJjaC5zZWFyY2gtb3BlbiB7XG5cdHdpZHRoOiAyNTBweDtcblx0dmlzaWJpbGl0eTogdmlzaWJsZTtcblx0b3BhY2l0eTogMTtcblx0bWFyZ2luLXRvcDogMTFweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/core/search-bar/search-bar.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/core/search-bar/search-bar.component.ts ***!
  \*********************************************************/
/*! exports provided: SearchBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchBarComponent", function() { return SearchBarComponent; });
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

var SearchBarComponent = /** @class */ (function () {
    function SearchBarComponent() {
    }
    SearchBarComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SearchBarComponent.prototype, "open", void 0);
    SearchBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'cdk-search-bar',
            template: __webpack_require__(/*! ./search-bar.component.html */ "./src/app/core/search-bar/search-bar.component.html"),
            styles: [__webpack_require__(/*! ./search-bar.component.scss */ "./src/app/core/search-bar/search-bar.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SearchBarComponent);
    return SearchBarComponent;
}());



/***/ }),

/***/ "./src/app/core/sidebar/sidebar.component.html":
/*!*****************************************************!*\
  !*** ./src/app/core/sidebar/sidebar.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-tab-group>\n    <mat-tab label=\"Overview\">\n\n        <div class=\"sidebar\">\n\n            <div fxLayout=\"column\" fxLayoutAlign=\"center center\" style=\"padding: 30px 0; background: url('./assets/images/bg/city1.jpg');\">\n                <div style=\"width: 100%; height: 22%; position: absolute;background: #17161642;z-index: 1\"></div>\n                <div class=\"mat-display-2\" style=\"margin: 0; color: white;z-index: 2\">{{today | date:'shortTime'}}</div>\n                <div class=\"mat-subheading-2\" style=\"margin: 0;color: white;z-index: 2\">{{today | date:'EEEE'}}, {{today | date:'MMMM'}} {{today | date:'dd'}}\n                </div>\n            </div>\n\n\n            <mat-divider></mat-divider>\n\n            <h3 class=\"mat-subheading-2\" style=\"margin: 10px 14px 0;\">Upcoming Events</h3>\n            <mat-nav-list>\n                <div *ngFor=\"let event of events;\">\n                    <mat-list-item>\n                        <div fxLayout=\"row\" fxLayoutAlign=\"start center\" mat-ripple>\n                            <div fxLayout=\"column\">\n                                <div class=\"mat-ubheading-2\" style=\"margin: 0; font-weight: bold;\">{{ event.title }}</div>\n                                <div style=\"font-size: 12px;\">{{ event.time }}</div>\n                            </div>\n                        </div>\n                    </mat-list-item>\n                </div>\n            </mat-nav-list>\n\n\n\n            <mat-divider></mat-divider>\n\n            <mat-nav-list>\n                <h3 class=\"mat-subheading-2\" style=\"margin: 10px 14px 0;\">Todo-List</h3>\n                <div *ngFor=\"let todolist of todolists;\">\n                    <mat-list-item>\n                        <div fxLayout=\"row\" fxLayoutAlign=\"start center\" mat-ripple>\n                            <div class=\"title\" fxLayout=\"column\">\n                                <div class=\"mat-ubheading-2\" style=\"margin: 0; font-weight: bold;\">{{ todolist.title }}</div>\n                                <div style=\"font-size: 12px;\">{{ todolist.time }}</div>\n                            </div>\n                        </div>\n                    </mat-list-item>\n                </div>\n            </mat-nav-list>\n\n            <mat-divider></mat-divider>\n\n\n        </div>\n    </mat-tab>\n\n    <mat-tab label=\"Notifications\">\n        <div class=\"sidebar\">\n            <div>\n                <h3 style=\"margin: 10px 14px 0;\">Friends</h3>\n\n                <mat-list>\n                    <mat-list-item *ngFor=\"let message of messages\">\n                        <img matListAvatar src=\"assets/images/avatars/friend1.jpeg\" alt=\"...\">\n                        <h3 matLine style=\"margin: 0; font-weight: bold;\"> {{message.from}} </h3>\n                        <p matLine>\n                            <span> {{message.subject}} </span>\n                            <span> -- {{message.content}} </span>\n                        </p>\n                    </mat-list-item>\n                </mat-list>\n\n            </div>\n        </div>\n\n    </mat-tab>\n</mat-tab-group>\n\n<mat-divider></mat-divider>\n\n<mat-nav-list>\n    <div>\n        <h3 class=\"mat-subheading-2\" style=\"margin: 10px 14px 0;\">Server Statistics</h3>\n        <div>\n            <mat-list-item>\n                <h5>CPU Load</h5>\n                <mat-progress-bar [color]=\"'accent'\" [mode]=\"'buffer'\" [value]=\"'70'\" [bufferValue]=\"100\">></mat-progress-bar>\n            </mat-list-item>\n        </div>\n\n\n        <div>\n            <mat-list-item>\n                <h5>RAM Usage</h5>\n                <mat-progress-bar [color]=\"'primary'\" [mode]=\"'buffer'\" [value]=\"'47'\" [bufferValue]=\"100\"></mat-progress-bar>\n            </mat-list-item>\n        </div>\n\n\n        <div>\n            <mat-list-item>\n                <h5>CPU Temp</h5>\n                <mat-progress-bar [color]=\"'warn'\" [mode]=\"'buffer'\" [value]=\"'43'\" [bufferValue]=\"100\"></mat-progress-bar>\n            </mat-list-item>\n        </div>\n\n    </div>\n</mat-nav-list>"

/***/ }),

/***/ "./src/app/core/sidebar/sidebar.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/core/sidebar/sidebar.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\n  margin-top: 2px; }\n\n.example-margin {\n  margin: 0 10px; }\n\n.today {\n  width: 100%;\n  height: 22%;\n  position: absolute;\n  background: '#17161642';\n  z-index: 1; }\n\n.today-bg {\n  padding: 30px 0;\n  background: url('city1.jpg'); }\n\n.today-time {\n  margin: 0;\n  color: white;\n  z-index: 2; }\n\n.today-date {\n  margin: 0;\n  color: white;\n  z-index: 2; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9zaWRlYmFyL0M6XFxVc2Vyc1xcUm9nZXJGZWRlcmVyXFxEZXNrdG9wXFxJbWJ1ZURlc2tcXE5ldyBmb2xkZXIgKDIpXFxjZGstYWRtaW4tbWFzdGVyL3NyY1xcYXBwXFxjb3JlXFxzaWRlYmFyXFxzaWRlYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0MsZUFBZSxFQUFBOztBQUdoQjtFQUNFLGNBQWMsRUFBQTs7QUFFaEI7RUFDQyxXQUFXO0VBQ1gsV0FBVztFQUNYLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsVUFBVSxFQUFBOztBQUVYO0VBQ0MsZUFBZTtFQUNmLDRCQUFzRCxFQUFBOztBQUV2RDtFQUNDLFNBQVM7RUFDVCxZQUFZO0VBQ1osVUFBVSxFQUFBOztBQUVYO0VBQ0MsU0FBUztFQUNULFlBQVk7RUFDWixVQUFVLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb3JlL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWRlYmFye1xuICB9XG4uY29udGVudHtcblx0bWFyZ2luLXRvcDogMnB4O1xuXG59XG4uZXhhbXBsZS1tYXJnaW4ge1xuICBtYXJnaW46IDAgMTBweDtcbn1cbi50b2RheXtcblx0d2lkdGg6IDEwMCU7XG5cdGhlaWdodDogMjIlO1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdGJhY2tncm91bmQ6ICcjMTcxNjE2NDInO1xuXHR6LWluZGV4OiAxO1xufVxuLnRvZGF5LWJne1xuXHRwYWRkaW5nOiAzMHB4IDA7XG5cdGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9iZy9jaXR5MS5qcGcnKTtcbn1cbi50b2RheS10aW1le1xuXHRtYXJnaW46IDA7XG5cdGNvbG9yOiB3aGl0ZTtcblx0ei1pbmRleDogMjtcbn1cbi50b2RheS1kYXRle1xuXHRtYXJnaW46IDA7XG5cdGNvbG9yOiB3aGl0ZTtcblx0ei1pbmRleDogMjtcbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/core/sidebar/sidebar.component.ts":
/*!***************************************************!*\
  !*** ./src/app/core/sidebar/sidebar.component.ts ***!
  \***************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
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

var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
        this.today = Date.now();
        // public bufferValue;
        this.events = [
            {
                id: 'id',
                title: 'Business Meeting',
                time: '05:00 PM',
                state: 'state'
            },
            {
                id: 'id',
                title: 'Ask for a Vacation',
                time: '05:00 PM',
                state: 'state'
            },
            {
                id: 'id',
                title: 'Dinner with Micheal',
                time: '05:00 PM',
                state: 'state'
            },
            {
                id: 'id',
                title: 'Deadline for Project ABC',
                time: '05:00 PM',
                state: 'state'
            },
        ];
        this.todolists = [
            {
                id: 'id',
                title: 'Get to know Angular more',
                time: 'Added:4 days ago',
            },
            {
                id: 'id',
                title: 'Configure new Router',
                time: 'Added:4 days ago',
            },
            {
                id: 'id',
                title: 'Invite Joy to play Carroms',
                time: 'Added:4 days ago',
            },
            {
                id: 'id',
                title: 'Check SRS of Project X',
                time: 'Added:4 days ago',
            },
        ];
        this.messages = [
            { from: 'Catherin', subject: 'Shopping', content: 'hi there??' },
            { from: 'Jack', subject: 'Function', content: 'yes' },
            { from: 'Karina', subject: 'Get together', content: 'nice' },
            { from: 'Micheal', subject: 'Trip', content: 'ya.. I will' },
            { from: 'Ashik', subject: 'Meeting', content: 'Time??' },
            { from: 'Joy', subject: 'Party', content: 'Lets enjoy' },
        ];
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'cdk-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/core/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.scss */ "./src/app/core/sidebar/sidebar.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/core/sidemenu-item/sidemenu-item.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/core/sidemenu-item/sidemenu-item.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-nav-list [style.maxHeight]=\"(menu.open)?'1200px':'48px'\"  [ngClass]=\"{'secondaryMenu': secondaryMenu, 'primary': !secondaryMenu}\">\n    <mat-list-item *ngIf = \"menu.link==false\" (click)=\"menu.open = !menu.open\" >\n        <mat-icon matListIcon iconsmall  >{{menu.icon}} </mat-icon>\n        <h3 matLine *ngIf=\"!iconOnly\">{{ menu.name }} </h3>\n        <mat-chip-list *ngIf=\"menu?.chip && !iconOnly\">\n            <mat-chip >{{menu?.chip?.value}} </mat-chip>\n        </mat-chip-list>        \n        <mat-icon *ngIf=\"chechForChildMenu()\" class=\"sidenav-dropdown-indicator rotate \" [ngClass]=\"{'indicateOpen':menu.open}\"> expand_more</mat-icon>\n    </mat-list-item>\n\n    <mat-list-item *ngIf = \"menu.link!=false\" (click)=\"menu.open = !menu.open\" [routerLink]=\"[menu.link]\">\n    \t<mat-icon matListIcon iconsmall  >{{menu.icon}} </mat-icon>\n        <h3 matLine *ngIf=\"!iconOnly\">{{ menu.name }} </h3>\n    </mat-list-item>\n\n    <cdk-sidemenu-item *ngFor=\"let submenu of menu?.sub\" [menu]=\"submenu\" [iconOnly]=\"iconOnly\" [secondaryMenu]=\"true\"> </cdk-sidemenu-item>\n\n</mat-nav-list>\n"

/***/ }),

/***/ "./src/app/core/sidemenu-item/sidemenu-item.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/core/sidemenu-item/sidemenu-item.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvc2lkZW1lbnUtaXRlbS9zaWRlbWVudS1pdGVtLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/core/sidemenu-item/sidemenu-item.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/core/sidemenu-item/sidemenu-item.component.ts ***!
  \***************************************************************/
/*! exports provided: SidemenuItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidemenuItemComponent", function() { return SidemenuItemComponent; });
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

var SidemenuItemComponent = /** @class */ (function () {
    function SidemenuItemComponent() {
        this.secondaryMenu = false;
    }
    SidemenuItemComponent.prototype.ngOnInit = function () {
    };
    SidemenuItemComponent.prototype.openLink = function () {
        this.menu.open = this.menu.open;
    };
    SidemenuItemComponent.prototype.chechForChildMenu = function () {
        return (this.menu && this.menu.sub) ? true : false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SidemenuItemComponent.prototype, "menu", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], SidemenuItemComponent.prototype, "iconOnly", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SidemenuItemComponent.prototype, "secondaryMenu", void 0);
    SidemenuItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'cdk-sidemenu-item',
            template: __webpack_require__(/*! ./sidemenu-item.component.html */ "./src/app/core/sidemenu-item/sidemenu-item.component.html"),
            styles: [__webpack_require__(/*! ./sidemenu-item.component.scss */ "./src/app/core/sidemenu-item/sidemenu-item.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SidemenuItemComponent);
    return SidemenuItemComponent;
}());



/***/ }),

/***/ "./src/app/core/sidemenu/menu-element.ts":
/*!***********************************************!*\
  !*** ./src/app/core/sidemenu/menu-element.ts ***!
  \***********************************************/
/*! exports provided: menus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menus", function() { return menus; });
var menus = [
    {
        'name': 'Dashboard',
        'icon': 'dashboard',
        'link': false,
        'open': false,
        'chip': { 'value': 1, 'color': 'accent' },
        'sub': [
            {
                'name': 'Dashboard',
                'link': '/auth/dashboard',
                'icon': 'dashboard',
                'chip': false,
                'open': true,
            }
        ]
    },
    {
        'name': 'Material Widget',
        'icon': 'widgets',
        'link': false,
        'open': false,
        'sub': [
            {
                'name': 'Buttons',
                'link': 'material-widgets/buttons',
                'icon': 'indeterminate_check_box',
                'chip': false,
                'open': false,
            },
            {
                'name': 'List',
                'link': 'material-widgets/list',
                'icon': 'list',
                'chip': false,
                'open': false,
            },
            {
                'name': 'Stepper',
                'link': 'material-widgets/stepper',
                'icon': 'view_week',
                'chip': false,
                'open': false,
            },
            {
                'name': 'Expansion',
                'link': 'material-widgets/expansion',
                'icon': 'web_aaset',
                'chip': false,
                'open': false,
            },
            {
                'name': 'Progress Spinner',
                'link': 'material-widgets/spinner',
                'icon': 'cached',
                'chip': false,
                'open': false,
            },
            {
                'name': 'Cards',
                'link': 'material-widgets/cards',
                'icon': 'crop_16_9',
                'chip': false,
                'open': false,
            },
            {
                'name': 'Icons',
                'link': 'material-widgets/icons',
                'icon': 'gif',
                'chip': false,
                'open': false,
            },
            {
                'name': 'AutoComplete',
                'link': 'material-widgets/autocomplete',
                'icon': 'get_app',
                'chip': false,
                'open': false,
            },
            {
                'name': 'CheckBox',
                'link': 'material-widgets/checkbox',
                'icon': 'check_box',
                'chip': false,
                'open': false,
            },
            {
                'name': 'DatePicker',
                'link': 'material-widgets/datepicker',
                'icon': 'date_range',
                'chip': false,
                'open': false,
            },
            {
                'name': 'Slider',
                'link': 'material-widgets/slider',
                'icon': 'keyboard_tab',
                'chip': false,
                'open': false,
            },
            {
                'name': 'Slide Toggle',
                'link': 'material-widgets/slide-toggle',
                'icon': 'album',
                'chip': false,
                'open': false,
            },
            {
                'name': 'Menu',
                'icon': 'menu',
                'link': 'material-widgets/menu',
                'chip': false,
                'open': false,
            },
            {
                'name': 'Progress Bar',
                'link': 'material-widgets/progress-bar',
                'icon': 'trending_flat',
                'chip': false,
                'open': false,
            },
            {
                'name': 'Input',
                'icon': 'input',
                'link': 'material-widgets/input',
                'open': false,
            },
            {
                'name': 'Radio',
                'icon': 'radio_button_checked',
                'link': 'material-widgets/radio',
                'chip': false,
                'open': false,
            },
            {
                'name': 'Select',
                'icon': 'select_all',
                'link': 'material-widgets/select',
                'open': false,
            },
        ]
    },
    // {
    //     'name'   : 'Forms',
    //     'icon'   : 'mode_edit',
    //     'open'   : false,
    //     'link'   : false,
    //     'sub'    :  [
    //                     {
    //                         'name': 'Template Driven',
    //                         'icon': 'mode_edit',
    //                         'open'   : false,
    //                         'link':'forms/template_forms'
    //                     },
    //                     {
    //                         'name': 'Reactive Forms',
    //                         'icon': 'text_fields',
    //                         'open'   : false,
    //                         'link':'forms/reactive_forms'
    //                     }
    //                 ]
    // },
    {
        'name': 'Tables',
        'icon': 'list',
        'link': false,
        'open': false,
        'chip': { 'value': 2, 'color': 'accent' },
        'sub': [
            {
                'name': 'Fixed',
                'icon': 'filter_list',
                'link': 'tables/fixed',
                'open': false,
            },
            {
                'name': 'Feature',
                'icon': 'done_all',
                'link': 'tables/featured',
                'open': false,
            },
            {
                'name': 'Responsive Tables',
                'icon': 'filter_center_focus',
                'link': 'tables/responsive',
                'open': false,
            }
        ]
    },
    {
        'name': 'Guarded Routes',
        'icon': 'mode_edit',
        'link': '/auth/guarded-routes',
        'open': false,
    }, {
        'name': 'Scrumboard',
        'open': false,
        'link': '/auth/scrumboard',
        'icon': 'grade',
    }, {
        'name': 'Applications',
        'icon': 'view_module',
        'open': false,
        'link': false,
        'sub': [
            {
                'name': 'chat',
                'icon': 'chat',
                'link': 'chats/chat',
                'open': false,
            },
            {
                'name': 'mail',
                'icon': 'mail',
                'link': 'mail/mail',
                'open': false,
            },
            {
                'name': 'Editor',
                'icon': 'editor',
                'link': 'editor/editor',
                'open': false,
            }
        ]
    },
    {
        'name': 'Pages',
        'icon': 'content_copy',
        'open': false,
        'link': false,
        'sub': [
            {
                'name': 'Login',
                'icon': 'work',
                'open': false,
                'link': '../login',
            }, {
                'name': 'Services',
                'icon': 'local_laundry_service',
                'open': false,
                'link': 'pages/services',
            }, {
                'name': 'Contact',
                'icon': 'directions',
                'open': false,
                'link': 'pages/contact'
            }
        ]
    },
    {
        'name': 'Charts',
        'icon': 'pie_chart_outlined',
        'open': false,
        'link': false,
        'sub': [
            {
                'name': 'chartjs',
                'icon': 'view_list',
                'link': 'charts/chartjs',
                'open': false,
            },
            {
                'name': 'ngx-chart',
                'icon': 'show_chart',
                'open': false,
                'link': 'charts/ngx-charts',
            },
            {
                'name': 'nvd3',
                'icon': 'pie_chart',
                'open': false,
                'link': 'charts/nvd3-charts',
            }
        ]
    }, {
        'name': 'maps',
        'icon': 'map',
        'open': false,
        'link': false,
        'sub': [
            {
                'name': 'google-map',
                'icon': 'directions',
                'link': 'maps/googlemap',
                'open': false,
            },
            {
                'name': 'leaflet-map',
                'icon': 'directions',
                'link': 'maps/leafletmap',
                'open': false,
            }
        ]
    }
];


/***/ }),

/***/ "./src/app/core/sidemenu/sidemenu.component.html":
/*!*******************************************************!*\
  !*** ./src/app/core/sidemenu/sidemenu.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<perfect-scrollbar style=\"height: calc(100% - 33px);\">\n    <div fxLayout=\"column\" >\n        <div *ngIf=\"!iconOnly\" fxLayoutAlign=\"space-around center\" [style.margin]=\"'10px 0px'\" >\n          <img width=\"100\" [style.borderRadius]=\"'50%'\" src=\"./assets/user-image.jpg\">\n        </div>\n        <div *ngIf=\"iconOnly\" style=\"height: 100px;\" fxLayoutAlign=\"space-around center\"  >\n            <img width=\"50\" [style.borderRadius]=\"'50%'\" src=\"./assets/user-image.jpg\">\n        </div>\n        <cdk-sidemenu-item *ngFor=\"let menu of menus\" [menu]=\"menu\" [iconOnly]=\"iconOnly\"> </cdk-sidemenu-item>\n    </div>\n    \n</perfect-scrollbar>\n"

/***/ }),

/***/ "./src/app/core/sidemenu/sidemenu.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/core/sidemenu/sidemenu.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvc2lkZW1lbnUvc2lkZW1lbnUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/core/sidemenu/sidemenu.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/core/sidemenu/sidemenu.component.ts ***!
  \*****************************************************/
/*! exports provided: SidemenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidemenuComponent", function() { return SidemenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _menu_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu-element */ "./src/app/core/sidemenu/menu-element.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SidemenuComponent = /** @class */ (function () {
    function SidemenuComponent() {
        this.iconOnly = false;
        this.menus = _menu_element__WEBPACK_IMPORTED_MODULE_1__["menus"];
    }
    SidemenuComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], SidemenuComponent.prototype, "iconOnly", void 0);
    SidemenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'cdk-sidemenu',
            template: __webpack_require__(/*! ./sidemenu.component.html */ "./src/app/core/sidemenu/sidemenu.component.html"),
            styles: [__webpack_require__(/*! ./sidemenu.component.scss */ "./src/app/core/sidemenu/sidemenu.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SidemenuComponent);
    return SidemenuComponent;
}());



/***/ }),

/***/ "./src/app/core/toolbar-notification/toolbar-notification.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/core/toolbar-notification/toolbar-notification.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"toolbar-notification-container\">\n\t<button mat-icon-button (click)=\"isOpen = !isOpen;\" [ngClass]=\"[cssPrefix+'-btn']\" [class.open]=\"isOpen\">\n    \t<mat-icon>notifications_none</mat-icon>\n    \t<span class=\"badge\" *ngIf=\"notifications && notifications?.length !== 0\">{{ notifications?.length }}</span>\n  </button>\n\n\n\t<div class=\"dropdown mat-elevation-z4\" [class.open]=\"isOpen\">\n\n\t<div class=\"card\">\n      \t<div class=\"header\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n        \t<div class=\"title\">\n         \t\t <div class=\"name\">Notifications</div>\n          \t\t<div class=\"extra\">\nYou have {{ notifications?.length }} new notifications</div>\n        \t</div>\n        \t<button type=\"button\" mat-icon-button>\n          \t\t<mat-icon class=\"icon\">settings</mat-icon>\n        \t</button>\n      \t</div>\n      \t<div *ngIf=\"notifications?.length !== 0; then thenBlock else elseBlock;\"></div>\n      \t<div class=\"footer\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n        \t<div class=\"action\">Mark all as read</div>\n    \t</div>\n    </div>\n\n\t</div>\n\n</div>\n\n<ng-template #thenBlock>\n  <perfect-scrollbar class=\"content\">\n    <div *ngFor=\"let notification of notifications; last as isLast\">\n      <div class=\"notification\" fxLayout=\"row\" fxLayoutAlign=\"start center\" mat-ripple>\n        <mat-icon class=\"icon\">notifications</mat-icon>\n        <div class=\"title\" fxLayout=\"column\">\n          <div class=\"name\">{{ notification.title }}</div>\n          <div class=\"time\">{{ notification.lastTime }}</div>\n        </div>\n        <span fxFlex></span>\n        <button type=\"button\" mat-icon-button (click)=\"delete(notification)\">\n          <mat-icon class=\"close\">close</mat-icon>\n        </button>\n      </div>\n      <div class=\"divider\" *ngIf=\"!isLast\"></div>\n    </div>\n  </perfect-scrollbar>\n</ng-template>\n\n<ng-template #elseBlock>\n  <div class=\"no\" fxLayout=\"row\" fxLayoutAlign=\"center center\">暂无通知</div>\n</ng-template>\n\n"

/***/ }),

/***/ "./src/app/core/toolbar-notification/toolbar-notification.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/core/toolbar-notification/toolbar-notification.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".badge {\n  position: absolute;\n  top: 0;\n  left: 50%;\n  font-weight: 700;\n  line-height: 13px;\n  height: 13px;\n  padding: 5px;\n  border-radius: 26%;\n  width: 30%;\n  background-color: #f44336;\n  color: #fff;\n  border-color: #f44336; }\n\n.toolbar-notification-container {\n  position: relative;\n  display: flex;\n  align-items: center; }\n\n.toolbar-notification-btn {\n  display: flex;\n  justify-content: center;\n  margin-right: 10px; }\n\n.dropdown {\n  background: white;\n  position: absolute;\n  top: 42px;\n  right: 28px;\n  min-width: 350px;\n  z-index: 1000;\n  -webkit-transform: translateY(0) scale(0);\n          transform: translateY(0) scale(0);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n  visibility: hidden;\n  transition: visibility 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), -webkit-transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n  transition: transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), visibility 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n  transition: transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), visibility 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), -webkit-transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1); }\n\n@media screen and (max-width: 599px) {\n    .dropdown {\n      min-width: 50vw;\n      right: 5px;\n      -webkit-transform: translateY(0);\n              transform: translateY(0);\n      visibility: hidden;\n      transition: visibility 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), -webkit-transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n      transition: transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), visibility 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n      transition: transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), visibility 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), -webkit-transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1); } }\n\n.dropdown.open {\n    -webkit-transform: translateY(0) scale(1);\n            transform: translateY(0) scale(1);\n    visibility: visible; }\n\n.dropdown .card .header {\n    background: #EEEEEE;\n    min-height: 54px;\n    padding-left: 16px;\n    padding-right: 8px;\n    color: #555;\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    align-content: center;\n    border-bottom: 1px solid #e0e0e0; }\n\n.dropdown .card .header .extra {\n      font-size: 12px;\n      color: #888; }\n\n.dropdown .content {\n    overflow: hidden;\n    max-height: 256px; }\n\n.dropdown .content .notification {\n      min-height: 64px;\n      padding: 0 16px 0 14px;\n      position: relative;\n      color: #666;\n      cursor: pointer; }\n\n.dropdown .content .notification .icon {\n        height: 28px;\n        width: 28px;\n        line-height: 28px;\n        font-size: 18px;\n        margin-right: 13px;\n        text-align: center;\n        border-radius: 50%;\n        background: #FFF;\n        color: #888;\n        border: 1px solid #EEE; }\n\n.dropdown .content .notification .title {\n        font-weight: 500;\n        font-size: 14px; }\n\n.dropdown .content .notification .time {\n        font-size: 12px; }\n\n.dropdown .content .notification .close {\n        font-size: 18px;\n        width: 18px;\n        height: 18px;\n        line-height: 18px; }\n\n.dropdown .content .notification.primary .icon {\n        background: #ccc;\n        color: #ddd; }\n\n.dropdown .content .notification.accent .icon {\n        background: #aaa;\n        color: #bbb; }\n\n.dropdown .content .notification.warn .icon {\n        background: #eee;\n        color: #ddd; }\n\n.dropdown .content .notification.read {\n        color: #999; }\n\n.dropdown .content .notification.read .name {\n          font-weight: normal; }\n\n.dropdown .footer {\n    min-height: 42px;\n    border-top: 1px solid #EEE; }\n\n.dropdown .footer .action {\n      cursor: pointer;\n      color: #AAA;\n      text-align: center;\n      font-size: 13px; }\n\n.dropdown .divider {\n    width: calc(100% - 30px);\n    height: 1px;\n    background: #EEE;\n    margin: 0 16px 0 14px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS90b29sYmFyLW5vdGlmaWNhdGlvbi9DOlxcVXNlcnNcXFJvZ2VyRmVkZXJlclxcRGVza3RvcFxcSW1idWVEZXNrXFxOZXcgZm9sZGVyICgyKVxcY2RrLWFkbWluLW1hc3Rlci9zcmNcXGFwcFxcY29yZVxcdG9vbGJhci1ub3RpZmljYXRpb25cXHRvb2xiYXItbm90aWZpY2F0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0csa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixTQUFTO0VBQ1QsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osWUFBWTtFQUNYLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YseUJBQXlCO0VBQzFCLFdBQVc7RUFDWCxxQkFDSCxFQUFBOztBQUdFO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGtCQUFrQixFQUFBOztBQUd0QjtFQUNDLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsU0FBUztFQUNULFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHlDQUFpQztVQUFqQyxpQ0FBaUM7RUFDakMsbUNBQTJCO1VBQTNCLDJCQUEyQjtFQUMzQixrQkFBa0I7RUFDbEIscUhBQXFHO0VBQXJHLDZHQUFxRztFQUFyRyxzS0FBcUcsRUFBQTs7QUFFckc7SUFaRDtNQWFLLGVBQWU7TUFDZixVQUFVO01BQ1YsZ0NBQXdCO2NBQXhCLHdCQUF3QjtNQUN4QixrQkFBa0I7TUFDbEIscUhBQStGO01BQS9GLDZHQUErRjtNQUEvRixzS0FBK0YsRUFBQSxFQW9Ibkc7O0FBcklEO0lBcUJLLHlDQUFpQztZQUFqQyxpQ0FBaUM7SUFDakMsbUJBQW1CLEVBQUE7O0FBdEJ4QjtJQTJCTyxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGFBQWE7SUFDYiwyQkFBMkI7SUFDM0IsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixnQ0FBZ0MsRUFBQTs7QUFwQ3ZDO01BdUNTLGVBQWU7TUFDZixXQUFXLEVBQUE7O0FBeENwQjtJQTZDTyxnQkFBZ0I7SUFDaEIsaUJBQWlCLEVBQUE7O0FBOUN4QjtNQWlEUyxnQkFBZ0I7TUFDaEIsc0JBQXNCO01BQ3RCLGtCQUFrQjtNQUNsQixXQUFXO01BQ1gsZUFBZSxFQUFBOztBQXJEeEI7UUF3RFUsWUFBWTtRQUNaLFdBQVc7UUFDWCxpQkFBaUI7UUFDakIsZUFBZTtRQUNmLGtCQUFrQjtRQUNsQixrQkFBa0I7UUFDbEIsa0JBQWtCO1FBQ2xCLGdCQUFnQjtRQUNoQixXQUFXO1FBQ1gsc0JBQXNCLEVBQUE7O0FBakVoQztRQXFFWSxnQkFBZ0I7UUFDaEIsZUFBZSxFQUFBOztBQXRFM0I7UUEwRVcsZUFBZSxFQUFBOztBQTFFMUI7UUE4RVksZUFBZTtRQUNmLFdBQVc7UUFDWixZQUFZO1FBQ1osaUJBQWlCLEVBQUE7O0FBakY1QjtRQXNGYSxnQkFBZ0I7UUFDaEIsV0FBVyxFQUFBOztBQXZGeEI7UUE2RmEsZ0JBQWdCO1FBQ2hCLFdBQVcsRUFBQTs7QUE5RnhCO1FBb0dhLGdCQUFnQjtRQUNoQixXQUFXLEVBQUE7O0FBckd4QjtRQTBHVyxXQUFXLEVBQUE7O0FBMUd0QjtVQTZHYSxtQkFBbUIsRUFBQTs7QUE3R2hDO0lBb0hPLGdCQUFnQjtJQUNoQiwwQkFBMEIsRUFBQTs7QUFySGpDO01Bd0hTLGVBQWU7TUFDZixXQUFXO01BQ1gsa0JBQWtCO01BQ2xCLGVBQWUsRUFBQTs7QUEzSHhCO0lBZ0lPLHdCQUF3QjtJQUN4QixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLHFCQUFxQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29yZS90b29sYmFyLW5vdGlmaWNhdGlvbi90b29sYmFyLW5vdGlmaWNhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRwcmVmaXg6ICd0b29sYmFyLW5vdGlmaWNhdGlvbic7XG5cbi5iYWRnZSB7XG4gIFx0cG9zaXRpb246IGFic29sdXRlO1xuICBcdHRvcDogMDtcbiAgXHRsZWZ0OiA1MCU7XG4gIFx0Zm9udC13ZWlnaHQ6IDcwMDtcbiAgXHRsaW5lLWhlaWdodDogMTNweDtcbiAgXHRoZWlnaHQ6IDEzcHg7XG4gIFx0cGFkZGluZzogNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDI2JTtcbiAgICB3aWR0aDogMzAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNDQzMzY7XG4gIFx0Y29sb3I6ICNmZmY7XG4gIFx0Ym9yZGVyLWNvbG9yOiNmNDQzMzZcbn1cblxuLiN7JHByZWZpeH0ge1xuICAmLWNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuXG4gICYtYnRuIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgfVxufVxuLmRyb3Bkb3duIHtcblx0YmFja2dyb3VuZDogd2hpdGU7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0dG9wOiA0MnB4O1xuXHRyaWdodDogMjhweDtcblx0bWluLXdpZHRoOiAzNTBweDtcblx0ei1pbmRleDogMTAwMDtcblx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApIHNjYWxlKDApO1xuXHR0cmFuc2Zvcm0tb3JpZ2luOiB0b3AgcmlnaHQ7XG5cdHZpc2liaWxpdHk6IGhpZGRlbjtcblx0dHJhbnNpdGlvbjogdHJhbnNmb3JtIC40cyBjdWJpYy1iZXppZXIoLjI1LCAuOCwgLjI1LCAxKSwgdmlzaWJpbGl0eSAuNHMgY3ViaWMtYmV6aWVyKC4yNSwgLjgsIC4yNSwgMSk7XG5cblx0QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTk5cHgpIHtcblx0ICAgIG1pbi13aWR0aDogNTB2dztcblx0ICAgIHJpZ2h0OiA1cHg7XG5cdCAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgXHR2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgXHR0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjRzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpLCB2aXNpYmlsaXR5IC40cyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKTtcblx0fVxuXG5cdCYub3BlbiB7XG5cdCAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgc2NhbGUoMSk7XG5cdCAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuXHR9XG5cdC5jYXJkIHtcbiAgICAgIFxuXHQgICAgLmhlYWRlciB7XG5cdCAgICAgIGJhY2tncm91bmQ6ICNFRUVFRUU7XG5cdCAgICAgIG1pbi1oZWlnaHQ6IDU0cHg7XG5cdCAgICAgIHBhZGRpbmctbGVmdDogMTZweDtcblx0ICAgICAgcGFkZGluZy1yaWdodDogOHB4O1xuXHQgICAgICBjb2xvcjogIzU1NTtcblx0ICAgICAgZGlzcGxheTogZmxleDtcblx0ICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuXHQgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXHQgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG5cdCAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTBlMGUwO1xuXG5cdCAgICAgIC5leHRyYSB7XG5cdCAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuXHQgICAgICAgIGNvbG9yOiAjODg4O1xuXHQgICAgICB9XG4gICAgXHR9XG4gICAgfVxuICAgIC5jb250ZW50IHtcbiAgICAgIFx0b3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIFx0bWF4LWhlaWdodDogMjU2cHg7XG5cbiAgICAgIFx0Lm5vdGlmaWNhdGlvbiB7XG4gICAgICAgIFx0bWluLWhlaWdodDogNjRweDtcblx0ICAgICAgICBwYWRkaW5nOiAwIDE2cHggMCAxNHB4O1xuXHQgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0ICAgICAgICBjb2xvcjogIzY2Njtcblx0ICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG5cblx0ICAgICAgICAuaWNvbiB7XG5cdFx0ICAgICAgICBoZWlnaHQ6IDI4cHg7XG5cdFx0ICAgICAgICB3aWR0aDogMjhweDtcblx0XHQgICAgICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xuXHRcdCAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuXHRcdCAgICAgICAgbWFyZ2luLXJpZ2h0OiAxM3B4O1xuXHRcdCAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdCAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuXHRcdCAgICAgICAgYmFja2dyb3VuZDogI0ZGRjtcblx0XHQgICAgICAgIGNvbG9yOiAjODg4O1xuXHRcdCAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI0VFRTtcbiAgICAgICAgXHR9XG5cbiAgICAgICAgXHQudGl0bGUge1xuICAgICAgICAgIFx0XHRmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgIFx0XHRmb250LXNpemU6IDE0cHg7XG4gICAgICAgIFx0fVxuXG4gICAgICAgIFx0LnRpbWUge1xuICAgICAgICAgXHRcdGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgXHR9XG5cbiAgICAgICAgXHQuY2xvc2Uge1xuICAgICAgICAgIFx0XHRmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgXHRcdHdpZHRoOiAxOHB4O1xuXHQgICAgICAgICAgaGVpZ2h0OiAxOHB4O1xuXHQgICAgICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XG5cdCAgICAgICAgfVxuXG5cdCAgICAgICAgJi5wcmltYXJ5IHtcblx0ICAgICAgICAgIC5pY29uIHtcblx0ICAgICAgICAgICAgYmFja2dyb3VuZDogI2NjYztcblx0ICAgICAgICAgICAgY29sb3I6ICNkZGQ7XG5cdCAgICAgICAgICB9XG5cdCAgICAgICAgfVxuXG5cdCAgICAgICAgJi5hY2NlbnQge1xuXHQgICAgICAgICAgLmljb24ge1xuXHQgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjYWFhO1xuXHQgICAgICAgICAgICBjb2xvcjogI2JiYjtcblx0ICAgICAgICAgIH1cblx0ICAgICAgICB9XG5cblx0ICAgICAgICAmLndhcm4ge1xuXHQgICAgICAgICAgLmljb24ge1xuXHQgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZWVlO1xuXHQgICAgICAgICAgICBjb2xvcjogI2RkZDtcblx0ICAgICAgICAgIH1cblx0ICAgICAgICB9XG5cblx0ICAgICAgICAmLnJlYWQge1xuXHQgICAgICAgICAgY29sb3I6ICM5OTk7XG5cblx0ICAgICAgICAgIC5uYW1lIHtcblx0ICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcblx0ICAgICAgICAgIH1cblx0ICAgICAgICB9XG4gICAgICBcdH1cbiAgICB9XG5cbiAgICAuZm9vdGVyIHtcbiAgICAgIFx0bWluLWhlaWdodDogNDJweDtcbiAgICAgIFx0Ym9yZGVyLXRvcDogMXB4IHNvbGlkICNFRUU7XG5cblx0ICAgIC5hY3Rpb24ge1xuXHQgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcblx0ICAgICAgICBjb2xvcjogI0FBQTtcblx0ICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdCAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuXHQgICAgfVxuICAgIH1cblxuICAgIC5kaXZpZGVyIHtcbiAgICAgIFx0d2lkdGg6IGNhbGMoMTAwJSAtIDMwcHgpO1xuICAgICAgXHRoZWlnaHQ6IDFweDtcbiAgICAgIFx0YmFja2dyb3VuZDogI0VFRTtcbiAgICAgIFx0bWFyZ2luOiAwIDE2cHggMCAxNHB4O1xuICAgIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/core/toolbar-notification/toolbar-notification.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/core/toolbar-notification/toolbar-notification.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ToolbarNotificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarNotificationComponent", function() { return ToolbarNotificationComponent; });
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

var ToolbarNotificationComponent = /** @class */ (function () {
    // @HostListener('document:click', ['$event', '$event.target'])
    // onClick(event: MouseEvent, targetElement: HTMLElement) {
    //     if (!targetElement) {
    //           return;
    //     }
    //     const clickedInside = this.elementRef.nativeElement.contains(targetElement);
    //     if (!clickedInside) {
    //          this.isOpen = false;
    //     }
    // }
    function ToolbarNotificationComponent(elementRef) {
        this.elementRef = elementRef;
        this.cssPrefix = 'toolbar-notification';
        this.isOpen = false;
        this.notifications = [];
    }
    ToolbarNotificationComponent.prototype.ngOnInit = function () {
    };
    ToolbarNotificationComponent.prototype.select = function () {
    };
    ToolbarNotificationComponent.prototype.delete = function (notification) {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ToolbarNotificationComponent.prototype, "notifications", void 0);
    ToolbarNotificationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'cdk-toolbar-notification',
            template: __webpack_require__(/*! ./toolbar-notification.component.html */ "./src/app/core/toolbar-notification/toolbar-notification.component.html"),
            styles: [__webpack_require__(/*! ./toolbar-notification.component.scss */ "./src/app/core/toolbar-notification/toolbar-notification.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], ToolbarNotificationComponent);
    return ToolbarNotificationComponent;
}());



/***/ }),

/***/ "./src/app/core/toolbar/toolbar.component.html":
/*!*****************************************************!*\
  !*** ./src/app/core/toolbar/toolbar.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <stbui-loading *ngIf=\"showLoading\"></stbui-loading> -->\n<mat-toolbar   class=\"mat-elevation-z4\">  \n\t<button mat-icon-button (click)=\"sidenav.toggle();drawer.toggle();\" *ngIf=\"matDrawerShow\">\n        <i class=\"material-icons app-toolbar-menu\">menu </i>\n    </button> \n    <button mat-icon-button (click)=\"sidenav.toggle();\" *ngIf=\"!matDrawerShow\">\n        <i class=\"material-icons app-toolbar-menu\">menu </i>\n    </button>\n\n    <span class=\"spacer\"></span>\n\n    <button  mat-icon-button (click)=\"searchOpen = !searchOpen\" fxHide=\"true\" [fxHide.gt-xs]=\"false\">\n        <i class=\"material-icons\">search</i>\n    </button>\n    <cdk-search-bar [open]=\"searchOpen\"></cdk-search-bar>\n\n    <cdk-fullscreen></cdk-fullscreen>\n\n    <cdk-toolbar-notification [notifications]=\"toolbarHelpers?.notifications\"></cdk-toolbar-notification>\n\n    <cdk-user-menu [currentUser]=\"toolbarHelpers?.currentUser\"></cdk-user-menu>\n    \n     <button mat-icon-button (click)=\"sidebar.toggle();\">\n        <i class=\"material-icons app-toolbar-menu\">menu </i>\n    </button>\n    \n</mat-toolbar>"

/***/ }),

/***/ "./src/app/core/toolbar/toolbar.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/core/toolbar/toolbar.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  z-index: 4; }\n\n.main-toolbar {\n  height: 64px;\n  padding-left: 16px; }\n\n.more-btn {\n  height: 100%;\n  min-width: 70px; }\n\n.mat-icon-button {\n  margin-right: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS90b29sYmFyL0M6XFxVc2Vyc1xcUm9nZXJGZWRlcmVyXFxEZXNrdG9wXFxJbWJ1ZURlc2tcXE5ldyBmb2xkZXIgKDIpXFxjZGstYWRtaW4tbWFzdGVyL3NyY1xcYXBwXFxjb3JlXFx0b29sYmFyXFx0b29sYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBVSxFQUFBOztBQUdaO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLFlBQVk7RUFDWixlQUFlLEVBQUE7O0FBR2pCO0VBQ0Usa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb3JlL3Rvb2xiYXIvdG9vbGJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgei1pbmRleDogNDtcbn1cblxuLm1haW4tdG9vbGJhciB7XG4gIGhlaWdodDogNjRweDtcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xufVxuXG4ubW9yZS1idG4ge1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1pbi13aWR0aDogNzBweDtcbn1cblxuLm1hdC1pY29uLWJ1dHRvbiB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/core/toolbar/toolbar.component.ts":
/*!***************************************************!*\
  !*** ./src/app/core/toolbar/toolbar.component.ts ***!
  \***************************************************/
/*! exports provided: ToolbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarComponent", function() { return ToolbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _toolbar_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toolbar.helpers */ "./src/app/core/toolbar/toolbar.helpers.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ToolbarComponent = /** @class */ (function () {
    function ToolbarComponent() {
        this.searchOpen = false;
        this.toolbarHelpers = _toolbar_helpers__WEBPACK_IMPORTED_MODULE_1__["ToolbarHelpers"];
    }
    ToolbarComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ToolbarComponent.prototype, "sidenav", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ToolbarComponent.prototype, "sidebar", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ToolbarComponent.prototype, "drawer", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ToolbarComponent.prototype, "matDrawerShow", void 0);
    ToolbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'cdk-toolbar',
            template: __webpack_require__(/*! ./toolbar.component.html */ "./src/app/core/toolbar/toolbar.component.html"),
            styles: [__webpack_require__(/*! ./toolbar.component.scss */ "./src/app/core/toolbar/toolbar.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ToolbarComponent);
    return ToolbarComponent;
}());



/***/ }),

/***/ "./src/app/core/toolbar/toolbar.helpers.ts":
/*!*************************************************!*\
  !*** ./src/app/core/toolbar/toolbar.helpers.ts ***!
  \*************************************************/
/*! exports provided: ToolbarHelpers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarHelpers", function() { return ToolbarHelpers; });
var ToolbarHelpers = {
    notifications: [
        {
            id: 'id',
            title: 'Mail 5',
            lastTime: '23 Minutes ago',
            state: 'state'
        },
        {
            id: 'id',
            title: 'Mail 5',
            lastTime: '23 Minutes ago',
            state: 'state'
        },
        {
            id: 'id',
            title: 'Mail 5',
            lastTime: '23 Minutes ago',
            state: 'state'
        },
    ],
    currentUser: {
        photoURL: 'assets/images/avatars/hari.jpg',
        currentUserName: 'Hari Krishna'
    }
};


/***/ }),

/***/ "./src/app/core/user-menu/user-menu.component.html":
/*!*********************************************************!*\
  !*** ./src/app/core/user-menu/user-menu.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"toolbar-user-container\">\n\t<button mat-button (click)=\"isOpen = !isOpen\" class=\"toolbar-user-btn\" [class.open]=\"isOpen\" [ngStyle.xs]=\"{'min-width': '70px'}\">\n  \t\t<span fxLayout=\"row\" fxLayoutAlign=\"start center\">\n    \t\t<img class=\"avatar\" [src]=\"currentUser?.photoURL || 'assets/images/avatars/noavatar.png'\">\n    \t\t<span class=\"name\" fxHide fxShow.gt-xs>{{currentUser?.currentUserName || Hari}}</span>\n    \t\t<mat-icon class=\"icon\" fxHide fxShow.gt-xs>keyboard_arrow_down</mat-icon>\n  \t\t</span>\n  \t</button>\n\n\n  \t<div class=\"dropdown mat-elevation-z1\" [class.open]=\"isOpen\">\n    \t<div class=\"content\">\n      \t\t<mat-nav-list>\n      \t\t\t<mat-list-item>\n      \t\t\t\t<a matLine >Profile</a>\n\t\t\t\t    <button mat-icon-button>\n\t\t\t\t       <mat-icon>account_circle</mat-icon>\n\t\t\t\t    </button>\n      \t\t\t</mat-list-item>\n      \t\t\t<mat-list-item>\n      \t\t\t\t<a matLine >Settings</a>\n\t\t\t\t    <button mat-icon-button>\n\t\t\t\t       <mat-icon>settings</mat-icon>\n\t\t\t\t    </button>\n      \t\t\t</mat-list-item>\n      \t\t\t<mat-list-item>\n      \t\t\t\t<a matLine >Help</a>\n\t\t\t\t    <button mat-icon-button>\n\t\t\t\t       <mat-icon>help</mat-icon>\n\t\t\t\t    </button>\n      \t\t\t</mat-list-item>\n\n      \t\t\t<mat-divider></mat-divider>\n\n      \t\t\t<mat-list-item>\n      \t\t\t\t<a matLine (click)=\"logout()\">Logout</a>\n\t\t\t\t    <button mat-icon-button>\n\t\t\t\t       <mat-icon>exit_to_app</mat-icon>\n\t\t\t\t    </button>\n      \t\t\t</mat-list-item>\n      \t\t</mat-nav-list>\n    \t</div>\n  \t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/core/user-menu/user-menu.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/core/user-menu/user-menu.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  height: 100%; }\n\n.toolbar-user-container {\n  height: 100%;\n  position: relative; }\n\n.toolbar-user-container .toolbar-user-btn {\n    display: flex;\n    justify-content: center;\n    height: 100%;\n    min-width: 160px; }\n\n.toolbar-user-container .toolbar-user-btn .avatar {\n      width: 30px;\n      height: 30px;\n      border-radius: 50%; }\n\n.toolbar-user-container .toolbar-user-btn .name {\n      margin: 0 8px 0 10px; }\n\n.toolbar-user-container .toolbar-user-btn .icon {\n      width: 16px;\n      height: 16px;\n      font-size: 16px;\n      -webkit-transform: rotate(0);\n              transform: rotate(0);\n      transition: -webkit-transform 0.25s cubic-bezier(0.25, 0.8, 0.25, 1);\n      transition: transform 0.25s cubic-bezier(0.25, 0.8, 0.25, 1);\n      transition: transform 0.25s cubic-bezier(0.25, 0.8, 0.25, 1), -webkit-transform 0.25s cubic-bezier(0.25, 0.8, 0.25, 1); }\n\n.toolbar-user-container .toolbar-user-btn.open {\n      background: rgba(0, 0, 0, 0.05); }\n\n.toolbar-user-container .toolbar-user-btn.open .icon {\n        -webkit-transform: rotate(-180deg);\n                transform: rotate(-180deg); }\n\n.toolbar-user-container .dropdown {\n    background: white;\n    z-index: 2;\n    position: absolute;\n    width: 100%;\n    min-width: 160px;\n    opacity: 0;\n    visibility: hidden;\n    transition: all .25s linear, max-height .25s linear, opacity .25s linear; }\n\n@media screen and (max-width: 599px) {\n      .toolbar-user-container .dropdown {\n        min-width: 65px; } }\n\n.toolbar-user-container .dropdown.open {\n      opacity: 1;\n      visibility: visible; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS91c2VyLW1lbnUvQzpcXFVzZXJzXFxSb2dlckZlZGVyZXJcXERlc2t0b3BcXEltYnVlRGVza1xcTmV3IGZvbGRlciAoMilcXGNkay1hZG1pbi1tYXN0ZXIvc3JjXFxhcHBcXGNvcmVcXHVzZXItbWVudVxcdXNlci1tZW51LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWSxFQUFBOztBQUdkO0VBQ0ksWUFBWTtFQUNaLGtCQUFrQixFQUFBOztBQUZ0QjtJQUtRLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGdCQUFnQixFQUFBOztBQVJ4QjtNQVdRLFdBQVc7TUFDWCxZQUFZO01BQ1osa0JBQWtCLEVBQUE7O0FBYjFCO01BaUJRLG9CQUFvQixFQUFBOztBQWpCNUI7TUFxQlEsV0FBVztNQUNYLFlBQVk7TUFDWixlQUFlO01BQ2YsNEJBQW9CO2NBQXBCLG9CQUFvQjtNQUNwQixvRUFBcUQ7TUFBckQsNERBQXFEO01BQXJELHNIQUFxRCxFQUFBOztBQXpCN0Q7TUE2QlEsK0JBQThCLEVBQUE7O0FBN0J0QztRQWdDUSxrQ0FBMEI7Z0JBQTFCLDBCQUEwQixFQUFBOztBQWhDbEM7SUFzQ1EsaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLHdFQUF3RSxFQUFBOztBQUV4RTtNQS9DUjtRQWdEWSxlQUFlLEVBQUEsRUFPdEI7O0FBdkRMO01Bb0RZLFVBQVU7TUFDVixtQkFBbUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvcmUvdXNlci1tZW51L3VzZXItbWVudS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4udG9vbGJhci11c2VyLWNvbnRhaW5lciB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgIC50b29sYmFyLXVzZXItYnRuIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgbWluLXdpZHRoOiAxNjBweDtcblxuICAgIC5hdmF0YXIge1xuICAgICAgICB3aWR0aDogMzBweDtcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgfVxuXG4gICAgLm5hbWUge1xuICAgICAgICBtYXJnaW46IDAgOHB4IDAgMTBweDtcbiAgICB9XG5cbiAgICAuaWNvbiB7XG4gICAgICAgIHdpZHRoOiAxNnB4O1xuICAgICAgICBoZWlnaHQ6IDE2cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMCk7XG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuMjVzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpO1xuICAgIH1cblxuICAgICYub3BlbiB7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgLjA1KTtcblxuICAgICAgLmljb24ge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTgwZGVnKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAgIC5kcm9wZG93biB7XG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICB6LWluZGV4OiAyO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtaW4td2lkdGg6IDE2MHB4O1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAuMjVzIGxpbmVhciwgbWF4LWhlaWdodCAuMjVzIGxpbmVhciwgb3BhY2l0eSAuMjVzIGxpbmVhcjtcblxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1OTlweCkge1xuICAgICAgICAgICAgbWluLXdpZHRoOiA2NXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgJi5vcGVuIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/core/user-menu/user-menu.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/core/user-menu/user-menu.component.ts ***!
  \*******************************************************/
/*! exports provided: UserMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserMenuComponent", function() { return UserMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../auth/login.service */ "./src/app/auth/login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserMenuComponent = /** @class */ (function () {
    function UserMenuComponent(elementRef, router, service) {
        this.elementRef = elementRef;
        this.router = router;
        this.service = service;
        this.isOpen = false;
        this.currentUser = null;
    }
    UserMenuComponent.prototype.onClick = function (event, targetElement) {
        if (!targetElement) {
            return;
        }
        var clickedInside = this.elementRef.nativeElement.contains(targetElement);
        if (!clickedInside) {
            this.isOpen = false;
        }
    };
    UserMenuComponent.prototype.ngOnInit = function () {
    };
    UserMenuComponent.prototype.logout = function () {
        this.service.logout();
        this.router.navigateByUrl("/");
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], UserMenuComponent.prototype, "currentUser", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:click', ['$event', '$event.target']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [MouseEvent, HTMLElement]),
        __metadata("design:returntype", void 0)
    ], UserMenuComponent.prototype, "onClick", null);
    UserMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'cdk-user-menu',
            template: __webpack_require__(/*! ./user-menu.component.html */ "./src/app/core/user-menu/user-menu.component.html"),
            styles: [__webpack_require__(/*! ./user-menu.component.scss */ "./src/app/core/user-menu/user-menu.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _auth_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"]])
    ], UserMenuComponent);
    return UserMenuComponent;
}());



/***/ }),

/***/ "./src/app/lazy-load/lazy-load.module.ts":
/*!***********************************************!*\
  !*** ./src/app/lazy-load/lazy-load.module.ts ***!
  \***********************************************/
/*! exports provided: LazyLoadModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LazyLoadModule", function() { return LazyLoadModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/auth.guard */ "./src/app/auth/auth.guard.ts");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/login/login.component */ "./src/app/auth/login/login.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: 'auth', loadChildren: '../auth/auth.module#AuthModule' },
    { path: 'register', loadChildren: '../register/register.module#RegisterModule' },
    { path: '**', component: _auth_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    // {path: 'editor', loadChildren: '../editor/editor.module#EditorModule'},
    { path: 'dashboard', redirectTo: 'auth/dashboard', canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
];
var LazyLoadModule = /** @class */ (function () {
    function LazyLoadModule() {
    }
    LazyLoadModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        })
    ], LazyLoadModule);
    return LazyLoadModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment, palete */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "palete", function() { return palete; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyA0-qXDC2iVfitEiAD_EonyXektpDRVkFk",
        authDomain: "fir-auth-7b5d8.firebaseapp.com",
        databaseURL: "https://fir-auth-7b5d8.firebaseio.com",
        projectId: "fir-auth-7b5d8",
        storageBucket: "fir-auth-7b5d8.appspot.com",
        messagingSenderId: "404412576606"
    },
    mailApi: '/assets/list.json'
};
var palete = {
    primary: '#D32F2F',
    accent: '#E65100',
    warm: '#C2185B',
    name: '#D50000',
    secondary: '#D81B60',
    tertiary: '#8E24AA',
    quaternary: '#5E35B1',
    quinary: '#3949AB',
    secondaryLight: '#E91E63',
    tertiaryLight: '#9C27B0',
    quaternaryLight: '#673AB7',
    quinaryLight: '#3F51B5'
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\RogerFederer\Desktop\ImbueDesk\New folder (2)\cdk-admin-master\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map