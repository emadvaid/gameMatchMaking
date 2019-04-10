(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-view-profile-page-view-profile-page-module"],{

/***/ "./src/app/pages/view-profile-page/view-profile-page.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/pages/view-profile-page/view-profile-page.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class = \"view-profile-card\">\r\n    <mat-card-header>\r\n      <div mat-card-avatar class=\"logo\"></div>\r\n      <mat-card-title class = \"view-profile-title\">{{ this.currentUser.firstName }} {{ this.currentUser.lastName}}</mat-card-title>\r\n      <div id=\"xp\">XP: 50</div>\r\n    </mat-card-header>\r\n    <hr>\r\n    <h2>Age: {{ this.currentUser.age }}<br>\r\n      Location:\r\n      </h2>\r\n</mat-card>\r\n<mat-grid-list cols=\"6\" rowHeight=\"25rem\">\r\n  <mat-grid-tile colspan=\"2\" rowspan=\"1\" class=\"interest-card\">\r\n      <mat-grid-tile-header>Interests</mat-grid-tile-header>\r\n  </mat-grid-tile>\r\n  <mat-grid-tile colspan=\"2\" rowspan=\"1\" class=\"genre-card\">\r\n      <mat-grid-tile-header>Favorite Genres</mat-grid-tile-header>\r\n  </mat-grid-tile>\r\n  <mat-grid-tile colspan=\"2\" rowspan=\"1\" class=\"games-played-card\">\r\n      <mat-grid-tile-header>Games Played</mat-grid-tile-header>\r\n  </mat-grid-tile>\r\n</mat-grid-list>"

/***/ }),

/***/ "./src/app/pages/view-profile-page/view-profile-page.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/pages/view-profile-page/view-profile-page.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card {\n  background-color: #4600b6;\n  align-content: center; }\n\n.logo {\n  background-image: url('skull.png');\n  background-size: cover; }\n\n.view-profile-card {\n  margin-left: 200px;\n  margin-right: 200px; }\n\n.view-profile-title {\n  font-size: 33px; }\n\n.view-profile-content {\n  font-size: 20px; }\n\n#xp {\n  font-size: 33px;\n  position: absolute;\n  right: 18px; }\n\n.genre-card {\n  background: #fab0ee; }\n\n.interest-card {\n  background: #dff5f5; }\n\n.games-played-card {\n  background: #cdd88f; }\n\nmat-grid-list {\n  margin: 5rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdmlldy1wcm9maWxlLXBhZ2UvQzpcXFVzZXJzXFx2YWlkaVxcRGVza3RvcFxcdGVzdCByZWdpc3RlciB1c2VyXFxrc3Utc3dlLTY3MzMtZ2FtaW5nLW1hdGNobWFrZXJcXG1hdGNobWFrZXItdWkvc3JjXFxhcHBcXHBhZ2VzXFx2aWV3LXByb2ZpbGUtcGFnZVxcdmlldy1wcm9maWxlLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSx5QkFBaUM7RUFDakMscUJBQXFCLEVBQUE7O0FBR3pCO0VBQ0Usa0NBQTZDO0VBQzdDLHNCQUFzQixFQUFBOztBQUd4QjtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSxlQUFlLEVBQUE7O0FBR2pCO0VBQ0UsZUFBZSxFQUFBOztBQUdqQjtFQUNJLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsV0FBVyxFQUFBOztBQUlmO0VBQ0ksbUJBQThCLEVBQUE7O0FBR2xDO0VBQ0ksbUJBQThCLEVBQUE7O0FBRWxDO0VBQ0ksbUJBQThCLEVBQUE7O0FBRWxDO0VBQ0ksWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdmlldy1wcm9maWxlLXBhZ2Uvdmlldy1wcm9maWxlLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxubWF0LWNhcmR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzAsIDAsIDE4Mik7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuLmxvZ28ge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnc3JjL2Fzc2V0cy9za3VsbC5wbmcnKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG4udmlldy1wcm9maWxlLWNhcmR7XHJcbiAgbWFyZ2luLWxlZnQ6IDIwMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMjAwcHg7XHJcbn1cclxuXHJcbi52aWV3LXByb2ZpbGUtdGl0bGV7XHJcbiAgZm9udC1zaXplOiAzM3B4O1xyXG59XHJcblxyXG4udmlldy1wcm9maWxlLWNvbnRlbnR7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG4jeHB7XHJcbiAgICBmb250LXNpemU6IDMzcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMThweDtcclxuICAgICBcclxufVxyXG5cclxuLmdlbnJlLWNhcmQge1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDI1MCwgMTc2LCAyMzgpO1xyXG59XHJcblxyXG4uaW50ZXJlc3QtY2FyZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjIzLCAyNDUsIDI0NSk7XHJcbn1cclxuLmdhbWVzLXBsYXllZC1jYXJkIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYigyMDUsIDIxNiwgMTQzKTtcclxufVxyXG5tYXQtZ3JpZC1saXN0IHtcclxuICAgIG1hcmdpbjogNXJlbTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/view-profile-page/view-profile-page.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/view-profile-page/view-profile-page.component.ts ***!
  \************************************************************************/
/*! exports provided: ViewProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewProfilePage", function() { return ViewProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");






var ViewProfilePage = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ViewProfilePage, _super);
    function ViewProfilePage(router, location, injector, dialog) {
        var _this = _super.call(this, injector, dialog) || this;
        _this.router = router;
        _this.location = location;
        _this.injector = injector;
        _this.dialog = dialog;
        return _this;
    }
    ViewProfilePage.prototype.ngOnInit = function () {
        this.closeDialog();
        this.getUser();
    };
    ViewProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'view-profile',
            template: __webpack_require__(/*! ./view-profile-page.component.html */ "./src/app/pages/view-profile-page/view-profile-page.component.html"),
            styles: [__webpack_require__(/*! ./view-profile-page.component.scss */ "./src/app/pages/view-profile-page/view-profile-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]])
    ], ViewProfilePage);
    return ViewProfilePage;
}(src_app_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]));



/***/ }),

/***/ "./src/app/pages/view-profile-page/view-profile-page.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/view-profile-page/view-profile-page.module.ts ***!
  \*********************************************************************/
/*! exports provided: ViewProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewProfilePageModule", function() { return ViewProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _view_profile_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view-profile-page.component */ "./src/app/pages/view-profile-page/view-profile-page.component.ts");
/* harmony import */ var src_app_app_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/app-material.module */ "./src/app/app-material.module.ts");






var ViewProfilePageModule = /** @class */ (function () {
    function ViewProfilePageModule() {
    }
    ViewProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _view_profile_page_component__WEBPACK_IMPORTED_MODULE_3__["ViewProfilePage"]
            ],
            imports: [
                src_app_app_material_module__WEBPACK_IMPORTED_MODULE_4__["AppMaterialModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _view_profile_page_component__WEBPACK_IMPORTED_MODULE_3__["ViewProfilePage"]
                    }
                ])
            ],
            exports: [
                _view_profile_page_component__WEBPACK_IMPORTED_MODULE_3__["ViewProfilePage"]
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], ViewProfilePageModule);
    return ViewProfilePageModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-view-profile-page-view-profile-page-module.js.map