(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["index-index-module~notice-notice-module~product-product-module"],{

/***/ "./src/app/index/index.component.html":
/*!********************************************!*\
  !*** ./src/app/index/index.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Carousel -->\r\n<div class=\"container\">\r\n  <div class=\"owl-carousel banner owl-theme\">\r\n    <div class=\"item\">\r\n      <img class=\"d-block w-100\" src=\"../../assets/img/banner_1.jpg\" alt=\"First slide\">\r\n    </div>\r\n    <div class=\"item\">\r\n      <img class=\"d-block w-100\" src=\"../../assets/img/banner_2.jpg\" alt=\"Second slide\">\r\n    </div>\r\n    <div class=\"item\">\r\n      <img class=\"d-block w-100\" src=\"../../assets/img/banner_3.jpg\" alt=\"Third slide\">\r\n    </div>\r\n    <div class=\"item\">\r\n      <img class=\"d-block w-100\" src=\"../../assets/img/banner_4.jpg\" alt=\"Fourth slide\">\r\n    </div>\r\n  </div>\r\n  <app-best-product></app-best-product>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/index/index.component.scss":
/*!********************************************!*\
  !*** ./src/app/index/index.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/index/index.component.ts":
/*!******************************************!*\
  !*** ./src/app/index/index.component.ts ***!
  \******************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/services/user.service */ "./src/app/shared/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var IndexComponent = /** @class */ (function () {
    function IndexComponent(userService) {
        this.userService = userService;
        console.log(userService.loginUser.uid);
        console.log(userService.loginUser.uname);
        console.log(userService.loginUser.uaddr1);
    }
    IndexComponent.prototype.ngOnInit = function () {
        $(document).ready(function () {
            $(".banner").owlCarousel({
                autoHeight: true,
                center: true,
                nav: true,
                items: 1,
                margin: 30,
                loop: false,
                autoplay: true,
                autoplayTimeout: 3000,
                autoplayHoverPause: true
            });
        });
    };
    IndexComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-index",
            template: __webpack_require__(/*! ./index.component.html */ "./src/app/index/index.component.html"),
            styles: [__webpack_require__(/*! ./index.component.scss */ "./src/app/index/index.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], IndexComponent);
    return IndexComponent;
}());



/***/ }),

/***/ "./src/app/product/best-product/best-product.component.html":
/*!******************************************************************!*\
  !*** ./src/app/product/best-product/best-product.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Section: Products v.2-->\r\n<section class=\"section pb-3\">\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-md-6\">\r\n      <blockquote class=\"blockquote float-left bq-primary\">\r\n        <h3 class=\"bq-title\">Our Best Products</h3>\r\n      </blockquote>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n      <a class=\"btn btn-default font-weight-bold float-right\" [routerLink]=\"[ '/products/all-products' ]\">View All</a>\r\n    </div>\r\n  </div>\r\n  <owl-carousel [options]=\"options\" [items]=\"productList\" [carouselClasses]=\"['owl-theme', 'row', 'sliding']\">\r\n    <!--First column-->\r\n    <div class=\"item\" style=\"padding:20px\" *ngFor=\"let product of productList; let i = index\">\r\n      <div class=\" mb-r\">\r\n\r\n        <!--Card-->\r\n        <div class=\"card card-cascade wider\">\r\n\r\n          <!--Card image-->\r\n          <a [routerLink]=\"['/products/product', product.p_code]\" routerLinkActive=\"router-link-active\"\r\n              (click)=\"setProductCode(product.p_code)\">\r\n            <div class=\"view overlay hm-white-slight\">\r\n              <img src=\"./assets/img/{{product.p_img}}.jpg\" class=\"img-fluid\" alt=\"\">\r\n              <a>\r\n                <div class=\"mask waves-effect waves-light\" mdbRippleRadius></div>\r\n              </a>\r\n            </div>\r\n          </a>\r\n        </div>\r\n        <!--/.Card-->\r\n      </div>\r\n      <!--/First column-->\r\n    </div>\r\n  </owl-carousel>\r\n</section>\r\n<!--Section: Products v.2-->\r\n"

/***/ }),

/***/ "./src/app/product/best-product/best-product.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/product/best-product/best-product.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".section .section-heading {\n  margin-top: 2rem;\n  margin-bottom: 4rem; }\n\n.section-heading {\n  text-align: center; }\n\n.section-description {\n  margin-left: 5%;\n  margin-right: 5%; }\n\n.section-description {\n  color: #757575;\n  margin-bottom: 4rem;\n  margin-left: 15%;\n  margin-right: 15%;\n  text-align: center; }\n\n.section img {\n  max-width: 100%;\n  height: auto; }\n\n.card.card-cascade.narrower {\n  margin-top: 20px; }\n\n.card.card-cascade {\n  width: 100%; }\n\n.card:not([class*=\"card-outline-\"]) {\n  border: 0; }\n\n.card.card-cascade.narrower .view {\n  margin-left: 4%;\n  margin-right: 4%;\n  margin-top: -20px; }\n\n.card.card-cascade .view {\n  border-radius: 4px; }\n\n.btn-floating:hover,\n.card-overlay,\n.card.card-cascade .view,\n.colorful-select .dropdown-content li a:hover,\n.colorful-select .dropdown-content li span:hover,\n.comments-list img,\n.modal-dialog.cascading-modal.modal-avatar .modal-header img,\n.reply-form img,\n.testimonial-carousel .testimonial .avatar img,\n.z-depth-2 {\n  box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); }\n\n.card.card-cascade .card-body {\n  padding-top: 1.8rem; }\n\n.btn .fa,\n.card .card-body {\n  position: relative; }\n\n.card .rating {\n  color: #ffa000; }\n\n.rating {\n  list-style-type: none; }\n\n.no-padding .fa,\n.rating {\n  padding: 0; }\n\n.rating li {\n  display: inline-block; }\n\n.no-padding .fa,\n.rating {\n  padding: 0; }\n\n.card-text {\n  line-height: 20px;\n  height: 60px;\n  overflow: hidden; }\n\n.card .card-footer {\n  background-color: transparent; }\n\n.card .card-footer .left {\n  float: left; }\n\n.card .card-footer .right {\n  float: right;\n  display: flex; }\n\n.card .card-footer .right a.active {\n  color: #d50000; }\n\n.card .card-footer .right a {\n  color: #757575;\n  margin-left: 1rem;\n  transition: 0.4s; }\n"

/***/ }),

/***/ "./src/app/product/best-product/best-product.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/product/best-product/best-product.component.ts ***!
  \****************************************************************/
/*! exports provided: BestProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BestProductComponent", function() { return BestProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/product.service */ "./src/app/shared/services/product.service.ts");
/* harmony import */ var _shared_services_token_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/token.service */ "./src/app/shared/services/token.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BestProductComponent = /** @class */ (function () {
    function BestProductComponent(productService, tokenService) {
        this.productService = productService;
        this.tokenService = tokenService;
        this.bestProducts = [];
    }
    BestProductComponent.prototype.ngOnInit = function () {
        this.options = {
            dots: false,
            responsive: {
                "0": { items: 1, margin: 5 },
                "430": { items: 2, margin: 5 },
                "550": { items: 3, margin: 5 },
                "670": { items: 4, margin: 5 }
            },
            autoplay: true,
            loop: true,
            autoplayTimeout: 3000,
            lazyLoad: true
        };
        this.getAllProducts();
    };
    BestProductComponent.prototype.getAllProducts = function () {
        var _this = this;
        if (this.tokenService.isToken("productListToken")) {
            this.productList = this.tokenService.getToken("productListToken");
        }
        else {
            this.productService.getProducts()
                .subscribe(function (productList) {
                _this.tokenService.saveToken("productListToken", productList);
                _this.productList = productList;
            });
        }
    };
    BestProductComponent.prototype.setProductCode = function (p_code) {
        this.productService.setProductCode(p_code);
        if (this.tokenService.isToken("pcodeToken")) {
            this.tokenService.removeToken("pcodeToken");
        }
        this.tokenService.saveToken("pcodeToken", p_code);
        this.p_code = p_code;
    };
    BestProductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-best-product",
            template: __webpack_require__(/*! ./best-product.component.html */ "./src/app/product/best-product/best-product.component.html"),
            styles: [__webpack_require__(/*! ./best-product.component.scss */ "./src/app/product/best-product/best-product.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"],
            _shared_services_token_service__WEBPACK_IMPORTED_MODULE_2__["TokenService"]])
    ], BestProductComponent);
    return BestProductComponent;
}());



/***/ }),

/***/ "./src/app/product/product-detail/product-detail.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/product/product-detail/product-detail.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-4\">\r\n      <div class=\"product-image\">\r\n        <div class=\"view hm-zoom z-depth-2\" style=\"cursor: pointer\">\r\n          <img src=\"./assets/img/{{product.p_img}}.jpg\" [alt]=\"product.p_name\" width=\"100%\" class=\"img-fluid rounded\">\r\n\r\n        </div>\r\n        <div class=\"z-depth-1\" style=\"margin-top:15px\">\r\n          <ul class=\"list-group\">\r\n            <li class=\"list-group-item font-weight-bold\"> 상품 가격:\r\n              <span style=\"margin-left:15px; color:crimson\">\r\n                <i class=\"fa fa-inr\" aria-hidden=\"true\"></i> {{product.p_sellPrice}}</span>\r\n            </li>\r\n            <li class=\"list-group-item font-weight-bold\"> 상품 판매자:\r\n              <span style=\"margin-left:15px; color:darkblue\">\r\n                <i class=\"fa fa-building\" aria-hidden=\"true\"></i> 토마토마 </span>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-sm-7\">\r\n      <div class=\"product-detail z-depth-1\">\r\n        <h5 class=\"product-head font-weight-bold\">상품 상세 정보</h5>\r\n        <table class=\"table\" cellspacing=\"0\" style=\"max-height: 28px\">\r\n          <tbody>\r\n            <tr>\r\n              <th scope=\"row\" class=\"font-weight-bold\">상품 이름</th>\r\n              <td>{{product.p_name}}</td>\r\n            </tr>\r\n            <tr>\r\n              <th scope=\"row\" class=\"font-weight-bold\">상품 설명</th>\r\n              <td>{{product.p_content}}</td>\r\n            </tr>\r\n            <tr>\r\n              <th scope=\"row\" class=\"font-weight-bold\">상품 카테고리</th>\r\n              <td>{{product.p_kind}}</td>\r\n            </tr>\r\n            <tr>\r\n              <th scope=\"row\" class=\"font-weight-bold\">구입할 수량</th>\r\n              <td><input [(ngModel)]='pQuantity' />\r\n                <button (click)='pQuantityUp()'><i class=\"fa fa-plus\" aria-hidden=\"true\"></i></button>\r\n                <button (click)='pQuantityDown()'><i class=\"fa fa-minus\" aria-hidden=\"true\"></i></button>\r\n              </td>\r\n            </tr>\r\n            <!-- <tr>\r\n              <th scope=\"row\">상품 추가 날짜</th>\r\n              <td>{{product.productAdded * 1000 | date}}</td>\r\n            </tr> -->\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n\r\n        <li>\r\n         <span>\r\n          <button type=\"button\" class=\"btn btn-outline-warning waves-effect font-weight-bold\"\r\n              (click)=\"addToCart()\">장바구니담기</button>\r\n          <button type=\"button\" class=\"btn btn-warning font-weight-bold\" (click)=\"gotoOrderWirte()\">구매하기</button>\r\n          </span>\r\n        </li>\r\n\r\n    </div>\r\n\r\n\r\n    <div class=\"col-sm-2\">\r\n      <!-- <div class=\"product-ship border border-dark\"></div> -->\r\n    </div>\r\n  </div>\r\n</div>\r\n<br>\r\n<app-product-review></app-product-review>\r\n<br>\r\n<app-product-qna></app-product-qna>\r\n"

/***/ }),

/***/ "./src/app/product/product-detail/product-detail.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/product/product-detail/product-detail.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".product-detail .product-head {\n  padding: 10px;\n  font-weight: 500; }\n\n.product-detail .table th {\n  width: 152px; }\n\n.product-ship {\n  height: 15rem; }\n\nli {\n  list-style: none; }\n"

/***/ }),

/***/ "./src/app/product/product-detail/product-detail.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/product/product-detail/product-detail.component.ts ***!
  \********************************************************************/
/*! exports provided: ProductDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailComponent", function() { return ProductDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_models_product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/models/product */ "./src/app/shared/models/product.ts");
/* harmony import */ var _shared_services_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/product.service */ "./src/app/shared/services/product.service.ts");
/* harmony import */ var _shared_loader_spinner_loader_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/loader-spinner/loader-spinner */ "./src/app/shared/loader-spinner/loader-spinner.ts");
/* harmony import */ var _shared_services_token_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/services/token.service */ "./src/app/shared/services/token.service.ts");
/* harmony import */ var _shared_models_cart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/models/cart */ "./src/app/shared/models/cart.ts");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ProductDetailComponent = /** @class */ (function () {
    function ProductDetailComponent(route, productService, spinnerService, authService, router, tokenService) {
        this.route = route;
        this.productService = productService;
        this.spinnerService = spinnerService;
        this.authService = authService;
        this.router = router;
        this.tokenService = tokenService;
        this.carts = [];
        this.pQuantity = 1;
        this.product = new _shared_models_product__WEBPACK_IMPORTED_MODULE_2__["Product"]();
    }
    ProductDetailComponent.prototype.ngOnInit = function () {
        // this.sub = this.route.params.subscribe(params => {
        //   const id = params["id"]; // (+) converts string 'id' to a number
        //   this.getProductDetail(id);
        // });
        var _this = this;
        // if(this.tokenService.isToken("pcodeToken")){
        //   this.p_code = this.tokenService.getToken("pcodeToken");
        // }else{
        //
        // }
        this.p_code = this.tokenService.getToken("p_code");
        this.productService.getProductById(this.p_code)
            .subscribe(function (product) {
            _this.product = product;
            _this.tokenService.removeToken("p_code");
            _this.tokenService.saveToken("p_code", _this.product.p_code);
        });
        // alert(this.tokenService.getToken("p_code"));
    };
    // getOneProductFromToken(p_code){
    //   var result = this.tokenService.getToken("productListToken").find(function (item) {
    //       return item.p_code === p_code;
    //   });
    // }
    ProductDetailComponent.prototype.setProductCode = function (p_code) {
        this.productService.setProductCode(p_code);
    };
    ProductDetailComponent.prototype.getProductDetail = function (p_code) {
        // this.spinnerService.show();
        // const x = this.productService.getProductById(p_code);
        // x.snapshotChanges().subscribe(product => {
        //   this.spinnerService.hide();
        //   const y = product.payload.toJSON() as Product;
        //
        //   y["$key"] = id;
        //   this.product = y;
        // });
    };
    ProductDetailComponent.prototype.addToCart = function () {
        var _this = this;
        if (this.authService.getLoggedInUser() == null) {
            alert('로그인 후 이용해주세요.');
            this.router.navigate(['/index/login']);
            return;
        }
        this.cart = new _shared_models_cart__WEBPACK_IMPORTED_MODULE_6__["Cart"]();
        this.cart.uid = this.authService.getLoggedInUser().uid;
        this.cart.pcode = this.product.p_code;
        this.cart.camount = this.pQuantity;
        this.productService.addToCart(this.cart).subscribe(function (cart) {
            _this.cart = cart;
            alert('장바구니에 담았습니다.');
        });
    };
    ProductDetailComponent.prototype.gotoOrderWirte = function () {
        if (this.authService.getLoggedInUser() == null) {
            alert('로그인 후 이용해주세요.');
            this.router.navigate(['/index/login']);
            return;
        }
        this.cart = new _shared_models_cart__WEBPACK_IMPORTED_MODULE_6__["Cart"]();
        this.cart.uid = this.authService.getLoggedInUser().uid;
        this.cart.pcode = this.product.p_code;
        this.cart.camount = this.pQuantity;
        this.cart.p_img = this.product.p_img;
        this.cart.p_sellprice = this.product.p_sellPrice;
        this.cart.p_name = this.product.p_name;
        this.cart.p_kind = this.product.p_kind;
        this.cart.p_content = this.product.p_content;
        if (this.tokenService.isToken('OWCart')) {
            this.tokenService.updateToken('OWcart', this.cart);
        }
        else {
            this.tokenService.saveToken('OWcart', this.cart);
        }
        if (this.tokenService.isToken('fromCart')) {
            this.tokenService.updateToken('fromCart', false);
        }
        else {
            this.tokenService.saveToken('fromCart', false);
        }
        //this.productService.cart=this.cart;
        //this.productService.fromCart=false;
        console.log(this.cart);
        this.router.navigate(["/users", { outlets: { profileOutlet: ['order-write'] } }]);
    };
    ProductDetailComponent.prototype.pQuantityUp = function () {
        ++this.pQuantity;
    };
    ProductDetailComponent.prototype.pQuantityDown = function () {
        if (this.pQuantity > 1)
            --this.pQuantity;
        else
            alert('더 이상 줄일 수 없습니다.');
    };
    ProductDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-product-detail",
            template: __webpack_require__(/*! ./product-detail.component.html */ "./src/app/product/product-detail/product-detail.component.html"),
            styles: [__webpack_require__(/*! ./product-detail.component.scss */ "./src/app/product/product-detail/product-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _shared_services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"],
            _shared_loader_spinner_loader_spinner__WEBPACK_IMPORTED_MODULE_4__["LoaderSpinnerService"],
            _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _shared_services_token_service__WEBPACK_IMPORTED_MODULE_5__["TokenService"]])
    ], ProductDetailComponent);
    return ProductDetailComponent;
}());



/***/ }),

/***/ "./src/app/product/product-list/product-list.component.html":
/*!******************************************************************!*\
  !*** ./src/app/product/product-list/product-list.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\r\n<div class=\"container\">\r\n  <!-- <div class=\"row\" *ngIf=\"authService.isAdmin()\">\r\n    <div class=\"col-sm\">\r\n      <div class=\"float-right\">\r\n        <button type=\"button\" class=\"btn btn-primary waves-light\" data-toggle=\"modal\" data-target=\"#exampleModalLong\">\r\n          Add Product\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div> -->\r\n  <div class=\"row\">\r\n    <div class=\"col-md-3\">\r\n      <div class=\"form-group\">\r\n        <label for=\"kind_select\">카테고리별 조회 :</label>\r\n        <select class=\"form-control\" name=\"\" id=\"kind_select\" [(ngModel)]=\"selectedKind\">\r\n          <option *ngFor=\"let kind of kinds\">{{kind}}</option>\r\n        </select>\r\n      </div>\r\n      <ul class=\"list-group font-weight-bold\">\r\n        <li class=\"list-group-item\">오늘 날짜 : {{ currentDate | date }}</li>\r\n      </ul>\r\n    </div>\r\n    <div class=\"col-md-9\">\r\n      <div class=\"container\">\r\n        <div class=\"row\">\r\n          <!-- List of Products -->\r\n          <div class=\"col-sm-4 mb-2\" *ngFor=\"let product of productList | filterByKind: selectedKind | paginate: { itemsPerPage: 6, currentPage: page }\">\r\n            <div class=\"item\">\r\n              <div class=\" mb-r\">\r\n                <!--Card-->\r\n                <div class=\"card card-cascade wider\">\r\n\r\n                  <div class=\"card-body text-center no-padding\">\r\n                    <!--Category & Title-->\r\n                    <a class=\"text-muted\">\r\n\r\n\r\n\r\n                      <div>\r\n\r\n                        <a [routerLink]=\"['/products/product', product.p_code]\" routerLinkActive=\"router-link-active\" (click)=\"setProductCode(product.p_code)\">\r\n                              <img src=\"./assets/img/{{product.p_img}}.jpg\" class=\"product_image\" width=\"200px\" height=\"200px\"/>\r\n                        </a>\r\n                      </div>\r\n                    </a>\r\n                    <p class=\"card-title\">\r\n                      <strong>\r\n                        <a [routerLink]=\"['/products/product', product.p_code]\" routerLinkActive=\"router-link-active\" (click)=\"setProductCode(product.p_code)\">{{ product.p_name }}</a>\r\n                      </strong>\r\n                    </p>\r\n                    <!--Description-->\r\n                    <p class=\"card-text\">{{ product.p_content }}\r\n                    </p>\r\n                    <!--Card footer-->\r\n                    <div class=\"card-footer\">\r\n                      <span class=\"left\">{{ product.p_sellPrice}}원</span>\r\n                      <span class=\"right\">\r\n                        <a placement=\"top\" mdbTooltip=\"Quick Look\" container=\"body\" [routerLink]=\"['/products/product', product.p_code]\">\r\n                          <i class=\"fa fa-eye\"></i>\r\n                        </a>\r\n                        <a placement=\"top\" mdbTooltip=\"Add to Cart\" container=\"body\" (click)=\"addToCart(product)\">\r\n                          <i class=\"fa fa-shopping-cart\"></i>\r\n                        </a>\r\n                        <!-- <a placement=\"top\" mdbTooltip=\"Remove Product\" container=\"body\" *ngIf=\"authService.isAdmin()\" (click)=\"removeProduct(product.$key)\">\r\n                          <i class=\"fa fa-trash\"></i>\r\n                        </a> -->\r\n                      </span>\r\n                    </div>\r\n\r\n                  </div>\r\n                  <!--/.Card content-->\r\n\r\n                </div>\r\n                <!--/.Card-->\r\n\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!-- Pagination -->\r\n        <div class=\"text-center mt-3\">\r\n          <pagination-controls (pageChange)=\"page = $event\"></pagination-controls>\r\n        </div>\r\n      </div>\r\n      <!--/.Card-->\r\n    </div>\r\n  </div>\r\n</div>\r\n<ng2-toasty></ng2-toasty>\r\n"

/***/ }),

/***/ "./src/app/product/product-list/product-list.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/product/product-list/product-list.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".section .section-heading {\n  margin-top: 2rem;\n  margin-bottom: 4rem; }\n\n.section-heading {\n  text-align: center; }\n\n.section-description {\n  margin-left: 5%;\n  margin-right: 5%; }\n\n.section-description {\n  color: #757575;\n  margin-bottom: 4rem;\n  margin-left: 15%;\n  margin-right: 15%;\n  text-align: center; }\n\n.section img {\n  max-width: 100%;\n  height: auto; }\n\n.card.card-cascade.narrower {\n  margin-top: 10px; }\n\n.card.card-cascade {\n  width: 100%; }\n\n.card:not([class*=\"card-outline-\"]) {\n  border: 0; }\n\n.card.card-cascade.narrower .view {\n  margin-left: 4%;\n  margin-right: 4%;\n  margin-top: -20px; }\n\n.card.card-cascade .view {\n  border-radius: 4px; }\n\n.btn-floating:hover,\n.card-overlay,\n.card.card-cascade .view,\n.colorful-select .dropdown-content li a:hover,\n.colorful-select .dropdown-content li span:hover,\n.comments-list img,\n.modal-dialog.cascading-modal.modal-avatar .modal-header img,\n.reply-form img,\n.testimonial-carousel .testimonial .avatar img,\n.z-depth-2 {\n  box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); }\n\n.card.card-cascade .card-body {\n  padding-top: 1.8rem; }\n\n.btn .fa,\n.card .card-body {\n  position: relative; }\n\n.card .rating {\n  color: #ffa000; }\n\n.rating {\n  list-style-type: none; }\n\n.no-padding .fa,\n.rating {\n  padding: 0; }\n\n.rating li {\n  display: inline-block; }\n\n.no-padding .fa,\n.rating {\n  padding: 0; }\n\n.card-text {\n  line-height: 20px;\n  height: 60px;\n  overflow: hidden; }\n\n.card .card-footer {\n  background-color: transparent; }\n\n.card .card-footer .left {\n  float: left; }\n\n.card .card-footer .right {\n  float: right;\n  display: flex; }\n\n.card .card-footer .right a.active {\n  color: #d50000; }\n\n.card .card-footer .right a {\n  color: #757575;\n  margin-left: 1rem;\n  transition: 0.4s; }\n\n.card .card-footer .right a .fa-heart {\n  color: #3f51b5; }\n"

/***/ }),

/***/ "./src/app/product/product-list/product-list.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/product/product-list/product-list.component.ts ***!
  \****************************************************************/
/*! exports provided: ProductListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListComponent", function() { return ProductListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng2_toasty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-toasty */ "./node_modules/ng2-toasty/index.js");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var _shared_services_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/product.service */ "./src/app/shared/services/product.service.ts");
/* harmony import */ var _shared_loader_spinner_loader_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/loader-spinner/loader-spinner */ "./src/app/shared/loader-spinner/loader-spinner.ts");
/* harmony import */ var _shared_services_token_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/services/token.service */ "./src/app/shared/services/token.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_models_cart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/models/cart */ "./src/app/shared/models/cart.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






//**동현


var ProductListComponent = /** @class */ (function () {
    // 동현 변수끝
    function ProductListComponent(authService, productService, spinnerService, toastyConfig, toastyService, tokenService, router) {
        this.authService = authService;
        this.productService = productService;
        this.spinnerService = spinnerService;
        this.toastyConfig = toastyConfig;
        this.toastyService = toastyService;
        this.tokenService = tokenService;
        this.router = router;
        this.currentDate = new Date();
        this.kinds = ["All", "Bakery", "Sauce", "Drink", "Instant", "Snack"];
        this.selectedKind = "All";
        this.page = 1;
        //** 동현 변수
        this.cart = new _shared_models_cart__WEBPACK_IMPORTED_MODULE_7__["Cart"]();
    }
    ProductListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productService.getProducts()
            .subscribe(function (productList) {
            _this.productList = productList;
        });
    };
    ProductListComponent.prototype.setProductCode = function (p_code) {
        this.productService.setProductCode(p_code);
        if (this.tokenService.isToken("p_code")) {
            this.tokenService.removeToken("p_code");
        }
        this.tokenService.saveToken("p_code", p_code);
        this.p_code = p_code;
    };
    ProductListComponent.prototype.getProductByKind = function (p_kind) {
        var _this = this;
        this.productService.getProductByKind(this.selectedKind)
            .subscribe(function (productList) {
            _this.productList = productList;
        });
    };
    ProductListComponent.prototype.removeProduct = function (key) {
        this.productService.deleteProduct(key);
    };
    ProductListComponent.prototype.addFavourite = function (product) {
        this.productService.addFavouriteProduct(product);
    };
    //동현 장바구니에 물품추가기능
    ProductListComponent.prototype.addToCart = function (product) {
        if (this.authService.getLoggedInUser() == null) {
            alert('로그인 후 이용해주세요.');
            this.router.navigate(['/index/login']);
            return;
        }
        this.cart.uid = this.authService.getLoggedInUser().uid;
        this.cart.pcode = product.p_code;
        this.cart.camount = 1;
        this.cart.p_img = product.p_img;
        this.cart.p_sellprice = product.p_sellPrice;
        this.cart.p_name = product.p_name;
        this.cart.p_kind = product.p_kind;
        this.cart.p_content = product.p_content;
        this.productService.addToCart(this.cart).subscribe(function (cart) {
            alert('장바구니에 담았습니다.');
            return;
        });
    };
    ProductListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-product-list",
            template: __webpack_require__(/*! ./product-list.component.html */ "./src/app/product/product-list/product-list.component.html"),
            styles: [__webpack_require__(/*! ./product-list.component.scss */ "./src/app/product/product-list/product-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _shared_services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"],
            _shared_loader_spinner_loader_spinner__WEBPACK_IMPORTED_MODULE_4__["LoaderSpinnerService"],
            ng2_toasty__WEBPACK_IMPORTED_MODULE_1__["ToastyConfig"],
            ng2_toasty__WEBPACK_IMPORTED_MODULE_1__["ToastyService"],
            _shared_services_token_service__WEBPACK_IMPORTED_MODULE_5__["TokenService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], ProductListComponent);
    return ProductListComponent;
}());



/***/ }),

/***/ "./src/app/product/product-qna-detail/product-qna-detail.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/product/product-qna-detail/product-qna-detail.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/product/product-qna-detail/product-qna-detail.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/product/product-qna-detail/product-qna-detail.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<hr class=\"between-sections\">\r\n\r\n<div class=\"card card-cascade wider reverse\">\r\n\r\n  <!-- Card content -->\r\n  <div class=\"card-body card-body-cascade text-center\">\r\n\r\n    <!-- Title -->\r\n    <h4 class=\"card-title\"><strong>상품 문의</strong></h4>\r\n  </div>\r\n\r\n</div>\r\n\r\n<hr class=\"between-sections\">\r\n\r\n<ol class=\"breadcrumb\">\r\n  <li class=\"breadcrumb-item\">\r\n    <a [routerLink]=\"['/index']\">Home</a>\r\n  </li>\r\n  <li class=\"breadcrumb-item\">상품상세</li>\r\n  <li class=\"breadcrumb-item\">\r\n  상품문의\r\n    <!-- delete : (click)=\"removeToken()\" -->\r\n  </li>\r\n</ol>\r\n\r\n<!--Table-->\r\n<table class=\"table table-bordered\">\r\n\r\n  <!--Table body-->\r\n  <tbody>\r\n    <tr>\r\n      <th>제목</th>\r\n      <td colspan=\"3\">{{ productQna?.pq_title }}</td>\r\n    </tr>\r\n    <tr>\r\n      <th>작성자</th>\r\n      <td colspan=\"3\">{{ productQna?.u_id }}</td>\r\n    </tr>\r\n    <tr>\r\n      <th>작성일</th>\r\n      <td>{{ productQna?.pq_date | date:'yyyy-MM-dd' }}</td>\r\n      <th>조회수</th>\r\n      <td>{{ productQna?.pq_hits }}</td>\r\n    </tr>\r\n    <tr>\r\n      <td colspan=\"4\">\r\n        <pre>{{ productQna?.pq_content }}</pre>\r\n      </td>\r\n    </tr>\r\n    <tr *ngIf=\"replyyn !== 'n'\">\r\n      <th class=\"cyan lighten-4\">답변 내용</th>\r\n      <td colspan=\"3\">\r\n        <pre>\r\n          {{ productQna?.pq_reply }}\r\n        </pre>\r\n      </td>\r\n    </tr>\r\n  </tbody>\r\n  <!--Table body-->\r\n\r\n</table>\r\n<!--Table-->\r\n\r\n<button type=\"button\" class=\"btn btn-outline-danger waves-effect\" (click)=\"deleteProductQna()\">\r\n  삭제\r\n</button>\r\n\r\n<button type=\"button\" class=\"btn btn-outline-info waves-effect\" [routerLink]=\"['/products/product', productQna.p_code]\">목록\r\n  <!-- (click)=\"removeToken()\" -->\r\n</button>\r\n\r\n<button type=\"button\" class=\"btn btn-outline-info waves-effect\" id=\"pq_update_button\" [routerLink]=\"['/products/productqna/update']\" (click)=\"setProductQnaObject()\">수정</button>\r\n"

/***/ }),

/***/ "./src/app/product/product-qna-detail/product-qna-detail.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/product/product-qna-detail/product-qna-detail.component.ts ***!
  \****************************************************************************/
/*! exports provided: ProductQnaDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductQnaDetailComponent", function() { return ProductQnaDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_services_product_qna_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/product-qna.service */ "./src/app/shared/services/product-qna.service.ts");
/* harmony import */ var _shared_services_token_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/token.service */ "./src/app/shared/services/token.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProductQnaDetailComponent = /** @class */ (function () {
    function ProductQnaDetailComponent(productQnaService, http, router, tokenService) {
        this.productQnaService = productQnaService;
        this.http = http;
        this.router = router;
        this.tokenService = tokenService;
    }
    ProductQnaDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productQnaService.getProductQnaNoObject().subscribe(function (productQna) {
            _this.tokenService.saveToken("productQnaToken", productQna);
            _this.productQna = productQna;
            return _this.productQna;
        });
    };
    ProductQnaDetailComponent.prototype.setProductQnaObject = function () {
        this.productQna = this.tokenService.getToken("productQnaToken");
        this.productQnaService.setProductQnaObject(this.productQna);
    };
    ProductQnaDetailComponent.prototype.deleteProductQna = function (productQna) {
        var _this = this;
        this.productQnaService.deleteProductQna(this.productQna)
            .subscribe(function () {
            alert("고객님의 상품문의가 삭제되었습니다.");
            _this.router.navigate(['/products/product', _this.productQna.p_code]);
        });
    };
    ProductQnaDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-qna-detail',
            template: __webpack_require__(/*! ./product-qna-detail.component.html */ "./src/app/product/product-qna-detail/product-qna-detail.component.html"),
            styles: [__webpack_require__(/*! ./product-qna-detail.component.css */ "./src/app/product/product-qna-detail/product-qna-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_services_product_qna_service__WEBPACK_IMPORTED_MODULE_2__["ProductQnaService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _shared_services_token_service__WEBPACK_IMPORTED_MODULE_3__["TokenService"]])
    ], ProductQnaDetailComponent);
    return ProductQnaDetailComponent;
}());



/***/ }),

/***/ "./src/app/product/product-qna-update/product-qna-update.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/product/product-qna-update/product-qna-update.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/product/product-qna-update/product-qna-update.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/product/product-qna-update/product-qna-update.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<hr class=\"between-sections\">\r\n\r\n<div class=\"card card-cascade wider reverse\">\r\n\r\n  <!-- Card content -->\r\n  <div class=\"card-body card-body-cascade text-center\">\r\n\r\n    <!-- Title -->\r\n    <h4 class=\"card-title\"><strong>상품 문의 수정</strong></h4>\r\n  </div>\r\n\r\n</div>\r\n\r\n<hr class=\"between-sections\">\r\n\r\n<!-- Default form contact -->\r\n<form name=\"updateForm\" #updateProductQnaForm=\"ngForm\" (ngSubmit)=\"updateProductQna(updateProductQnaForm)\">\r\n  <!--Table-->\r\n  <table class=\"table table-bordered\">\r\n    <!--Table body-->\r\n    <tbody>\r\n      <tr [hidden]=true>\r\n        <th>문의 번호</th>\r\n        <td>\r\n          <input type=\"number\" id=\"exampleForm2\" class=\"form-control\" required [(ngModel)]=\"productQna.pq_no\" [ngModelOptions]=\"{standalone: true}\" />\r\n        </td>\r\n      </tr>\r\n      <tr>\r\n        <th class=\"cyan lighten-4\">제목</th>\r\n        <td>\r\n          <input type=\"text\" id=\"exampleForm2\" class=\"form-control\" placeholder=\"제목을 입력해주세요.\"\r\n            required [(ngModel)]=\"productQna.pq_title\" [ngModelOptions]=\"{standalone: true}\" />\r\n        </td>\r\n      </tr>\r\n      <tr>\r\n        <th class=\"cyan lighten-4\">카테고리</th>\r\n        <td>\r\n          <input type=\"text\" id=\"exampleForm2\" class=\"form-control\" required [(ngModel)]=\"productQna.pq_category\" [ngModelOptions]=\"{standalone: true}\" [disabled]=true/>\r\n        </td>\r\n      </tr>\r\n      <tr>\r\n        <th class=\"cyan lighten-4\">작성자 ID</th>\r\n        <td>\r\n          <input type=\"text\" id=\"exampleForm2\" class=\"form-control\" required [(ngModel)]=\"productQna.u_id\" [ngModelOptions]=\"{standalone: true}\" [disabled]=true/>\r\n        </td>\r\n      </tr>\r\n      <tr>\r\n        <th class=\"cyan lighten-4\">후기 내용</th>\r\n        <td colspan=\"2\">\r\n          <textarea name=\"productQnaContent\" rows=\"8\" cols=\"150\" placeholder=\"내용을 입력해주세요.\" class=\"form-control\" required [(ngModel)]=\"productQna.pq_content\" [ngModelOptions]=\"{standalone: true}\"></textarea>\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n\r\n  <div class=\"text-center mt-4\">\r\n    <button type=\"submit\" class=\"btn btn-outline-danger waves-effect\">수정</button>\r\n    <button type=\"button\" class=\"btn btn-outline-info waves-effect\" [routerLink]=\"['/products/product', productQna.p_code]\">취소</button>\r\n  </div>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/product/product-qna-update/product-qna-update.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/product/product-qna-update/product-qna-update.component.ts ***!
  \****************************************************************************/
/*! exports provided: ProductQnaUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductQnaUpdateComponent", function() { return ProductQnaUpdateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_product_qna_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/product-qna.service */ "./src/app/shared/services/product-qna.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductQnaUpdateComponent = /** @class */ (function () {
    function ProductQnaUpdateComponent(productQnaService, router) {
        this.productQnaService = productQnaService;
        this.router = router;
    }
    ProductQnaUpdateComponent.prototype.ngOnInit = function () {
        this.productQna = this.productQnaService.getProductQnaObject();
    };
    ProductQnaUpdateComponent.prototype.updateProductQna = function () {
        var _this = this;
        this.productQnaService.updateProductQna(this.productQna)
            .subscribe(function () {
            alert("상품 문의가 수정되었습니다.");
            _this.router.navigate(['/products/qna', _this.productQna.pq_no]);
        });
    };
    ProductQnaUpdateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-qna-update',
            template: __webpack_require__(/*! ./product-qna-update.component.html */ "./src/app/product/product-qna-update/product-qna-update.component.html"),
            styles: [__webpack_require__(/*! ./product-qna-update.component.css */ "./src/app/product/product-qna-update/product-qna-update.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_services_product_qna_service__WEBPACK_IMPORTED_MODULE_2__["ProductQnaService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ProductQnaUpdateComponent);
    return ProductQnaUpdateComponent;
}());



/***/ }),

/***/ "./src/app/product/product-qna-write/product-qna-write.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/product/product-qna-write/product-qna-write.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/product/product-qna-write/product-qna-write.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/product/product-qna-write/product-qna-write.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<hr class=\"between-sections\">\r\n\r\n<div class=\"card card-cascade wider reverse\">\r\n\r\n  <!-- Card content -->\r\n  <div class=\"card-body card-body-cascade text-center\">\r\n\r\n    <!-- Title -->\r\n    <h4 class=\"card-title\"><strong>상품 문의 하기</strong></h4>\r\n  </div>\r\n\r\n</div>\r\n\r\n<hr class=\"between-sections\">\r\n\r\n<!-- Default form contact -->\r\n<form (ngSubmit)=\"insertProductQna()\">\r\n  <!--Table-->\r\n  <table class=\"table table-bordered\">\r\n\r\n    <tbody>\r\n      <tr>\r\n        <th>제목</th>\r\n        <td>\r\n          <input type=\"text\" id=\"exampleForm2\" class=\"form-control\" placeholder=\"제목을 입력해주세요.\" required [(ngModel)]=\"productQna.pq_title\" [ngModelOptions]=\"{standalone: true}\" />\r\n        </td>\r\n      </tr>\r\n      <tr [hidden]=true>\r\n        <th>작성자</th>\r\n        <td>\r\n          <input type=\"text\" id=\"exampleForm2\" class=\"form-control\" required [(ngModel)]=\"productQna.u_id\" [ngModelOptions]=\"{standalone: true}\" />\r\n        </td>\r\n      </tr>\r\n      <tr>\r\n        <th>카테고리</th>\r\n        <td>\r\n         <select (change)=\"getProductQnaByCategory($event.target.value)\">\r\n           <option value=\"\" disabled selected>카테고리를 선택해주세요</option>\r\n           <option *ngFor=\"let category of categoryList\" [value]=\"category\">\r\n             {{ category }}\r\n           </option>\r\n         </select>\r\n       </td>\r\n    </tr>\r\n\r\n      <tr>\r\n        <th colspan=\"1\">문의 내용</th>\r\n        <td colspan=\"2\">\r\n          <textarea name=\"qnaContent\" rows=\"8\" cols=\"150\" placeholder=\"내용을 입력해주세요.\" class=\"form-control\" required [(ngModel)]=\"productQna.pq_content\" [ngModelOptions]=\"{standalone: true}\"></textarea>\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n\r\n  <div class=\"text-center mt-4\" [hidden]=\"submit\">\r\n    <button type=\"submit\" class=\"btn btn-outline-danger waves-effect\">등록</button>\r\n    <button type=\"button\" class=\"btn btn-outline-info waves-effect\" [routerLink]=\"['/products/product', productQna.p_code]\">취소</button>\r\n  </div>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/product/product-qna-write/product-qna-write.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/product/product-qna-write/product-qna-write.component.ts ***!
  \**************************************************************************/
/*! exports provided: ProductQnaWriteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductQnaWriteComponent", function() { return ProductQnaWriteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_product_qna_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/product-qna.service */ "./src/app/shared/services/product-qna.service.ts");
/* harmony import */ var _shared_models_productQna__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/models/productQna */ "./src/app/shared/models/productQna.ts");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var _shared_services_product_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/services/product.service */ "./src/app/shared/services/product.service.ts");
/* harmony import */ var _shared_services_token_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/services/token.service */ "./src/app/shared/services/token.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ProductQnaWriteComponent = /** @class */ (function () {
    function ProductQnaWriteComponent(productQnaService, router, authService, productService, tokenService) {
        this.productQnaService = productQnaService;
        this.router = router;
        this.authService = authService;
        this.productService = productService;
        this.tokenService = tokenService;
        this.submit = false;
        this.productQna = new _shared_models_productQna__WEBPACK_IMPORTED_MODULE_3__["ProductQna"];
        this.categoryList = ["상품", "배송"];
    }
    ProductQnaWriteComponent.prototype.ngOnInit = function () {
        this.productQna.u_id = this.authService.getLoggedInUser().uid;
        console.log(this.productQna.p_code);
    };
    ProductQnaWriteComponent.prototype.getProductQnaByCategory = function (pq_category) {
        this.productQna.pq_category = pq_category;
    };
    ProductQnaWriteComponent.prototype.insertProductQna = function () {
        var _this = this;
        this.productQna.p_code = this.tokenService.getToken("p_code");
        this.productQnaService.insertProductQna(this.productQna)
            .subscribe(function () {
            alert("질문이 등록되었습니다.");
            console.log(_this.productQna.pq_category);
            _this.router.navigate(['/products/product', _this.productQna.p_code]);
        });
    };
    ProductQnaWriteComponent.prototype.setProductCode = function (p_code) {
        if (this.tokenService.isToken("p_code")) {
            this.p_code = this.tokenService.getToken("p_code");
        }
        console.log(p_code);
    };
    ProductQnaWriteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-qna-write',
            template: __webpack_require__(/*! ./product-qna-write.component.html */ "./src/app/product/product-qna-write/product-qna-write.component.html"),
            styles: [__webpack_require__(/*! ./product-qna-write.component.css */ "./src/app/product/product-qna-write/product-qna-write.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_services_product_qna_service__WEBPACK_IMPORTED_MODULE_2__["ProductQnaService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _shared_services_product_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"],
            _shared_services_token_service__WEBPACK_IMPORTED_MODULE_6__["TokenService"]])
    ], ProductQnaWriteComponent);
    return ProductQnaWriteComponent;
}());



/***/ }),

/***/ "./src/app/product/product-qna/product-qna.component.css":
/*!***************************************************************!*\
  !*** ./src/app/product/product-qna/product-qna.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/product/product-qna/product-qna.component.html":
/*!****************************************************************!*\
  !*** ./src/app/product/product-qna/product-qna.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<hr class=\"between-sections\">\r\n\r\n<ol class=\"breadcrumb font-weight-bold\">\r\n  <li>상품 문의</li>\r\n</ol>\r\n\r\n<table class=\"table table-responsive-md\">\r\n  <thead class=\"amber lighten-3\">\r\n  <tr>\r\n    <th>번호</th>\r\n    <th>카테고리</th>\r\n    <th>제목</th>\r\n    <th>작성자</th>\r\n    <th>작성일</th>\r\n    <th>조회</th>\r\n\r\n  </tr>\r\n  </thead>\r\n\r\n  <tbody>\r\n\r\n    <tr *ngFor=\"let productQna of productQnas | paginate: { itemsPerPage: 6, currentPage: page }; let i = index\">\r\n    <th>{{i+1}}</th>\r\n    <th>{{productQna.pq_category}}</th>\r\n    <th>\r\n      <a [routerLink]=\"['/products/qna',productQna.pq_no]\" routerLinkActive=\"router-link-active\"\r\n      (click)=\"setProductQnaNo(productQna.pq_no)\">\r\n      {{productQna.pq_title}}\r\n    </a>\r\n    </th>\r\n    <th>{{productQna.u_id}}</th>\r\n    <th>{{productQna.pq_date | date : 'yyyy-MM-dd'}}</th>\r\n    <th>{{productQna.pq_hits}}</th>\r\n\r\n    <!-- <p>{{productQna.pq_content}}</p> -->\r\n  </tr>\r\n\r\n  </tbody>\r\n\r\n  <div class=\"text-center mt-3\">\r\n    <pagination-controls (pageChange)=\"page = $event\"></pagination-controls>\r\n  </div>\r\n\r\n  <button type=\"button\" class=\"btn btn-outline-info waves-effect\" id=\"qna_button\"\r\n    [routerLink]=\"['/products/productqna/write']\">문의하기\r\n  </button>\r\n\r\n</table>\r\n"

/***/ }),

/***/ "./src/app/product/product-qna/product-qna.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/product/product-qna/product-qna.component.ts ***!
  \**************************************************************/
/*! exports provided: ProductQnaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductQnaComponent", function() { return ProductQnaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_product_qna_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/product-qna.service */ "./src/app/shared/services/product-qna.service.ts");
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




var ProductQnaComponent = /** @class */ (function () {
    function ProductQnaComponent(productQnaService, productService, tokenService) {
        this.productQnaService = productQnaService;
        this.productService = productService;
        this.tokenService = tokenService;
        this.page = 1;
    }
    ProductQnaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productService.getProductQna()
            .subscribe(function (productQnas) {
            _this.productQnas = productQnas;
        });
    };
    ProductQnaComponent.prototype.setProductQnaNo = function (pq_no) {
        this.productQnaService.setProductQnaNo(pq_no);
        this.setProductQnaNoObject(pq_no);
    };
    ProductQnaComponent.prototype.setProductQnaNoObject = function (pq_no) {
        var productQna = this.productQnas.find(function (item) {
            return item.pq_no == pq_no;
        });
        this.productQnaService.setProductQnaNoObject(productQna);
        // this.check(review);
    };
    ProductQnaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-qna',
            template: __webpack_require__(/*! ./product-qna.component.html */ "./src/app/product/product-qna/product-qna.component.html"),
            styles: [__webpack_require__(/*! ./product-qna.component.css */ "./src/app/product/product-qna/product-qna.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_services_product_qna_service__WEBPACK_IMPORTED_MODULE_1__["ProductQnaService"],
            _shared_services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"],
            _shared_services_token_service__WEBPACK_IMPORTED_MODULE_3__["TokenService"]])
    ], ProductQnaComponent);
    return ProductQnaComponent;
}());



/***/ }),

/***/ "./src/app/product/product-review-detail/product-review-detail.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/product/product-review-detail/product-review-detail.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/product/product-review-detail/product-review-detail.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/product/product-review-detail/product-review-detail.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<hr class=\"between-sections\">\r\n\r\n<div class=\"card card-cascade wider reverse\">\r\n\r\n  <!-- Card content -->\r\n  <div class=\"card-body card-body-cascade text-center\">\r\n\r\n    <!-- Title -->\r\n    <h4 class=\"card-title\"><strong>상품 후기</strong></h4>\r\n  </div>\r\n\r\n</div>\r\n\r\n<hr class=\"between-sections\">\r\n\r\n<ol class=\"breadcrumb\">\r\n  <li class=\"breadcrumb-item\">\r\n    <a [routerLink]=\"['/index']\">Home</a>\r\n  </li>\r\n  <li class=\"breadcrumb-item\">상품상세</li>\r\n  <li class=\"breadcrumb-item\">\r\n  상품후기\r\n    <!-- delete : (click)=\"removeToken()\" -->\r\n  </li>\r\n</ol>\r\n\r\n<!--Table-->\r\n<table class=\"table table-bordered\">\r\n\r\n  <!--Table body-->\r\n  <tbody>\r\n    <tr>\r\n      <th>제목</th>\r\n      <td colspan=\"3\">{{ review?.rev_title }}</td>\r\n    </tr>\r\n    <tr>\r\n      <th>작성자</th>\r\n      <td colspan=\"3\">{{ review?.u_id }}</td>\r\n    </tr>\r\n    <tr>\r\n      <th>작성일</th>\r\n      <td>{{ review?.rev_date | date:'yyyy-MM-dd' }}</td>\r\n      <th>조회수</th>\r\n      <td>{{ review?.rev_hits }}</td>\r\n    </tr>\r\n    <tr>\r\n      <td colspan=\"4\">\r\n        <pre>{{ review?.rev_content }}</pre>\r\n      </td>\r\n    </tr>\r\n  </tbody>\r\n  <!--Table body-->\r\n\r\n</table>\r\n<!--Table-->\r\n\r\n<button type=\"button\" class=\"btn btn-outline-danger waves-effect\" (click)=\"deleteReview()\">\r\n  삭제\r\n</button>\r\n\r\n<button type=\"button\" class=\"btn btn-outline-info waves-effect\" [routerLink]=\"['/products/product', review.p_code]\">목록\r\n  <!-- (click)=\"removeToken()\" -->\r\n</button>\r\n\r\n<button type=\"button\" class=\"btn btn-outline-info waves-effect\" id=\"review_update_button\" [routerLink]=\"['/products/productreview/update']\" (click)=\"setReviewObject()\" >수정</button>\r\n"

/***/ }),

/***/ "./src/app/product/product-review-detail/product-review-detail.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/product/product-review-detail/product-review-detail.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ProductReviewDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductReviewDetailComponent", function() { return ProductReviewDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_services_review_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/review.service */ "./src/app/shared/services/review.service.ts");
/* harmony import */ var _shared_services_token_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/token.service */ "./src/app/shared/services/token.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProductReviewDetailComponent = /** @class */ (function () {
    function ProductReviewDetailComponent(reviewService, http, tokenService, router) {
        this.reviewService = reviewService;
        this.http = http;
        this.tokenService = tokenService;
        this.router = router;
    }
    ProductReviewDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.reviewService.getReviewNoObject().subscribe(function (review) {
            _this.tokenService.saveToken("reviewToken", review);
            _this.review = review;
            return _this.review;
        });
    };
    ProductReviewDetailComponent.prototype.setReviewObject = function () {
        this.review = this.tokenService.getToken("reviewToken");
        this.reviewService.setReviewObject(this.review);
    };
    ProductReviewDetailComponent.prototype.deleteReview = function (review) {
        var _this = this;
        this.reviewService.deleteReview(this.review)
            .subscribe(function () {
            alert("고객님의 상품후기가 삭제되었습니다.");
            _this.router.navigate(['/products/product', _this.review.p_code]);
        });
    };
    ProductReviewDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-review-detail',
            template: __webpack_require__(/*! ./product-review-detail.component.html */ "./src/app/product/product-review-detail/product-review-detail.component.html"),
            styles: [__webpack_require__(/*! ./product-review-detail.component.css */ "./src/app/product/product-review-detail/product-review-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_services_review_service__WEBPACK_IMPORTED_MODULE_2__["ReviewService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _shared_services_token_service__WEBPACK_IMPORTED_MODULE_3__["TokenService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], ProductReviewDetailComponent);
    return ProductReviewDetailComponent;
}());



/***/ }),

/***/ "./src/app/product/product-review-update/product-review-update.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/product/product-review-update/product-review-update.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/product/product-review-update/product-review-update.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/product/product-review-update/product-review-update.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<hr class=\"between-sections\">\r\n\r\n<div class=\"card card-cascade wider reverse\">\r\n\r\n  <!-- Card content -->\r\n  <div class=\"card-body card-body-cascade text-center\">\r\n\r\n    <!-- Title -->\r\n    <h4 class=\"card-title\"><strong>상품 후기 수정</strong></h4>\r\n  </div>\r\n\r\n</div>\r\n\r\n<hr class=\"between-sections\">\r\n\r\n<!-- Default form contact -->\r\n<form name=\"updateForm\" #updateReviewForm=\"ngForm\" (ngSubmit)=\"updateReview(updateReviewForm)\">\r\n  <!--Table-->\r\n  <table class=\"table table-bordered\">\r\n    <!--Table body-->\r\n    <tbody>\r\n      <tr [hidden]=true>\r\n        <th>후기 번호</th>\r\n        <td>\r\n          <input type=\"number\" id=\"exampleForm2\" class=\"form-control\" required [(ngModel)]=\"review.rev_no\" [ngModelOptions]=\"{standalone: true}\" />\r\n        </td>\r\n      </tr>\r\n      <tr>\r\n        <th class=\"cyan lighten-4\">제목</th>\r\n        <td>\r\n          <input type=\"text\" id=\"exampleForm2\" class=\"form-control\" placeholder=\"제목을 입력해주세요.\"\r\n            required [(ngModel)]=\"review.rev_title\" [ngModelOptions]=\"{standalone: true}\" />\r\n        </td>\r\n      </tr>\r\n      <tr>\r\n        <th class=\"cyan lighten-4\">작성자 ID</th>\r\n        <td>\r\n          <input type=\"text\" id=\"exampleForm2\" class=\"form-control\" required [(ngModel)]=\"review.u_id\" [ngModelOptions]=\"{standalone: true}\" [disabled]=true/>\r\n        </td>\r\n      </tr>\r\n      <tr>\r\n        <th class=\"cyan lighten-4\">후기 내용</th>\r\n        <td colspan=\"2\">\r\n          <textarea name=\"reviewContent\" rows=\"8\" cols=\"150\" placeholder=\"내용을 입력해주세요.\" class=\"form-control\" required [(ngModel)]=\"review.rev_content\" [ngModelOptions]=\"{standalone: true}\"></textarea>\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n\r\n  <div class=\"text-center mt-4\">\r\n    <button type=\"submit\" class=\"btn btn-outline-danger waves-effect\">수정</button>\r\n    <button type=\"button\" class=\"btn btn-outline-info waves-effect\" [routerLink]=\"['/products/product', review.p_code]\">취소</button>\r\n  </div>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/product/product-review-update/product-review-update.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/product/product-review-update/product-review-update.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ProductReviewUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductReviewUpdateComponent", function() { return ProductReviewUpdateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_review_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/review.service */ "./src/app/shared/services/review.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductReviewUpdateComponent = /** @class */ (function () {
    function ProductReviewUpdateComponent(reviewService, router) {
        this.reviewService = reviewService;
        this.router = router;
    }
    ProductReviewUpdateComponent.prototype.ngOnInit = function () {
        this.review = this.reviewService.getReviewObject();
    };
    ProductReviewUpdateComponent.prototype.updateReview = function (form) {
        // console.log(this.review.rev_no);
        // console.log(this.review.u_id);
        // console.log(this.review.rev_title);
        // console.log(this.review.rev_content);
        var _this = this;
        this.reviewService.updateReview(this.review)
            .subscribe(function () {
            alert("상품 후기가 수정되었습니다.");
            _this.router.navigate(['/products/review', _this.review.rev_no]);
        });
    };
    ProductReviewUpdateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-review-update',
            template: __webpack_require__(/*! ./product-review-update.component.html */ "./src/app/product/product-review-update/product-review-update.component.html"),
            styles: [__webpack_require__(/*! ./product-review-update.component.css */ "./src/app/product/product-review-update/product-review-update.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_services_review_service__WEBPACK_IMPORTED_MODULE_2__["ReviewService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ProductReviewUpdateComponent);
    return ProductReviewUpdateComponent;
}());



/***/ }),

/***/ "./src/app/product/product-review-write/product-review-write.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/product/product-review-write/product-review-write.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/product/product-review-write/product-review-write.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/product/product-review-write/product-review-write.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<hr class=\"between-sections\">\r\n\r\n<div class=\"card card-cascade wider reverse\">\r\n\r\n  <!-- Card content -->\r\n  <div class=\"card-body card-body-cascade text-center\">\r\n\r\n    <!-- Title -->\r\n    <h4 class=\"card-title\"><strong>상품 후기 쓰기</strong></h4>\r\n  </div>\r\n\r\n</div>\r\n\r\n<hr class=\"between-sections\">\r\n\r\n<!-- Default form contact -->\r\n<form (ngSubmit)=\"insertProductReview()\">\r\n  <!--Table-->\r\n  <table class=\"table table-bordered\">\r\n    <!--Table body-->\r\n    <tbody>\r\n      <tr>\r\n        <th>제목</th>\r\n        <td>\r\n          <input type=\"text\" id=\"exampleForm2\" class=\"form-control\" placeholder=\"제목을 입력해주세요.\" required [(ngModel)]=\"review.rev_title\" [ngModelOptions]=\"{standalone: true}\" />\r\n        </td>\r\n      </tr>\r\n      <tr [hidden]=true>\r\n        <th>작성자</th>\r\n        <td>\r\n          <input type=\"text\" id=\"exampleForm2\" class=\"form-control\" required [(ngModel)]=\"review.u_id\" [ngModelOptions]=\"{standalone: true}\" />\r\n        </td>\r\n      </tr>\r\n      <tr>\r\n        <th colspan=\"1\">후기 내용</th>\r\n        <td colspan=\"2\">\r\n          <textarea name=\"ReviewContent\" rows=\"8\" cols=\"150\" placeholder=\"내용을 입력해주세요.\" class=\"form-control\" required [(ngModel)]=\"review.rev_content\" [ngModelOptions]=\"{standalone: true}\"></textarea>\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n\r\n  <div class=\"text-center mt-4\" [hidden]=\"submit\">\r\n    <button type=\"submit\" class=\"btn btn-outline-danger waves-effect\">등록</button>\r\n    <button type=\"button\" class=\"btn btn-outline-info waves-effect\" [routerLink]=\"['/products/product', review.p_code]\">취소</button>\r\n  </div>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/product/product-review-write/product-review-write.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/product/product-review-write/product-review-write.component.ts ***!
  \********************************************************************************/
/*! exports provided: ProductReviewWriteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductReviewWriteComponent", function() { return ProductReviewWriteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_review_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/review.service */ "./src/app/shared/services/review.service.ts");
/* harmony import */ var _shared_models_review__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/models/review */ "./src/app/shared/models/review.ts");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var _shared_services_product_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/services/product.service */ "./src/app/shared/services/product.service.ts");
/* harmony import */ var _shared_services_token_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/services/token.service */ "./src/app/shared/services/token.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ProductReviewWriteComponent = /** @class */ (function () {
    function ProductReviewWriteComponent(reviewService, router, authService, productService, tokenService) {
        this.reviewService = reviewService;
        this.router = router;
        this.authService = authService;
        this.productService = productService;
        this.tokenService = tokenService;
        this.submit = false;
        this.review = new _shared_models_review__WEBPACK_IMPORTED_MODULE_3__["Review"];
    }
    ProductReviewWriteComponent.prototype.ngOnInit = function () {
        this.review.u_id = this.authService.getLoggedInUser().uid;
    };
    ProductReviewWriteComponent.prototype.insertProductReview = function () {
        var _this = this;
        this.review.p_code = this.tokenService.getToken("p_code");
        this.reviewService.insertReview(this.review)
            .subscribe(function () {
            alert("후기가 등록되었습니다.");
            _this.router.navigate(['/products/product', _this.review.p_code]);
        });
    };
    ProductReviewWriteComponent.prototype.setProductCode = function (p_code) {
        if (this.tokenService.isToken("p_code")) {
            this.p_code = this.tokenService.getToken("p_code");
        }
        console.log(p_code);
    };
    ProductReviewWriteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-review-write',
            template: __webpack_require__(/*! ./product-review-write.component.html */ "./src/app/product/product-review-write/product-review-write.component.html"),
            styles: [__webpack_require__(/*! ./product-review-write.component.css */ "./src/app/product/product-review-write/product-review-write.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_services_review_service__WEBPACK_IMPORTED_MODULE_2__["ReviewService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _shared_services_product_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"],
            _shared_services_token_service__WEBPACK_IMPORTED_MODULE_6__["TokenService"]])
    ], ProductReviewWriteComponent);
    return ProductReviewWriteComponent;
}());



/***/ }),

/***/ "./src/app/product/product-review/product-review.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/product/product-review/product-review.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/product/product-review/product-review.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/product/product-review/product-review.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<hr class=\"between-sections\">\r\n\r\n<ol class=\"breadcrumb font-weight-bold\">\r\n  <li>상품 후기</li>\r\n</ol>\r\n\r\n<table class=\"table table-responsive-md\">\r\n  <thead class=\"amber lighten-3\">\r\n  <tr>\r\n    <th>번호</th>\r\n    <th>제목</th>\r\n    <th>작성자</th>\r\n    <th>작성일</th>\r\n    <th>조회</th>\r\n  </tr>\r\n  </thead>\r\n\r\n  <tbody>\r\n\r\n    <tr *ngFor=\"let review of reviews | paginate: { itemsPerPage: 5, currentPage: page }; let i = index\">\r\n    <th>{{i+1}}</th>\r\n    <th>\r\n      <a [routerLink]=\"['/products/review', review.rev_no]\" routerLinkActive=\"router-link-active\"\r\n      (click)=\"setReviewNo(review.rev_no)\">\r\n      {{review.rev_title}}\r\n    </a>\r\n    </th>\r\n    <th>{{review.u_id}}</th>\r\n    <th>{{review.rev_date | date : 'yyyy-MM-dd'}}</th>\r\n    <th>{{review.rev_hits}}</th>\r\n    <p>{{review.review_content}}</p>\r\n  </tr>\r\n\r\n  </tbody>\r\n\r\n  <div class=\"text-center mt-3\">\r\n    <pagination-controls (pageChange)=\"page = $event\"></pagination-controls>\r\n  </div>\r\n\r\n\r\n\r\n  <button type=\"button\" class=\"btn btn-outline-info waves-effect\" id=\"qna_button\"\r\n    [routerLink]=\"['/products/productreview/write']\">후기쓰기\r\n  </button>\r\n\r\n</table>\r\n"

/***/ }),

/***/ "./src/app/product/product-review/product-review.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/product/product-review/product-review.component.ts ***!
  \********************************************************************/
/*! exports provided: ProductReviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductReviewComponent", function() { return ProductReviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_review_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/review.service */ "./src/app/shared/services/review.service.ts");
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




var ProductReviewComponent = /** @class */ (function () {
    function ProductReviewComponent(reviewService, productService, tokenService) {
        this.reviewService = reviewService;
        this.productService = productService;
        this.tokenService = tokenService;
        this.page = 1;
    }
    ProductReviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productService.getReview()
            .subscribe(function (reviews) {
            // this.tokenService.saveToken("productReviewToken", reviews);
            _this.reviews = reviews;
        });
    };
    ProductReviewComponent.prototype.setReviewNo = function (rev_no) {
        // this.reviewService.setReviewNo(rev_no);
        this.reviewService.setReviewNo(rev_no);
        this.setReviewNoObject(rev_no);
        if (this.tokenService.isToken("rev_no")) {
            this.tokenService.removeToken("rev_no");
        }
        else {
            this.tokenService.saveToken("rev_no", rev_no);
        }
        // this.rev_no = rev_no;
        // this.setReviewNoObject(rev_no);
    };
    ProductReviewComponent.prototype.setReviewNoObject = function (rev_no) {
        var review = this.reviews.find(function (item) {
            return item.rev_no == rev_no;
        });
        this.reviewService.setReviewNoObject(review);
        // this.check(review);
    };
    ProductReviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-review',
            template: __webpack_require__(/*! ./product-review.component.html */ "./src/app/product/product-review/product-review.component.html"),
            styles: [__webpack_require__(/*! ./product-review.component.css */ "./src/app/product/product-review/product-review.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_services_review_service__WEBPACK_IMPORTED_MODULE_1__["ReviewService"],
            _shared_services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"],
            _shared_services_token_service__WEBPACK_IMPORTED_MODULE_3__["TokenService"]])
    ], ProductReviewComponent);
    return ProductReviewComponent;
}());



/***/ }),

/***/ "./src/app/product/product.component.html":
/*!************************************************!*\
  !*** ./src/app/product/product.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <hr class=\"between-sections\">\r\n <div class=\"card-body card-body-cascade text-center\">\r\n\r\n\r\n    <h4 class=\"card-title\"><strong>상품 문의</strong></h4>\r\n  </div>\r\n\r\n</div>\r\n\r\n<hr class=\"between-sections\">\r\n\r\n\r\n<form (ngSubmit)=\"insertQna()\">\r\n\r\n  <table class=\"table table-bordered\">\r\n\r\n    <tbody> -->\r\n      <!-- <tr>\r\n        <th>제목</th>\r\n        <td>\r\n          <input type=\"text\" id=\"exampleForm2\" class=\"form-control\" placeholder=\"제목을 입력해주세요.\" required [(ngModel)]=\"productQna.pq_title\" [ngModelOptions]=\"{standalone: true}\" />\r\n        </td>\r\n      </tr>\r\n      <tr [hidden]=true>\r\n        <th>작성자</th>\r\n        <td>\r\n          <input type=\"text\" id=\"exampleForm2\" class=\"form-control\" required [(ngModel)]=\"productQna.u_id\" [ngModelOptions]=\"{standalone: true}\" />\r\n        </td>\r\n      </tr>\r\n      <tr>\r\n        <th colspan=\"1\">문의 내용</th>\r\n        <td colspan=\"2\">\r\n          <textarea name=\"qnaContent\" rows=\"8\" cols=\"150\" placeholder=\"내용을 입력해주세요.\" class=\"form-control\" required [(ngModel)]=\"productQna.pq_content\" [ngModelOptions]=\"{standalone: true}\"></textarea>\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n\r\n  <div class=\"text-center mt-4\" [hidden]=\"submit\">\r\n    <button type=\"submit\" class=\"btn btn-outline-danger waves-effect\">등록</button>\r\n    <button type=\"button\" class=\"btn btn-outline-info waves-effect\" [routerLink]=\"['/products/all-products']\">취소</button>\r\n  </div>\r\n</form> -->\r\n"

/***/ }),

/***/ "./src/app/product/product.component.scss":
/*!************************************************!*\
  !*** ./src/app/product/product.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/product/product.component.ts":
/*!**********************************************!*\
  !*** ./src/app/product/product.component.ts ***!
  \**********************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
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

var ProductComponent = /** @class */ (function () {
    function ProductComponent() {
    }
    ProductComponent.prototype.ngOnInit = function () { };
    ProductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-product",
            template: __webpack_require__(/*! ./product.component.html */ "./src/app/product/product.component.html"),
            styles: [__webpack_require__(/*! ./product.component.scss */ "./src/app/product/product.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProductComponent);
    return ProductComponent;
}());



/***/ }),

/***/ "./src/app/product/product.module.ts":
/*!*******************************************!*\
  !*** ./src/app/product/product.module.ts ***!
  \*******************************************/
/*! exports provided: ProductModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductModule", function() { return ProductModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _product_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product.routing */ "./src/app/product/product.routing.ts");
/* harmony import */ var _product_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product.component */ "./src/app/product/product.component.ts");
/* harmony import */ var _best_product_best_product_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./best-product/best-product.component */ "./src/app/product/best-product/best-product.component.ts");
/* harmony import */ var _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product-list/product-list.component */ "./src/app/product/product-list/product-list.component.ts");
/* harmony import */ var _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./product-detail/product-detail.component */ "./src/app/product/product-detail/product-detail.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _product_review_product_review_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./product-review/product-review.component */ "./src/app/product/product-review/product-review.component.ts");
/* harmony import */ var _product_review_detail_product_review_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./product-review-detail/product-review-detail.component */ "./src/app/product/product-review-detail/product-review-detail.component.ts");
/* harmony import */ var _shared_services_product_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shared/services/product.service */ "./src/app/shared/services/product.service.ts");
/* harmony import */ var _shared_services_review_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../shared/services/review.service */ "./src/app/shared/services/review.service.ts");
/* harmony import */ var _product_qna_product_qna_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./product-qna/product-qna.component */ "./src/app/product/product-qna/product-qna.component.ts");
/* harmony import */ var _shared_services_product_qna_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../shared/services/product-qna.service */ "./src/app/shared/services/product-qna.service.ts");
/* harmony import */ var _product_qna_detail_product_qna_detail_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./product-qna-detail/product-qna-detail.component */ "./src/app/product/product-qna-detail/product-qna-detail.component.ts");
/* harmony import */ var _product_review_write_product_review_write_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./product-review-write/product-review-write.component */ "./src/app/product/product-review-write/product-review-write.component.ts");
/* harmony import */ var _product_qna_write_product_qna_write_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./product-qna-write/product-qna-write.component */ "./src/app/product/product-qna-write/product-qna-write.component.ts");
/* harmony import */ var _product_review_update_product_review_update_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./product-review-update/product-review-update.component */ "./src/app/product/product-review-update/product-review-update.component.ts");
/* harmony import */ var _product_qna_update_product_qna_update_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./product-qna-update/product-qna-update.component */ "./src/app/product/product-qna-update/product-qna-update.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Core Dependencies



// configuration and services

// Components
















//동현임포트수정
//동현임포트수정끝
var ProductModule = /** @class */ (function () {
    function ProductModule() {
    }
    ProductModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_product_routing__WEBPACK_IMPORTED_MODULE_3__["ProductRoutes"]), _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"]],
            declarations: [
                _product_component__WEBPACK_IMPORTED_MODULE_4__["ProductComponent"],
                _best_product_best_product_component__WEBPACK_IMPORTED_MODULE_5__["BestProductComponent"],
                _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_6__["ProductListComponent"],
                _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_7__["ProductDetailComponent"],
                _product_review_product_review_component__WEBPACK_IMPORTED_MODULE_9__["ProductReviewComponent"],
                _product_qna_product_qna_component__WEBPACK_IMPORTED_MODULE_13__["ProductQnaComponent"],
                _product_qna_detail_product_qna_detail_component__WEBPACK_IMPORTED_MODULE_15__["ProductQnaDetailComponent"],
                _product_review_detail_product_review_detail_component__WEBPACK_IMPORTED_MODULE_10__["ProductReviewDetailComponent"],
                _product_review_write_product_review_write_component__WEBPACK_IMPORTED_MODULE_16__["ProductReviewWriteComponent"],
                _product_qna_write_product_qna_write_component__WEBPACK_IMPORTED_MODULE_17__["ProductQnaWriteComponent"],
                _product_review_update_product_review_update_component__WEBPACK_IMPORTED_MODULE_18__["ProductReviewUpdateComponent"],
                _product_qna_update_product_qna_update_component__WEBPACK_IMPORTED_MODULE_19__["ProductQnaUpdateComponent"],
                _product_review_detail_product_review_detail_component__WEBPACK_IMPORTED_MODULE_10__["ProductReviewDetailComponent"]
            ],
            exports: [_best_product_best_product_component__WEBPACK_IMPORTED_MODULE_5__["BestProductComponent"]],
            providers: [
                _shared_services_product_service__WEBPACK_IMPORTED_MODULE_11__["ProductService"],
                _shared_services_review_service__WEBPACK_IMPORTED_MODULE_12__["ReviewService"],
                _shared_services_product_qna_service__WEBPACK_IMPORTED_MODULE_14__["ProductQnaService"]
            ],
        })
    ], ProductModule);
    return ProductModule;
}());



/***/ }),

/***/ "./src/app/product/product.routing.ts":
/*!********************************************!*\
  !*** ./src/app/product/product.routing.ts ***!
  \********************************************/
/*! exports provided: ProductRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductRoutes", function() { return ProductRoutes; });
/* harmony import */ var _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product-list/product-list.component */ "./src/app/product/product-list/product-list.component.ts");
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index/index.component */ "./src/app/index/index.component.ts");
/* harmony import */ var _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-detail/product-detail.component */ "./src/app/product/product-detail/product-detail.component.ts");
/* harmony import */ var _product_review_detail_product_review_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product-review-detail/product-review-detail.component */ "./src/app/product/product-review-detail/product-review-detail.component.ts");
/* harmony import */ var _product_review_write_product_review_write_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product-review-write/product-review-write.component */ "./src/app/product/product-review-write/product-review-write.component.ts");
/* harmony import */ var _product_qna_write_product_qna_write_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product-qna-write/product-qna-write.component */ "./src/app/product/product-qna-write/product-qna-write.component.ts");
/* harmony import */ var _product_qna_detail_product_qna_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product-qna-detail/product-qna-detail.component */ "./src/app/product/product-qna-detail/product-qna-detail.component.ts");
/* harmony import */ var _product_review_update_product_review_update_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./product-review-update/product-review-update.component */ "./src/app/product/product-review-update/product-review-update.component.ts");
/* harmony import */ var _product_qna_update_product_qna_update_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./product-qna-update/product-qna-update.component */ "./src/app/product/product-qna-update/product-qna-update.component.ts");
/* harmony import */ var _shared_services_auth_gaurd__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/services/auth_gaurd */ "./src/app/shared/services/auth_gaurd.ts");










var ProductRoutes = [
    {
        path: "products",
        children: [
            {
                path: "",
                component: _index_index_component__WEBPACK_IMPORTED_MODULE_1__["IndexComponent"]
            },
            {
                path: "all-products",
                component: _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_0__["ProductListComponent"]
            },
            {
                path: "product/:p_code",
                component: _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_2__["ProductDetailComponent"]
            },
            {
                path: ":p_kind",
                component: _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_0__["ProductListComponent"]
            },
            {
                path: "review/:rev_no",
                component: _product_review_detail_product_review_detail_component__WEBPACK_IMPORTED_MODULE_3__["ProductReviewDetailComponent"]
            },
            {
                path: "qna/:pq_no",
                component: _product_qna_detail_product_qna_detail_component__WEBPACK_IMPORTED_MODULE_6__["ProductQnaDetailComponent"]
            },
            {
                path: "productqna/write",
                component: _product_qna_write_product_qna_write_component__WEBPACK_IMPORTED_MODULE_5__["ProductQnaWriteComponent"],
                canActivate: [_shared_services_auth_gaurd__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]]
            },
            {
                path: "productreview/write",
                component: _product_review_write_product_review_write_component__WEBPACK_IMPORTED_MODULE_4__["ProductReviewWriteComponent"],
                canActivate: [_shared_services_auth_gaurd__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]]
            },
            {
                path: "productreview/update",
                component: _product_review_update_product_review_update_component__WEBPACK_IMPORTED_MODULE_7__["ProductReviewUpdateComponent"],
                canActivate: [_shared_services_auth_gaurd__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]]
            },
            {
                path: "productqna/update",
                component: _product_qna_update_product_qna_update_component__WEBPACK_IMPORTED_MODULE_8__["ProductQnaUpdateComponent"],
                canActivate: [_shared_services_auth_gaurd__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]]
            }
        ]
    }
];


/***/ }),

/***/ "./src/app/shared/models/cart.ts":
/*!***************************************!*\
  !*** ./src/app/shared/models/cart.ts ***!
  \***************************************/
/*! exports provided: Cart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cart", function() { return Cart; });
var Cart = /** @class */ (function () {
    function Cart() {
    }
    return Cart;
}());



/***/ }),

/***/ "./src/app/shared/models/product.ts":
/*!******************************************!*\
  !*** ./src/app/shared/models/product.ts ***!
  \******************************************/
/*! exports provided: Product */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Product", function() { return Product; });
var Product = /** @class */ (function () {
    function Product() {
    }
    Product.prototype.updateFrom = function (src) {
        this.p_code = src.p_code;
        this.p_name = src.p_name;
        this.p_count = src.p_count;
        this.p_kind = src.p_kind;
        this.p_price = src.p_price;
        this.p_sellPrice = src.p_sellPrice;
        this.p_profit = src.p_profit;
        this.p_content = src.p_content;
        this.p_img = src.p_img;
        this.p_date = src.p_date;
    };
    return Product;
}());



/***/ }),

/***/ "./src/app/shared/models/productQna.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/models/productQna.ts ***!
  \*********************************************/
/*! exports provided: ProductQna */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductQna", function() { return ProductQna; });
var ProductQna = /** @class */ (function () {
    function ProductQna() {
    }
    return ProductQna;
}());



/***/ }),

/***/ "./src/app/shared/models/review.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/models/review.ts ***!
  \*****************************************/
/*! exports provided: Review */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Review", function() { return Review; });
var Review = /** @class */ (function () {
    function Review() {
    }
    return Review;
}());



/***/ }),

/***/ "./src/app/shared/services/product-qna.service.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/services/product-qna.service.ts ***!
  \********************************************************/
/*! exports provided: ProductQnaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductQnaService", function() { return ProductQnaService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product.service */ "./src/app/shared/services/product.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductQnaService = /** @class */ (function () {
    function ProductQnaService(http, productService) {
        this.http = http;
        this.productService = productService;
        this.url = 'http://localhost:8080/toma/productqna/';
    }
    ProductQnaService.prototype.setProductCode = function () {
        this.p_code = this.productService.getProductCode();
    };
    ProductQnaService.prototype.getProductQna = function () {
        return this.http.get(this.url + this.p_code);
    };
    ProductQnaService.prototype.setProductQnaNo = function (pq_no) {
        this.pq_no = pq_no;
    };
    ProductQnaService.prototype.setProductQnaObject = function (productQna_update) {
        this.productQna_update = productQna_update;
    };
    ProductQnaService.prototype.getProductQnaObject = function () {
        return this.productQna_update;
    };
    ProductQnaService.prototype.incrementProductQnaHits = function (productQna) {
        return this.http.put(this.url + this.pq_no, productQna);
    };
    ProductQnaService.prototype.setProductQnaNoObject = function (productQna) {
        var _this = this;
        this.incrementProductQnaHits(productQna).subscribe(function () {
            _this.productQna = productQna;
        });
    };
    ProductQnaService.prototype.getProductQnaNoObject = function () {
        return this.http.get(this.url + "detail/" + this.pq_no);
    };
    ProductQnaService.prototype.insertProductQna = function (productQna) {
        return this.http.post(this.url + "write", productQna);
    };
    ProductQnaService.prototype.updateProductQna = function (productQna_update) {
        return this.http.put(this.url + "update", productQna_update)
            .catch(this.handleError);
    };
    ProductQnaService.prototype.deleteProductQna = function (productQna) {
        return this.http.post(this.url + "delete", productQna);
    };
    ProductQnaService.prototype.handleError = function (error) {
        console.error(error.message || error);
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(error.status);
    };
    ProductQnaService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"]])
    ], ProductQnaService);
    return ProductQnaService;
}());



/***/ }),

/***/ "./src/app/shared/services/review.service.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/services/review.service.ts ***!
  \***************************************************/
/*! exports provided: ReviewService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewService", function() { return ReviewService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product.service */ "./src/app/shared/services/product.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ReviewService = /** @class */ (function () {
    function ReviewService(http, productService) {
        this.http = http;
        this.productService = productService;
        this.url = 'http://localhost:8080/toma/review/';
    }
    ReviewService.prototype.getReview = function () {
        return this.http.get(this.url + this.p_code);
    };
    ReviewService.prototype.setReviewNo = function (rev_no) {
        this.rev_no = rev_no;
    };
    ReviewService.prototype.setProductCode = function () {
        this.p_code = this.productService.getProductCode();
    };
    ReviewService.prototype.setReviewNoObject = function (review) {
        var _this = this;
        this.incrementReviewHits(review).subscribe(function () {
            _this.review = review;
        });
    };
    ReviewService.prototype.setReviewObject = function (review_update) {
        this.review_update = review_update;
    };
    ReviewService.prototype.getReviewObject = function () {
        return this.review_update;
    };
    ReviewService.prototype.incrementReviewHits = function (review) {
        return this.http.put(this.url + this.rev_no, review);
    };
    ReviewService.prototype.getReviewNoObject = function () {
        return this.http.get(this.url + "detail/" + this.rev_no);
    };
    ReviewService.prototype.insertReview = function (review) {
        return this.http.post(this.url + "write", review);
    };
    ReviewService.prototype.updateReview = function (review_update) {
        return this.http.post(this.url + "update", review_update)
            .catch(this.handleError);
    };
    ReviewService.prototype.deleteReview = function (review) {
        return this.http.post(this.url + "delete", review);
    };
    ReviewService.prototype.handleError = function (error) {
        console.error(error.message || error);
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(error.status);
    };
    ReviewService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"]])
    ], ReviewService);
    return ReviewService;
}());



/***/ })

}]);
//# sourceMappingURL=index-index-module~notice-notice-module~product-product-module.js.map