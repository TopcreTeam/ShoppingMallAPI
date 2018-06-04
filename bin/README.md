Shopping Mall API server
========================

#패키지 별로 분담해서 작업

## ex) Shop.kim    <- 김동현 개발자만 작성


* lee : 이경민
* kim : 김동현
* park : 박수연
* son : 손민정
* choi : 최성찬



#업무분담


김동현= back-end(Spring Boot)
이경민= front-end(Angular)
*로그인페이지
*회원가입페이지
*마이페이지
*비회원 주문조회
*아이디 찾기
*비밀번호 찾기




박수연= back-end(Spring Boot)
손민정= front-end(Angular)
*메인페이지
*-검색
*-상품열거페이지
*-전체상품
	*-베이커리/떡
	*-스낵/음료
	*-스프레드/소스
	*-조리/냉동/신선식품
	*-조리기구 조리가전





*고객센터페이지
*-공지사항
*-CRUD게시판
*-자주하는 질문
*-일대일 문의




*주문페이지
*장바구니 페이지
*주문서작성페이지
*결제완료페이지
*주문완료페이지
*주문조회페이지



*-상품상세페이지







#인터페이스정의

*전체상품목록 : /products , get
*종류1:/product.kind1 ,get
*종류2:/product.kind2 ,get
*종류3:/product.kind3 ,get

*상품상세: /product/p_no, get
*장바구니담기:/product/p_no, post
####즉시구매는 라우터설정으로 바로 주문페이지감
*상품후기: /review, get
*상품문의: /asking, get

*관리자: /admin ,post
*상품관리:/admin/product
*주문관리:/admin/order
*직원관리;/admin/emp
*회원관리:/admin/user

*장바구니페이지: /cart/uid ,get
*회원정보: /user/uid, get (user 회원정보)
####앵귤러 서비스 회원정보를 담아둘수도 있음

*주문서 작성: /order/uid, get
*회원정보: /user/uid, get (user 회원정보)

*주문완료 : /orderdetail/ono, get
*주문조회 : /orderdetail/ono, get
*주문취소: /orderdetail/delete, delete

*회원가입 : /join ,POST
*로그인 : /login ,POST

*아이디찾기: /uIdFind , post (이름,연락처)

*비번찾기:/upwFind ,post (아이디,연락처)

*공지사항: /notice ,get

*FAQ: /faq ,get

*QNA: /qna , get