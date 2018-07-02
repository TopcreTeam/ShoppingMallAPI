(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["notice-notice-module~user-user-module"],{

/***/ "./node_modules/ng2-daum-address/bundle/da.component.js":
/*!**************************************************************!*\
  !*** ./node_modules/ng2-daum-address/bundle/da.component.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var url = "https://ssl.daumcdn.net/dmaps/map_js_init/postcode.v2.js?autoload=false";
var DaumAddressComponent = (function () {
    function DaumAddressComponent(el) {
        this.result = new core_1.EventEmitter();
        this.el = el;
    }
    DaumAddressComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.debug = this.options && this.options.debug ? this.options.debug : false;
        this.styleClass = this.options && this.options.class ? Array.isArray(this.options.class) ? this.options.class.join(" ") : this.options.class : '';
        this.loadDaumApi().then(function () {
            _this.print('Daum api has been loaded.');
        });
    };
    DaumAddressComponent.prototype.print = function (msg) {
        if (this.debug) {
            console.log("[" + Math.floor(new Date().getTime() / 1000) + "]", msg);
        }
    };
    DaumAddressComponent.prototype.daumApiCallback = function (data) {
        this.print(data);
        var fullAddr = '', extraAddr = '', engAddr = '', zipCode = '';
        if (data.userSelectedType === 'R') {
            fullAddr = data.roadAddress;
            zipCode = data.zonecode;
            engAddr = data.roadAddressEnglish;
            if (data.bname !== '') {
                extraAddr += data.bname;
            }
            if (data.buildingName !== '') {
                extraAddr += (extraAddr !== '' ? ', ' + data.buildingName : data.buildingName);
            }
            fullAddr += (extraAddr !== '' ? ' (' + extraAddr + ')' : '');
        }
        else {
            fullAddr = data.jibunAddress;
            zipCode = data.postcode;
            engAddr = data.jibunAddressEnglish;
        }
        this.result.emit({
            zip: zipCode,
            addr: fullAddr,
            addrEng: engAddr
        });
    };
    DaumAddressComponent.prototype.openDaumApi = function () {
        var self = this;
        if (!this.options || (!this.options.type || this.options.type === 'popup')) {
            daum.postcode.load(function () {
                new daum.Postcode({
                    oncomplete: function (data) { return self.daumApiCallback(data); }
                }).open();
            });
        }
        else {
            if (!this.options.target) {
                this.print('ERROR: Parent Component does not have a target element.');
                return false;
            }
            var $target_1 = this.el.nativeElement.parentElement.querySelector("#" + this.options.target);
            this.print($target_1);
            switch (this.options.type) {
                case 'layer':
                    var width = this.options.width || 300;
                    var height = this.options.height || 460;
                    var border = this.options.border || 5;
                    daum.postcode.load(function () {
                        new daum.Postcode({
                            oncomplete: function (data) { return self.daumApiCallback(data); },
                            onclose: function () { return $target_1.style.display = 'none'; },
                            width: '100%',
                            height: '100%'
                        }).embed($target_1);
                    });
                    $target_1.style.display = 'block';
                    $target_1.style.width = width + "px";
                    $target_1.style.height = height + "px";
                    $target_1.style.border = border + "px solid";
                    $target_1.style.left = (((window.innerWidth || document.documentElement.clientWidth) - width) / 2 - border) + "px";
                    $target_1.style.top = (((window.innerHeight || document.documentElement.clientHeight) - height) / 2 - border) + "px";
                    try {
                        $target_1.querySelector('#btnCloseLayer').onclick = function () {
                            $target_1.style.display = 'none';
                        };
                    }
                    catch (e) {
                        this.print("ERROR: " + e.message);
                    }
                    break;
                case 'inline':
                    var currentScroll_1 = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
                    daum.postcode.load(function () {
                        new daum.Postcode({
                            oncomplete: function (data) {
                                self.daumApiCallback(data);
                                document.body.scrollTop = currentScroll_1;
                            },
                            onclose: function () { return $target_1.style.display = 'none'; },
                            onresize: function (size) { return $target_1.style.height = size.height + 'px'; },
                            width: '100%',
                            height: '100%'
                        }).embed($target_1);
                    });
                    $target_1.style.display = 'block';
                    try {
                        $target_1.querySelector('#btnFoldWrap').onclick = function () {
                            $target_1.style.display = 'none';
                        };
                    }
                    catch (e) {
                        this.print("ERROR: " + e.message);
                    }
                    break;
            }
        }
    };
    DaumAddressComponent.prototype.loadDaumApi = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var script = document.createElement('script');
            script.src = url;
            script.type = 'text/javascript';
            script.async = true;
            _this.el.nativeElement.appendChild(script);
            resolve(true);
        });
    };
    return DaumAddressComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], DaumAddressComponent.prototype, "result", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], DaumAddressComponent.prototype, "options", void 0);
DaumAddressComponent = __decorate([
    core_1.Component({
        selector: 'btn-daum-address',
        template: "<button\n              type=\"button\"\n              class=\"{{styleClass}}\"\n              (click)=\"openDaumApi()\"\n              >\uC6B0\uD3B8\uBC88\uD638 \uCC3E\uAE30</button>",
        changeDetection: core_1.ChangeDetectionStrategy.OnPush
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], DaumAddressComponent);
exports.DaumAddressComponent = DaumAddressComponent;


/***/ }),

/***/ "./node_modules/ng2-daum-address/bundle/da.module.js":
/*!***********************************************************!*\
  !*** ./node_modules/ng2-daum-address/bundle/da.module.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var da_component_1 = __webpack_require__(/*! ./da.component */ "./node_modules/ng2-daum-address/bundle/da.component.js");
var NgDaumAddressModule = (function () {
    function NgDaumAddressModule() {
    }
    return NgDaumAddressModule;
}());
NgDaumAddressModule = __decorate([
    core_1.NgModule({
        exports: [da_component_1.DaumAddressComponent],
        declarations: [da_component_1.DaumAddressComponent],
    })
], NgDaumAddressModule);
exports.NgDaumAddressModule = NgDaumAddressModule;


/***/ }),

/***/ "./node_modules/ng2-daum-address/index.js":
/*!************************************************!*\
  !*** ./node_modules/ng2-daum-address/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.NgDaumAddressModule = __webpack_require__(/*! ./bundle/da.module */ "./node_modules/ng2-daum-address/bundle/da.module.js").NgDaumAddressModule;

/***/ }),

/***/ "./src/app/notice/qna/qna.component.css":
/*!**********************************************!*\
  !*** ./src/app/notice/qna/qna.component.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#qna_button {\r\n  float: right;\r\n}\r\n\r\n#qna_insert_button {\r\n  float: right;\r\n}\r\n\r\n#qns_cancle_button {\r\n  float: right;\r\n}\r\n\r\nol li {\r\n  font-weight: bold;\r\n}\r\n\r\nthead tr th {\r\n  font-weight: bold;\r\n  text-align: center;\r\n}\r\n\r\ntbody tr:hover {\r\n  background-color: #FF9090;\r\n}\r\n\r\ntbody tr a:hover {\r\n  color: white;\r\n}\r\n\r\ntbody tr th {\r\n  text-align: center;\r\n}\r\n\r\nbutton {\r\n  font-weight: bold;\r\n  font-size: 0.8em;\r\n}\r\n\r\nform button {\r\n  font-weight: bold;\r\n  font-size: 0.8em;\r\n}\r\n"

/***/ }),

/***/ "./src/app/notice/qna/qna.component.html":
/*!***********************************************!*\
  !*** ./src/app/notice/qna/qna.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<hr class=\"between-sections\">\r\n\r\n<div class=\"card card-cascade wider reverse\">\r\n\r\n  <!-- Card content -->\r\n  <div class=\"card-body card-body-cascade text-center\">\r\n\r\n    <!-- Title -->\r\n    <h4 class=\"card-title\"><strong>1:1 질문하기</strong></h4>\r\n  </div>\r\n\r\n</div>\r\n\r\n<hr class=\"between-sections\">\r\n\r\n<ol class=\"breadcrumb\">\r\n  <li class=\"breadcrumb-item\">\r\n    <a [routerLink]=\"['/index']\">Home</a>\r\n  </li>\r\n  <li class=\"breadcrumb-item\">고객센터</li>\r\n  <li class=\"breadcrumb-item\">1:1 질문하기</li>\r\n</ol>\r\n\r\n<!--Table-->\r\n<table class=\"table\">\r\n  <!--Table head-->\r\n  <thead class=\"cyan lighten-4\">\r\n    <tr>\r\n      <th>번호</th>\r\n      <th>제목</th>\r\n      <th>작성일</th>\r\n      <th>답변여부</th>\r\n    </tr>\r\n  </thead>\r\n  <!--Table head-->\r\n\r\n  <!--Table body-->\r\n  <tbody>\r\n    <tr *ngFor=\"let qna of qnaList | paginate: { itemsPerPage: 10, currentPage: page }; let i= index\">\r\n      <th >{{ i+1 }}</th>\r\n      <th>\r\n        <a [routerLink]=\"['/detail/qna']\" routerLinkActive=\"router-link-active\" (click)=\"setQnaNo(qna.q_no)\">\r\n          {{ qna.q_title }}</a>\r\n      </th>\r\n      <th>{{ qna.q_date | date:'yyyy-MM-dd' }}</th>\r\n      <th *ngIf=\"qna.q_reply == reply\">{{ reply | uppercase }}</th>\r\n      <th *ngIf=\"qna.q_reply !== reply\">답변완료</th>\r\n    </tr>\r\n  </tbody>\r\n  <!--Table body-->\r\n</table>\r\n\r\n<button type=\"button\" class=\"btn btn-outline-info waves-effect\" id=\"qna_button\"\r\n  [routerLink]=\"['/notice/qna/write']\">글쓰기\r\n</button>\r\n\r\n<!-- Pagination -->\r\n<div class=\"text-center mt-3\">\r\n  <pagination-controls (pageChange)=\"page = $event\"></pagination-controls>\r\n</div>\r\n\r\n<form class=\"form-inline mr-auto\" (ngSubmit)=\"searchTerm()\">\r\n    <input class=\"form-control mr-sm-2 w-50 p-1\" type=\"text\" placeholder=\"검색할 제목을 입력해주세요\" aria-label=\"Search\"\r\n      [(ngModel)]=\"search\" [ngModelOptions]=\"{standalone: true}\"/>\r\n    <button class=\"btn btn-outline-success btn-rounded btn-sm my-0\" type=\"submit\">검색</button>\r\n</form>\r\n\r\n<hr class=\"between-sections\">\r\n"

/***/ }),

/***/ "./src/app/notice/qna/qna.component.ts":
/*!*********************************************!*\
  !*** ./src/app/notice/qna/qna.component.ts ***!
  \*********************************************/
/*! exports provided: QnaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QnaComponent", function() { return QnaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_qna_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/qna.service */ "./src/app/shared/services/qna.service.ts");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var _shared_services_search_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/search.service */ "./src/app/shared/services/search.service.ts");
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





var QnaComponent = /** @class */ (function () {
    function QnaComponent(qnaService, authService, searchService, tokenService) {
        this.qnaService = qnaService;
        this.authService = authService;
        this.searchService = searchService;
        this.tokenService = tokenService;
        this.page = 1;
        this.reply = 'n';
        this.number = 1;
    }
    QnaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.u_id = this.authService.getLoggedInUser().uid;
        this.qnaService.getQnaList(this.u_id)
            .subscribe(function (qnas) {
            _this.tokenService.saveToken("qnaToken", qnas);
            _this.qnaList = qnas;
        });
    };
    QnaComponent.prototype.setQnaNo = function (q_no) {
        this.qnaService.setQnaNo(q_no);
        this.setQnaNoObject(q_no);
        if (this.tokenService.isToken("qnaDetailToken")) {
            this.tokenService.removeToken("qnaDetailToken");
        }
        this.tokenService.saveToken("qnaDetailToken", q_no);
    };
    QnaComponent.prototype.setQnaNoObject = function (q_no) {
        var qna = this.qnaList.find(function (item) {
            return item.q_no == q_no;
        });
        this.qnaService.setQnaObject(qna);
    };
    QnaComponent.prototype.searchTerm = function () {
        var _this = this;
        if (this.search == '' || this.search == 'search') {
            this.qnaService.getQnaList(this.u_id)
                .subscribe(function (qnas) {
                _this.qnaList = qnas;
            });
        }
        else {
            this.searchService.qnaSearch(this.search)
                .subscribe(function (qnas) {
                _this.qnaList = qnas;
            });
        }
    };
    QnaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-qna',
            template: __webpack_require__(/*! ./qna.component.html */ "./src/app/notice/qna/qna.component.html"),
            styles: [__webpack_require__(/*! ./qna.component.css */ "./src/app/notice/qna/qna.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_services_qna_service__WEBPACK_IMPORTED_MODULE_1__["QnaService"],
            _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _shared_services_search_service__WEBPACK_IMPORTED_MODULE_3__["SearchService"],
            _shared_services_token_service__WEBPACK_IMPORTED_MODULE_4__["TokenService"]])
    ], QnaComponent);
    return QnaComponent;
}());



/***/ }),

/***/ "./src/app/shared/models/order.ts":
/*!****************************************!*\
  !*** ./src/app/shared/models/order.ts ***!
  \****************************************/
/*! exports provided: Order */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Order", function() { return Order; });
var Order = /** @class */ (function () {
    function Order() {
    }
    return Order;
}());



/***/ }),

/***/ "./src/app/shared/models/orderDetail.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/models/orderDetail.ts ***!
  \**********************************************/
/*! exports provided: OrderDetail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDetail", function() { return OrderDetail; });
var OrderDetail = /** @class */ (function () {
    function OrderDetail() {
    }
    return OrderDetail;
}());



/***/ }),

/***/ "./src/app/user/user-account/user-account.component.html":
/*!***************************************************************!*\
  !*** ./src/app/user/user-account/user-account.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h6 style=\"text-align:right; font-weight:bold; color:#232BDB\">마이페이지 > 회원정보수정</h6>\r\n<br />\r\n\r\n<form #updatePerson=\"ngForm\" (ngSubmit)=\"updateProfile(updatePerson)\" name=\"profileForm\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-8 mb-3\">\r\n      <label for=\"userName\" class=\"font-weight-bold\" style=\"font-size:1.2em;\">회원이름</label>\r\n      <input type=\"text\" class=\"form-control is-valid font-weight-bold\" id=\"userName\" [(ngModel)]=\"loggedUser.uname\" name=\"userName\" #userName=\"ngModel\" [disabled]=\"true\">\r\n      <!-- 삭제한속성 : (ngModelChange)=\"enbUpdBut = !enbUpdBut\" / [(ngClass)] : 초록색테두리 / required-->\r\n      <div class=\"invalid-feedback\">\r\n        username is Mandatory.\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-8 mb-3\">\r\n      <label for=\"userId\" class=\"font-weight-bold\" style=\"font-size:1.2em;\">아이디</label>\r\n      <input type=\"text\" class=\"form-control is-valid font-weight-bold\" id=\"userId\" [disabled]=\"true\" name=\"userId\" [(ngModel)]=\"loggedUser.uid\">\r\n    </div>\r\n    <div class=\"col-md-8 mb-3\">\r\n      <label for=\"userJoindate\" class=\"font-weight-bold\" style=\"font-size:1.2em;\">가입일</label>\r\n      <input type=\"text\" class=\"form-control is-valid font-weight-bold\" id=\"userJoindate\" name=\"userJoindate\" [(ngModel)]=\"loggedUser.ujoindate\" [disabled]=\"true\">\r\n    </div>\r\n    <div class=\"col-md-8 mb-3\">\r\n      <label for=\"userPwd\" class=\"font-weight-bold badge grey\" style=\"font-size:1em;\">비밀번호(20자이내)</label>\r\n      <input type=\"password\" class=\"form-control\" id=\"userPwd\" name=\"userPwd\" [(ngModel)]=\"loggedUser.upw\">\r\n    </div>\r\n    <div class=\"col-md-8 mb-3\">\r\n      <label for=\"userPhone\" class=\"font-weight-bold badge grey\" style=\"font-size:1em;\">연락처( '-' 제외, 9~11자리 숫자만입력)</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"userPhone\" name=\"userPhone\" [(ngModel)]=\"loggedUser.uphone\">\r\n    </div>\r\n    <div class=\"col-md-8 mb-3\">\r\n      <label for=\"userBirth\" class=\"font-weight-bold badge grey\" style=\"font-size:1em;\">생년월일(주민등록번호 앞6자리만 입력)</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"userBirth\" name=\"userBirth\" [(ngModel)]=\"loggedUser.ubirth\">\r\n    </div>\r\n\r\n    <div class=\"col-md-8 mb-3\">\r\n      <label class=\"font-weight-bold badge grey\" style=\"font-size:1em;\">주소1</label>\r\n      <span style=\"font-size:1em; margin-left:20px;\" class=\"font-weight-bold\">현재주소 : {{loggedUser.uaddr1}}</span><br />\r\n      <span><a data-toggle=\"modal\" (click)=\"ValueClear();\" data-target=\"#addrChangeForm1\" style=\"color:dodgerblue; font-weight:bold;\">주소변경하기</a></span>\r\n      <!--사용자가 주소를 바꾸길 원할때만 나타남-->\r\n      <!--회원가입폼 (모달)-->\r\n    </div>\r\n    <div class=\"col-md-8 mb-3\">\r\n      <label class=\"font-weight-bold badge grey\" style=\"font-size:1em;\">주소2</label>\r\n      <span style=\"font-size:1em; margin-left:20px;\" class=\"font-weight-bold\">현재주소 : {{loggedUser.uaddr2}}</span><br />\r\n      <span><a data-toggle=\"modal\" (click)=\"ValueClear();\" data-target=\"#addrChangeForm2\" style=\"color:dodgerblue; font-weight:bold;\">주소변경하기</a></span>\r\n    </div>\r\n    <div class=\"col-md-8 mb-3\">\r\n      <label class=\"font-weight-bold badge grey\" style=\"font-size:1em;\">주소3</label>\r\n      <span style=\"font-size:1em; margin-left:20px;\" class=\"font-weight-bold\">현재주소 : {{loggedUser.uaddr3}}</span><br />\r\n      <span><a data-toggle=\"modal\" (click)=\"ValueClear();\" data-target=\"#addrChangeForm3\" style=\"color:dodgerblue; font-weight:bold;\">주소변경하기</a></span>\r\n    </div>\r\n\r\n    <div class=\"col-md-8 mb-3\">\r\n      <label for=\"userAddrcheck\" class=\"font-weight-bold badge grey\" style=\"font-size:1em;\">기본주소선택란</label>\r\n      <br />\r\n      <select class=\"mdb-select\" [(ngModel)]=\"loggedUser.uaddrcheck\" name=\"userAddrcheck\" id=\"userAddrcheck\" style=\"width:100%;\">\r\n        <option value=\"\" disabled selected>기본적으로 사용할 주소지를 선택해주세요</option>\r\n        <option value=1>&nbsp;주소1</option>\r\n        <option value=2>&nbsp;주소2</option>\r\n        <option value=3>&nbsp;주소3</option>\r\n      </select>\r\n    </div>\r\n    <div class=\"col-md-8 mb-3\">\r\n      <label for=\"userGender\" class=\"font-weight-bold badge grey\" style=\"font-size:1em;\">성별</label>\r\n      <br />\r\n      <select class=\"mdb-select\" [(ngModel)]=\"loggedUser.ugender\" name=\"userGender\" id=\"userGender\" style=\"width:100%;\">\r\n        <option value=\"\" disabled selected>성별을 선택해주세요</option>\r\n        <option value=\"M\">&nbsp;남자</option>\r\n        <option value=\"F\">&nbsp;여자</option>\r\n      </select>\r\n    </div>\r\n    <div class=\"col-md-8 mb-3\">\r\n      <label for=\"userSmsyn\" class=\"font-weight-bold badge grey\" style=\"font-size:1em;\">SMS 수신여부</label>\r\n      <br />\r\n      <select class=\"mdb-select\" [(ngModel)]=\"loggedUser.usmsyn\" name=\"userSmsyn\" id=\"userSmsyn\" style=\"width:100%;\">\r\n        <option value=\"\" disabled selected>SMS를 통해 정보를 받으시겠습니까 ?</option>\r\n        <option value=\"Y\">&nbsp;예</option>\r\n        <option value=\"N\">&nbsp;아니오</option>\r\n      </select>\r\n    </div>\r\n    <div class=\"col-md-8 mb-3\">\r\n      <label for=\"userEmailyn\" class=\"font-weight-bold badge grey\" style=\"font-size:1em;\">Email 수신여부</label>\r\n      <br />\r\n      <select class=\"mdb-select\" [(ngModel)]=\"loggedUser.uemailyn\" name=\"userEmailyn\" id=\"userEmailyn\" style=\"width:100%;\">\r\n        <option value=\"\" disabled selected>Email을 통해 정보를 받으시겠습니까 ?</option>\r\n        <option value=\"Y\" >&nbsp;예</option>\r\n        <option value=\"N\">&nbsp;아니오</option>\r\n      </select>\r\n    </div>\r\n  </div>\r\n\r\n  <button class=\"btn btn-outline-primary\" type=\"submit\" style=\"margin-left:320px\">정보수정하기</button>\r\n</form>\r\n\r\n<!-- 주소1 변경모달 -->\r\n<div class=\"modal fade\" id=\"addrChangeForm1\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog cascading-modal\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header light-blue darken-3 white-text\">\r\n        <h4 class=\"title\">\r\n          <i class=\"fa fa-user-plus\"></i>주소1 변경</h4>\r\n      </div>\r\n      <div class=\"modal-body\" style=\"font-size:12px;\">\r\n        <div class=\"md-form form-sm\">\r\n          <btn-daum-address (result)=\"setDaumAddressApi($event)\" [options]=\"daumAddressOptions\"></btn-daum-address><br /><br /><br />\r\n          <p style=\"font-size:14px;\">선택한 기본주소 :: &nbsp; {{AddrSearch1_2}}</p>\r\n          <input type=\"text\" id=\"AcountDetailAddr\" class=\"form-control\" [(ngModel)]=\"AddrSearch1_3\" name=\"AcountDetailAddr\" placeholder=\"상세주소(50자이내)\">\r\n        </div>\r\n        <div class=\"text-center mt-2\">\r\n          <button (click)=\"modalsubmit();\" class=\"btn btn-outline-success\" id=\"Addr1ChangeButton\" mdbRippleRadius>변경</button>\r\n          <button (click)=\"modalclose();\" data-dismiss=\"modal\" aria-label=\"Close\" class=\"btn btn-outline-danger\" id=\"Addr1CloseButton\" mdbRippleRadius>취소</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!-- 주소2 변경모달 -->\r\n<div class=\"modal fade\" id=\"addrChangeForm2\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog cascading-modal\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header light-blue darken-3 white-text\">\r\n        <h4 class=\"title\">\r\n          <i class=\"fa fa-user-plus\"></i>주소2 변경</h4>\r\n      </div>\r\n      <div class=\"modal-body\" style=\"font-size:12px;\">\r\n        <div class=\"md-form form-sm\">\r\n          <btn-daum-address (result)=\"setDaumAddressApi2($event)\" [options]=\"daumAddressOptions\">주소검색</btn-daum-address><br /><br /><br />\r\n          <p style=\"font-size:14px;\">선택한 기본주소 :: &nbsp; {{AddrSearch2_2}}</p>\r\n          <input type=\"text\" id=\"AcountDetailAddr2\" class=\"form-control\" [(ngModel)]=\"AddrSearch2_3\" name=\"AcountDetailAddr2\" placeholder=\"상세주소(50자이내)\">\r\n        </div>\r\n        <div class=\"text-center mt-2\">\r\n          <button (click)=\"modalsubmit2();\" class=\"btn btn-outline-success\" id=\"Addr2ChangeButton\" mdbRippleRadius>변경</button>\r\n          <button (click)=\"modalclose2();\" data-dismiss=\"modal\" aria-label=\"Close\" class=\"btn btn-outline-danger\" id=\"Addr2CloseButton\" mdbRippleRadius>취소</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!-- 주소3 변경모달 -->\r\n<div class=\"modal fade\" id=\"addrChangeForm3\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog cascading-modal\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header light-blue darken-3 white-text\">\r\n        <h4 class=\"title\">\r\n          <i class=\"fa fa-user-plus\"></i>주소3 변경</h4>\r\n      </div>\r\n      <div class=\"modal-body\" style=\"font-size:12px;\">\r\n        <div class=\"md-form form-sm\">\r\n          <btn-daum-address (result)=\"setDaumAddressApi3($event)\" [options]=\"daumAddressOptions\"></btn-daum-address><br /><br /><br />\r\n          <p style=\"font-size:14px;\">선택한 기본주소 :: &nbsp; {{AddrSearch3_2}}</p>\r\n          <input type=\"text\" id=\"AcountDetailAddr3\" class=\"form-control\" [(ngModel)]=\"AddrSearch3_3\" name=\"AcountDetailAddr3\" placeholder=\"상세주소(50자이내)\">\r\n        </div>\r\n        <div class=\"text-center mt-2\">\r\n          <button (click)=\"modalsubmit3();\" class=\"btn btn-outline-success\" id=\"Addr3ChangeButton\" mdbRippleRadius>변경</button>\r\n          <button (click)=\"modalclose3();\" data-dismiss=\"modal\" aria-label=\"Close\" class=\"btn btn-outline-danger\" id=\"Addr3CloseButton\" mdbRippleRadius>취소</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/user/user-account/user-account.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/user/user-account/user-account.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user/user-account/user-account.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/user/user-account/user-account.component.ts ***!
  \*************************************************************/
/*! exports provided: UserAccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAccountComponent", function() { return UserAccountComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/user.service */ "./src/app/shared/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserAccountComponent = /** @class */ (function () {
    function UserAccountComponent(authService, fb, userService, router) {
        this.authService = authService;
        this.fb = fb;
        this.userService = userService;
        this.router = router;
        this.AddrChange1 = false;
        //주소 입력 api (박스 3개 각각 다른변수 사용)
        this.daumAddressOptions = {
            class: ['btn', 'btn-large', 'btn-info', 'waves-light']
        };
        this.AddrSearch1_3 = ""; //상세주소
        this.AddrSearch2_3 = "";
        this.AddrSearch3_3 = "";
    }
    UserAccountComponent.prototype.ngOnInit = function () {
        this.loggedUser = this.authService.getLoggedInUser(); //로그인된 유저 가져오고
        // console.log(this.loggedUser.uphone);
        // console.log(this.loggedUser.uphone*1); // 1012345678 앞에 0이빠진 값이 넘어오게됨
        // console.log(isNaN(this.loggedUser.uphone*1)); // ts 에러
        // console.log(isNaN(this.loggedUser.uphone)); // ts에러
        // console.log($(this.loggedUser.uphone)); // 원하는값이 안올라옴
        // console.log(isNaN($(this.loggedUser.uphone))); //true
        // console.log(isNaN($(parseInt(this.loggedUser.uphone)))); //true
        // console.log(typeof(this.loggedUser.ubirth)); // string
    };
    UserAccountComponent.prototype.updateProfile = function (updatePerson) {
        var _this = this;
        var submitStatus = false;
        // 1차 필터
        if (this.loggedUser.upw != null &&
            this.loggedUser.uphone != null &&
            this.loggedUser.uaddr1 != null &&
            this.loggedUser.uaddr2 != null &&
            this.loggedUser.uaddr3 != null &&
            this.loggedUser.ubirth != null) {
            var numpattern = /^[0-9]*$/; //숫자표현식
            console.log('1차 정보수정조건 만족');
            // 2차 필터
            if (this.loggedUser.upw.length > 20) {
                submitStatus = false;
                alert('비밀번호가 너무 깁니다');
                $("#userPwd").focus();
                return;
            }
            if (this.loggedUser.uphone.length <= 8 || this.loggedUser.uphone.length >= 12) {
                submitStatus = false;
                alert('연락처는 9~11자 이내로 입력해주세요');
                $("#userPhone").focus();
                return;
            }
            if (numpattern.test(this.loggedUser.uphone) == false) {
                submitStatus = false;
                alert('연락처는 숫자만 입력 가능합니다');
                $("#userPhone").focus();
                return;
            }
            if (this.loggedUser.ubirth.length != 6) {
                submitStatus = false;
                alert('생년월일은 주민등록번호 앞 6자리를 입력해야 합니다 (공백이 있나 확인해주세요)');
                $("#userBirth").focus();
                return;
            }
            if (numpattern.test(this.loggedUser.ubirth) == false) {
                submitStatus = false;
                alert('생년월일은 숫자만 입력 가능합니다');
                $("#userBirth").focus();
                return;
            }
            if (this.loggedUser.uaddr1.length >= 101) {
                submitStatus = false;
                alert('[주소1] 을 100자 이내로 입력해주세요');
                return;
            }
            if (this.loggedUser.uaddr2.length >= 101) {
                submitStatus = false;
                alert('[주소2] 을 100자 이내로 입력해주세요');
                return;
            }
            if (this.loggedUser.uaddr3.length >= 101) {
                submitStatus = false;
                alert('[주소3] 을 100자 이내로 입력해주세요');
                return;
            }
            else {
                submitStatus = true;
            }
        }
        if (submitStatus) {
            this.userService.updateUser(this.loggedUser).subscribe(function () {
                //회원정보 수정이 성공적으로 실행될때, 토큰업데이트
                _this.authService.updateUserToken(_this.loggedUser);
                alert("수정되었습니다");
                _this.router.navigate(["index"]);
            }, function (error) {
                alert("에러발생");
            });
        }
    };
    // 주소검색 모달 변경,취소 버튼 메서드
    UserAccountComponent.prototype.modalsubmit = function () {
        if (this.AddrSearch1_3 == "" || this.AddrSearch1_3 == null) {
            alert("상세주소를 입력해주세요");
            $("#AcountDetailAddr").focus();
            return;
        }
        if (this.AddrSearch1_2 == "" || this.AddrSearch1_2 == null) {
            alert("기본주소를 입력해주세요");
            return;
        }
        else {
            this.loggedUser.uaddr1 = this.AddrSearch1_2 + " / " + this.AddrSearch1_3;
            $("#addrChangeForm1").modal("hide");
            alert("주소변경 완료");
        }
    };
    UserAccountComponent.prototype.modalsubmit2 = function () {
        if (this.AddrSearch2_3 == "" || this.AddrSearch2_3 == null) {
            alert("상세주소를 입력해주세요");
            $("#AcountDetailAddr2").focus();
            return;
        }
        if (this.AddrSearch2_2 == "" || this.AddrSearch2_2 == null) {
            alert("기본주소를 입력해주세요");
            return;
        }
        else {
            this.loggedUser.uaddr2 = this.AddrSearch2_2 + " / " + this.AddrSearch2_3;
            $("#addrChangeForm2").modal("hide");
            alert("주소변경 완료");
        }
    };
    UserAccountComponent.prototype.modalsubmit3 = function () {
        if (this.AddrSearch3_3 == "" || this.AddrSearch3_3 == null) {
            alert("상세주소를 입력해주세요");
            $("#AcountDetailAddr3").focus();
            return;
        }
        if (this.AddrSearch3_2 == "" || this.AddrSearch3_2 == null) {
            alert("기본주소를 입력해주세요");
            return;
        }
        else {
            this.loggedUser.uaddr3 = this.AddrSearch3_2 + " / " + this.AddrSearch3_3;
            $("#addrChangeForm3").modal("hide");
            alert("주소변경 완료");
        }
    };
    UserAccountComponent.prototype.modalclose = function () {
        this.AddrSearch1_2 = "";
        $("#addrChangeForm1").modal("hide");
        alert("주소변경 취소");
    };
    UserAccountComponent.prototype.modalclose2 = function () {
        this.AddrSearch2_2 = "";
        $("#addrChangeForm2").modal("hide");
        alert("주소변경 취소");
    };
    UserAccountComponent.prototype.modalclose3 = function () {
        this.AddrSearch3_2 = "";
        $("#addrChangeForm3").modal("hide");
        alert("주소변경 취소");
    };
    UserAccountComponent.prototype.ValueClear = function () {
        // 주소변경 클릭했을때 '선택한 기본주소' 값 , '상세주소' 값초기화
        this.AddrSearch1_2 = "";
        this.AddrSearch2_2 = "";
        this.AddrSearch3_2 = "";
        this.AddrSearch1_3 = "";
        this.AddrSearch2_3 = "";
        this.AddrSearch3_3 = "";
    };
    UserAccountComponent.prototype.setDaumAddressApi = function (AddrSearch) {
        // 여기로 주소값이 반환
        this.AddrSearch1_2 = AddrSearch.zip + " / " + AddrSearch.addr;
        $("#AcountDetailAddr").focus();
    };
    UserAccountComponent.prototype.setDaumAddressApi2 = function (AddrSearch2) {
        this.AddrSearch2_2 = AddrSearch2.zip + " / " + AddrSearch2.addr;
        $("#AcountDetailAddr2").focus();
    };
    UserAccountComponent.prototype.setDaumAddressApi3 = function (AddrSearch3) {
        // 여기로 주소값이 반환
        this.AddrSearch3_2 = AddrSearch3.zip + " / " + AddrSearch3.addr;
        $("#AcountDetailAddr3").focus();
    };
    UserAccountComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-user-account",
            template: __webpack_require__(/*! ./user-account.component.html */ "./src/app/user/user-account/user-account.component.html"),
            styles: [__webpack_require__(/*! ./user-account.component.scss */ "./src/app/user/user-account/user-account.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _shared_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], UserAccountComponent);
    return UserAccountComponent;
}());



/***/ }),

/***/ "./src/app/user/user-cart-items/user-cart-items.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/user/user-cart-items/user-cart-items.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div *ngIf=\"products.length > 0\"> -->\r\n<h6 style=\"text-align:right; font-weight:bold; color:#232BDB\">마이페이지 > 장바구니</h6>\r\n<br />\r\n<div *ngIf='cartList.length>0'>\r\n  <div class=\"row\">\r\n    <!-- List of Products -->\r\n    <!-- <div class=\"col-sm-4\" *ngFor=\"let cartItem of products | paginate: { itemsPerPage: 6, currentPage: page }\"> -->\r\n    <div class=\"col-sm-4\" *ngFor=\"let cartItem of cartList | paginate: { itemsPerPage: 6, currentPage: page }\">\r\n\r\n      <div class=\"item\">\r\n        <div class=\" mb-r\">\r\n\r\n          <!--Card-->\r\n          <div class=\"card card-cascade wider\">\r\n\r\n            <!--Card image-->\r\n            <a [routerLink]=\"['/products/product', cartItem.productId]\">\r\n\r\n              <div class=\"view overlay hm-white-slight\">\r\n                <img src=\"./assets/img/{{cartItem.p_img}}.jpg\" class=\"img-fluid\" alt=\"\" width=\"360px\" height=\"640px\">\r\n                <a>\r\n                  <div class=\"mask waves-effect waves-light\" mdbRippleRadius></div>\r\n                </a>\r\n              </div>\r\n            </a>\r\n\r\n            <!--/.Card image-->\r\n\r\n            <!--Card content-->\r\n            <div class=\"card-body text-center no-padding\">\r\n              <!--Category & Title-->\r\n              <a class=\"text-muted\">\r\n                <h5>{{cartItem.p_kind}}</h5>\r\n              </a>\r\n              <p class=\"card-title\">\r\n                <strong>\r\n                  <a [routerLink]=\"['/products/product', cartItem.productId]\" routerLinkActive=\"router-link-active\">{{ cartItem.p_name }}</a>\r\n                </strong>\r\n              </p>\r\n\r\n              <!--Description-->\r\n              <p class=\"card-text\">{{cartItem.p_content}}\r\n              </p>\r\n\r\n              <!--Card footer-->\r\n              <div class=\"card-footer\">\r\n\r\n                <!-- <span class=\"left\">수량 : {{cartItem.camount}}\r\n                  <a placement=\"top\" mdbTooltip=\"Remove Product\" container=\"body\" (click)=\"removeFromCart(cartItem.cno)\">\r\n                    <i class=\"fa fa-edit prefix\"></i>\r\n                  </a>\r\n                </span> -->\r\n                <div class=\"count-input space-bottom\">\r\n                  <span class=\"left\"><p style=\"float:left;\">수량 : &nbsp;</p>\r\n                                <input class=\"quantity\" type=\"text\" name=\"quantity\" [(ngModel)]=\"cartItem.camount\" />\r\n                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n                                <a (click)=\"updateCart(cartItem)\">\r\n                                  <i class=\"fa fa-edit prefix\"></i>\r\n                                </a>\r\n                  </span>\r\n                </div>\r\n                <br />\r\n                <span class=\"left\">금액 : {{cartItem.p_sellprice*cartItem.camount}}원</span>\r\n                <!-- <span class=\"right\" *ngIf=\"authService.isLoggedIn()\"> -->\r\n\r\n                <span class=\"right\">\r\n                  <a placement=\"top\" mdbTooltip=\"Remove Product\" container=\"body\" (click)=\"removeFromCart(cartItem.cno)\">\r\n                    <i class=\"fa fa-trash\"></i>\r\n                  </a>\r\n                </span>\r\n                <input type=\"checkbox\" (change)='pushCno($event, cartItem.cno)' />\r\n              </div>\r\n\r\n            </div>\r\n            <!--/.Card content-->\r\n\r\n          </div>\r\n          <!--/.Card-->\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <hr class=\"between-sections\">\r\n\r\n  <button type=\"button\" class=\"btn btn-outline-primary btn-lg btn-block\" (click)=\"gotoOrderWirte()\">\r\n    구매하기\r\n  </button>\r\n\r\n  <hr class=\"between-sections\">\r\n\r\n  <div class=\"text-center\">\r\n    <pagination-controls (pageChange)=\"page = $event\"></pagination-controls>\r\n  </div>\r\n</div>\r\n\r\n<!-- <div *ngIf=\"products.length == 0\"> -->\r\n<div *ngIf=\"cartList.length==0\">\r\n  <app-no-products-found [title]=\"messageTitle\" [description]=\"messageDescription\"></app-no-products-found>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/user/user-cart-items/user-cart-items.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/user/user-cart-items/user-cart-items.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".section .section-heading {\n  margin-top: 2rem;\n  margin-bottom: 4rem; }\n\n.section-heading {\n  text-align: center; }\n\n.section-description {\n  margin-left: 5%;\n  margin-right: 5%; }\n\n.section-description {\n  color: #757575;\n  margin-bottom: 4rem;\n  margin-left: 15%;\n  margin-right: 15%;\n  text-align: center; }\n\n.section img {\n  max-width: 100%;\n  height: auto; }\n\n.card.card-cascade.narrower {\n  margin-top: 10px; }\n\n.card.card-cascade {\n  width: 100%; }\n\n.card:not([class*=\"card-outline-\"]) {\n  border: 0; }\n\n.card.card-cascade.narrower .view {\n  margin-left: 4%;\n  margin-right: 4%;\n  margin-top: -20px; }\n\n.card.card-cascade .view {\n  border-radius: 4px; }\n\n.btn-floating:hover,\n.card-overlay,\n.card.card-cascade .view,\n.colorful-select .dropdown-content li a:hover,\n.colorful-select .dropdown-content li span:hover,\n.comments-list img,\n.modal-dialog.cascading-modal.modal-avatar .modal-header img,\n.reply-form img,\n.testimonial-carousel .testimonial .avatar img,\n.z-depth-2 {\n  box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); }\n\n.card.card-cascade .card-body {\n  padding-top: 1.8rem; }\n\n.btn .fa,\n.card .card-body {\n  position: relative; }\n\n.card .rating {\n  color: #ffa000; }\n\n.rating {\n  list-style-type: none; }\n\n.no-padding .fa,\n.rating {\n  padding: 0; }\n\n.rating li {\n  display: inline-block; }\n\n.no-padding .fa,\n.rating {\n  padding: 0; }\n\n.card-text {\n  line-height: 20px;\n  height: 60px;\n  overflow: hidden; }\n\n.card .card-footer {\n  background-color: transparent; }\n\n.card .card-footer .left {\n  float: left; }\n\n.card .card-footer .right {\n  float: right;\n  display: flex; }\n\n.card .card-footer .right a.active {\n  color: #d50000; }\n\n.card .card-footer .right a {\n  color: #757575;\n  margin-left: 1rem;\n  transition: 0.4s; }\n\nbody {\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABZ0RVh0Q3JlYXRpb24gVGltZQAxMC8yOS8xMiKqq3kAAAAcdEVYdFNvZnR3YXJlAEFkb2JlIEZpcmV3b3JrcyBDUzVxteM2AAABHklEQVRIib2Vyw6EIAxFW5idr///Qx9sfG3pLEyJ3tAwi5EmBqRo7vHawiEEERHS6x7MTMxMVv6+z3tPMUYSkfTM/R0fEaG2bbMv+Gc4nZzn+dN4HAcREa3r+hi3bcuu68jLskhVIlW073tWaYlQ9+F9IpqmSfq+fwskhdO/AwmUTJXrOuaRQNeRkOd5lq7rXmS5InmERKoER/QMvUAPlZDHcZRhGN4CSeGY+aHMqgcks5RrHv/eeh455x5KrMq2yHQdibDO6ncG/KZWL7M8xDyS1/MIO0NJqdULLS81X6/X6aR0nqBSJcPeZnlZrzN477NKURn2Nus8sjzmEII0TfMiyxUuxphVWjpJkbx0btUnshRihVv70Bv8ItXq6Asoi/ZiCbU6YgAAAABJRU5ErkJggg==); }\n\n.error-template {\n  padding: 40px 15px;\n  text-align: center; }\n\n.error-actions {\n  margin-top: 15px;\n  margin-bottom: 15px; }\n\n.error-actions .btn {\n  margin-right: 10px; }\n\n.count-input {\n  position: relative;\n  margin: 10px 0;\n  overflow: hidden; }\n\n.count-input input {\n    width: 40px;\n    height: 20px;\n    background: none;\n    text-align: center;\n    float: left; }\n\n.count-input input:focus {\n      outline: none; }\n\n.count-input .decre-btn {\n    display: block;\n    position: relative;\n    width: 20px;\n    text-align: center;\n    top: 50%;\n    left: 0;\n    margin-top: 0px;\n    text-decoration: none;\n    border: 1px solid #000;\n    float: left;\n    height: 20px;\n    border-radius: 2px; }\n\n.count-input .incr-btn {\n    display: block;\n    position: relative;\n    width: 20px;\n    text-align: center;\n    top: 50%;\n    right: 0;\n    margin-top: 0px;\n    text-decoration: none;\n    border: 1px solid #000;\n    float: left;\n    height: 20px;\n    border-radius: 2px; }\n"

/***/ }),

/***/ "./src/app/user/user-cart-items/user-cart-items.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/user/user-cart-items/user-cart-items.component.ts ***!
  \*******************************************************************/
/*! exports provided: UserCartItemsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserCartItemsComponent", function() { return UserCartItemsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/product.service */ "./src/app/shared/services/product.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
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





var UserCartItemsComponent = /** @class */ (function () {
    function UserCartItemsComponent(authService, productService, router, route, tokenService) {
        this.authService = authService;
        this.productService = productService;
        this.router = router;
        this.route = route;
        this.tokenService = tokenService;
        this.page = 1;
        this.orderList = [];
        this.cartList = [];
        this.change = false;
    }
    UserCartItemsComponent.prototype.ngOnInit = function () {
        this.loggedUser = this.authService.getLoggedInUser();
        this.getCartProducts();
    };
    UserCartItemsComponent.prototype.getCartProducts = function () {
        var _this = this;
        this.productService.getUsersCartProducts().subscribe(function (cartList) {
            _this.cartList = cartList;
        });
    };
    UserCartItemsComponent.prototype.removeFromCart = function (cno) {
        var _this = this;
        this.productService.removeFromCart(cno).subscribe(function (data) {
            _this.getCartProducts();
        });
    };
    UserCartItemsComponent.prototype.updateCart = function (cart) {
        this.productService.updateCart(cart).subscribe(function (cart) {
            alert("수정 되었습니다.");
        });
    };
    //장바구니 체크 / 체크해제 시 array에 C_NO를 추가/삭제한다.
    UserCartItemsComponent.prototype.pushCno = function (e, cno) {
        if (e.target.checked) {
            this.orderList.push(cno);
            console.log(this.orderList);
        }
        else {
            var index = this.orderList.indexOf(cno);
            this.orderList.splice(index, 1);
            console.log(this.orderList);
        }
    };
    //주문진행 페이지로 가기 전 저장된 배열을 service에 저장한다.
    UserCartItemsComponent.prototype.gotoOrderWirte = function () {
        this.productService.cartToOrder = this.orderList;
        // this.productService.fromCart=true;
        if (this.tokenService.isToken('fromCart')) {
            this.tokenService.updateToken('fromCart', true);
        }
        else {
            this.tokenService.saveToken('fromCart', true);
        }
        if (this.tokenService.isToken('cartToOrder')) {
            this.tokenService.updateToken('cartToOrder', this.orderList);
        }
        else {
            this.tokenService.saveToken('cartToOrder', this.orderList);
        }
        if (this.orderList.length > 0) {
            this.router.navigate(["/users", { outlets: { profileOutlet: ['order-write'] } }]);
        }
        else {
            alert('선택된 상품이 없습니다');
            return;
        }
    };
    UserCartItemsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-user-cart-items",
            template: __webpack_require__(/*! ./user-cart-items.component.html */ "./src/app/user/user-cart-items/user-cart-items.component.html"),
            styles: [__webpack_require__(/*! ./user-cart-items.component.scss */ "./src/app/user/user-cart-items/user-cart-items.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _shared_services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _shared_services_token_service__WEBPACK_IMPORTED_MODULE_4__["TokenService"]])
    ], UserCartItemsComponent);
    return UserCartItemsComponent;
}());



/***/ }),

/***/ "./src/app/user/user-favourite-products/user-favourite-products.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/user/user-favourite-products/user-favourite-products.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h6 style=\"text-align:right; font-weight:bold; color:#232BDB\">마이페이지 > WishList</h6>\r\n<br />\r\n<div *ngIf=\"products.length > 0\">\r\n  <div class=\"row\">\r\n    <!-- List of Products -->\r\n    <div class=\"col-sm-4\" *ngFor=\"let favourite of products | paginate: { itemsPerPage: 6, currentPage: page }\">\r\n      <div class=\"item\">\r\n        <div class=\" mb-r\">\r\n\r\n          <!--Card-->\r\n          <div class=\"card card-cascade wider\">\r\n\r\n            <!--Card image-->\r\n            <a [routerLink]=\"['/products/product', favourite.productId]\">\r\n\r\n              <div class=\"view overlay hm-white-slight\">\r\n                <img [src]=\"favourite.product.productImageUrl\" class=\"img-fluid\" alt=\"\" width=\"360px\" height=\"640px\">\r\n                <a>\r\n                  <div class=\"mask waves-effect waves-light\" mdbRippleRadius></div>\r\n                </a>\r\n              </div>\r\n            </a>\r\n\r\n            <!--/.Card image-->\r\n\r\n            <!--Card content-->\r\n            <div class=\"card-body text-center no-padding\">\r\n              <!--Category & Title-->\r\n              <a class=\"text-muted\">\r\n                <h5>{{ favourite.product.productCategory }}</h5>\r\n              </a>\r\n              <p class=\"card-title\">\r\n                <strong>\r\n                  <a [routerLink]=\"['/products/product', favourite.productId]\" routerLinkActive=\"router-link-active\">{{ favourite.product.productName }}</a>\r\n                </strong>\r\n              </p>\r\n\r\n              <!--Description-->\r\n              <p class=\"card-text\">{{ favourite.product.productDescription }}\r\n              </p>\r\n\r\n              <!--Card footer-->\r\n              <div class=\"card-footer\">\r\n                <span class=\"left\">{{ favourite.product.productPrice }} $</span>\r\n                <span class=\"right\" *ngIf=\"authService.isLoggedIn()\">\r\n                  <a placement=\"top\" mdbTooltip=\"Remove Product\" container=\"body\" (click)=\"removeFromFavourite(favourite.$key)\">\r\n                    <i class=\"fa fa-trash\"></i>\r\n                  </a>\r\n                </span>\r\n              </div>\r\n\r\n            </div>\r\n            <!--/.Card content-->\r\n\r\n          </div>\r\n          <!--/.Card-->\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"text-center\">\r\n    <pagination-controls (pageChange)=\"page = $event\"></pagination-controls>\r\n  </div>\r\n</div>\r\n<div *ngIf=\"products.length == 0\">\r\n  <app-no-products-found [title]=\"messageTitle\" [description]=\"messageDescription\"></app-no-products-found>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/user/user-favourite-products/user-favourite-products.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/user/user-favourite-products/user-favourite-products.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".section .section-heading {\n  margin-top: 2rem;\n  margin-bottom: 4rem; }\n\n.section-heading {\n  text-align: center; }\n\n.section-description {\n  margin-left: 5%;\n  margin-right: 5%; }\n\n.section-description {\n  color: #757575;\n  margin-bottom: 4rem;\n  margin-left: 15%;\n  margin-right: 15%;\n  text-align: center; }\n\n.section img {\n  max-width: 100%;\n  height: auto; }\n\n.card.card-cascade.narrower {\n  margin-top: 10px; }\n\n.card.card-cascade {\n  width: 100%; }\n\n.card:not([class*=\"card-outline-\"]) {\n  border: 0; }\n\n.card.card-cascade.narrower .view {\n  margin-left: 4%;\n  margin-right: 4%;\n  margin-top: -20px; }\n\n.card.card-cascade .view {\n  border-radius: 4px; }\n\n.btn-floating:hover,\n.card-overlay,\n.card.card-cascade .view,\n.colorful-select .dropdown-content li a:hover,\n.colorful-select .dropdown-content li span:hover,\n.comments-list img,\n.modal-dialog.cascading-modal.modal-avatar .modal-header img,\n.reply-form img,\n.testimonial-carousel .testimonial .avatar img,\n.z-depth-2 {\n  box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); }\n\n.card.card-cascade .card-body {\n  padding-top: 1.8rem; }\n\n.btn .fa,\n.card .card-body {\n  position: relative; }\n\n.card .rating {\n  color: #ffa000; }\n\n.rating {\n  list-style-type: none; }\n\n.no-padding .fa,\n.rating {\n  padding: 0; }\n\n.rating li {\n  display: inline-block; }\n\n.no-padding .fa,\n.rating {\n  padding: 0; }\n\n.card-text {\n  line-height: 20px;\n  height: 60px;\n  overflow: hidden; }\n\n.card .card-footer {\n  background-color: transparent; }\n\n.card .card-footer .left {\n  float: left; }\n\n.card .card-footer .right {\n  float: right;\n  display: flex; }\n\n.card .card-footer .right a.active {\n  color: #d50000; }\n\n.card .card-footer .right a {\n  color: #757575;\n  margin-left: 1rem;\n  transition: 0.4s; }\n\nbody {\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABZ0RVh0Q3JlYXRpb24gVGltZQAxMC8yOS8xMiKqq3kAAAAcdEVYdFNvZnR3YXJlAEFkb2JlIEZpcmV3b3JrcyBDUzVxteM2AAABHklEQVRIib2Vyw6EIAxFW5idr///Qx9sfG3pLEyJ3tAwi5EmBqRo7vHawiEEERHS6x7MTMxMVv6+z3tPMUYSkfTM/R0fEaG2bbMv+Gc4nZzn+dN4HAcREa3r+hi3bcuu68jLskhVIlW073tWaYlQ9+F9IpqmSfq+fwskhdO/AwmUTJXrOuaRQNeRkOd5lq7rXmS5InmERKoER/QMvUAPlZDHcZRhGN4CSeGY+aHMqgcks5RrHv/eeh455x5KrMq2yHQdibDO6ncG/KZWL7M8xDyS1/MIO0NJqdULLS81X6/X6aR0nqBSJcPeZnlZrzN477NKURn2Nus8sjzmEII0TfMiyxUuxphVWjpJkbx0btUnshRihVv70Bv8ItXq6Asoi/ZiCbU6YgAAAABJRU5ErkJggg==); }\n\n.error-template {\n  padding: 40px 15px;\n  text-align: center; }\n\n.error-actions {\n  margin-top: 15px;\n  margin-bottom: 15px; }\n\n.error-actions .btn {\n  margin-right: 10px; }\n"

/***/ }),

/***/ "./src/app/user/user-favourite-products/user-favourite-products.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/user/user-favourite-products/user-favourite-products.component.ts ***!
  \***********************************************************************************/
/*! exports provided: UserFavouriteProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserFavouriteProductsComponent", function() { return UserFavouriteProductsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/product.service */ "./src/app/shared/services/product.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { AuthService } from "../../shared/services/auth.service";
var UserFavouriteProductsComponent = /** @class */ (function () {
    function UserFavouriteProductsComponent(productService) {
        this.productService = productService;
        this.products = [];
        this.page = 1;
        // Not Found Message
        this.messageTitle = "No Favourite Products Found";
        this.messageDescription = "Please, Add Favourite Products";
    }
    UserFavouriteProductsComponent.prototype.ngOnInit = function () {
        this.getFavouriteProducts();
    };
    UserFavouriteProductsComponent.prototype.getFavouriteProducts = function () {
        // const x = this.productService
        //   .getUsersFavouriteProduct()
        //   .snapshotChanges()
        //   .subscribe(data => {
        //     this.products = [];
        //     data.forEach(product => {
        //       const y = product.payload.toJSON() as FavouriteProduct;
        //       y["$key"] = product.key;
        //       this.products.push(y);
        //     });
        //   });
    };
    UserFavouriteProductsComponent.prototype.removeFromFavourite = function ($key) {
        // this.productService.removeFavourite($key);
        this.getFavouriteProducts();
    };
    UserFavouriteProductsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-user-favourite-products",
            template: __webpack_require__(/*! ./user-favourite-products.component.html */ "./src/app/user/user-favourite-products/user-favourite-products.component.html"),
            styles: [__webpack_require__(/*! ./user-favourite-products.component.scss */ "./src/app/user/user-favourite-products/user-favourite-products.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"]])
    ], UserFavouriteProductsComponent);
    return UserFavouriteProductsComponent;
}());



/***/ }),

/***/ "./src/app/user/user-order-list/user-order-list.component.css":
/*!********************************************************************!*\
  !*** ./src/app/user/user-order-list/user-order-list.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".kdh{\r\n  /* position:absolute; */\r\n  width:100%;\r\n}\r\n\r\n.oddiv{\r\n  width:100%;\r\n  /* background-color: blue; */\r\n}\r\n"

/***/ }),

/***/ "./src/app/user/user-order-list/user-order-list.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/user/user-order-list/user-order-list.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <br>\r\n    <div class=\"col-md-12\">\r\n      <div class=\"col-md-12 col-sm-12 col-xs-12 col-md-push-12 col-sm-push-12\">\r\n\r\n      </div>\r\n      <div class=\"col-md-12 col-sm-12 col-xs-12 col-md-pull-12 col-sm-pull-12\">\r\n        <!-- 주문건수 확인 -->\r\n        <h6 style=\"text-align:right; font-weight:bold; color:#232BDB; font-size:16px;\">마이페이지 > 주문목록</h6>\r\n        <hr />\r\n        <br />\r\n        <div class=\"panel-heading text-center\">\r\n          <h4>주문 현황</h4>\r\n        </div>\r\n        <br />\r\n        <!-- 원본디자인 <link src=\"http://bootswatch.com/flatly/bootstrap.css\" type=\"text/css\"> order 건수 표시 -->\r\n        <!------ Include the above in your HEAD tag ---------->\r\n            <div class=\"row\">\r\n              <!-- 주문취소 = C / 주문대기 = N / 주문완료 = Y -->\r\n                <div class=\"col-xs-6 col-md-3\" >\r\n                    <div class=\"card text-center\" style=\"border:1px solid #A94442\">\r\n                        <div class=\"card-header\" style=\"background:#F2DEDE;\">\r\n                            <h3 class=\"panel-title text-center\" style=\"color:#A94442; font-size:18px;\">주문취소</h3>\r\n                        </div>\r\n                        <div class=\"card-body\">\r\n                            <strong>{{OrderCancle}}건</strong>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-xs-6 col-md-3\" >\r\n                    <div class=\"card text-center\" style=\"border:1px solid #8A6D3B\">\r\n                        <div class=\"card-header\" style=\"background:#FCF8E3;\">\r\n                            <h3 class=\"panel-title text-center\" style=\"color:#8A6D3B; font-size:18px;\">주문대기</h3>\r\n                        </div>\r\n                        <div class=\"card-body\">\r\n                            <strong>{{OrderWait}}건</strong>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-xs-6 col-md-3\">\r\n                    <div class=\"card text-center\" style=\"border:1px solid #0B610B\">\r\n                        <div class=\"card-header\" style=\"background:#A9F5A9;\">\r\n                            <h3 class=\"panel-title text-center\" style=\"color:#0B610B; font-size:18px;\">주문완료</h3>\r\n                        </div>\r\n                        <div class=\"card-body\">\r\n                            <strong>{{OrderCommit}}건</strong>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-xs-6 col-md-3\">\r\n                    <div class=\"card text-center\" style=\"border:1px solid #31708F\">\r\n                        <div class=\"card-header\" style=\"background:#D9EDF7;\">\r\n                            <h3 class=\"panel-title text-center\" style=\"color:#31708F; font-size:18px;\">총 주문</h3>\r\n                        </div>\r\n                        <div class=\"card-body\">\r\n                            <strong>{{orderNum}}건</strong>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div> <!--orderlist 끝-->\r\n            <br />\r\n        <hr>\r\n        <br />\r\n        <!--SHIPPING METHOD-->\r\n        <div class=\"panel panel-default\">\r\n          <div class=\"panel-heading text-center\">\r\n            <h4>주문 조회</h4>\r\n          </div>\r\n\r\n          <div class=\"panel-body\">\r\n            <table class=\"table\">\r\n              <thead class=\"cyan lighten-4\">\r\n                <tr>\r\n                  <!-- <td><strong>Your Cart: # item</strong></td> -->\r\n                  <td>번호</td>\r\n                  <td>일자</td>\r\n                  <td>가격</td>\r\n                  <td>상태</td>\r\n                  <td></td>\r\n                  <td></td>\r\n                </tr>\r\n              </thead>\r\n\r\n              <tbody *ngFor=\"let order of orderLists | paginate: { itemsPerPage: 10, currentPage: page }\" style=\"position:relative;\">\r\n\r\n                <!-- <tr *ngFor=\"let item of cartList\"> -->\r\n                <!-- <td class=\"col-md-3\"> -->\r\n                <tr>\r\n                  <td>{{order.oViewNum}}</td>\r\n                  <td>{{order.odate}}</td>\r\n                  <td>{{order.ototal+2500}}원</td>\r\n                  <!-- <td>{{order.ostatus}}</td> -->\r\n                  <td *ngIf='order.ostatus==\"C\"'>취소</td>\r\n                  <td *ngIf='order.ostatus==\"N\"'>대기</td>\r\n                  <td *ngIf='order.ostatus==\"Y\"'>완료</td>\r\n                  <td><a data-toggle=\"modal\" data-target=\"#orderDetail\" style=\"color:dodgerblue; font-weight:bold;\" (click)=\"getDetailList(order.ono,order.oaddr)\">상세</a></td>\r\n                  <td><a style=\"color:red; font-weight:bold;\" (click)=\"cancleOrder(order)\">취소</a></td>\r\n                </tr>\r\n              </tbody>\r\n\r\n            </table>\r\n            <div class=\"text-center mt-3\">\r\n              <pagination-controls (pageChange)=\"page = $event\"></pagination-controls>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n      <!--SHIPPING METHOD END-->\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n<!-- OrderDetail Modal -->\r\n<div class=\"modal fade\" id=\"orderDetail\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog cascading-modal\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n\r\n      <div class=\"modal-header light-blue darken-3 white-text\">\r\n        <h4 class=\"title\">\r\n            <i class=\"fa fa-user-plus\"></i>주문상세</h4>\r\n        <button type=\"button\" class=\"close waves-effect waves-light\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n            <span aria-hidden=\"true\">×</span>\r\n          </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n\r\n\r\n        <table class=\"table\">\r\n          <thead class=\"table-success\">\r\n            <tr class=\"cyan lighten-4\">\r\n              <!-- <td><strong>Your Cart: # item</strong></td> -->\r\n              <td>이미지&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;상품설명</td>\r\n              <td>가격</td>\r\n              <td>수량</td>\r\n              <td>합계</td>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n\r\n            <tr *ngFor=\"let detail of detailLists\">\r\n              <!-- <td class=\"col-md-3\"> -->\r\n              <td>\r\n                <div class=\"media\">\r\n                  <a class=\"thumbnail pull-left\" href=\"#\"> <img class=\"media-object\" src=\"./assets/ProductImg/{{detail.odimg}}.jpg\" style=\"width: 72px; height: 72px;\"> </a>\r\n                  <div class=\"media-body\">\r\n                    <h5 class=\"media-heading\"> <br />{{detail.odpname}}</h5>\r\n                  </div>\r\n                </div>\r\n              </td>\r\n              <td><br />{{detail.odpprice | currency:'KOR '}}원</td>\r\n              <td><br />&nbsp;&nbsp;&nbsp;{{detail.odpamount}}&nbsp;&nbsp;&nbsp;</td>\r\n              <td><br />{{detail.odpprice*detail.odpamount | currency:'KOR '}}원</td>\r\n            </tr>\r\n\r\n          </tbody>\r\n        </table>\r\n\r\n\r\n        <div class=\"col-md-12\">\r\n          <div class=\"panel-heading text-center\">\r\n            <h4>배송지 정보</h4></div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <div class=\"col-md-12\">\r\n            <strong>주소</strong>\r\n            <!-- <input type=\"text\" name=\"address4\" class=\"form-control\" value='{{oAddress}}' [disabled]='true'/> -->\r\n            <!-- <textarea value='{{oAddress}}' /> -->\r\n            <textarea name=\"\" rows=\"4\" cols=\"50\" value=\"{{oAddress}}\" class=\"form-control\" required [disabled]='true'></textarea>\r\n            <strong>배송비</strong>\r\n            <input type=\"text\" name=\"address4\" class=\"form-control\" value='2500' [disabled]='true'/>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/user/user-order-list/user-order-list.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/user/user-order-list/user-order-list.component.ts ***!
  \*******************************************************************/
/*! exports provided: UserOrderListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserOrderListComponent", function() { return UserOrderListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var _shared_services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/product.service */ "./src/app/shared/services/product.service.ts");
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




var UserOrderListComponent = /** @class */ (function () {
    function UserOrderListComponent(productService, authService, tokenService) {
        this.productService = productService;
        this.authService = authService;
        this.tokenService = tokenService;
        // checkNum:number=0;
        this.page = 1;
        this.orderLists = [];
        this.detailLists = [];
        this.orderNum = 0; //총 주문량이 될 수 있음 = oViewNum
        this.OrderCancle = 0; // 주문취소건수
        this.OrderWait = 0; // 주문대기건수 (평소)
        this.OrderCommit = 0; // 주문완료건수
    }
    UserOrderListComponent.prototype.ngOnInit = function () {
        this.uid = this.authService.getLoggedInUser().uid;
        this.getOrderList(this.uid);
    };
    //select
    UserOrderListComponent.prototype.getOrderList = function (uid) {
        var _this = this;
        if (this.tokenService.isToken('orderLists') == false) {
            this.productService.getOrderList(uid).subscribe(function (lists) {
                _this.orderLists = lists;
                _this.orderNum = 0;
                _this.OrderCancle = 0;
                _this.OrderWait = 0;
                _this.OrderCommit = 0;
                for (var i = 0; i < _this.orderLists.length; i++) {
                    _this.orderLists[i].oViewNum = ++_this.orderNum;
                    if (_this.orderLists[i].ostatus == 'C') {
                        _this.OrderCancle++;
                    }
                    else if (_this.orderLists[i].ostatus == 'N') {
                        _this.OrderWait++;
                    }
                    else if (_this.orderLists[i].ostatus == 'Y') {
                        _this.OrderCommit++;
                    }
                }
            });
        }
    };
    UserOrderListComponent.prototype.getDetailList = function (ono, oaddr) {
        var _this = this;
        this.oAddress = oaddr;
        this.productService.getDetailList(ono).subscribe(function (details) {
            _this.detailLists = details;
            console.log(_this.detailLists);
        });
    };
    UserOrderListComponent.prototype.cancleOrder = function (order) {
        var conf = confirm('주문 취소하시겠습니까?');
        if (conf) {
            if (order.ostatus == 'N') {
                this.productService.cancleOrder(order.ono).subscribe(function (data) {
                    alert('주문 취소가 완료 되었습니다.');
                });
                this.tokenService.removeToken('OrderCancle');
                this.tokenService.removeToken('OrderWait');
                this.tokenService.removeToken('OrderCommit');
                this.tokenService.removeToken('orderLists');
                this.tokenService.removeToken('orderNum');
                this.getOrderList(this.authService.getLoggedInUser().uid);
                return;
            }
            else if (order.ostatus == 'C') {
                alert('이미 취소된 상품입니다.');
                return;
            }
            else {
                alert('처리 완료된 상품은 취소가 불가능합니다.');
                return;
            }
        }
    };
    UserOrderListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-order-list',
            template: __webpack_require__(/*! ./user-order-list.component.html */ "./src/app/user/user-order-list/user-order-list.component.html"),
            styles: [__webpack_require__(/*! ./user-order-list.component.css */ "./src/app/user/user-order-list/user-order-list.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"],
            _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _shared_services_token_service__WEBPACK_IMPORTED_MODULE_3__["TokenService"]])
    ], UserOrderListComponent);
    return UserOrderListComponent;
}());



/***/ }),

/***/ "./src/app/user/user-order-write/user-order-write.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/user/user-order-write/user-order-write.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user/user-order-write/user-order-write.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/user/user-order-write/user-order-write.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!------ Include the above in your HEAD tag ---------->\r\n<!-- Bootstrap CDN -->\r\n<!-- <link href=\"//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css\" rel=\"stylesheet\" id=\"bootstrap-css\">\r\n<script src=\"//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js\"></script>\r\n<script src=\"//code.jquery.com/jquery-1.11.1.min.js\"></script> -->\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <br>\r\n    <div class=\"col-md-12\">\r\n      <div class=\"col-md-12 col-sm-12 col-xs-12 col-md-push-12 col-sm-push-12\">\r\n\r\n      </div>\r\n      <div class=\"col-md-12 col-sm-12 col-xs-12 col-md-pull-12 col-sm-pull-12\">\r\n        <!--SHIPPING METHOD-->\r\n        <div class=\"panel panel-default\">\r\n          <div class=\"panel-heading text-center\">\r\n            <h4>주문 정보</h4></div>\r\n          <div class=\"panel-body\">\r\n            <table class=\"table\">\r\n              <thead class=\"cyan lighten-4\">\r\n                <tr>\r\n                  <!-- <td><strong>Your Cart: # item</strong></td> -->\r\n                  <td>이미지&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;상품설명</td>\r\n                  <td>가격</td>\r\n                  <td>수량</td>\r\n                  <td>합계</td>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n\r\n                <tr *ngFor=\"let item of cartList\">\r\n                  <!-- <td class=\"col-md-3\"> -->\r\n                  <td>\r\n                    <div class=\"media\">\r\n                      <a class=\"thumbnail pull-left\" href=\"#\"> <img class=\"media-object\" src=\"./assets/ProductImg/{{item.p_img}}.jpg\" style=\"width: 72px; height: 72px;\"> </a>\r\n                      <div class=\"media-body\">\r\n                        <h5 class=\"media-heading\"> {{item.p_name}}</h5>\r\n                        <p>{{item.p_content}}</p>\r\n                      </div>\r\n                    </div>\r\n                  </td>\r\n                  <td>{{item.p_sellprice}}원</td>\r\n                  <td>&nbsp;&nbsp;&nbsp;{{item.camount}}&nbsp;&nbsp;&nbsp;</td>\r\n                  <td>{{item.p_sellprice*item.camount}}원</td>\r\n\r\n                </tr>\r\n\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n        </div>\r\n        <!--SHIPPING METHOD END-->\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- 배송지 -->\r\n\r\n<div class=\"panel-body\">\r\n  <div class=\"form-group\">\r\n    <div class=\"col-md-12\">\r\n      <div class=\"panel-heading text-center\">\r\n        <h4>배송지 정보</h4></div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <div class=\"span1\"></div>\r\n    <div class=\"col-md-6 col-xs-12\">\r\n      <strong>이름</strong>\r\n      <input type=\"text\" name=\"last_name\" class=\"form-control\" value=\"{{loggedUser.uname}}\" />\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <p>* 희망 배송지에 체크하세요.</p>\r\n    <div class=\"col-md-12\"><strong>주소1</strong>\r\n      <input type=\"checkbox\" (ngModel)='addrCheck1' (change)='addrCheckF1()' />\r\n    </div>\r\n    <div class=\"col-md-12\">\r\n      <input type=\"text\" name=\"address1\" class=\"form-control\" value=\"{{loggedUser.uaddr1}}\" />\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <div class=\"col-md-12\"><strong>주소2</strong>\r\n      <input type=\"checkbox\" (ngModel)='addrCheck2' (change)='addrCheckF2()' />\r\n    </div>\r\n    <div class=\"col-md-12\">\r\n      <input type=\"text\" name=\"address2\" class=\"form-control\" value=\"{{loggedUser.uaddr2}}\" />\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <div class=\"col-md-12\"><strong>주소3</strong>\r\n      <input type=\"checkbox\" (ngModel)='addrCheck3' (change)='addrCheckF3()' />\r\n    </div>\r\n    <div class=\"col-md-12\">\r\n      <input type=\"text\" name=\"address3\" class=\"form-control\" value=\"{{loggedUser.uaddr3}}\" />\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <div class=\"col-md-12\">\r\n      <!-- <i class=\"fa fa-map-marker prefix\"></i><br /> -->\r\n      <strong>일회용 주소</strong><input type=\"checkbox\" (ngModel)='addrCheck4' (change)='addrCheckF4()' />\r\n      <btn-daum-address (result)=\"setDaumAddressApi($event)\" [options]=\"daumAddressOptions\"></btn-daum-address>\r\n    </div>\r\n    <div class=\"col-md-12\">\r\n      <input mdbActive type=\"text\" name=\"address4\" class=\"form-control\" [(ngModel)]='oneUseAddr' />\r\n    </div>\r\n  </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n  <div class=\"form-group\">\r\n    <div class=\"col-md-12\"><strong>연락처</strong></div>\r\n    <div class=\"col-md-12\"><input type=\"text\" name=\"phone_number\" class=\"form-control\" value=\"{{loggedUser.uphone}}\" /></div>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <div class=\"col-md-12\"><strong>이메일</strong></div>\r\n    <div class=\"col-md-12\"><input type=\"text\" name=\"email_address\" class=\"form-control\" value=\"{{loggedUser.uid}}\" /></div>\r\n  </div>\r\n</div>\r\n\r\n<!-- 배송지 끝 -->\r\n<!--REVIEW ORDER-->\r\n<div class=\"panel panel-default\">\r\n  <div class=\"panel-heading text-center\">\r\n    <h4>결재 정보</h4>\r\n  </div>\r\n  <div class=\"panel-body\">\r\n    <div class=\"col-md-12\">\r\n      <strong>물품가격합계</strong>\r\n      <div class=\"pull-right\"><span>{{totalPrice}}원</span></div>\r\n    </div>\r\n    <div class=\"col-md-12\">\r\n      <strong>배송비</strong>\r\n      <div class=\"pull-right\"><span>2500원</span></div>\r\n    </div>\r\n    <div class=\"col-md-12\">\r\n      <strong>총 가격</strong>\r\n      <div class=\"pull-right\"><span>{{totalPrice+2500}}원</span><span></span></div>\r\n      <hr>\r\n    </div>\r\n\r\n    <button type=\"button\" class=\"btn btn-primary btn-lg btn-block\" (click)=\"checkOut()\">결재하기</button>\r\n\r\n  </div>\r\n\r\n</div>\r\n<!--REVIEW ORDER END-->\r\n"

/***/ }),

/***/ "./src/app/user/user-order-write/user-order-write.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/user/user-order-write/user-order-write.component.ts ***!
  \*********************************************************************/
/*! exports provided: UserOrderWriteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserOrderWriteComponent", function() { return UserOrderWriteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/product.service */ "./src/app/shared/services/product.service.ts");
/* harmony import */ var _shared_models_order__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/models/order */ "./src/app/shared/models/order.ts");
/* harmony import */ var _shared_models_orderDetail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/models/orderDetail */ "./src/app/shared/models/orderDetail.ts");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var _shared_services_token_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/services/token.service */ "./src/app/shared/services/token.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var UserOrderWriteComponent = /** @class */ (function () {
    function UserOrderWriteComponent(productService, authService, tokenService, router) {
        this.productService = productService;
        this.authService = authService;
        this.tokenService = tokenService;
        this.router = router;
        this.orderList = [];
        this.orderLists = [];
        this.cartList = [];
        this.totalPrice = 0;
        this.order = new _shared_models_order__WEBPACK_IMPORTED_MODULE_2__["Order"]();
        this.orderDetails = [];
        this.addrCheck1 = 0;
        this.addrCheck2 = 0;
        this.addrCheck3 = 0;
        this.addrCheck4 = 0;
        //daum 주소 api
        this.daumAddressOptions = {
            class: ['btn', 'btn-primary']
        };
    }
    UserOrderWriteComponent.prototype.setDaumAddressApi = function (data) {
        this.oneUseAddr = data.zip + " " + data.addr;
    };
    UserOrderWriteComponent.prototype.ngOnInit = function () {
        this.loggedUser = this.authService.getLoggedInUser();
        // if(this.tokenService.isToken('orderWriteLists')){
        //   this.cartList=this.tokenService.getToken('orderWriteLists');
        // }else{
        if (this.tokenService.getToken('fromCart') == true) {
            this.orderList = this.tokenService.getToken('cartToOrder');
            this.orderListToOrderWrite();
        }
        else if (this.tokenService.getToken('fromCart') == false) {
            this.cartList[0] = this.tokenService.getToken('OWcart');
            // this.tokenService.saveToken('orderWriteLists',this.cartList);
            this.getTotalPrice();
        }
        // }
    };
    UserOrderWriteComponent.prototype.orderListToOrderWrite = function () {
        var _this = this;
        // 장바구니에서 선택한 상품의 CNO로 ProductService를 통해 Spring에 요청함
        console.log(this.orderList);
        this.productService.orderListToOrderWrite(this.orderList)
            .subscribe(function (carts) {
            _this.cartList = carts;
            _this.tokenService.saveToken('orderWriteLists', _this.cartList);
            _this.getTotalPrice();
        });
    };
    //결재하기 자바스크립트 체크로직
    UserOrderWriteComponent.prototype.checkOut = function () {
        var _this = this;
        //주문 테이블(TM_ORDER)
        console.log('in the checkOut');
        //배송지 체크에 따라 적용 주소 변경
        if ((this.addrCheck1 + this.addrCheck2 + this.addrCheck3 + this.addrCheck4) > 1) {
            alert('배송지를 하나만 선택하세요');
            return;
        }
        else if (this.addrCheck1 == 1) {
            this.order.oaddr = this.authService.getLoggedInUser().uaddr1;
        }
        else if (this.addrCheck2 == 1) {
            this.order.oaddr = this.authService.getLoggedInUser().uaddr2;
        }
        else if (this.addrCheck3 == 1) {
            this.order.oaddr = this.authService.getLoggedInUser().uaddr3;
        }
        else if (this.addrCheck4 == 1) {
            this.order.oaddr = this.oneUseAddr;
        }
        else {
            alert('배송지를 선택하세요');
            return;
        }
        console.log(this.order.oaddr);
        //주문테이블에 주문객체 삽입
        this.order.uid = this.authService.getLoggedInUser().uid;
        this.order.ototal = this.totalPrice;
        this.productService.checkOutOrder(this.order).subscribe(function (data) {
            //주문상세 테이블(TM_ORDER_DETAIL)에 삽입할 주문상세 배열 생성
            for (var i = 0; i < _this.cartList.length; i++) {
                _this.orderDetails[i] = new _shared_models_orderDetail__WEBPACK_IMPORTED_MODULE_3__["OrderDetail"]();
                _this.orderDetails[i].odimg = _this.cartList[i].p_img;
                _this.orderDetails[i].odpname = _this.cartList[i].p_name;
                _this.orderDetails[i].odpprice = _this.cartList[i].p_sellprice;
                _this.orderDetails[i].odpamount = _this.cartList[i].camount;
            }
            console.log('after For');
            //주문상세 테이블에 주문상세 배열 삽입
            _this.productService.checkOutOrderDetail(_this.orderDetails).subscribe(function (data) {
                //구매완료 후 장바구니에서 삭제
                for (var i = 0; i < _this.cartList.length; i++) {
                    _this.productService.removeFromCart(_this.cartList[i].cno).subscribe(function (data) {
                    });
                }
                alert("구매가 완료 되었습니다.");
                _this.router.navigate(["/users", { outlets: { profileOutlet: ['order-list'] } }]);
            });
        });
    };
    //물품 + 배송비 => 총 가격
    UserOrderWriteComponent.prototype.getTotalPrice = function () {
        var i = 0;
        while (i < this.cartList.length) {
            this.totalPrice += this.cartList[i].p_sellprice * this.cartList[i].camount;
            i++;
            console.log(this.totalPrice);
        }
    };
    //주소 체크박스 선택/해제 시 Check값 Toggle
    UserOrderWriteComponent.prototype.addrCheckF1 = function () {
        if (this.addrCheck1 == 0) {
            this.addrCheck1 = 1;
        }
        else {
            this.addrCheck1 = 0;
        }
        console.log(this.addrCheck1);
    };
    UserOrderWriteComponent.prototype.addrCheckF2 = function () {
        if (this.addrCheck2 == 0) {
            this.addrCheck2 = 1;
        }
        else {
            this.addrCheck2 = 0;
        }
        console.log(this.addrCheck2);
    };
    UserOrderWriteComponent.prototype.addrCheckF3 = function () {
        if (this.addrCheck3 == 0) {
            this.addrCheck3 = 1;
        }
        else {
            this.addrCheck3 = 0;
        }
        console.log(this.addrCheck3);
    };
    UserOrderWriteComponent.prototype.addrCheckF4 = function () {
        if (this.addrCheck4 == 0) {
            this.addrCheck4 = 1;
        }
        else {
            this.addrCheck4 = 0;
        }
        console.log(this.addrCheck4);
    };
    UserOrderWriteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-order-write',
            template: __webpack_require__(/*! ./user-order-write.component.html */ "./src/app/user/user-order-write/user-order-write.component.html"),
            styles: [__webpack_require__(/*! ./user-order-write.component.css */ "./src/app/user/user-order-write/user-order-write.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"],
            _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _shared_services_token_service__WEBPACK_IMPORTED_MODULE_5__["TokenService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], UserOrderWriteComponent);
    return UserOrderWriteComponent;
}());



/***/ }),

/***/ "./src/app/user/user.component.html":
/*!******************************************!*\
  !*** ./src/app/user/user.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\r\n<br>\r\n\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-4\">\r\n      <ul class=\"list-group\">\r\n        <li class=\"list-group-item list-group-item-action\">\r\n          <a [routerLink]=\"['/users', {outlets: {'profileOutlet': ['order-list']}}]\">주문목록</a>\r\n        </li>\r\n        <li class=\"list-group-item list-group-item-action\">\r\n          <a [routerLink]=\"['/users', {outlets: {'profileOutlet': ['user-info']}}]\">회원 정보 수정</a>\r\n        </li>\r\n        <li class=\"list-group-item list-group-item-action\">\r\n          <a [routerLink]=\"['/users', {outlets: {'profileOutlet': ['cart-items']}}]\">장바구니</a>\r\n        </li>\r\n        <li class=\"list-group-item list-group-item-action\">\r\n          <a [routerLink]=\"['/users', {outlets: {'profileOutlet': ['qna-list']}}]\">게시물 관리</a>\r\n        </li>\r\n        <!-- <li class=\"list-group-item list-group-item-action\">\r\n          <a [routerLink]=\"['/users', {outlets: {'profileOutlet': ['order-write']}}]\">orderwirte 나중에 상품상세쪽으로</a>\r\n        </li> -->\r\n      </ul>\r\n    </div>\r\n    <div class=\"col-sm-8\">\r\n      <router-outlet name=\"profileOutlet\"></router-outlet>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/user/user.component.scss":
/*!******************************************!*\
  !*** ./src/app/user/user.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".list-group .list-group-item-action:hover {\n  border: 1px solid #BDBDBD;\n  font-size: 20px;\n  font-weight: bold; }\n"

/***/ }),

/***/ "./src/app/user/user.component.ts":
/*!****************************************!*\
  !*** ./src/app/user/user.component.ts ***!
  \****************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
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

// import { AuthService } from "../shared/services/auth.service";
var UserComponent = /** @class */ (function () {
    // public authService: AuthService
    function UserComponent() {
    }
    UserComponent.prototype.ngOnInit = function () { };
    UserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-user",
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.scss */ "./src/app/user/user.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/app/user/user.module.ts":
/*!*************************************!*\
  !*** ./src/app/user/user.module.ts ***!
  \*************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _user_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user.routing */ "./src/app/user/user.routing.ts");
/* harmony import */ var _user_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _user_account_user_account_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-account/user-account.component */ "./src/app/user/user-account/user-account.component.ts");
/* harmony import */ var _user_favourite_products_user_favourite_products_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-favourite-products/user-favourite-products.component */ "./src/app/user/user-favourite-products/user-favourite-products.component.ts");
/* harmony import */ var _user_cart_items_user_cart_items_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user-cart-items/user-cart-items.component */ "./src/app/user/user-cart-items/user-cart-items.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _user_order_write_user_order_write_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user-order-write/user-order-write.component */ "./src/app/user/user-order-write/user-order-write.component.ts");
/* harmony import */ var _user_order_list_user_order_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./user-order-list/user-order-list.component */ "./src/app/user/user-order-list/user-order-list.component.ts");
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shared/services/user.service */ "./src/app/shared/services/user.service.ts");
/* harmony import */ var _shared_services_product_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../shared/services/product.service */ "./src/app/shared/services/product.service.ts");
/* harmony import */ var _shared_services_auth_gaurd__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../shared/services/auth_gaurd */ "./src/app/shared/services/auth_gaurd.ts");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var ng2_daum_address__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng2-daum-address */ "./node_modules/ng2-daum-address/index.js");
/* harmony import */ var ng2_daum_address__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(ng2_daum_address__WEBPACK_IMPORTED_MODULE_15__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Core Dependencies



// Configuration and Services

// Components












var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    UserModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"], ng2_daum_address__WEBPACK_IMPORTED_MODULE_15__["NgDaumAddressModule"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(_user_routing__WEBPACK_IMPORTED_MODULE_3__["UserRoutes"])],
            declarations: [
                _user_component__WEBPACK_IMPORTED_MODULE_4__["UserComponent"],
                _user_account_user_account_component__WEBPACK_IMPORTED_MODULE_5__["UserAccountComponent"],
                _user_favourite_products_user_favourite_products_component__WEBPACK_IMPORTED_MODULE_6__["UserFavouriteProductsComponent"],
                _user_cart_items_user_cart_items_component__WEBPACK_IMPORTED_MODULE_7__["UserCartItemsComponent"],
                _user_order_write_user_order_write_component__WEBPACK_IMPORTED_MODULE_9__["UserOrderWriteComponent"],
                _user_order_list_user_order_list_component__WEBPACK_IMPORTED_MODULE_10__["UserOrderListComponent"]
            ],
            providers: [
                _shared_services_user_service__WEBPACK_IMPORTED_MODULE_11__["UserService"],
                _shared_services_product_service__WEBPACK_IMPORTED_MODULE_12__["ProductService"],
                _shared_services_auth_gaurd__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"],
                _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_14__["AuthService"]
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NO_ERRORS_SCHEMA"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], UserModule);
    return UserModule;
}());



/***/ }),

/***/ "./src/app/user/user.routing.ts":
/*!**************************************!*\
  !*** ./src/app/user/user.routing.ts ***!
  \**************************************/
/*! exports provided: UserRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRoutes", function() { return UserRoutes; });
/* harmony import */ var _user_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _user_account_user_account_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-account/user-account.component */ "./src/app/user/user-account/user-account.component.ts");
/* harmony import */ var _user_favourite_products_user_favourite_products_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-favourite-products/user-favourite-products.component */ "./src/app/user/user-favourite-products/user-favourite-products.component.ts");
/* harmony import */ var _user_cart_items_user_cart_items_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-cart-items/user-cart-items.component */ "./src/app/user/user-cart-items/user-cart-items.component.ts");
/* harmony import */ var _user_order_write_user_order_write_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-order-write/user-order-write.component */ "./src/app/user/user-order-write/user-order-write.component.ts");
/* harmony import */ var _user_order_list_user_order_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-order-list/user-order-list.component */ "./src/app/user/user-order-list/user-order-list.component.ts");
/* harmony import */ var _shared_services_auth_gaurd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/services/auth_gaurd */ "./src/app/shared/services/auth_gaurd.ts");
/* harmony import */ var _notice_qna_qna_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../notice/qna/qna.component */ "./src/app/notice/qna/qna.component.ts");








var UserRoutes = [
    {
        path: "users",
        component: _user_component__WEBPACK_IMPORTED_MODULE_0__["UserComponent"],
        children: [
            {
                path: "",
                component: _user_order_list_user_order_list_component__WEBPACK_IMPORTED_MODULE_5__["UserOrderListComponent"],
                outlet: "profileOutlet",
                canActivate: [_shared_services_auth_gaurd__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]]
            },
            {
                path: "user-info",
                component: _user_account_user_account_component__WEBPACK_IMPORTED_MODULE_1__["UserAccountComponent"],
                outlet: "profileOutlet",
                canActivate: [_shared_services_auth_gaurd__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]]
            },
            {
                path: "favourite-products",
                component: _user_favourite_products_user_favourite_products_component__WEBPACK_IMPORTED_MODULE_2__["UserFavouriteProductsComponent"],
                outlet: "profileOutlet"
            },
            {
                path: "cart-items",
                component: _user_cart_items_user_cart_items_component__WEBPACK_IMPORTED_MODULE_3__["UserCartItemsComponent"],
                outlet: "profileOutlet",
                canActivate: [_shared_services_auth_gaurd__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]]
            },
            {
                path: "order-write",
                component: _user_order_write_user_order_write_component__WEBPACK_IMPORTED_MODULE_4__["UserOrderWriteComponent"],
                outlet: "profileOutlet",
                canActivate: [_shared_services_auth_gaurd__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]]
            },
            {
                path: "order-list",
                component: _user_order_list_user_order_list_component__WEBPACK_IMPORTED_MODULE_5__["UserOrderListComponent"],
                outlet: "profileOutlet",
                canActivate: [_shared_services_auth_gaurd__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]]
            },
            {
                path: "qna-list",
                component: _notice_qna_qna_component__WEBPACK_IMPORTED_MODULE_7__["QnaComponent"],
                outlet: "profileOutlet",
                canActivate: [_shared_services_auth_gaurd__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]]
            }
        ]
    }
];


/***/ })

}]);
//# sourceMappingURL=notice-notice-module~user-user-module.js.map