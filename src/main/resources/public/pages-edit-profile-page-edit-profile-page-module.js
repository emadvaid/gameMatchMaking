(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-edit-profile-page-edit-profile-page-module"],{

/***/ "./src/app/pages/edit-profile-page/edit-profile-page.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/pages/edit-profile-page/edit-profile-page.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-grid-list cols=\"6\" rowHeight=\"32rem\" [gutterSize]=\"'15px'\">\r\n  <mat-grid-tile colspan=\"2\" rowspan=\"1\" class=\"profile-card\">\r\n    <mat-grid-tile-header>General Info</mat-grid-tile-header>\r\n      <mat-form>\r\n          <div class=\"form-group\">\r\n            <mat-form-field id=\"zipcode\">\r\n              <input matInput type=\"text\" placeholder=\"Zip Code\" type=\"text\"/>\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"form-group\">\r\n              <mat-form-field id=\"dob\">\r\n                  <input matInput [matDatepicker]=\"picker\" placeholder=\"Date of Birth\">\r\n                  <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n                  <mat-datepicker #picker></mat-datepicker>\r\n              </mat-form-field>\r\n            </div>\r\n      </mat-form>\r\n  </mat-grid-tile>\r\n  <mat-grid-tile class=\"genres\" colspan=\"3\" rowspan=\"1\">\r\n    <mat-grid-tile-header>Game Genres</mat-grid-tile-header>\r\n    <mat-selection-list #genres id=\"genre-list\">\r\n        <mat-list-option *ngFor=\"let genres of favoriteGenres\">\r\n          {{genres}}\r\n        </mat-list-option>\r\n      </mat-selection-list>\r\n  </mat-grid-tile>\r\n  <mat-grid-tile class=\"interests\" colspan=\"2\" rowspan=\"1\">\r\n    <mat-grid-tile-header>Interests</mat-grid-tile-header>\r\n    <mat-selection-list #interest>\r\n      <mat-list-option *ngFor=\"let interest of typesOfInterest\">\r\n        {{interest}}\r\n      </mat-list-option>\r\n    </mat-selection-list>\r\n  </mat-grid-tile>\r\n  <mat-grid-tile class=\"games-played\" colspan=\"3\" rowspan=\"1\">\r\n    <mat-grid-tile-header>Games Played</mat-grid-tile-header>\r\n    <mat-selection-list #played>\r\n        <mat-list-option *ngFor=\"let played of gamesPlayed\">\r\n          {{played}}\r\n        </mat-list-option>\r\n      </mat-selection-list>\r\n  </mat-grid-tile>\r\n</mat-grid-list>\r\n\r\n<div class=\"button\">\r\n  <button mat-raised-button class=\"cancel\" (click)=\"goBack()\">Cancel</button> <!--TODO add *ngIf=\"existingUser()\"-->\r\n  <button mat-raised-button (click)=\"submitChanges()\" color=\"primary\">Submit Changes</button>\r\n</div>\r\n\r\n<!-- TODO check agianst previous implementation\r\n  <nav>\r\n    <button mat-raised-button class=\"cancel\" (click)=\"goBack()\" >Cancel</button> \r\n    <button mat-raised-button (click)=\"submitChanges()\" color=\"primary\">Submit Changes</button>\r\n  </nav>-->"

/***/ }),

/***/ "./src/app/pages/edit-profile-page/edit-profile-page.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/pages/edit-profile-page/edit-profile-page.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-form-field {\n  width: 90%;\n  font-size: 18px; }\n\nmat-form {\n  width: 80%;\n  font-size: 18px; }\n\nmat-selection-list {\n  max-height: 200px;\n  overflow: auto;\n  width: 90%; }\n\n.profile-card {\n  background: #919597; }\n\n.genres {\n  background: #919597; }\n\n.interests {\n  background: #919597; }\n\n.games-played {\n  background: #919597; }\n\nmat-grid-list {\n  margin: 5rem; }\n\n.button {\n  padding-left: 50px; }\n\n.cancel {\n  margin-right: 7px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZWRpdC1wcm9maWxlLXBhZ2UvQzpcXFVzZXJzXFx2YWlkaVxcRGVza3RvcFxcdGVzdCByZWdpc3RlciB1c2VyXFxrc3Utc3dlLTY3MzMtZ2FtaW5nLW1hdGNobWFrZXJcXG1hdGNobWFrZXItdWkvc3JjXFxhcHBcXHBhZ2VzXFxlZGl0LXByb2ZpbGUtcGFnZVxcZWRpdC1wcm9maWxlLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxVQUFVO0VBQ1YsZUFBZSxFQUFBOztBQUVqQjtFQUNFLFVBQVU7RUFDVixlQUFlLEVBQUE7O0FBR2pCO0VBQ0UsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxVQUFVLEVBQUE7O0FBR1o7RUFDRSxtQkFBOEIsRUFBQTs7QUFHaEM7RUFDRSxtQkFBOEIsRUFBQTs7QUFHaEM7RUFDRSxtQkFBOEIsRUFBQTs7QUFHaEM7RUFDRSxtQkFBOEIsRUFBQTs7QUFHaEM7RUFDRSxZQUFZLEVBQUE7O0FBR2Q7RUFDRSxrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2VkaXQtcHJvZmlsZS1wYWdlL2VkaXQtcHJvZmlsZS1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gVE9ETyBkZWNpZGUgd2hldGhlciBvciBub3QgdG8gaGF2ZSBhIHNpbmdsZSBjb2xvclxyXG5cclxubWF0LWZvcm0tZmllbGQge1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcbm1hdC1mb3JtIHtcclxuICB3aWR0aDogODAlO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5cclxubWF0LXNlbGVjdGlvbi1saXN0IHtcclxuICBtYXgtaGVpZ2h0OiAyMDBweDtcclxuICBvdmVyZmxvdzogYXV0bztcclxuICB3aWR0aDogOTAlO1xyXG59XHJcblxyXG4ucHJvZmlsZS1jYXJkIHtcclxuICBiYWNrZ3JvdW5kOiByZ2IoMTQ1LCAxNDksIDE1MSk7XHJcbn1cclxuXHJcbi5nZW5yZXMge1xyXG4gIGJhY2tncm91bmQ6IHJnYigxNDUsIDE0OSwgMTUxKTtcclxufVxyXG5cclxuLmludGVyZXN0cyB7XHJcbiAgYmFja2dyb3VuZDogcmdiKDE0NSwgMTQ5LCAxNTEpO1xyXG59XHJcblxyXG4uZ2FtZXMtcGxheWVkIHtcclxuICBiYWNrZ3JvdW5kOiByZ2IoMTQ1LCAxNDksIDE1MSk7XHJcbn1cclxuXHJcbm1hdC1ncmlkLWxpc3Qge1xyXG4gIG1hcmdpbjogNXJlbTtcclxufVxyXG5cclxuLmJ1dHRvbntcclxuICBwYWRkaW5nLWxlZnQ6IDUwcHg7XHJcbn1cclxuXHJcbi5jYW5jZWx7XHJcbiAgbWFyZ2luLXJpZ2h0OiA3cHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/edit-profile-page/edit-profile-page.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/edit-profile-page/edit-profile-page.component.ts ***!
  \************************************************************************/
/*! exports provided: EditProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfilePage", function() { return EditProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");






var EditProfilePage = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](EditProfilePage, _super);
    function EditProfilePage(router, location, injector, dialog) {
        var _this = _super.call(this, injector, dialog) || this;
        _this.router = router;
        _this.location = location;
        _this.injector = injector;
        _this.dialog = dialog;
        _this.typesOfInterest = ['Hiking', 'Reading', 'Cooking', 'Graphics', 'Programming', 'Surfing', 'Snowboarding', 'Drawing', 'Dogs',
            'Cats'];
        _this.favoriteGenres = ['FPS', 'RPG', 'Battle Arena', 'Action', 'RTS', 'Sports Simulation', 'MMORPG', 'Fighting', 'Tactical RPG',
            'RTT'];
        _this.gamesPlayed = ['Fortnite', 'Call of Duty', 'Coutner Strike', 'FIFA', 'DOOM', 'Grand Theft Auto', 'Assasins Creed', 'Mario Bros',
            'Super Smash Borthers'];
        return _this;
    }
    EditProfilePage.prototype.ngOnInit = function () { };
    EditProfilePage.prototype.submitChanges = function () {
        this.router.navigateByUrl('/home');
    };
    EditProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-edit-profile-page',
            template: __webpack_require__(/*! ./edit-profile-page.component.html */ "./src/app/pages/edit-profile-page/edit-profile-page.component.html"),
            styles: [__webpack_require__(/*! ./edit-profile-page.component.scss */ "./src/app/pages/edit-profile-page/edit-profile-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"],
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]])
    ], EditProfilePage);
    return EditProfilePage;
}(src_app_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]));



/***/ }),

/***/ "./src/app/pages/edit-profile-page/edit-profile-page.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/edit-profile-page/edit-profile-page.module.ts ***!
  \*********************************************************************/
/*! exports provided: EditProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfilePageModule", function() { return EditProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _edit_profile_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-profile-page.component */ "./src/app/pages/edit-profile-page/edit-profile-page.component.ts");
/* harmony import */ var src_app_app_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/app-material.module */ "./src/app/app-material.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");







var EditProfilePageModule = /** @class */ (function () {
    function EditProfilePageModule() {
    }
    EditProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _edit_profile_page_component__WEBPACK_IMPORTED_MODULE_3__["EditProfilePage"]
            ],
            imports: [
                src_app_app_material_module__WEBPACK_IMPORTED_MODULE_4__["AppMaterialModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _edit_profile_page_component__WEBPACK_IMPORTED_MODULE_3__["EditProfilePage"]
                    }
                ])
            ],
            exports: [
                _edit_profile_page_component__WEBPACK_IMPORTED_MODULE_3__["EditProfilePage"]
            ],
            providers: [],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], EditProfilePageModule);
    return EditProfilePageModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-edit-profile-page-edit-profile-page-module.js.map