package shop.park;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import shop.park.exception.FaqNotFoundException;
import shop.park.exception.NoticeNotFoundException;
import shop.park.exception.ProductNotFoundException;
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
	
	public static final Logger log = LoggerFactory.getLogger(MainController.class);
	
	@Autowired
	ProductServiceImpl productService;
	
	@Autowired
	NoticeServiceImpl noticeService;
	
	@Autowired
	FaqServiceImpl faqService;
	
	@Autowired
	QnaServiceImpl qnaService;
	
	@RequestMapping(value = "", method = RequestMethod.GET)
	public List<Products> listAllProducts() throws ProductNotFoundException {
		log.info("Select All Products");
		
		List<Products> productsList = productService.selectAllProducts();
		
		return productsList;
	}
	
	@RequestMapping(value = "/product/{p_kind}", method = RequestMethod.GET)
	public List<Products> getByProductsKind(@PathVariable("p_kind") String p_kind) throws ProductNotFoundException {
		log.info("Select Products by p_kind");
		
		List<Products> productsKindList = productService.selectByKind(p_kind);
		
		return productsKindList;
	}
	
	@RequestMapping(value = "/detail/product/{p_code}", method = RequestMethod.GET)
	public Products getByProductsCode(@PathVariable("p_code") String p_code) throws ProductNotFoundException {
		log.info("Select Product by p_code");
		
		Products product = productService.selectByProduct(p_code);
		
		return product;
	}
	
	@RequestMapping(value = "/notice", method = RequestMethod.GET)
	public List<Notice> listAllNotices() throws NoticeNotFoundException {
		log.info("Select All Notices");
		
		List<Notice> noticeList = noticeService.selectAllNotice();
		
		return noticeList;
	}
	
	@RequestMapping(value = "/notice/{n_category}", method = RequestMethod.GET)
	public List<Notice> getByNoticeCategory(@PathVariable("n_category") String n_category) throws NoticeNotFoundException {
		log.info("Select Notice by n_category");
		
		List<Notice> noticeCategoryList = noticeService.selectByNoticeCategory(n_category);
		
		return noticeCategoryList;
	}
	
	@RequestMapping(value = "/notice/{n_no}", method = RequestMethod.GET)
	public Notice getByNoticeNo(@PathVariable("n_no") long n_no) throws NoticeNotFoundException {
		log.info("Select Notice by n_no");
		
		Notice notice = noticeService.selectByNoticeNo(n_no);
		
		return notice;
	}
	
	@RequestMapping(value = "/faq", method = RequestMethod.GET)
	public List<Faq> listAllFaq() throws FaqNotFoundException {
		log.info("Select All Faq");
		
		List<Faq> faqList = faqService.selectAllFaq();
		
		return faqList;
	}
	
	@RequestMapping(value = "/faq/{f_category}", method = RequestMethod.GET)
	public List<Faq> getByFaqCategory(@PathVariable("f_category") String f_category) throws FaqNotFoundException {
		log.info("Select Faq by f_category");
		
		List<Faq> faqCategoryList = faqService.selectByFaqCategory(f_category);
		
		return faqCategoryList;
	}
	
	@RequestMapping(value = "/faq/{f_no}", method = RequestMethod.GET)
	public Faq getByFaqNo(@PathVariable("f_no") long f_no) throws FaqNotFoundException {
		log.info("Select Faq by f_no");
		
		Faq faq = faqService.selectByFaqNo(f_no);
		
		return faq;
	}
	
	// 로그인한 상태였을 때 1:1 질문 목록이 보이도록 GET? POST?
	@RequestMapping(value = "/qna", method = RequestMethod.GET)
	public List<Qna> listAllQna() {
		log.info("Select All Qna");
		
		// 여기에 세션에 로그인이 되어있으면 리스트를 보여주고 아니면 로그인 화면으로 돌아가는 로직 추가예정
		
		List<Qna> qnaList = qnaService.selectAllQna();
		
		return qnaList;
	}
	
	@RequestMapping(value = "/qna/{q_reply}")
	public List<Qna> getByQnaReply(@PathVariable("q_reply") String q_reply) {
		log.info("Select Qna by q_reply");
		
		List<Qna> qnaReplyList = qnaService.selectByQnaReply(q_reply);
		
		return qnaReplyList;
	}
}
