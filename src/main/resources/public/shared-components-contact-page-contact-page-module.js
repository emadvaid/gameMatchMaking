(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["shared-components-contact-page-contact-page-module"],{

/***/ "./src/app/shared/components/contact-page/contact-page.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/shared/components/contact-page/contact-page.module.ts ***!
  \***********************************************************************/
/*! exports provided: ContactPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactPageModule", function() { return ContactPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _contact_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact-page.component */ "./src/app/shared/components/contact-page/contact-page.component.ts");





var ContactPageModule = /** @class */ (function () {
    function ContactPageModule() {
    }
    ContactPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _contact_page_component__WEBPACK_IMPORTED_MODULE_3__["ContactPage"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _contact_page_component__WEBPACK_IMPORTED_MODULE_3__["ContactPage"]
                    }
                ])
            ],
            exports: [
                _contact_page_component__WEBPACK_IMPORTED_MODULE_3__["ContactPage"]
            ],
            providers: [],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], ContactPageModule);
    return ContactPageModule;
}());



/***/ })

}]);
//# sourceMappingURL=shared-components-contact-page-contact-page-module.js.map