package shop.park;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;

import shop.kim.login.service.LoginService;
import shop.park.model.Faq;
import shop.park.model.Notice;
import shop.park.model.Products;
import shop.park.model.Qna;
import shop.park.service.FaqServiceImpl;
import shop.park.service.NoticeServiceImpl;
import shop.park.service.ProductServiceImpl;
import shop.park.service.QnaServiceImpl;

@RestController
@RequestMapping(value = "/toma")
public class MainController {
	
	@Autowired
	ProductServiceImpl productService;
	@Autowired
	NoticeServiceImpl noticeService;
	@Autowired
	FaqServiceImpl faqService;
	@Autowired
	QnaServiceImpl qnaService;
	@Autowired
	LoginService loginService;

	public static final Logger log = LoggerFactory.getLogger(MainController.class);
	
	// 상품 관련 controller
	@RequestMapping(value = "", method = RequestMethod.GET)
	public List<Products> listAllProducts() {
		log.info("Select All Products");
		
		List<Products> productsList = productService.selectAllProducts();
		
		return productsList;
	}
	
	@RequestMapping(value = "/product/{p_kind}", method = RequestMethod.GET)
	public List<Products> getByProductsKind(@PathVariable("p_kind") String p_kind) {
		log.info("Select Products by p_kind");
		
		List<Products> productsKindList = productService.selectByProductKind(p_kind);
		
		return productsKindList;
	}
	
	@RequestMapping(value = "/detail/product/{p_code}", method = RequestMethod.GET)
	public Products getByProductsCode(@PathVariable("p_code") String p_code) {
		log.info("Select Product by p_code");
		
		Products product = productService.selectByProductCode(p_code);
		
		return product;
	}
	
	@PostMapping(value = "/product")
	public ResponseEntity<?> insertProduct(@RequestBody Products product, UriComponentsBuilder ucBuilder) {
		log.info("Insert Product : " + product);
		
		productService.insertProduct(product);
		
		return new ResponseEntity<Products>(HttpStatus.CREATED);
	}
	
	@PutMapping(value = "/product/{p_code}")
	public ResponseEntity<?> updateProduct(@PathVariable("p_code") String p_code, @RequestBody Products product) {
		log.info("Updating Product with p_code : " + product);
		
		productService.updateProduct(product);
		
		return new ResponseEntity<Products>(HttpStatus.OK);
	}
	
	@DeleteMapping(value = "/product/{p_code}")
	public ResponseEntity<?> deleteProduct(@PathVariable("p_code") String p_code) {
		log.info("Deleting Product with p_code : " + p_code);
		
		productService.deleteProduct(p_code);
		
		return new ResponseEntity<Products>(HttpStatus.NO_CONTENT);
	}
	
	// 공지사항 관련 controller
	@RequestMapping(value = "/notice", method = RequestMethod.GET)
	public List<Notice> listAllNotices() {
		log.info("Select All Notices");
		
		List<Notice> noticeList = noticeService.selectAllNotice();
		
		return noticeList;
	}
	
	@RequestMapping(value = "/notice/{n_category}", method = RequestMethod.GET)
	public List<Notice> getByNoticeCategory(@PathVariable("n_category") String n_category) {
		log.info("Select Notice by n_category");
		
		List<Notice> noticeCategoryList = noticeService.selectByNoticeCategory(n_category);
		
		return noticeCategoryList;
	}
	
	@RequestMapping(value = "/detail/notice/{n_no}", method = RequestMethod.GET)
	public Notice getByNoticeNo(@PathVariable("n_no") long n_no) {
		log.info("Select Notice by n_no");
		
		Notice notice = noticeService.selectByNoticeNo(n_no);
		
		return notice;
	}
	
	// 자주 묻는 질문 관련 controller
	@RequestMapping(value = "/faq", method = RequestMethod.GET)
	public List<Faq> listAllFaq() {
		log.info("Select All Faq");
		
		List<Faq> faqList = faqService.selectAllFaq();
		
		return faqList;
	}
	
	@RequestMapping(value = "/faq/{f_category}", method = RequestMethod.GET)
	public List<Faq> getByFaqCategory(@PathVariable("f_category") String f_category) {
		log.info("Select Faq by f_category");
		
		List<Faq> faqCategoryList = faqService.selectByFaqCategory(f_category);
		
		return faqCategoryList;
	}
	
	@RequestMapping(value = "/detail/faq/{f_no}", method = RequestMethod.GET)
	public Faq getByFaqNo(@PathVariable("f_no") long f_no) {
		log.info("Select Faq by f_no");
		
		Faq faq = faqService.selectByFaqNo(f_no);
		
		return faq;
	}
	
	// 1:1 질문 관련 controller
	@RequestMapping(value = "/qna", method = RequestMethod.GET)
	public List<Qna> listAllQna() {
		log.info("Select All Qna");
		
		List<Qna> qnaList = qnaService.selectAllQna();
		
		return qnaList;
	}
	
	@RequestMapping(value = "/detail/qna/{q_no}", method = RequestMethod.GET)
	public Qna getByQnaNo(@PathVariable("q_no") long q_no) {
		log.info("Select Qna by q_no");
		
		Qna qna = qnaService.selectByQnaNo(q_no);
		
		return qna;
	}
	
	@RequestMapping(value = "/qna/{q_reply}", method = RequestMethod.GET)
	public List<Qna> getByQnaReply(@PathVariable("q_reply") String q_reply) {
		log.info("Select Qna by q_reply");
		
		List<Qna> qnaReplyList = qnaService.selectByQnaReply(q_reply);
		
		return qnaReplyList;
	}
	
	@PostMapping(value = "/qna")
	public ResponseEntity<?> insertQna(@RequestBody Qna qna, UriComponentsBuilder ucBuilder) {
		log.info("Insert Product : " + qna);
		
		qnaService.insertQna(qna);
		
		return new ResponseEntity<Qna>(HttpStatus.CREATED);
	}
	
	@PutMapping(value = "/qna/{q_no}")
	public ResponseEntity<?> updateQna(@PathVariable("q_no") long q_no, @RequestBody Qna qna) {
		log.info("Updating Product with p_code : " + qna);
		
		qnaService.updateQna(qna);
		
		return new ResponseEntity<Qna>(HttpStatus.OK);
	}
	
	@DeleteMapping(value = "/qna/{q_no}")
	public ResponseEntity<?> deleteQna(@PathVariable("q_no") long q_no) {
		log.info("Deleting Product with p_code : " + q_no);
		
		qnaService.deleteQna(q_no);
		
		return new ResponseEntity<Qna>(HttpStatus.NO_CONTENT);
	}
	
}
