(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./pages/edit-profile-page/edit-profile-page.module": [
		"./src/app/pages/edit-profile-page/edit-profile-page.module.ts",
		"pages-edit-profile-page-edit-profile-page-module"
	],
	"./pages/home-page/home-page.module": [
		"./src/app/pages/home-page/home-page.module.ts",
		"pages-home-page-home-page-module"
	],
	"./pages/landing-page/landing-page.module": [
		"./src/app/pages/landing-page/landing-page.module.ts",
		"pages-landing-page-landing-page-module"
	],
	"./pages/login-page/login-page.module": [
		"./src/app/pages/login-page/login-page.module.ts",
		"common",
		"pages-login-page-login-page-module"
	],
	"./pages/matchmake-view-page/matchmake-view-page.module": [
		"./src/app/pages/matchmake-view-page/matchmake-view-page.module.ts",
		"pages-matchmake-view-page-matchmake-view-page-module"
	],
	"./pages/register-page/register-page.module": [
		"./src/app/pages/register-page/register-page.module.ts",
		"common",
		"pages-register-page-register-page-module"
	],
	"./pages/view-profile-page/view-profile-page.module": [
		"./src/app/pages/view-profile-page/view-profile-page.module.ts",
		"pages-view-profile-page-view-profile-page-module"
	],
	"./shared/components/about/about.module": [
		"./src/app/shared/components/about/about.module.ts",
		"shared-components-about-about-module"
	],
	"./shared/components/contact-page/contact-page.module": [
		"./src/app/shared/components/contact-page/contact-page.module.ts",
		"shared-components-contact-page-contact-page-module"
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

/***/ "./src/app/app-material.module.ts":
/*!****************************************!*\
  !*** ./src/app/app-material.module.ts ***!
  \****************************************/
/*! exports provided: AppMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppMaterialModule", function() { return AppMaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/ */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm5/progress-bar.es5.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");












var AppMaterialModule = /** @class */ (function () {
    function AppMaterialModule() {
    }
    AppMaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_material___WEBPACK_IMPORTED_MODULE_4__["MatDatepickerModule"],
                _angular_material___WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_6__["MatGridListModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                _angular_material___WEBPACK_IMPORTED_MODULE_4__["MatListModule"],
                _angular_material___WEBPACK_IMPORTED_MODULE_4__["MatNativeDateModule"],
                _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_9__["MatProgressBarModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__["MatSnackBarModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__["MatToolbarModule"],
            ],
            exports: [
                _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_material___WEBPACK_IMPORTED_MODULE_4__["MatDatepickerModule"],
                _angular_material___WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_6__["MatGridListModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                _angular_material___WEBPACK_IMPORTED_MODULE_4__["MatListModule"],
                _angular_material___WEBPACK_IMPORTED_MODULE_4__["MatNativeDateModule"],
                _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_9__["MatProgressBarModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__["MatSnackBarModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__["MatToolbarModule"],
            ],
            providers: [],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], AppMaterialModule);
    return AppMaterialModule;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [
    { path: '', redirectTo: 'landing-page', pathMatch: 'full' },
    {
        path: 'about',
        loadChildren: './shared/components/about/about.module#AboutPageModule'
    },
    {
        path: 'contact-page',
        loadChildren: './shared/components/contact-page/contact-page.module#ContactPageModule'
    },
    {
        path: 'edit-profile',
        loadChildren: './pages/edit-profile-page/edit-profile-page.module#EditProfilePageModule'
    },
    {
        path: 'home',
        loadChildren: './pages/home-page/home-page.module#HomePageModule'
    },
    {
        path: 'landing-page',
        loadChildren: './pages/landing-page/landing-page.module#LandingPageModule'
    },
    {
        path: 'login',
        loadChildren: './pages/login-page/login-page.module#LoginPageModule'
    },
    {
        path: 'matchmaking',
        loadChildren: './pages/matchmake-view-page/matchmake-view-page.module#MatchmakeViewPageModule'
    },
    {
        path: 'register',
        loadChildren: './pages/register-page/register-page.module#RegisterPageModule'
    },
    {
        path: 'view-profile/:id',
        loadChildren: './pages/view-profile-page/view-profile-page.module#ViewProfilePageModule'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<mat-toolbar>\r\n    <mat-toolbar-row> <!--We can use *ngIf=\"someFunctionOrVariable\" to make these buttons or future buttons visible/hidden-->\r\n      <button mat-flat-button class=\"header-button\" disableRipple>GAME MATCH</button>\r\n      <button mat-flat-button id=\"homeButton\" class=\"header-button\" *ngIf=\"showHome()\" (click)=\"goHome()\">Home</button>\r\n      <button mat-flat-button id=\"aboutButton\" class=\"header-button\" (click)=\"showAbout()\">About</button>\r\n      <button mat-flat-button id=\"contactButton\" class=\"header-button\" (click)=\"showContact()\">Contact Us</button>\r\n      </mat-toolbar-row>\r\n  </mat-toolbar>\r\n  <br>\r\n\r\n<!--Anything above the router-outlet will be displayed DIRECTLY above the page content-->\r\n<router-outlet></router-outlet>\r\n<!--Anything below the router-outlet will be displayed DIRECTLY below the page content-->"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-toolbar {\n  background: #5fb6df; }\n\n.header-button {\n  background: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFx2YWlkaVxcRGVza3RvcFxcdGVzdCByZWdpc3RlciB1c2VyXFxrc3Utc3dlLTY3MzMtZ2FtaW5nLW1hdGNobWFrZXJcXG1hdGNobWFrZXItdWkvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUE2QixFQUFBOztBQUcvQjtFQUNFLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LXRvb2xiYXIge1xyXG4gIGJhY2tncm91bmQ6IHJnYig5NSwgMTgyLCAyMjMpO1xyXG59XHJcblxyXG4uaGVhZGVyLWJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxufSJdfQ== */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_components_about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/components/about/about.component */ "./src/app/shared/components/about/about.component.ts");
/* harmony import */ var _shared_components_contact_page_contact_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/components/contact-page/contact-page.component */ "./src/app/shared/components/contact-page/contact-page.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _shared_models_user__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/models/user */ "./src/app/shared/models/user.ts");
/* harmony import */ var _shared_components_loading_indicator_loading_indicator_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/components/loading-indicator/loading-indicator.component */ "./src/app/shared/components/loading-indicator/loading-indicator.component.ts");
/* harmony import */ var _shared_services_http_service_http_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/services/http-service/http.service */ "./src/app/shared/services/http-service/http.service.ts");










/**This page will be the launch point of the app. We can use to initialize and send the user on their way
  Any HTML associated with this component will be persistent throughout the app
*/
var AppComponent = /** @class */ (function () {
    function AppComponent(injector, dialog, httpService) {
        this.injector = injector;
        this.dialog = dialog;
        this.httpService = httpService;
        this.isLoading = false;
        this.router = this.injector.get(_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]);
        this.location = this.injector.get(_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]);
        this.httpService = this.injector.get(_shared_services_http_service_http_service__WEBPACK_IMPORTED_MODULE_9__["HttpService"]);
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.setUrl = function () {
        this.url = this.router.url;
    };
    AppComponent.prototype.showHome = function () {
        this.setUrl();
        if (this.url === '/landing-page' ||
            this.url === '/login' ||
            this.url === '/register') {
            return false;
        }
        else {
            return true;
        }
    };
    AppComponent.prototype.showAbout = function () {
        this.dialog.open(_shared_components_about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutPage"], {
            height: '30rem',
            width: '100rem',
        });
    };
    AppComponent.prototype.showContact = function () {
        this.dialog.open(_shared_components_contact_page_contact_page_component__WEBPACK_IMPORTED_MODULE_5__["ContactPage"], {
            height: '60rem',
            width: '100rem',
        });
    };
    AppComponent.prototype.showLoading = function () {
        this.dialog.open(_shared_components_loading_indicator_loading_indicator_component__WEBPACK_IMPORTED_MODULE_8__["LoadingIndicator"], {
            height: '20rem',
            width: '60rem',
            disableClose: true
        });
        this.isLoading = true;
    };
    AppComponent.prototype.dismissLoading = function () {
        if (this.isLoading) {
            this.dialog.closeAll();
            this.isLoading = false;
        }
    };
    AppComponent.prototype.closeDialog = function () {
        this.dialog.closeAll();
    };
    AppComponent.prototype.getUser = function () {
        this.currentUser = new _shared_models_user__WEBPACK_IMPORTED_MODULE_7__["User"](JSON.parse(localStorage.getItem('user')));
        console.log(this.currentUser);
    };
    AppComponent.prototype.goToLoginPage = function () {
        var _this = this;
        this.router.navigateByUrl('/login').then(function () {
            _this.dismissLoading();
        });
    };
    AppComponent.prototype.register = function () {
        var _this = this;
        this.router.navigateByUrl('/register').then(function () {
            _this.dismissLoading();
        });
    };
    AppComponent.prototype.goToLanding = function () {
        var _this = this;
        this.httpService.logout();
        this.router.navigateByUrl('/landing-page').then(function () {
            _this.dismissLoading();
        });
    };
    AppComponent.prototype.goBack = function () {
        this.location.back();
    };
    AppComponent.prototype.goHome = function () {
        var _this = this;
        this.router.navigateByUrl('/home').then(function () {
            _this.dismissLoading();
        });
    };
    AppComponent.prototype.editProfile = function () {
        var _this = this;
        this.router.navigateByUrl('/edit-profile').then(function () {
            _this.dismissLoading();
        });
    };
    AppComponent.prototype.viewProfile = function (id) {
        var _this = this;
        this.router.navigateByUrl('/view-profile/' + id).then(function () {
            _this.dismissLoading();
        });
    };
    AppComponent.prototype.viewMatchmaking = function () {
        var _this = this;
        this.router.navigateByUrl('/matchmaking').then(function () {
            _this.dismissLoading();
        });
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"],
            _shared_services_http_service_http_service__WEBPACK_IMPORTED_MODULE_9__["HttpService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_material_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-material.module */ "./src/app/app-material.module.ts");
/* harmony import */ var _shared_components_loading_indicator_loading_indicator_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/components/loading-indicator/loading-indicator.component */ "./src/app/shared/components/loading-indicator/loading-indicator.component.ts");
/* harmony import */ var _shared_components_about_about_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/components/about/about.component */ "./src/app/shared/components/about/about.component.ts");
/* harmony import */ var _shared_components_contact_page_contact_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/components/contact-page/contact-page.component */ "./src/app/shared/components/contact-page/contact-page.component.ts");
/* harmony import */ var _shared_services_http_service_http_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/services/http-service/http.service */ "./src/app/shared/services/http-service/http.service.ts");














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _shared_components_loading_indicator_loading_indicator_component__WEBPACK_IMPORTED_MODULE_9__["LoadingIndicator"],
                _shared_components_about_about_component__WEBPACK_IMPORTED_MODULE_10__["AboutPage"],
                _shared_components_contact_page_contact_page_component__WEBPACK_IMPORTED_MODULE_11__["ContactPage"]
            ],
            imports: [
                _app_material_module__WEBPACK_IMPORTED_MODULE_8__["AppMaterialModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            ],
            providers: [
                _shared_services_http_service_http_service__WEBPACK_IMPORTED_MODULE_12__["HttpService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
            entryComponents: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _shared_components_loading_indicator_loading_indicator_component__WEBPACK_IMPORTED_MODULE_9__["LoadingIndicator"],
                _shared_components_about_about_component__WEBPACK_IMPORTED_MODULE_10__["AboutPage"],
                _shared_components_contact_page_contact_page_component__WEBPACK_IMPORTED_MODULE_11__["ContactPage"]
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/shared/components/about/about.component.html":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/about/about.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 id=\"about-title\">About</h1>\r\n<hr>\r\n<p id=\"about-desc\">Game Match is a social site for gamers to connect for better game play or to meet people with similar interest, other then gaming. The app aims to match players \r\n  with typical attributes such as skill level, but also with similar interest, locality, game generes, favorite games and more.</p>\r\n<button mat-raised-button class=\"cancel\" (click)=\"this.dialogRef.close()\">Dismiss</button>"

/***/ }),

/***/ "./src/app/shared/components/about/about.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/about/about.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#about-title {\n  font-family: Arial, Helvetica, sans-serif; }\n\n#about-desc {\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 18px;\n  margin: 10px; }\n\n.cancel {\n  margin: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvYWJvdXQvQzpcXFVzZXJzXFx2YWlkaVxcRGVza3RvcFxcdGVzdCByZWdpc3RlciB1c2VyXFxrc3Utc3dlLTY3MzMtZ2FtaW5nLW1hdGNobWFrZXJcXG1hdGNobWFrZXItdWkvc3JjXFxhcHBcXHNoYXJlZFxcY29tcG9uZW50c1xcYWJvdXRcXGFib3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUNBQXlDLEVBQUE7O0FBRTdDO0VBQ0kseUNBQXlDO0VBQ3pDLGVBQWU7RUFDZixZQUFZLEVBQUE7O0FBR2hCO0VBQ0ksWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvYWJvdXQvYWJvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjYWJvdXQtdGl0bGV7XHJcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxufVxyXG4jYWJvdXQtZGVzY3tcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG59XHJcblxyXG4uY2FuY2Vse1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/shared/components/about/about.component.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/components/about/about.component.ts ***!
  \************************************************************/
/*! exports provided: AboutPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPage", function() { return AboutPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var AboutPage = /** @class */ (function () {
    function AboutPage(dialogRef) {
        this.dialogRef = dialogRef;
    }
    AboutPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/shared/components/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.scss */ "./src/app/shared/components/about/about.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]])
    ], AboutPage);
    return AboutPage;
}());



/***/ }),

/***/ "./src/app/shared/components/contact-page/contact-page.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/contact-page/contact-page.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 id=\"contact-title\">Contact Us</h1>\r\n<hr>\r\n<mat-grid-list cols=\"6\" rowHeight=\"10rem\">\r\n  <mat-grid-tile colspan=\"3\" rowspan=\"1\" id=\"contact-name\">\r\n    <mat-form-field>\r\n      <input matInput type=\"text\" class=\"form-control\" placeholder=\"Your Name\">\r\n    </mat-form-field>\r\n  </mat-grid-tile>\r\n  <mat-grid-tile colspan=\"3\" rowspan=\"1\" id=\"contact-email\">\r\n    <mat-form-field>\r\n      <input matInput type=\"text\" class=\"form-control\" placeholder=\"Your Email\">\r\n    </mat-form-field>\r\n  </mat-grid-tile>\r\n  <mat-grid-tile colspan=\"6\" rowspan=\"1\" id=\"contact-subject\">\r\n      <mat-form-field id=\"conact-subjecttext\">\r\n        <input matInput type=\"text\" class=\"form-control\" placeholder=\"Subject\">\r\n      </mat-form-field>\r\n  </mat-grid-tile>\r\n  <mat-grid-tile colspan=\"6\" rowspan=\"2\" id=\"contact-content\">\r\n    <mat-form-field appearance=\"outline\" id=\"contact-textarea\">\r\n      <mat-label>Content</mat-label>\r\n      <textarea matInput\r\n                cdkTextareaAutosize\r\n                #autosize=\"cdkTextareaAutosize\"\r\n                cdkAutosizeMinRows=\"6\"\r\n                cdkAutosizeMaxRows=\"6\"></textarea>\r\n    </mat-form-field>\r\n  </mat-grid-tile>\r\n</mat-grid-list>\r\n<button mat-raised-button class=\"cancel\" (click)=\"this.dialogRef.close()\">Submit</button>\r\n<button mat-raised-button class=\"cancel\" (click)=\"this.dialogRef.close()\">Dismiss</button>"

/***/ }),

/***/ "./src/app/shared/components/contact-page/contact-page.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/contact-page/contact-page.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#contact-title {\n  font-family: Arial, Helvetica, sans-serif; }\n\nmat-form-field {\n  width: 90%;\n  font-size: 18px; }\n\n#contact-textarea {\n  width: 95%; }\n\n#conact-subjecttext {\n  width: 95%; }\n\n.cancel {\n  margin-left: 8px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvY29udGFjdC1wYWdlL0M6XFxVc2Vyc1xcdmFpZGlcXERlc2t0b3BcXHRlc3QgcmVnaXN0ZXIgdXNlclxca3N1LXN3ZS02NzMzLWdhbWluZy1tYXRjaG1ha2VyXFxtYXRjaG1ha2VyLXVpL3NyY1xcYXBwXFxzaGFyZWRcXGNvbXBvbmVudHNcXGNvbnRhY3QtcGFnZVxcY29udGFjdC1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUNBQXlDLEVBQUE7O0FBRTdDO0VBQ0ksVUFBVTtFQUNWLGVBQWUsRUFBQTs7QUFFbkI7RUFDSSxVQUFVLEVBQUE7O0FBR2Q7RUFDSSxVQUFVLEVBQUE7O0FBR2Q7RUFDSSxnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2NvbnRhY3QtcGFnZS9jb250YWN0LXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY29udGFjdC10aXRsZXtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG59XHJcbm1hdC1mb3JtLWZpZWxkIHtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuI2NvbnRhY3QtdGV4dGFyZWF7XHJcbiAgICB3aWR0aDogOTUlO1xyXG59XHJcblxyXG4jY29uYWN0LXN1YmplY3R0ZXh0e1xyXG4gICAgd2lkdGg6IDk1JTtcclxufVxyXG5cclxuLmNhbmNlbHtcclxuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/shared/components/contact-page/contact-page.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/contact-page/contact-page.component.ts ***!
  \**************************************************************************/
/*! exports provided: ContactPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactPage", function() { return ContactPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/text-field */ "./node_modules/@angular/cdk/esm5/text-field.es5.js");
/* harmony import */ var _angular_material___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/ */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var ContactPage = /** @class */ (function () {
    function ContactPage(dialogRef, ngZone) {
        this.dialogRef = dialogRef;
        this.ngZone = ngZone;
    }
    ContactPage.prototype.triggerResize = function () {
        var _this = this;
        // Wait for changes to be applied, then trigger textarea resize.
        this.ngZone.onStable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1))
            .subscribe(function () { return _this.autosize.resizeToFitContent(true); });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('autosize'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_2__["CdkTextareaAutosize"])
    ], ContactPage.prototype, "autosize", void 0);
    ContactPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'contact-page',
            template: __webpack_require__(/*! ./contact-page.component.html */ "./src/app/shared/components/contact-page/contact-page.component.html"),
            styles: [__webpack_require__(/*! ./contact-page.component.scss */ "./src/app/shared/components/contact-page/contact-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material___WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
    ], ContactPage);
    return ContactPage;
}());



/***/ }),

/***/ "./src/app/shared/components/loading-indicator/loading-indicator.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/shared/components/loading-indicator/loading-indicator.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <h1>Loading</h1><br>\r\n    <mat-progress-bar mode=\"query\"></mat-progress-bar>\r\n"

/***/ }),

/***/ "./src/app/shared/components/loading-indicator/loading-indicator.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/shared/components/loading-indicator/loading-indicator.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#loadingIndicator {\n  display: flex;\n  align-content: center;\n  align-items: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbG9hZGluZy1pbmRpY2F0b3IvQzpcXFVzZXJzXFx2YWlkaVxcRGVza3RvcFxcdGVzdCByZWdpc3RlciB1c2VyXFxrc3Utc3dlLTY3MzMtZ2FtaW5nLW1hdGNobWFrZXJcXG1hdGNobWFrZXItdWkvc3JjXFxhcHBcXHNoYXJlZFxcY29tcG9uZW50c1xcbG9hZGluZy1pbmRpY2F0b3JcXGxvYWRpbmctaW5kaWNhdG9yLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQixtQkFBbUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2xvYWRpbmctaW5kaWNhdG9yL2xvYWRpbmctaW5kaWNhdG9yLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2xvYWRpbmdJbmRpY2F0b3Ige1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/shared/components/loading-indicator/loading-indicator.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/shared/components/loading-indicator/loading-indicator.component.ts ***!
  \************************************************************************************/
/*! exports provided: LoadingIndicator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingIndicator", function() { return LoadingIndicator; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var LoadingIndicator = /** @class */ (function () {
    function LoadingIndicator(dialogRef) {
        this.dialogRef = dialogRef;
    }
    LoadingIndicator = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'loading-indicator',
            template: __webpack_require__(/*! ./loading-indicator.component.html */ "./src/app/shared/components/loading-indicator/loading-indicator.component.html"),
            styles: [__webpack_require__(/*! ./loading-indicator.component.scss */ "./src/app/shared/components/loading-indicator/loading-indicator.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]])
    ], LoadingIndicator);
    return LoadingIndicator;
}());



/***/ }),

/***/ "./src/app/shared/models/user.ts":
/*!***************************************!*\
  !*** ./src/app/shared/models/user.ts ***!
  \***************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User(obj) {
        this.id = obj && obj.id;
        this.email = obj && obj.email;
        this.firstName = obj && obj.firstName;
        this.lastName = obj && obj.lastName;
        this.age = obj && obj.age;
        this.isActive = obj && obj.isActive;
        this.type = obj && obj.type;
    }
    return User;
}());



/***/ }),

/***/ "./src/app/shared/services/http-service/http.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/services/http-service/http.service.ts ***!
  \**************************************************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var HttpService = /** @class */ (function () {
    function HttpService(http, snackBar) {
        this.http = http;
        this.snackBar = snackBar;
        this.authToken = null;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Access-Control': 'Access-Control-Allow-Headers'
            })
        };
    }
    HttpService.prototype.typeToString = function (type) {
        if (type === 1) {
            return 'admin';
        }
        else if (type === 2) {
            return 'regular';
        }
    };
    HttpService.prototype.logout = function () {
        this.currUser = null;
        this.authToken = null;
        localStorage.clear();
        console.log('logged out');
    };
    HttpService.prototype.handleError = function (err) {
        var errorMessage = 'UNDEFINED ERROR MESSAGE';
        if (err.error) {
            if (err.error.message) { // Login error
                if (err.error.message.includes('UserRec not found') || err.error.message.includes('Password not match')) {
                    errorMessage = 'Invalid credentials. Please try again.';
                }
                else if (err.error.message.includes('Location not found for Zip Code') ||
                    err.error.message.includes('String index out of range')) {
                    errorMessage = 'Invalid ZIP code.';
                }
                else if (err.error.message === 'email already exists') {
                    errorMessage = 'Email address already in use. Please try again with a different email.';
                }
                else if (err.error.message.includes('Required age')) {
                    errorMessage = 'Invalid age. Please enter an age of 4 years or more'; // TODO make sure this error works with the latest code
                }
            }
            else if (err.error === 'inactive account') {
                errorMessage = 'Your account is inactive';
            }
            else {
                errorMessage = 'Cannot connect to server. Please try again later.';
            }
        }
        else {
            errorMessage = err;
        }
        this.snackBar.open(errorMessage, '', {
            duration: 3000,
            verticalPosition: 'top',
        });
        console.log(err); // original error message, using this to define new errors to display
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(null);
    };
    HttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\vaidi\Desktop\test register user\ksu-swe-6733-gaming-matchmaker\matchmaker-ui\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map