(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["shared-components-about-about-module"],{

/***/ "./src/app/shared/components/about/about.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/components/about/about.module.ts ***!
  \*********************************************************/
/*! exports provided: AboutPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPageModule", function() { return AboutPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about.component */ "./src/app/shared/components/about/about.component.ts");
/* harmony import */ var _app_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../app-material.module */ "./src/app/app-material.module.ts");






var AboutPageModule = /** @class */ (function () {
    function AboutPageModule() {
    }
    AboutPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _about_component__WEBPACK_IMPORTED_MODULE_3__["AboutPage"]
            ],
            imports: [
                _app_material_module__WEBPACK_IMPORTED_MODULE_4__["AppMaterialModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _about_component__WEBPACK_IMPORTED_MODULE_3__["AboutPage"]
                    }
                ])
            ],
            exports: [
                _about_component__WEBPACK_IMPORTED_MODULE_3__["AboutPage"]
            ],
            providers: [],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], AboutPageModule);
    return AboutPageModule;
}());



/***/ })

}]);
//# sourceMappingURL=shared-components-about-about-module.js.map