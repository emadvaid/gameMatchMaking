(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-page-login-page-module"],{

/***/ "./src/app/pages/login-page/login-page.component.html":
/*!************************************************************!*\
  !*** ./src/app/pages/login-page/login-page.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-grid-list cols=\"12\" rowHeight=\"25rem\">\r\n  <mat-grid-tile id=\"login-card\" class=\"credentials-card\" colspan=\"6\" rowspan=\"1.5\">\r\n    <mat-grid-tile-header id=\"login-title\">Log In</mat-grid-tile-header>\r\n    <mat-form [formGroup]=\"userLoginForm\" (ngSubmit)=\"onSubmit()\">\r\n    <div class=\"form-group\">\r\n      <mat-form-field id=\"email\">\r\n        <input matInput formControlName=\"email\" placeholder=\"E-mail Address\" type=\"text\" required\r\n        class=\"form-control\" [ngClass]=\" { 'is-invalid': submitted && f.email.errors}\" \r\n        (keyup.enter)=\"onSubmit()\"/>\r\n        <mat-icon matSuffix> </mat-icon>\r\n\r\n      </mat-form-field>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <mat-form-field>\r\n        <input matInput formControlName=\"password\" placeholder=\"Password\" [type]=\"hide ? 'text' : 'password'\" required\r\n        class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" \r\n        (keyup.enter)=\"onSubmit()\"/>\r\n        <mat-icon matSuffix  (click)=\"hide = !hide\">{{hide ? 'visibility' : 'visibility_off'}}</mat-icon>\r\n      </mat-form-field>\r\n    </div>\r\n    <div>\r\n      <button mat-raised-button id=\"loginButton\" (click)=\"onSubmit()\">Log In</button>\r\n    </div>\r\n    </mat-form>\r\n    <mat-grid-tile-footer>\r\n    <!--TODO align buttons better in the card-->\r\n      <div class=\"buttons\">\r\n        <button mat-raised-button (click)=\"goToLanding()\" class=\"cancel\">Cancel</button>\r\n        <button mat-raised-button color=\"primary\" (click)=\"register()\" id=\"register-button\">Register</button>\r\n      </div>\r\n    </mat-grid-tile-footer>\r\n  </mat-grid-tile>\r\n</mat-grid-list>"

/***/ }),

/***/ "./src/app/pages/login-page/login-page.component.scss":
/*!************************************************************!*\
  !*** ./src/app/pages/login-page/login-page.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#login-card {\n  background: #d3dbdb; }\n\n#username {\n  display: inline; }\n\n#password {\n  display: inline; }\n\n#loginButton {\n  background: #00448d;\n  width: 20rem; }\n\n.buttons {\n  padding: 500px; }\n\n#register-button {\n  margin-left: 8px; }\n\n#login-title {\n  font-size: 27px;\n  font-family: Arial, Helvetica, sans-serif; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4tcGFnZS9DOlxcVXNlcnNcXHZhaWRpXFxEZXNrdG9wXFx0ZXN0IHJlZ2lzdGVyIHVzZXJcXGtzdS1zd2UtNjczMy1nYW1pbmctbWF0Y2htYWtlclxcbWF0Y2htYWtlci11aS9zcmNcXGFwcFxccGFnZXNcXGxvZ2luLXBhZ2VcXGxvZ2luLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBOEIsRUFBQTs7QUFHaEM7RUFDRSxlQUFlLEVBQUE7O0FBR2pCO0VBQ0UsZUFBZSxFQUFBOztBQUdqQjtFQUNFLG1CQUEyQjtFQUMzQixZQUFZLEVBQUE7O0FBR2Q7RUFDRSxjQUFjLEVBQUE7O0FBR2hCO0VBQ0UsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0UsZUFBZTtFQUNmLHlDQUF5QyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbG9naW4tcGFnZS9sb2dpbi1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2xvZ2luLWNhcmQgIHtcclxuICBiYWNrZ3JvdW5kOiByZ2IoMjExLCAyMTksIDIxOSk7XHJcbn1cclxuXHJcbiN1c2VybmFtZSB7XHJcbiAgZGlzcGxheTogaW5saW5lO1xyXG59XHJcblxyXG4jcGFzc3dvcmQge1xyXG4gIGRpc3BsYXk6IGlubGluZTtcclxufVxyXG5cclxuI2xvZ2luQnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kOiByZ2IoMCwgNjgsIDE0MSk7XHJcbiAgd2lkdGg6IDIwcmVtO1xyXG59XHJcblxyXG4uYnV0dG9uc3tcclxuICBwYWRkaW5nOiA1MDBweDtcclxufVxyXG5cclxuI3JlZ2lzdGVyLWJ1dHRvbntcclxuICBtYXJnaW4tbGVmdDogOHB4O1xyXG59XHJcblxyXG4jbG9naW4tdGl0bGV7XHJcbiAgZm9udC1zaXplOiAyN3B4O1xyXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/login-page/login-page.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/login-page/login-page.component.ts ***!
  \**********************************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_shared_services_login_service_login_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/login-service/login.service */ "./src/app/shared/services/login-service/login.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");








var LoginPage = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](LoginPage, _super);
    function LoginPage(router, location, injector, dialog, loginService, formBuilder) {
        var _this = _super.call(this, injector, dialog) || this;
        _this.router = router;
        _this.location = location;
        _this.injector = injector;
        _this.dialog = dialog;
        _this.loginService = loginService;
        _this.formBuilder = formBuilder;
        return _this;
    }
    LoginPage.prototype.ngOnInit = function () {
        this.userLoginForm = this.formBuilder.group({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required])
        });
    };
    Object.defineProperty(LoginPage.prototype, "f", {
        get: function () { return this.userLoginForm.controls; },
        enumerable: true,
        configurable: true
    });
    LoginPage.prototype.onSubmit = function () {
        var _this = this;
        if (this.userLoginForm.invalid) {
            this.loginService.handleError('Please fill in all required fields and try again');
        }
        else {
            this.showLoading();
            this.loginService.login(this.f.email.value, this.f.password.value).subscribe(function (data) {
                if (data) {
                    _this.goHome();
                }
                else {
                    _this.closeDialog();
                }
            });
        }
    };
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'login',
            template: __webpack_require__(/*! ./login-page.component.html */ "./src/app/pages/login-page/login-page.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./login-page.component.scss */ "./src/app/pages/login-page/login-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"],
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"],
            src_app_shared_services_login_service_login_service__WEBPACK_IMPORTED_MODULE_6__["LoginService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"]])
    ], LoginPage);
    return LoginPage;
}(src_app_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]));



/***/ }),

/***/ "./src/app/pages/login-page/login-page.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/login-page/login-page.module.ts ***!
  \*******************************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login-page.component */ "./src/app/pages/login-page/login-page.component.ts");
/* harmony import */ var src_app_shared_services_login_service_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/login-service/login.service */ "./src/app/shared/services/login-service/login.service.ts");
/* harmony import */ var src_app_app_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/app-material.module */ "./src/app/app-material.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");









var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _login_page_component__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
            ],
            imports: [
                src_app_app_material_module__WEBPACK_IMPORTED_MODULE_5__["AppMaterialModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _login_page_component__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
                    }
                ])
            ],
            exports: [
                _login_page_component__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
            ],
            providers: [src_app_shared_services_login_service_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-login-page-login-page-module.js.map