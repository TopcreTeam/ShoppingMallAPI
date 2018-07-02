(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["notice-notice-module"],{

/***/ "./src/app/notice/faq-detail/faq-detail.component.css":
/*!************************************************************!*\
  !*** ./src/app/notice/faq-detail/faq-detail.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ol li {\r\n  font-weight: bold;\r\n}\r\n\r\ntbody th {\r\n  background-color: lightgray;\r\n  text-align: center;\r\n  font-weight: bold;\r\n  font-size: 13pt;\r\n  padding: 10px;\r\n}\r\n\r\ntbody tr td p {\r\n  padding: 20px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/notice/faq-detail/faq-detail.component.html":
/*!*************************************************************!*\
  !*** ./src/app/notice/faq-detail/faq-detail.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<hr class=\"between-sections\">\r\n\r\n<div class=\"card card-cascade wider reverse\">\r\n\r\n  <!-- Card content -->\r\n  <div class=\"card-body card-body-cascade text-center\">\r\n\r\n    <!-- Title -->\r\n    <h4 class=\"card-title\"><strong>자주하는 질문</strong></h4>\r\n  </div>\r\n\r\n</div>\r\n\r\n<hr class=\"between-sections\">\r\n\r\n<ol class=\"breadcrumb\">\r\n  <li class=\"breadcrumb-item\">\r\n    <a [routerLink]=\"['/index']\">Home</a>\r\n  </li>\r\n  <li class=\"breadcrumb-item\">고객센터</li>\r\n  <li class=\"breadcrumb-item\">\r\n    <a [routerLink]=\"['/notice/faq']\">자주하는 질문</a>\r\n    <!-- delete : (click)=\"removeToken()\" -->\r\n  </li>\r\n</ol>\r\n\r\n<!--Table-->\r\n<table class=\"table table-bordered\">\r\n\r\n  <!--Table body-->\r\n  <tbody>\r\n    <tr>\r\n      <th class=\"cyan lighten-4\">제목</th>\r\n      <td colspan=\"3\">{{ faq?.f_title }}</td>\r\n    </tr>\r\n    <tr>\r\n      <th class=\"cyan lighten-4\">작성자</th>\r\n      <td colspan=\"3\">{{ faq?.a_id }}</td>\r\n    </tr>\r\n    <tr>\r\n      <th class=\"cyan lighten-4\">작성일</th>\r\n      <td>{{ faq?.f_date | date:'yyyy-MM-dd' }}</td>\r\n      <th class=\"cyan lighten-4\">조회수</th>\r\n      <td>{{ faq?.f_hits }}</td>\r\n    </tr>\r\n    <tr>\r\n      <td colspan=\"4\">\r\n        <pre>{{ faq?.f_content }}</pre>\r\n      </td>\r\n    </tr>\r\n  </tbody>\r\n  <!--Table body-->\r\n\r\n</table>\r\n<!--Table-->\r\n\r\n<button type=\"button\" class=\"btn btn-outline-info waves-effect\" [routerLink]=\"['/notice/faq']\">목록\r\n  <!-- (click)=\"removeToken()\" -->\r\n</button>\r\n"

/***/ }),

/***/ "./src/app/notice/faq-detail/faq-detail.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/notice/faq-detail/faq-detail.component.ts ***!
  \***********************************************************/
/*! exports provided: FaqDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqDetailComponent", function() { return FaqDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_services_faq_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/faq.service */ "./src/app/shared/services/faq.service.ts");
/* harmony import */ var _shared_services_token_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/token.service */ "./src/app/shared/services/token.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//remove ngOnDestroy



var FaqDetailComponent = /** @class */ (function () {
    function FaqDetailComponent(faqService, http, tokenService) {
        this.faqService = faqService;
        this.http = http;
        this.tokenService = tokenService;
    }
    FaqDetailComponent.prototype.ngOnInit = function () {
        this.faq = this.faqService.getFaqNoObject();
        if (this.faq == null) {
            var f_no = this.tokenService.getToken("faqDetailToken");
            var faqList = this.tokenService.getToken("faqToken");
            var faq = faqList.find(function (item) {
                return item.f_no === f_no;
            });
            var f_content = faq.f_content;
            faq.f_content = faq.f_content.replace("\r\n", "<br>");
            this.faq = faq;
        }
    };
    FaqDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-faq-detail',
            template: __webpack_require__(/*! ./faq-detail.component.html */ "./src/app/notice/faq-detail/faq-detail.component.html"),
            styles: [__webpack_require__(/*! ./faq-detail.component.css */ "./src/app/notice/faq-detail/faq-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_services_faq_service__WEBPACK_IMPORTED_MODULE_2__["FaqService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _shared_services_token_service__WEBPACK_IMPORTED_MODULE_3__["TokenService"]])
    ], FaqDetailComponent);
    return FaqDetailComponent;
}());



/***/ }),

/***/ "./src/app/notice/faq/faq.component.css":
/*!**********************************************!*\
  !*** ./src/app/notice/faq/faq.component.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ol li {\r\n  font-weight: bold;\r\n}\r\n\r\nthead tr th {\r\n  font-weight: bold;\r\n  text-align: center;\r\n}\r\n\r\ntbody tr:hover {\r\n  background-color: #FF9090;\r\n}\r\n\r\ntbody tr a:hover {\r\n  color: white;\r\n}\r\n\r\ntbody tr th {\r\n  text-align: center;\r\n}\r\n\r\nform button {\r\n  font-weight: bold;\r\n  font-size: 0.8em;\r\n}\r\n\r\n#selectDiv {\r\n  padding-top: 0px;\r\n  padding-bottom: 10px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/notice/faq/faq.component.html":
/*!***********************************************!*\
  !*** ./src/app/notice/faq/faq.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<hr class=\"between-sections\">\r\n\r\n<div class=\"card card-cascade wider reverse\">\r\n\r\n  <!-- Card content -->\r\n  <div class=\"card-body card-body-cascade text-center\">\r\n\r\n    <!-- Title -->\r\n    <h4 class=\"card-title\"><strong>자주하는 질문</strong></h4>\r\n  </div>\r\n\r\n</div>\r\n\r\n<hr class=\"between-sections\">\r\n\r\n<ol class=\"breadcrumb\">\r\n  <li class=\"breadcrumb-item\">\r\n    <a [routerLink]=\"['/index']\">Home</a>\r\n  </li>\r\n  <li class=\"breadcrumb-item\">고객센터</li>\r\n  <li class=\"breadcrumb-item\">자주하는 질문</li>\r\n</ol>\r\n\r\n<div id=\"selectDiv\">\r\n  <select (change)=\"getFaqByCategory($event.target.value)\">\r\n    <option value=\"\" disabled selected>카테고리별 조회</option>\r\n    <option *ngFor=\"let category of categoryList\" [value]=\"category\">\r\n      {{ category }}\r\n    </option>\r\n  </select>\r\n</div>\r\n\r\n<!--Table-->\r\n<table class=\"table\">\r\n    <!--Table head-->\r\n    <thead class=\"cyan lighten-4\">\r\n        <tr>\r\n            <th>번호</th>\r\n            <th>카테고리</th>\r\n            <th>제목</th>\r\n            <th>작성자</th>\r\n            <th>작성일</th>\r\n            <th>조회수</th>\r\n        </tr>\r\n    </thead>\r\n    <!--Table head-->\r\n\r\n    <!--Table body-->\r\n    <tbody>\r\n        <tr *ngFor=\"let faq of faqList | paginate: { itemsPerPage: 10, currentPage: page }\">\r\n            <th scope=\"row\">{{ faq.f_no }}</th>\r\n            <th>{{ faq.f_category }}</th>\r\n            <th>\r\n              <a [routerLink]=\"['/detail/faq']\" routerLinkActive=\"router-link-active\"\r\n                  (click)=\"setFaqNo(faq.f_no)\">{{ faq.f_title }}\r\n              </a>\r\n            </th>\r\n            <th>{{ faq.a_id }}</th>\r\n            <th>{{ faq.f_date | date:'yyyy-MM-dd' }}</th>\r\n            <th>{{ faq.f_hits }}</th>\r\n        </tr>\r\n    </tbody>\r\n    <!--Table body-->\r\n</table>\r\n\r\n<!-- Pagination -->\r\n<div class=\"text-center mt-3\">\r\n  <pagination-controls (pageChange)=\"page = $event\"></pagination-controls>\r\n</div>\r\n\r\n<form class=\"form-inline mr-auto\" (ngSubmit)=\"searchTerm()\">\r\n    <input class=\"form-control mr-sm-2 w-50 p-1\" type=\"text\" placeholder=\"검색할 제목을 입력해주세요\" aria-label=\"Search\"\r\n      [(ngModel)]=\"search\" [ngModelOptions]=\"{standalone: true}\"/>\r\n    <button class=\"btn btn-outline-success btn-rounded btn-sm my-0\" type=\"submit\">검색</button>\r\n</form>\r\n\r\n<hr class=\"between-sections\">\r\n"

/***/ }),

/***/ "./src/app/notice/faq/faq.component.ts":
/*!*********************************************!*\
  !*** ./src/app/notice/faq/faq.component.ts ***!
  \*********************************************/
/*! exports provided: FaqComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqComponent", function() { return FaqComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_faq_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/faq.service */ "./src/app/shared/services/faq.service.ts");
/* harmony import */ var _shared_services_search_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/search.service */ "./src/app/shared/services/search.service.ts");
/* harmony import */ var _shared_services_token_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/token.service */ "./src/app/shared/services/token.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FaqComponent = /** @class */ (function () {
    function FaqComponent(faqService, searchService, tokenService) {
        this.faqService = faqService;
        this.searchService = searchService;
        this.tokenService = tokenService;
        this.page = 1;
        this.categoryList = ["전체조회", "배송", "환불", "기타"];
        this.search = '';
    }
    FaqComponent.prototype.ngOnInit = function () {
        var _this = this;
        // if(this.tokenService.isToken("faqToken")) {
        //   this.tokenService.removeToken("faqToken");
        // } else {
        this.faqService.getFaqList()
            .subscribe(function (faqs) {
            _this.tokenService.saveToken("faqToken", faqs);
            _this.faqList = faqs;
        });
        // }
    };
    FaqComponent.prototype.getFaqByCategory = function (f_category) {
        var _this = this;
        if (f_category == "전체조회" || f_category == "") {
            // this.faqList = this.tokenService.getToken("faqToken");
            this.faqService.getFaqList()
                .subscribe(function (faqs) {
                // this.tokenService.saveToken("faqToken", faqs);
                _this.faqList = faqs;
            });
        }
        else {
            this.faqService.getFaqCategory(f_category)
                .subscribe(function (faqList) {
                _this.faqList = faqList;
            });
        }
    };
    FaqComponent.prototype.setFaqNo = function (f_no) {
        this.faqService.setFaqNo(f_no);
        this.setFaqNoObject(f_no);
        if (this.tokenService.isToken("faqDetailToken")) {
            this.tokenService.removeToken("faqDetailToken");
        }
        this.tokenService.saveToken("faqDetailToken", f_no);
    };
    FaqComponent.prototype.setFaqNoObject = function (f_no) {
        var faq = this.faqList.find(function (item) {
            return item.f_no === f_no;
        });
        this.faqService.setFaqNoObject(faq);
        this.check(faq);
    };
    FaqComponent.prototype.check = function (faq) {
        this.faqService.checkFaq(faq);
    };
    FaqComponent.prototype.searchTerm = function () {
        var _this = this;
        if (this.search == '' || this.search == 'search') {
            this.faqService.getFaqList()
                .subscribe(function (faqs) {
                _this.faqList = faqs;
            });
        }
        else {
            this.searchService.faqSearch(this.search)
                .subscribe(function (faqs) {
                _this.faqList = faqs;
            });
        }
    };
    FaqComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-faq',
            template: __webpack_require__(/*! ./faq.component.html */ "./src/app/notice/faq/faq.component.html"),
            styles: [__webpack_require__(/*! ./faq.component.css */ "./src/app/notice/faq/faq.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_services_faq_service__WEBPACK_IMPORTED_MODULE_1__["FaqService"],
            _shared_services_search_service__WEBPACK_IMPORTED_MODULE_2__["SearchService"],
            _shared_services_token_service__WEBPACK_IMPORTED_MODULE_3__["TokenService"]])
    ], FaqComponent);
    return FaqComponent;
}());



/***/ }),

/***/ "./src/app/notice/notice-detail/notice-detail.component.css":
/*!******************************************************************!*\
  !*** ./src/app/notice/notice-detail/notice-detail.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ol li {\r\n  font-weight: bold;\r\n}\r\n\r\ntbody th {\r\n  background-color: lightgray;\r\n  text-align: center;\r\n  font-weight: bold;\r\n  font-size: 13pt;\r\n  padding: 10px;\r\n}\r\n\r\ntbody tr td p {\r\n  padding: 20px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/notice/notice-detail/notice-detail.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/notice/notice-detail/notice-detail.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<hr class=\"between-sections\">\r\n\r\n<div class=\"card card-cascade wider reverse\">\r\n\r\n  <!-- Card content -->\r\n  <div class=\"card-body card-body-cascade text-center\">\r\n\r\n    <!-- Title -->\r\n    <h4 class=\"card-title\"><strong>공지사항</strong></h4>\r\n  </div>\r\n\r\n</div>\r\n\r\n<hr class=\"between-sections\">\r\n\r\n<ol class=\"breadcrumb\">\r\n  <li class=\"breadcrumb-item\">\r\n    <a [routerLink]=\"['/index']\">Home</a>\r\n  </li>\r\n  <li class=\"breadcrumb-item\">고객센터</li>\r\n  <li class=\"breadcrumb-item\">\r\n    <a [routerLink]=\"['/notice']\">공지사항</a>\r\n    <!-- delete : (click)=\"removeToken()\" -->\r\n  </li>\r\n</ol>\r\n\r\n<!--Table-->\r\n<table class=\"table table-bordered\">\r\n\r\n  <!--Table body-->\r\n  <tbody>\r\n    <tr>\r\n      <th class=\"cyan lighten-4\">제목</th>\r\n      <td colspan=\"3\">{{ notice?.n_title }}</td>\r\n    </tr>\r\n    <tr>\r\n      <th class=\"cyan lighten-4\">작성자</th>\r\n      <td colspan=\"3\">{{ notice?.a_id }}</td>\r\n    </tr>\r\n    <tr>\r\n      <th class=\"cyan lighten-4\">작성일</th>\r\n      <td>{{ notice?.n_date | date:'yyyy-MM-dd' }}</td>\r\n      <th class=\"cyan lighten-4\">조회수</th>\r\n      <td>{{ notice?.n_hits }}</td>\r\n    </tr>\r\n    <tr>\r\n      <td colspan=\"4\">\r\n        <pre>{{ notice?.n_content }}</pre>\r\n      </td>\r\n    </tr>\r\n  </tbody>\r\n  <!--Table body-->\r\n\r\n</table>\r\n<!--Table-->\r\n\r\n<button type=\"button\" class=\"btn btn-outline-info waves-effect\" [routerLink]=\"['/notice']\">목록</button>\r\n<!-- delete (click)=\"removeToken()\" -->\r\n"

/***/ }),

/***/ "./src/app/notice/notice-detail/notice-detail.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/notice/notice-detail/notice-detail.component.ts ***!
  \*****************************************************************/
/*! exports provided: NoticeDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoticeDetailComponent", function() { return NoticeDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_services_notice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/notice.service */ "./src/app/shared/services/notice.service.ts");
/* harmony import */ var _shared_services_token_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/token.service */ "./src/app/shared/services/token.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NoticeDetailComponent = /** @class */ (function () {
    function NoticeDetailComponent(noticeService, http, tokenService) {
        this.noticeService = noticeService;
        this.http = http;
        this.tokenService = tokenService;
    }
    NoticeDetailComponent.prototype.ngOnInit = function () {
        this.notice = this.noticeService.getNoticeNoObject();
        if (this.notice == null) {
            var n_no = this.tokenService.getToken("noticeDetailToken");
            var noticeList = this.tokenService.getToken("noticeToken");
            var notice = noticeList.find(function (item) {
                return item.n_no === n_no;
            });
            var n_content = notice.n_content;
            notice.n_content = notice.n_content.replace("\r\n", "<br>");
            this.notice = notice;
        }
    };
    NoticeDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-notice-detail',
            template: __webpack_require__(/*! ./notice-detail.component.html */ "./src/app/notice/notice-detail/notice-detail.component.html"),
            styles: [__webpack_require__(/*! ./notice-detail.component.css */ "./src/app/notice/notice-detail/notice-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_services_notice_service__WEBPACK_IMPORTED_MODULE_2__["NoticeService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _shared_services_token_service__WEBPACK_IMPORTED_MODULE_3__["TokenService"]])
    ], NoticeDetailComponent);
    return NoticeDetailComponent;
}());



/***/ }),

/***/ "./src/app/notice/notice-list/notice-list.component.css":
/*!**************************************************************!*\
  !*** ./src/app/notice/notice-list/notice-list.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/notice/notice-list/notice-list.component.html":
/*!***************************************************************!*\
  !*** ./src/app/notice/notice-list/notice-list.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-notice></app-notice>\r\n"

/***/ }),

/***/ "./src/app/notice/notice-list/notice-list.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/notice/notice-list/notice-list.component.ts ***!
  \*************************************************************/
/*! exports provided: NoticeListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoticeListComponent", function() { return NoticeListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NoticeListComponent = /** @class */ (function () {
    function NoticeListComponent() {
    }
    NoticeListComponent.prototype.ngOnInit = function () {
    };
    NoticeListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-notice-list',
            template: __webpack_require__(/*! ./notice-list.component.html */ "./src/app/notice/notice-list/notice-list.component.html"),
            styles: [__webpack_require__(/*! ./notice-list.component.css */ "./src/app/notice/notice-list/notice-list.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NoticeListComponent);
    return NoticeListComponent;
}());



/***/ }),

/***/ "./src/app/notice/notice.component.css":
/*!*********************************************!*\
  !*** ./src/app/notice/notice.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ol li {\r\n  font-weight: bold;\r\n}\r\n\r\nthead tr th {\r\n  font-weight: bold;\r\n  text-align: center;\r\n}\r\n\r\ntbody tr:hover {\r\n  background-color: #FF9090;\r\n}\r\n\r\ntbody tr a:hover {\r\n  color: white;\r\n}\r\n\r\ntbody tr th {\r\n  text-align: center;\r\n}\r\n\r\nform button {\r\n  font-weight: bold;\r\n  font-size: 0.8em;\r\n}\r\n\r\n#selectDiv {\r\n  padding-top: 0px;\r\n  padding-bottom: 10px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/notice/notice.component.html":
/*!**********************************************!*\
  !*** ./src/app/notice/notice.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<hr class=\"between-sections\">\r\n\r\n<div class=\"card card-cascade wider reverse\">\r\n\r\n  <!-- Card content -->\r\n  <div class=\"card-body card-body-cascade text-center\">\r\n\r\n    <!-- Title -->\r\n    <h4 class=\"card-title\"><strong>공지사항</strong></h4>\r\n  </div>\r\n\r\n</div>\r\n\r\n<hr class=\"between-sections\">\r\n\r\n<ol class=\"breadcrumb\">\r\n  <li class=\"breadcrumb-item\">\r\n    <a [routerLink]=\"['/index']\">Home</a>\r\n  </li>\r\n  <li class=\"breadcrumb-item\">고객센터</li>\r\n  <li class=\"breadcrumb-item\">공지사항</li>\r\n</ol>\r\n\r\n<div id=\"selectDiv\">\r\n  <select (change)=\"getNoticeByCategory($event.target.value)\">\r\n    <option value=\"\" disabled selected>카테고리별 조회</option>\r\n    <option *ngFor=\"let category of categoryList\" [value]=\"category\">\r\n      {{ category }}\r\n    </option>\r\n  </select>\r\n</div>\r\n\r\n<!--Table-->\r\n<table class=\"table\">\r\n  <!--Table head-->\r\n  <thead>\r\n    <tr class=\"cyan lighten-4\">\r\n      <th>번호</th>\r\n      <th>카테고리</th>\r\n      <th>제목</th>\r\n      <th>작성자</th>\r\n      <th>작성일</th>\r\n      <th>조회수</th>\r\n    </tr>\r\n  </thead>\r\n  <!--Table head-->\r\n\r\n  <!--Table body-->\r\n  <tbody class=\"view overlay\">\r\n    <tr *ngFor=\"let notice of noticeList | paginate: { itemsPerPage: 10, currentPage: page }; let i = index\">\r\n      <th scope=\"row\">{{ i+1 }}</th>\r\n      <th>{{ notice.n_category }}</th>\r\n      <th>\r\n        <a [routerLink]=\"['/detail/notice']\" routerLinkActive=\"router-link-active\" (click)=\"setNoticeNo(notice.n_no)\">{{ notice.n_title }}\r\n        </a>\r\n      </th>\r\n      <th>{{ notice.a_id }}</th>\r\n      <th>{{ notice.n_date | date:'yyyy-MM-dd' }}</th>\r\n      <th>{{ notice.n_hits }}</th>\r\n    </tr>\r\n  </tbody>\r\n  <!--Table body-->\r\n\r\n</table>\r\n<!-- Pagination -->\r\n<div class=\"text-center mt-3\">\r\n  <pagination-controls (pageChange)=\"page = $event\"></pagination-controls>\r\n</div>\r\n\r\n<form class=\"form-inline mr-auto\" (ngSubmit)=\"searchTerm()\">\r\n  <input class=\"form-control mr-sm-2 w-50 p-1\" type=\"text\" placeholder=\"검색할 제목을 입력해주세요.\" id=\"searchInput\" [(ngModel)]=\"search\" [ngModelOptions]=\"{standalone: true}\" />\r\n  <button class=\"btn btn-outline-success btn-rounded btn-sm my-0\" type=\"submit\">검색</button>\r\n</form>\r\n\r\n<hr class=\"between-sections\">\r\n"

/***/ }),

/***/ "./src/app/notice/notice.component.ts":
/*!********************************************!*\
  !*** ./src/app/notice/notice.component.ts ***!
  \********************************************/
/*! exports provided: NoticeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoticeComponent", function() { return NoticeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_notice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/services/notice.service */ "./src/app/shared/services/notice.service.ts");
/* harmony import */ var _shared_services_search_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/search.service */ "./src/app/shared/services/search.service.ts");
/* harmony import */ var _shared_services_token_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/token.service */ "./src/app/shared/services/token.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NoticeComponent = /** @class */ (function () {
    function NoticeComponent(noticeService, searchService, tokenService) {
        this.noticeService = noticeService;
        this.searchService = searchService;
        this.tokenService = tokenService;
        this.page = 1;
        this.categoryList = ["전체조회", "공지", "상품", "배송"];
        this.search = '';
    }
    NoticeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.noticeService.getNoticeList()
            .subscribe(function (noticeList) {
            _this.tokenService.saveToken("noticeToken", noticeList);
            _this.noticeList = noticeList;
        });
    };
    NoticeComponent.prototype.getNoticeByCategory = function (n_category) {
        var _this = this;
        if (n_category == "전체조회") {
            this.noticeService.getNoticeList()
                .subscribe(function (noticeList) {
                _this.noticeList = noticeList;
            });
        }
        else {
            this.noticeService.getNoticeCategory(n_category)
                .subscribe(function (noticeList) {
                _this.noticeList = noticeList;
            });
        }
    };
    NoticeComponent.prototype.setNoticeNo = function (n_no) {
        this.noticeService.setNoticeNo(n_no);
        this.setNoticeNoObject(n_no);
        if (this.tokenService.isToken("noticeDetailToken")) {
            this.tokenService.removeToken("noticeDetailToken");
        }
        this.tokenService.saveToken("noticeDetailToken", n_no);
    };
    NoticeComponent.prototype.setNoticeNoObject = function (n_no) {
        var notice = this.noticeList.find(function (item) {
            return item.n_no === n_no;
        });
        this.noticeService.setNoticeNoObject(notice);
        this.check(notice);
    };
    NoticeComponent.prototype.check = function (notice) {
        this.noticeService.checkNotice(notice);
    };
    NoticeComponent.prototype.searchTerm = function () {
        var _this = this;
        if (this.search == '' || this.search == 'search') {
            this.noticeService.getNoticeList()
                .subscribe(function (noticeList) {
                _this.noticeList = noticeList;
            });
        }
        else {
            this.searchService.noticeSearch(this.search)
                .subscribe(function (noticeList) {
                _this.noticeList = noticeList;
            });
        }
    };
    NoticeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-notice',
            template: __webpack_require__(/*! ./notice.component.html */ "./src/app/notice/notice.component.html"),
            styles: [__webpack_require__(/*! ./notice.component.css */ "./src/app/notice/notice.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_services_notice_service__WEBPACK_IMPORTED_MODULE_1__["NoticeService"],
            _shared_services_search_service__WEBPACK_IMPORTED_MODULE_2__["SearchService"],
            _shared_services_token_service__WEBPACK_IMPORTED_MODULE_3__["TokenService"]])
    ], NoticeComponent);
    return NoticeComponent;
}());



/***/ }),

/***/ "./src/app/notice/notice.module.ts":
/*!*****************************************!*\
  !*** ./src/app/notice/notice.module.ts ***!
  \*****************************************/
/*! exports provided: NoticeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoticeModule", function() { return NoticeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _notice_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notice.routing */ "./src/app/notice/notice.routing.ts");
/* harmony import */ var _index_index_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../index/index.module */ "./src/app/index/index.module.ts");
/* harmony import */ var _product_product_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../product/product.module */ "./src/app/product/product.module.ts");
/* harmony import */ var _user_user_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../user/user.module */ "./src/app/user/user.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _notice_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./notice.component */ "./src/app/notice/notice.component.ts");
/* harmony import */ var _notice_list_notice_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./notice-list/notice-list.component */ "./src/app/notice/notice-list/notice-list.component.ts");
/* harmony import */ var _faq_faq_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./faq/faq.component */ "./src/app/notice/faq/faq.component.ts");
/* harmony import */ var _qna_qna_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./qna/qna.component */ "./src/app/notice/qna/qna.component.ts");
/* harmony import */ var _notice_detail_notice_detail_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./notice-detail/notice-detail.component */ "./src/app/notice/notice-detail/notice-detail.component.ts");
/* harmony import */ var _faq_detail_faq_detail_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./faq-detail/faq-detail.component */ "./src/app/notice/faq-detail/faq-detail.component.ts");
/* harmony import */ var _qna_detail_qna_detail_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./qna-detail/qna-detail.component */ "./src/app/notice/qna-detail/qna-detail.component.ts");
/* harmony import */ var _qna_write_qna_write_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./qna-write/qna-write.component */ "./src/app/notice/qna-write/qna-write.component.ts");
/* harmony import */ var _qna_update_qna_update_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./qna-update/qna-update.component */ "./src/app/notice/qna-update/qna-update.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var NoticeModule = /** @class */ (function () {
    function NoticeModule() {
    }
    NoticeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_notice_component__WEBPACK_IMPORTED_MODULE_8__["NoticeComponent"], _notice_list_notice_list_component__WEBPACK_IMPORTED_MODULE_9__["NoticeListComponent"], _faq_faq_component__WEBPACK_IMPORTED_MODULE_10__["FaqComponent"], _qna_qna_component__WEBPACK_IMPORTED_MODULE_11__["QnaComponent"],
                _notice_detail_notice_detail_component__WEBPACK_IMPORTED_MODULE_12__["NoticeDetailComponent"], _faq_detail_faq_detail_component__WEBPACK_IMPORTED_MODULE_13__["FaqDetailComponent"], _qna_detail_qna_detail_component__WEBPACK_IMPORTED_MODULE_14__["QnaDetailComponent"], _qna_write_qna_write_component__WEBPACK_IMPORTED_MODULE_15__["QnaWriteComponent"], _qna_update_qna_update_component__WEBPACK_IMPORTED_MODULE_16__["QnaUpdateComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_notice_routing__WEBPACK_IMPORTED_MODULE_3__["NoticeRoutes"]),
                _index_index_module__WEBPACK_IMPORTED_MODULE_4__["IndexModule"],
                _product_product_module__WEBPACK_IMPORTED_MODULE_5__["ProductModule"],
                _user_user_module__WEBPACK_IMPORTED_MODULE_6__["UserModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"]]
        })
    ], NoticeModule);
    return NoticeModule;
}());



/***/ }),

/***/ "./src/app/notice/notice.routing.ts":
/*!******************************************!*\
  !*** ./src/app/notice/notice.routing.ts ***!
  \******************************************/
/*! exports provided: NoticeRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoticeRoutes", function() { return NoticeRoutes; });
/* harmony import */ var _shared_services_auth_gaurd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/services/auth_gaurd */ "./src/app/shared/services/auth_gaurd.ts");
/* harmony import */ var _notice_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notice.component */ "./src/app/notice/notice.component.ts");
/* harmony import */ var _faq_faq_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./faq/faq.component */ "./src/app/notice/faq/faq.component.ts");
/* harmony import */ var _qna_qna_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./qna/qna.component */ "./src/app/notice/qna/qna.component.ts");
/* harmony import */ var _notice_detail_notice_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./notice-detail/notice-detail.component */ "./src/app/notice/notice-detail/notice-detail.component.ts");
/* harmony import */ var _faq_detail_faq_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./faq-detail/faq-detail.component */ "./src/app/notice/faq-detail/faq-detail.component.ts");
/* harmony import */ var _qna_detail_qna_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./qna-detail/qna-detail.component */ "./src/app/notice/qna-detail/qna-detail.component.ts");
/* harmony import */ var _qna_write_qna_write_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./qna-write/qna-write.component */ "./src/app/notice/qna-write/qna-write.component.ts");
/* harmony import */ var _qna_update_qna_update_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./qna-update/qna-update.component */ "./src/app/notice/qna-update/qna-update.component.ts");









var NoticeRoutes = [
    {
        path: "notice",
        children: [
            {
                path: "",
                component: _notice_component__WEBPACK_IMPORTED_MODULE_1__["NoticeComponent"]
            },
            {
                path: "faq",
                component: _faq_faq_component__WEBPACK_IMPORTED_MODULE_2__["FaqComponent"]
            },
            {
                path: "qna",
                component: _qna_qna_component__WEBPACK_IMPORTED_MODULE_3__["QnaComponent"],
                canActivate: [_shared_services_auth_gaurd__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]]
            },
            {
                path: "qna/write",
                component: _qna_write_qna_write_component__WEBPACK_IMPORTED_MODULE_7__["QnaWriteComponent"],
                canActivate: [_shared_services_auth_gaurd__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]]
            },
            {
                path: "qna/update",
                component: _qna_update_qna_update_component__WEBPACK_IMPORTED_MODULE_8__["QnaUpdateComponent"],
                canActivate: [_shared_services_auth_gaurd__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]]
            }
        ]
    },
    {
        path: "detail",
        children: [
            {
                path: "notice",
                component: _notice_detail_notice_detail_component__WEBPACK_IMPORTED_MODULE_4__["NoticeDetailComponent"]
            },
            {
                path: "faq",
                component: _faq_detail_faq_detail_component__WEBPACK_IMPORTED_MODULE_5__["FaqDetailComponent"]
            },
            {
                path: "qna",
                component: _qna_detail_qna_detail_component__WEBPACK_IMPORTED_MODULE_6__["QnaDetailComponent"],
                canActivate: [_shared_services_auth_gaurd__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]]
            }
        ]
    }
];


/***/ }),

/***/ "./src/app/notice/qna-detail/qna-detail.component.css":
/*!************************************************************!*\
  !*** ./src/app/notice/qna-detail/qna-detail.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#qna_update_button {\r\n  float: right;\r\n}\r\n\r\n#qna_back_button {\r\n  float: right;\r\n}\r\n\r\nol li {\r\n  font-weight: bold;\r\n}\r\n\r\ntbody th {\r\n  background-color: lightgray;\r\n  text-align: center;\r\n  font-weight: bold;\r\n  font-size: 13pt;\r\n  padding: 10px;\r\n}\r\n\r\ntbody tr td p {\r\n  padding: 20px;\r\n}\r\n\r\nbutton {\r\n  font-weight: bold;\r\n  font-size: 0.8em;\r\n}\r\n"

/***/ }),

/***/ "./src/app/notice/qna-detail/qna-detail.component.html":
/*!*************************************************************!*\
  !*** ./src/app/notice/qna-detail/qna-detail.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<hr class=\"between-sections\">\r\n\r\n<div class=\"card card-cascade wider reverse\">\r\n\r\n  <!-- Card content -->\r\n  <div class=\"card-body card-body-cascade text-center\">\r\n\r\n    <!-- Title -->\r\n    <h4 class=\"card-title\"><strong>1:1 질문하기</strong></h4>\r\n  </div>\r\n\r\n</div>\r\n\r\n<hr class=\"between-sections\">\r\n\r\n<ol class=\"breadcrumb\">\r\n  <li class=\"breadcrumb-item\">\r\n    <a [routerLink]=\"['/index']\">Home</a>\r\n  </li>\r\n  <li class=\"breadcrumb-item\">고객센터</li>\r\n  <li class=\"breadcrumb-item\">\r\n    <a [routerLink]=\"['/notice/qna']\">1:1 질문하기</a>\r\n  </li>\r\n</ol>\r\n\r\n<!--Table-->\r\n<table class=\"table table-bordered\">\r\n\r\n  <!--Table body-->\r\n  <tbody>\r\n    <tr>\r\n      <th class=\"cyan lighten-4\">제목</th>\r\n      <td colspan=\"3\">{{ qna?.q_title }}</td>\r\n    </tr>\r\n    <tr>\r\n      <th class=\"cyan lighten-4\">작성자</th>\r\n      <td colspan=\"3\">{{ qna?.u_id }}</td>\r\n    </tr>\r\n    <tr>\r\n      <th class=\"cyan lighten-4\">작성일</th>\r\n      <td>{{ qna?.q_date | date:'yyyy-MM-dd' }}</td>\r\n      <th class=\"cyan lighten-4\">답변여부</th>\r\n      <td [(ngModel)]=\"reply\" ngDefaultControl>{{ reply }}</td>\r\n    </tr>\r\n    <tr>\r\n      <td colspan=\"4\">\r\n        <pre>{{ qna?.q_content }}</pre>\r\n      </td>\r\n    </tr>\r\n    <tr *ngIf=\"reply !== 'N'\">\r\n      <th class=\"cyan lighten-4 align-middle\">답변 내용</th>\r\n      <td colspan=\"3\">\r\n        <pre>\r\n          {{ qna?.q_reply }}\r\n        </pre>\r\n      </td>\r\n    </tr>\r\n  </tbody>\r\n  <!--Table body-->\r\n\r\n</table>\r\n<!--Table-->\r\n\r\n<button type=\"button\" class=\"btn btn-outline-danger waves-effect\" (click)=\"deleteQna(qna?.q_no)\">\r\n  삭제\r\n</button>\r\n\r\n<button type=\"button\" class=\"btn btn-outline-info waves-effect\" id=\"qna_back_button\" [routerLink]=\"['/notice/qna']\">목록\r\n</button>\r\n\r\n<button type=\"button\" class=\"btn btn-outline-info waves-effect\" id=\"qna_update_button\" [routerLink]=\"['/notice/qna/update']\" (click)=\"setQnaObject()\">수정</button>\r\n"

/***/ }),

/***/ "./src/app/notice/qna-detail/qna-detail.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/notice/qna-detail/qna-detail.component.ts ***!
  \***********************************************************/
/*! exports provided: QnaDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QnaDetailComponent", function() { return QnaDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_qna_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/qna.service */ "./src/app/shared/services/qna.service.ts");
/* harmony import */ var _shared_services_token_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/token.service */ "./src/app/shared/services/token.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var QnaDetailComponent = /** @class */ (function () {
    function QnaDetailComponent(qnaService, http, router, tokenService) {
        this.qnaService = qnaService;
        this.http = http;
        this.router = router;
        this.tokenService = tokenService;
        this.reply = 'n';
    }
    QnaDetailComponent.prototype.ngOnInit = function () {
        this.qna = this.qnaService.getQnaObject();
        if (this.qna == null) {
            var q_no = this.tokenService.getToken("qnaDetailToken");
            var qnaList = this.tokenService.getToken("qnaToken");
            var qna = qnaList.find(function (item) {
                return item.q_no === q_no;
            });
            var q_content = qna.q_content;
            qna.q_content = qna.q_content.replace("\r\n", "<br>");
            this.qna = qna;
        }
        if (this.qna.q_reply == this.reply) {
            this.reply = 'N';
        }
        else {
            this.reply = "답변 완료";
        }
    };
    QnaDetailComponent.prototype.setQnaObject = function () {
        this.qnaService.setQnaObject(this.qna);
    };
    QnaDetailComponent.prototype.deleteQna = function (q_no) {
        var _this = this;
        var confirm = window.confirm('질문을 삭제하시겠습니까?');
        if (confirm) {
            return this.qnaService.deleteQna(q_no)
                .subscribe(function () {
                alert("고객님의 질문이 삭제되었습니다.");
                // this.tokenService.removeToken("qnaToken");
                _this.router.navigate(["notice/qna"]);
            });
        }
        else {
            return;
        }
    };
    QnaDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-qna-detail',
            template: __webpack_require__(/*! ./qna-detail.component.html */ "./src/app/notice/qna-detail/qna-detail.component.html"),
            styles: [__webpack_require__(/*! ./qna-detail.component.css */ "./src/app/notice/qna-detail/qna-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_services_qna_service__WEBPACK_IMPORTED_MODULE_3__["QnaService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _shared_services_token_service__WEBPACK_IMPORTED_MODULE_4__["TokenService"]])
    ], QnaDetailComponent);
    return QnaDetailComponent;
}());



/***/ }),

/***/ "./src/app/notice/qna-update/qna-update.component.css":
/*!************************************************************!*\
  !*** ./src/app/notice/qna-update/qna-update.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "tbody tr th {\r\n  text-align: center;\r\n  vertical-align: middle;\r\n  font-size: 17px;\r\n  font-weight: bold;\r\n  background-color: lightgray;\r\n}\r\n\r\ndiv button {\r\n  font-weight: bold;\r\n  font-size: 0.8em;\r\n}\r\n"

/***/ }),

/***/ "./src/app/notice/qna-update/qna-update.component.html":
/*!*************************************************************!*\
  !*** ./src/app/notice/qna-update/qna-update.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<hr class=\"between-sections\">\r\n\r\n<div class=\"card card-cascade wider reverse\">\r\n\r\n  <!-- Card content -->\r\n  <div class=\"card-body card-body-cascade text-center\">\r\n\r\n    <!-- Title -->\r\n    <h4 class=\"card-title\"><strong>1:1 질문하기</strong></h4>\r\n  </div>\r\n\r\n</div>\r\n\r\n<hr class=\"between-sections\">\r\n\r\n<!-- Default form contact -->\r\n<form name=\"updateForm\" #updateQnaForm=\"ngForm\" (ngSubmit)=\"updateQna(updateQnaForm)\">\r\n  <!--Table-->\r\n  <table class=\"table table-bordered\">\r\n    <!--Table body-->\r\n    <tbody>\r\n      <tr [hidden]=true>\r\n        <th>질문 번호</th>\r\n        <td>\r\n          <input type=\"text\" id=\"exampleForm2\" class=\"form-control\" required [(ngModel)]=\"qna.q_no\" [ngModelOptions]=\"{standalone: true}\" />\r\n        </td>\r\n      </tr>\r\n      <tr>\r\n        <th class=\"cyan lighten-4\">제목</th>\r\n        <td>\r\n          <input type=\"text\" id=\"exampleForm2\" class=\"form-control\" placeholder=\"제목을 입력해주세요.\"\r\n            required [(ngModel)]=\"qna.q_title\" [ngModelOptions]=\"{standalone: true}\" />\r\n        </td>\r\n      </tr>\r\n      <tr>\r\n        <th class=\"cyan lighten-4\">작성자 ID</th>\r\n        <td>\r\n          <input type=\"text\" id=\"exampleForm2\" class=\"form-control\" required [(ngModel)]=\"qna.u_id\" [ngModelOptions]=\"{standalone: true}\" [disabled]=true/>\r\n        </td>\r\n      </tr>\r\n      <tr>\r\n        <th class=\"cyan lighten-4\">질문 내용</th>\r\n        <td colspan=\"2\">\r\n          <textarea name=\"qnaContent\" rows=\"8\" cols=\"150\" placeholder=\"내용을 입력해주세요.\" class=\"form-control\" required [(ngModel)]=\"qna.q_content\" [ngModelOptions]=\"{standalone: true}\"></textarea>\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n\r\n  <div class=\"text-center mt-4\">\r\n    <button type=\"submit\" class=\"btn btn-outline-danger waves-effect\">수정</button>\r\n    <button type=\"button\" class=\"btn btn-outline-info waves-effect\" [routerLink]=\"['/notice/qna']\">취소</button>\r\n  </div>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/notice/qna-update/qna-update.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/notice/qna-update/qna-update.component.ts ***!
  \***********************************************************/
/*! exports provided: QnaUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QnaUpdateComponent", function() { return QnaUpdateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_qna_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/qna.service */ "./src/app/shared/services/qna.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { TokenService } from '../../shared/services/token.service';
var QnaUpdateComponent = /** @class */ (function () {
    function QnaUpdateComponent(qnaService, router
    // private tokenService: TokenService
    ) {
        this.qnaService = qnaService;
        this.router = router;
    }
    QnaUpdateComponent.prototype.ngOnInit = function () {
        this.qna = this.qnaService.getQnaObject();
        // if(this.qna == null) {
        //   var q_no = this.tokenService.getToken("qnaDetailToken");
        //   var qnaList = this.tokenService.getToken("qnaToken");
        //   var qna = qnaList.find(function(item) {
        //     return item.q_no == q_no;
        //   });
        //   this.qna = qna;
        // }
    };
    QnaUpdateComponent.prototype.updateQna = function (form) {
        var _this = this;
        this.qnaService.updateQna(this.qna)
            .subscribe(function () {
            alert("질문이 수정되었습니다.");
            // this.tokenService.removeToken("qnaToken");
            _this.router.navigate(["/notice/qna"]);
        });
    };
    QnaUpdateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-qna-update',
            template: __webpack_require__(/*! ./qna-update.component.html */ "./src/app/notice/qna-update/qna-update.component.html"),
            styles: [__webpack_require__(/*! ./qna-update.component.css */ "./src/app/notice/qna-update/qna-update.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_services_qna_service__WEBPACK_IMPORTED_MODULE_2__["QnaService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
            // private tokenService: TokenService
        ])
    ], QnaUpdateComponent);
    return QnaUpdateComponent;
}());



/***/ }),

/***/ "./src/app/notice/qna-write/qna-write.component.css":
/*!**********************************************************!*\
  !*** ./src/app/notice/qna-write/qna-write.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "tbody tr th {\r\n  text-align: center;\r\n  vertical-align: middle;\r\n  font-size: 17px;\r\n  font-weight: bold;\r\n  background-color: lightgray;\r\n}\r\n"

/***/ }),

/***/ "./src/app/notice/qna-write/qna-write.component.html":
/*!***********************************************************!*\
  !*** ./src/app/notice/qna-write/qna-write.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<hr class=\"between-sections\">\r\n\r\n<div class=\"card card-cascade wider reverse\">\r\n\r\n  <!-- Card content -->\r\n  <div class=\"card-body card-body-cascade text-center\">\r\n\r\n    <!-- Title -->\r\n    <h4 class=\"card-title\"><strong>1:1 질문하기</strong></h4>\r\n  </div>\r\n\r\n</div>\r\n\r\n<hr class=\"between-sections\">\r\n\r\n<!-- Default form contact -->\r\n<form (ngSubmit)=\"insertQna()\">\r\n  <!--Table-->\r\n  <table class=\"table table-bordered\">\r\n    <!--Table body-->\r\n    <tbody>\r\n      <tr>\r\n        <th class=\"cyan lighten-4\">제목</th>\r\n        <td>\r\n          <input type=\"text\" id=\"exampleForm2\" class=\"form-control\" placeholder=\"제목을 입력해주세요.\" required [(ngModel)]=\"qna.q_title\" [ngModelOptions]=\"{standalone: true}\" />\r\n        </td>\r\n      </tr>\r\n      <tr [hidden]=true>\r\n        <th class=\"cyan lighten-4\">작성자</th>\r\n        <td>\r\n          <input type=\"text\" id=\"exampleForm2\" class=\"form-control\" required [(ngModel)]=\"qna.u_id\" [ngModelOptions]=\"{standalone: true}\" />\r\n        </td>\r\n      </tr>\r\n      <tr>\r\n        <th colspan=\"1\">질문 내용</th>\r\n        <td colspan=\"2\">\r\n          <textarea name=\"qnaContent\" rows=\"8\" cols=\"150\" placeholder=\"내용을 입력해주세요.\" class=\"form-control\" required [(ngModel)]=\"qna.q_content\" [ngModelOptions]=\"{standalone: true}\"></textarea>\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n\r\n  <div class=\"text-center mt-4\" [hidden]=\"submit\">\r\n    <button type=\"submit\" class=\"btn btn-outline-danger waves-effect\">등록</button>\r\n    <button type=\"button\" class=\"btn btn-outline-info waves-effect\" [routerLink]=\"['/notice/qna']\">취소</button>\r\n  </div>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/notice/qna-write/qna-write.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/notice/qna-write/qna-write.component.ts ***!
  \*********************************************************/
/*! exports provided: QnaWriteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QnaWriteComponent", function() { return QnaWriteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_qna_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/qna.service */ "./src/app/shared/services/qna.service.ts");
/* harmony import */ var _shared_models_qna__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/models/qna */ "./src/app/shared/models/qna.ts");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import { TokenService } from '../../shared/services/token.service';
var QnaWriteComponent = /** @class */ (function () {
    function QnaWriteComponent(qnaService, router, authService
    // private tokenService: TokenService
    ) {
        this.qnaService = qnaService;
        this.router = router;
        this.authService = authService;
        this.submit = false;
        this.qna = new _shared_models_qna__WEBPACK_IMPORTED_MODULE_3__["Qna"];
    }
    QnaWriteComponent.prototype.ngOnInit = function () {
        this.qna.u_id = this.authService.getLoggedInUser().uid;
    };
    QnaWriteComponent.prototype.insertQna = function () {
        var _this = this;
        this.qnaService.insertQna(this.qna)
            .subscribe(function () {
            alert("질문이 등록되었습니다.");
            // this.tokenService.removeToken("qnaToken");
            _this.router.navigate(["/notice/qna"]);
        });
    };
    QnaWriteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-qna-write',
            template: __webpack_require__(/*! ./qna-write.component.html */ "./src/app/notice/qna-write/qna-write.component.html"),
            styles: [__webpack_require__(/*! ./qna-write.component.css */ "./src/app/notice/qna-write/qna-write.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_services_qna_service__WEBPACK_IMPORTED_MODULE_2__["QnaService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
            // private tokenService: TokenService
        ])
    ], QnaWriteComponent);
    return QnaWriteComponent;
}());



/***/ })

}]);
//# sourceMappingURL=notice-notice-module.js.map