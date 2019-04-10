(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-matchmake-view-page-matchmake-view-page-module"],{

/***/ "./src/app/pages/matchmake-view-page/matchmake-view-page.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/pages/matchmake-view-page/matchmake-view-page.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Use service to get # of cards to display, use *ngFor to actually display the right # of cards as we see fit-->\r\n<mat-card (class)=\"getColor()\" ></mat-card><br>\r\n<mat-card (class)=\"getColor()\" ></mat-card><br>\r\n<mat-card (class)=\"getColor()\" ></mat-card><br>\r\n<mat-card (class)=\"getColor()\" ></mat-card><br>\r\n<!--TODO look into using grid instead of card-->\r\n<nav>\r\n    <button mat-raised-button (click)=\"goBack()\" class=\"cancel\">Go Back</button>\r\n  </nav>\r\n"

/***/ }),

/***/ "./src/app/pages/matchmake-view-page/matchmake-view-page.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/pages/matchmake-view-page/matchmake-view-page.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21hdGNobWFrZS12aWV3LXBhZ2UvbWF0Y2htYWtlLXZpZXctcGFnZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/matchmake-view-page/matchmake-view-page.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/matchmake-view-page/matchmake-view-page.component.ts ***!
  \****************************************************************************/
/*! exports provided: MatchmakeViewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchmakeViewPage", function() { return MatchmakeViewPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");






var MatchmakeViewPage = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MatchmakeViewPage, _super);
    function MatchmakeViewPage(router, location, injector, dialog) {
        var _this = _super.call(this, injector, dialog) || this;
        _this.router = router;
        _this.location = location;
        _this.injector = injector;
        _this.dialog = dialog;
        return _this;
    }
    MatchmakeViewPage.prototype.ngOnInit = function () {
        // Hardcoded for loop for demo purposes only. Once there is a backend connection, we might just need to do this once
        // Or we'll need to find a different way to do this if iterating over *ngFor messes with random colors
        // Random colors might not even look good later. This is just a POC
        for (var i = 0; i < 4; ++i) {
            document.getElementsByTagName('mat-card')[i].setAttribute('style', 'background-color:' + this.getColor());
        }
    };
    MatchmakeViewPage.prototype.getColor = function () {
        var color = Math.floor((Math.random() * 3 + 1));
        switch (color) {
            case 1:
                return 'red';
            case 2:
                return 'blue';
            case 3:
                return 'yellow';
        }
    };
    MatchmakeViewPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'matchmaking',
            template: __webpack_require__(/*! ./matchmake-view-page.component.html */ "./src/app/pages/matchmake-view-page/matchmake-view-page.component.html"),
            styles: [__webpack_require__(/*! ./matchmake-view-page.component.scss */ "./src/app/pages/matchmake-view-page/matchmake-view-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"],
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]])
    ], MatchmakeViewPage);
    return MatchmakeViewPage;
}(src_app_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]));



/***/ }),

/***/ "./src/app/pages/matchmake-view-page/matchmake-view-page.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/matchmake-view-page/matchmake-view-page.module.ts ***!
  \*************************************************************************/
/*! exports provided: MatchmakeViewPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchmakeViewPageModule", function() { return MatchmakeViewPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _matchmake_view_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./matchmake-view-page.component */ "./src/app/pages/matchmake-view-page/matchmake-view-page.component.ts");
/* harmony import */ var src_app_app_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/app-material.module */ "./src/app/app-material.module.ts");






var MatchmakeViewPageModule = /** @class */ (function () {
    function MatchmakeViewPageModule() {
    }
    MatchmakeViewPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _matchmake_view_page_component__WEBPACK_IMPORTED_MODULE_3__["MatchmakeViewPage"]
            ],
            imports: [
                src_app_app_material_module__WEBPACK_IMPORTED_MODULE_4__["AppMaterialModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _matchmake_view_page_component__WEBPACK_IMPORTED_MODULE_3__["MatchmakeViewPage"]
                    }
                ])
            ],
            exports: [
                _matchmake_view_page_component__WEBPACK_IMPORTED_MODULE_3__["MatchmakeViewPage"]
            ],
            providers: [],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], MatchmakeViewPageModule);
    return MatchmakeViewPageModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-matchmake-view-page-matchmake-view-page-module.js.map