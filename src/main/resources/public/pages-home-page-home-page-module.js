(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-home-page-home-page-module"],{

/***/ "./src/app/pages/home-page/home-page.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/home-page/home-page.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Welcome back, {{ this.currentUser.firstName }}</h1>\r\n  <mat-card id=\"user\" (click)=\"viewProfile(this.currentUser.id)\">\r\n  <h1>User information</h1>\r\n    <h2>Name: {{ this.currentUser.firstName }} {{ this.currentUser.lastName}}<br>\r\n    Age: {{ this.currentUser.age }}\r\n    </h2>\r\n</mat-card>\r\n\r\n<mat-card  *ngIf=\"showAdminTools()\">\r\n  Hi, this is an admin view. Not much to see here yet!\r\n</mat-card>\r\n<!--TODO look into using grid instead of card-->\r\n\r\n<nav>\r\n  <button mat-raised-button (click)=\"goToLanding()\" class=\"cancel\">Log out</button>\r\n  <button mat-raised-button (click)=\"editProfile()\" color=\"primary\">Edit Profile</button>\r\n  <button mat-raised-button (click)=\"viewMatchmaking()\" color=\"accent\">Matchmaking</button>\r\n</nav>"

/***/ }),

/***/ "./src/app/pages/home-page/home-page.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/pages/home-page/home-page.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#user {\n  background-color: orange; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS1wYWdlL0M6XFxVc2Vyc1xcdmFpZGlcXERlc2t0b3BcXHRlc3QgcmVnaXN0ZXIgdXNlclxca3N1LXN3ZS02NzMzLWdhbWluZy1tYXRjaG1ha2VyXFxtYXRjaG1ha2VyLXVpL3NyY1xcYXBwXFxwYWdlc1xcaG9tZS1wYWdlXFxob21lLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx3QkFBd0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUtcGFnZS9ob21lLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjdXNlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/home-page/home-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/home-page/home-page.component.ts ***!
  \********************************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");






/**
 * This page can hold both user and admin views. Shared functionality will always be visible.
 * Admin-specific tools will be restricted by *ngIf statements in the html
 */
var HomePage = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](HomePage, _super);
    function HomePage(router, location, injector, dialog) {
        var _this = _super.call(this, injector, dialog) || this;
        _this.router = router;
        _this.location = location;
        _this.injector = injector;
        _this.dialog = dialog;
        return _this;
    }
    HomePage.prototype.ngOnInit = function () {
        this.getUser();
    };
    HomePage.prototype.showAdminTools = function () {
        if (this.currentUser.type === 'admin') {
            return true;
        }
    };
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'home',
            template: __webpack_require__(/*! ./home-page.component.html */ "./src/app/pages/home-page/home-page.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./home-page.component.scss */ "./src/app/pages/home-page/home-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]])
    ], HomePage);
    return HomePage;
}(src_app_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]));



/***/ }),

/***/ "./src/app/pages/home-page/home-page.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/home-page/home-page.module.ts ***!
  \*****************************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home-page.component */ "./src/app/pages/home-page/home-page.component.ts");
/* harmony import */ var src_app_app_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/app-material.module */ "./src/app/app-material.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");







var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _home_page_component__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
            ],
            imports: [
                src_app_app_material_module__WEBPACK_IMPORTED_MODULE_4__["AppMaterialModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page_component__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
                    }
                ])
            ],
            exports: [
                _home_page_component__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
            ],
            providers: [],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-home-page-home-page-module.js.map