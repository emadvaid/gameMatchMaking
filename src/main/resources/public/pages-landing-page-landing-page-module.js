(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-landing-page-landing-page-module"],{

/***/ "./src/app/pages/landing-page/landing-page.component.html":
/*!****************************************************************!*\
  !*** ./src/app/pages/landing-page/landing-page.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class = \"landing-card\">\r\n  <mat-card-header>\r\n    <div mat-card-avatar class=\"logo\"></div>\r\n    <mat-card-title class = \"landing-title\">#1 Game Matching</mat-card-title>\r\n  </mat-card-header>\r\n  <hr>\r\n    <mat-card-content class=\"landing-content\">Welcome to the best gamer matching service available.<br>\r\n      Please sign up and provide the necessary information for our match making services.<br>\r\n      If you are already a member please login and enjoy. </mat-card-content>\r\n    <mat-card-actions>\r\n      <button mat-raised-button style=\"background-color:rgb(0, 68, 141);\" (click)=\"goToLoginPage()\">Begin</button>\r\n    </mat-card-actions>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/pages/landing-page/landing-page.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/pages/landing-page/landing-page.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card {\n  background-color: #d3dbdb;\n  align-content: center; }\n\n.logo {\n  background-image: url('logo-01.png');\n  background-size: cover; }\n\n.landing-card {\n  margin-left: 200px;\n  margin-right: 200px; }\n\n.landing-title {\n  font-size: 33px; }\n\n.landing-content {\n  font-size: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGFuZGluZy1wYWdlL0M6XFxVc2Vyc1xcdmFpZGlcXERlc2t0b3BcXHRlc3QgcmVnaXN0ZXIgdXNlclxca3N1LXN3ZS02NzMzLWdhbWluZy1tYXRjaG1ha2VyXFxtYXRjaG1ha2VyLXVpL3NyY1xcYXBwXFxwYWdlc1xcbGFuZGluZy1wYWdlXFxsYW5kaW5nLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSx5QkFBb0M7RUFDcEMscUJBQXFCLEVBQUE7O0FBR3pCO0VBQ0Usb0NBQStDO0VBQy9DLHNCQUFzQixFQUFBOztBQUd4QjtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSxlQUFlLEVBQUE7O0FBR2pCO0VBQ0UsZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbGFuZGluZy1wYWdlL2xhbmRpbmctcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5tYXQtY2FyZHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTEsIDIxOSwgMjE5KTtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcblxyXG4ubG9nbyB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdzcmMvYXNzZXRzL2xvZ28tMDEucG5nJyk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxuLmxhbmRpbmctY2FyZHtcclxuICBtYXJnaW4tbGVmdDogMjAwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAyMDBweDtcclxufVxyXG5cclxuLmxhbmRpbmctdGl0bGV7XHJcbiAgZm9udC1zaXplOiAzM3B4O1xyXG59XHJcblxyXG4ubGFuZGluZy1jb250ZW50e1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/landing-page/landing-page.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/landing-page/landing-page.component.ts ***!
  \**************************************************************/
/*! exports provided: LandingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPage", function() { return LandingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");






var LandingPage = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](LandingPage, _super);
    function LandingPage(router, location, injector, dialog) {
        var _this = _super.call(this, injector, dialog) || this;
        _this.router = router;
        _this.location = location;
        _this.injector = injector;
        _this.dialog = dialog;
        return _this;
    }
    LandingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'landing-page',
            template: __webpack_require__(/*! ./landing-page.component.html */ "./src/app/pages/landing-page/landing-page.component.html"),
            styles: [__webpack_require__(/*! ./landing-page.component.scss */ "./src/app/pages/landing-page/landing-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"],
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]])
    ], LandingPage);
    return LandingPage;
}(src_app_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]));



/***/ }),

/***/ "./src/app/pages/landing-page/landing-page.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/landing-page/landing-page.module.ts ***!
  \***********************************************************/
/*! exports provided: LandingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPageModule", function() { return LandingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _landing_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./landing-page.component */ "./src/app/pages/landing-page/landing-page.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_app_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/app-material.module */ "./src/app/app-material.module.ts");






var LandingPageModule = /** @class */ (function () {
    function LandingPageModule() {
    }
    LandingPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _landing_page_component__WEBPACK_IMPORTED_MODULE_2__["LandingPage"],
            ],
            imports: [
                src_app_app_material_module__WEBPACK_IMPORTED_MODULE_4__["AppMaterialModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _landing_page_component__WEBPACK_IMPORTED_MODULE_2__["LandingPage"]
                    }
                ])
            ],
            exports: [
                _landing_page_component__WEBPACK_IMPORTED_MODULE_2__["LandingPage"]
            ],
            providers: [],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
            entryComponents: []
        })
    ], LandingPageModule);
    return LandingPageModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-landing-page-landing-page-module.js.map