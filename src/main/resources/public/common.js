(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/shared/services/login-service/login.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/shared/services/login-service/login.service.ts ***!
  \****************************************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/user */ "./src/app/shared/models/user.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _http_service_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../http-service/http.service */ "./src/app/shared/services/http-service/http.service.ts");








var LoginService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](LoginService, _super);
    function LoginService(http, snackBar) {
        var _this = _super.call(this, http, snackBar) || this;
        _this.http = http;
        _this.snackBar = snackBar;
        return _this;
    }
    LoginService.prototype.login = function (email, password) {
        var _this = this;
        return this.http.post('/api/authorizeUser', {
            email: email,
            password: password
        }, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (resp) {
            if (resp) {
                if (resp.detail.is_active) { // If the user is active, store it as the current user
                    _this.authToken = resp.auth.accessToken;
                    _this.currUser = new _models_user__WEBPACK_IMPORTED_MODULE_4__["User"]({
                        id: resp.detail.id,
                        email: resp.detail.email,
                        firstName: resp.detail.first_name,
                        lastName: resp.detail.last_name,
                        age: resp.detail.age,
                        isActive: resp.detail.is_active,
                        type: _this.typeToString(resp.detail.user_type)
                    });
                    localStorage.setItem('access-token', _this.authToken);
                    localStorage.setItem('user', JSON.stringify(_this.currUser));
                    return Object.assign({}, _this.currUser);
                }
                else { // If the user is not active, return an error
                    _this.currUser = null;
                    var err = {
                        error: 'inactive account'
                    };
                    _this.handleError(err);
                }
            }
            return null;
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return _this.handleError(err); })); // Catch server errors
    };
    LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]])
    ], LoginService);
    return LoginService;
}(_http_service_http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"]));



/***/ })

}]);
//# sourceMappingURL=common.js.map