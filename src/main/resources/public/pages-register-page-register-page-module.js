(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-register-page-register-page-module"],{

/***/ "./src/app/pages/register-page/register-page.component.html":
/*!******************************************************************!*\
  !*** ./src/app/pages/register-page/register-page.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-grid-list cols=\"12\" rowHeight=\"60rem\">\r\n  <mat-grid-tile id=\"register-card\" class=\"credentials-card\"colspan=\"6\" rowspan=\"1\">\r\n    <mat-grid-tile-header>Register</mat-grid-tile-header>\r\n      <mat-form [formGroup]=\"userRegisterForm\" (ngSubmit)=\"onSubmit()\">\r\n        <div class=\"formGroup\">\r\n          <mat-form-field id=\"firstName\">\r\n            <input matInput placeholder=\"First Name\" type=\"text\" formControlName=\"firstName\" required\r\n              class=\"form-control\" [ngClass]=\" { 'is-invalid': submitted && f.firstName.errors}\" >\r\n          </mat-form-field>\r\n        </div>\r\n        <div class=\"formGroup\">\r\n          <mat-form-field id=\"lastName\">\r\n            <input matInput placeholder=\"Last Name\" type=\"text\" formControlName=\"lastName\" required\r\n            class=\"form-control\" [ngClass]=\" { 'is-invalid': submitted && f.lastName.errors}\" >\r\n          </mat-form-field>\r\n        </div>\r\n        <div class=\"formGroup\">\r\n          <mat-form-field id=\"age\">\r\n            <input matInput placeholder=\"Age\" type=\"text\" formControlName=\"age\" required\r\n            class=\"form-control\" [ngClass]=\" { 'is-invalid': submitted && f.age.errors}\" >\r\n          </mat-form-field>\r\n        </div>\r\n        <div class=\"formGroup\">\r\n          <mat-form-field id=\"zip\">\r\n            <input matInput placeholder=\"ZIP Code\" type=\"text\" formControlName=\"zip\" required\r\n            class=\"form-control\" [ngClass]=\" { 'is-invalid': submitted && f.zip.errors}\">\r\n          </mat-form-field>\r\n        </div>\r\n        <div class=\"formGroup\">\r\n          <mat-form-field id=\"email\">\r\n            <input matInput placeholder=\"E-mail Address\" type=\"text\" formControlName=\"email\" required\r\n            class=\"form-control\" [ngClass]=\" { 'is-invalid': submitted && f.email.errors}\">\r\n          </mat-form-field>\r\n        </div>\r\n        <div class=\"formGroup\">\r\n          <mat-form-field id=\"password\">\r\n            <input matInput placeholder=\"Password\" [type]=\"hide ? 'text' : 'password'\" formControlName=\"password\" required\r\n            class=\"form-control\" [ngClass]=\" { 'is-invalid': submitted && f.password.errors}\">\r\n            <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility' : 'visibility_off'}}</mat-icon>\r\n          </mat-form-field>\r\n        </div>\r\n        <div class=\"formGroup\">\r\n          <mat-form-field id=\"confirmPassword\">\r\n            <input matInput placeholder=\"Confirm Password\" [type]=\"hide ? 'text' : 'password'\" formControlName=\"confirmPassword\" required\r\n            class=\"form-control\" [ngClass]=\" { 'is-invalid': submitted && f.confirmPassword.errors}\" (keyup.enter)=\"onSubmit()\">\r\n            <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility' : 'visibility_off'}}</mat-icon>\r\n          </mat-form-field>\r\n        </div>\r\n      </mat-form>\r\n    <mat-grid-tile-footer>\r\n      <div class=\"buttons\">\r\n        <!--TODO align buttons better in the card-->\r\n        <button mat-raised-button (click)=\"goToLanding()\" class=\"cancel\">Cancel</button>\r\n        <button mat-raised-button (click)=\"onSubmit()\">Register</button>\r\n      </div>\r\n    </mat-grid-tile-footer>\r\n  </mat-grid-tile>\r\n</mat-grid-list>\r\n  "

/***/ }),

/***/ "./src/app/pages/register-page/register-page.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/pages/register-page/register-page.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#register-card {\n  background: #31cc02; }\n\n.input {\n  display: inline; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVnaXN0ZXItcGFnZS9DOlxcVXNlcnNcXHZhaWRpXFxEZXNrdG9wXFx0ZXN0IHJlZ2lzdGVyIHVzZXJcXGtzdS1zd2UtNjczMy1nYW1pbmctbWF0Y2htYWtlclxcbWF0Y2htYWtlci11aS9zcmNcXGFwcFxccGFnZXNcXHJlZ2lzdGVyLXBhZ2VcXHJlZ2lzdGVyLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBMEIsRUFBQTs7QUFHNUI7RUFDRSxlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9yZWdpc3Rlci1wYWdlL3JlZ2lzdGVyLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjcmVnaXN0ZXItY2FyZCAge1xyXG4gIGJhY2tncm91bmQ6cmdiKDQ5LCAyMDQsIDIpO1xyXG59XHJcblxyXG4uaW5wdXQge1xyXG4gIGRpc3BsYXk6IGlubGluZTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/register-page/register-page.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/register-page/register-page.component.ts ***!
  \****************************************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _shared_services_register_service_register_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/services/register-service/register.service */ "./src/app/shared/services/register-service/register.service.ts");
/* harmony import */ var _shared_services_login_service_login_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/services/login-service/login.service */ "./src/app/shared/services/login-service/login.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");









var RegisterPage = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](RegisterPage, _super);
    function RegisterPage(router, location, injector, dialog, loginService, registerService, formBuilder) {
        var _this = _super.call(this, injector, dialog) || this;
        _this.router = router;
        _this.location = location;
        _this.injector = injector;
        _this.dialog = dialog;
        _this.loginService = loginService;
        _this.registerService = registerService;
        _this.formBuilder = formBuilder;
        return _this;
    }
    RegisterPage.prototype.ngOnInit = function () {
        this.userRegisterForm = this.formBuilder.group({
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]),
            age: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]),
            zip: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]),
            confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required])
        });
    };
    Object.defineProperty(RegisterPage.prototype, "f", {
        get: function () { return this.userRegisterForm.controls; },
        enumerable: true,
        configurable: true
    });
    RegisterPage.prototype.onSubmit = function () {
        var _this = this;
        if (this.userRegisterForm.invalid) {
            this.registerService.handleError('Please fill in all required fields and try again');
        }
        else {
            this.showLoading();
            this.registerService.register(this.f.email.value, this.f.firstName.value, this.f.lastName.value, this.f.age.value, this.f.zip.value, this.f.password.value, this.f.confirmPassword.value).subscribe(function (data) {
                if (data) {
                    if (data === 'Password Error') {
                        _this.closeDialog();
                    }
                    else if (data.detail.email === _this.f.email.value) {
                        _this.loginService.login(data.detail.email, _this.f.password.value).subscribe(function (result) {
                            if (result) {
                                _this.editProfile();
                            }
                            else {
                                _this.closeDialog();
                            }
                        });
                    }
                }
                else {
                    _this.closeDialog();
                }
            });
        }
    };
    RegisterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'register',
            template: __webpack_require__(/*! ./register-page.component.html */ "./src/app/pages/register-page/register-page.component.html"),
            styles: [__webpack_require__(/*! ./register-page.component.scss */ "./src/app/pages/register-page/register-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"],
            _shared_services_login_service_login_service__WEBPACK_IMPORTED_MODULE_7__["LoginService"],
            _shared_services_register_service_register_service__WEBPACK_IMPORTED_MODULE_6__["RegisterService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"]])
    ], RegisterPage);
    return RegisterPage;
}(_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]));



/***/ }),

/***/ "./src/app/pages/register-page/register-page.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/register-page/register-page.module.ts ***!
  \*************************************************************/
/*! exports provided: RegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _register_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register-page.component */ "./src/app/pages/register-page/register-page.component.ts");
/* harmony import */ var src_app_shared_services_login_service_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/login-service/login.service */ "./src/app/shared/services/login-service/login.service.ts");
/* harmony import */ var src_app_shared_services_register_service_register_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/register-service/register.service */ "./src/app/shared/services/register-service/register.service.ts");
/* harmony import */ var src_app_app_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/app-material.module */ "./src/app/app-material.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");










var RegisterPageModule = /** @class */ (function () {
    function RegisterPageModule() {
    }
    RegisterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _register_page_component__WEBPACK_IMPORTED_MODULE_3__["RegisterPage"]
            ],
            imports: [
                src_app_app_material_module__WEBPACK_IMPORTED_MODULE_6__["AppMaterialModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _register_page_component__WEBPACK_IMPORTED_MODULE_3__["RegisterPage"]
                    }
                ])
            ],
            exports: [
                _register_page_component__WEBPACK_IMPORTED_MODULE_3__["RegisterPage"]
            ],
            providers: [
                src_app_shared_services_login_service_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"],
                src_app_shared_services_register_service_register_service__WEBPACK_IMPORTED_MODULE_5__["RegisterService"]
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
        })
    ], RegisterPageModule);
    return RegisterPageModule;
}());



/***/ }),

/***/ "./src/app/shared/services/register-service/register.service.ts":
/*!**********************************************************************!*\
  !*** ./src/app/shared/services/register-service/register.service.ts ***!
  \**********************************************************************/
/*! exports provided: RegisterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterService", function() { return RegisterService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _http_service_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../http-service/http.service */ "./src/app/shared/services/http-service/http.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");







var RegisterService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](RegisterService, _super);
    function RegisterService(http, snackBar) {
        var _this = _super.call(this, http, snackBar) || this;
        _this.http = http;
        _this.snackBar = snackBar;
        return _this;
    }
    RegisterService.prototype.register = function (email, firstName, lastName, age, zip, password, confirmPassword) {
        var _this = this;
        var userDetail = {
            email: email,
            first_name: firstName,
            last_name: lastName,
            age: age,
            user_type: 2,
            location: {
                zip: zip
            }
        };
        if (password !== confirmPassword) {
            this.handleError('Passwords do not match');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])('Password Error');
        }
        else {
            return this.http.post('/api/register', { userDetail: userDetail, password: password }, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (resp) {
                if (resp) {
                    return resp;
                }
            })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) { return _this.handleError(err); }));
        }
    };
    RegisterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]])
    ], RegisterService);
    return RegisterService;
}(_http_service_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]));



/***/ })

}]);
//# sourceMappingURL=pages-register-page-register-page-module.js.map