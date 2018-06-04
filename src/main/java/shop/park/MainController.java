package shop.park;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
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
import shop.park.service.NoticeServiceImpl;
import shop.park.service.ProductServiceImpl;


@RestController
@RequestMapping(value = "/toma")
@CrossOrigin(origins="*")
public class MainController {
	
	public static final Logger log = LoggerFactory.getLogger(MainController.class);
	
	@Autowired
	ProductServiceImpl productService;
	
	@Autowired
	NoticeServiceImpl noticeService;
	
	@RequestMapping(value = "", method = RequestMethod.GET)
	public List<Products> listAllProducts() throws ProductNotFoundException {
		log.info("Select All Products");
		
		List<Products> products = productService.selectAllProducts();
		
		return products;
	}
	
	@RequestMapping(value = "/product/{p_kind}", method = RequestMethod.GET)
	public List<Products> getByProductsKind(@PathVariable("p_kind") String p_kind) throws ProductNotFoundException {
		log.info("Select Products by p_kind");
		
		List<Products> products = productService.selectByKind(p_kind);
		
		return products;
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
		
		List<Notice> notices = noticeService.selectAllNotice();
		
		return notices;
	}
	
	@RequestMapping(value = "/notice/{n_category}", method = RequestMethod.GET)
	public List<Notice> getByNoticeCategory(@PathVariable("n_category") String n_category) throws NoticeNotFoundException {
		log.info("Select Notice by n_category");
		
		List<Notice> notice = noticeService.selectByNoticeCategory(n_category);
		
		return notice;
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
		
		List<Faq> faq = noticeService.selectAllFaq();
		
		return faq;
	}
	
	@RequestMapping(value = "/faq/{f_category}", method = RequestMethod.GET)
	public List<Faq> getByFaqCategory(@PathVariable("f_category") String f_category) throws FaqNotFoundException {
		log.info("Select Faq by f_category");
		
		List<Faq> faq = noticeService.selectByFaqCategory(f_category);
		
		return faq;
	}
	
	@RequestMapping(value = "/faq/{f_no}", method = RequestMethod.GET)
	public Faq getByFaqNo(@PathVariable("f_no") long f_no) throws FaqNotFoundException {
		log.info("Select Faq by f_no");
		
		Faq faq = noticeService.selectByFaqNo(f_no);
		
		return faq;
	}
}