package shop.park;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
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
@CrossOrigin(origins = "*")
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

	// 공지사항 카테고리별 조회
	@RequestMapping(value = "/notice/{n_category}", method = RequestMethod.GET)
	public List<Notice> getByNoticeCategory(@PathVariable("n_category") String n_category) {
		log.info("Select Notice by n_category");

		List<Notice> noticeCategoryList = noticeService.selectByNoticeCategory(n_category);

		return noticeCategoryList;
	}

	// 공지사항 조회수 증가
	@PutMapping(value = "/detail/notice/{n_no}")
	public ResponseEntity<?> incrementNoticeHits(@PathVariable("n_no") long n_no, @RequestBody Notice notice) {
		log.info("Increment Notice by n_no" + n_no);

		notice.setN_no(n_no);
		Notice noticeObject = noticeService.incrementNoticeHits(n_no);

		return new ResponseEntity<Notice>(noticeObject, HttpStatus.OK);
	}

	// 공지사항 제목 검색
	@RequestMapping(value = "/notice/search/{n_title}", method = RequestMethod.GET)
	public List<Notice> getByNoticeTitleSearch(@PathVariable("n_title") String n_title) {
		log.info("Select Notice By n_title");

		List<Notice> searchNoticeTitle = noticeService.searchByNoticeTitle(n_title);

		return searchNoticeTitle;

	}

	// 자주 묻는 질문 관련 controller
	@RequestMapping(value = "/faq", method = RequestMethod.GET)
	public List<Faq> listAllFaq() {
		log.info("Select All Faq");

		List<Faq> faqList = faqService.selectAllFaq();

		return faqList;
	}

	// 자주 묻는 질문 카테고리별 조회
	@RequestMapping(value = "/faq/{f_category}", method = RequestMethod.GET)
	public List<Faq> getByFaqCategory(@PathVariable("f_category") String f_category) {
		log.info("Select Faq by f_category");

		List<Faq> faqCategoryList = faqService.selectByFaqCategory(f_category);

		return faqCategoryList;
	}

	// 자주 묻는 질문 조회수 증가
	@PutMapping(value = "/detail/faq/{f_no}")
	public ResponseEntity<?> incrementFaqHits(@PathVariable("f_no") long f_no, @RequestBody Faq faq) {
		log.info("Increment Faq by f_no" + f_no);

		faq.setF_no(f_no);
		faqService.incrementFaqHits(f_no);

		return new ResponseEntity<Faq>(HttpStatus.OK);
	}

	// 자주 묻는 질문 제목 검색
	@RequestMapping(value = "/faq/search/{f_title}", method = RequestMethod.GET)
	public List<Faq> getByFaqTitleSearch(@PathVariable("f_title") String f_title) {
		log.info("Select Faq By f_title");

		List<Faq> searchFaqTitle = faqService.searchByFaqTitle(f_title);

		return searchFaqTitle;
	}

	// 1:1 질문 관련 controller
	@RequestMapping(value = "/qna/list/{u_id}", method = RequestMethod.GET)
	public List<Qna> listAllQna(@PathVariable("u_id") String u_id) {
		log.info("Select All Qna");

		List<Qna> qnaList = qnaService.selectAllQna(u_id);

		return qnaList;
	}

	// 관리자용 1:1질문 모두 가져오기
	@GetMapping("/admin/qna/list")
	public List<Qna> adminGetlistAllQna() {
		List<Qna> qnaList = qnaService.adminSelectAllQna();
		return qnaList;
	}

	// 1:1 질문 번호 조회 후 객체 하나 리턴
	@RequestMapping(value = "/detail/qna/{q_no}", method = RequestMethod.GET)
	public Qna getByQnaNo(@PathVariable("q_no") long q_no) {
		log.info("Select Qna by q_no");

		Qna qna = qnaService.selectByQnaNo(q_no);

		return qna;
	}

	// 1:1 질문 제목 검색
	@RequestMapping(value = "/qna/search/{q_title}", method = RequestMethod.GET)
	public List<Qna> getByQnaTitleSearch(@PathVariable("q_title") String q_title) {
		log.info("Select Qna By f_title");

		List<Qna> searchQnaTitle = qnaService.searchByQnaTitle(q_title);

		return searchQnaTitle;
	}

	// 1:1 질문 답변유무 별 조회
	@RequestMapping(value = "/qna/{q_reply}", method = RequestMethod.GET)
	public List<Qna> getByQnaReply(@PathVariable("q_reply") String q_reply) {
		log.info("Select Qna by q_reply");

		List<Qna> qnaReplyList = qnaService.selectByQnaReply(q_reply);

		return qnaReplyList;
	}

	// 1:1 질문 글쓰기
	@PostMapping(value = "/qna/write")
	public ResponseEntity<?> insertQna(@RequestBody Qna qna, UriComponentsBuilder ucBuilder) {
		log.info("Insert Qna : " + qna);

		qnaService.insertQna(qna);

		return new ResponseEntity<Qna>(HttpStatus.CREATED);
	}

	// 1:1 질문 글 수정
	@PutMapping(value = "/qna/update/{q_no}")
	public ResponseEntity<?> updateQna(@PathVariable("q_no") long q_no, @RequestBody Qna qna) {
		log.info("Updating Qna with p_code : " + q_no);

		Qna qnaObject = qnaService.selectByQnaNo(q_no);
		if (qnaObject == null) {
			return new ResponseEntity<Qna>(HttpStatus.FAILED_DEPENDENCY);
		}

		qna.setQ_no(q_no);

		qnaService.updateQna(qna);

		return new ResponseEntity<Qna>(HttpStatus.OK);
	}

	// 1:1 질문 글 하나 삭제
	@DeleteMapping(value = "/qna/{q_no}")
	public ResponseEntity<?> deleteQna(@PathVariable("q_no") long q_no) {
		log.info("Deleting Qna with p_code : " + q_no);

		qnaService.deleteQna(q_no);

		return new ResponseEntity<Qna>(HttpStatus.NO_CONTENT);
	}

	// Websquare용 notice controller
	@PostMapping(value = "/notice.do")
	public Map websquareGetAllNotice() {
		log.info("Get All Notice");

		Map noticeObj = new HashMap<>();
		noticeObj.put("noticeList", noticeService.selectAllNotice());
		noticeObj.put("msg", "조회가 완료되었습니다.");

		return noticeObj;
	}
	
	@DeleteMapping(value = "/notice.delete")
	public Map removeNotice(@RequestBody Map notice) {
		ArrayList noticeList = (ArrayList) notice.get("noticeList");
		System.out.println(noticeList);
		Map noticeMap;
		for(int i = 0; i < noticeList.size(); i++) {
			noticeMap = (Map)noticeList.get(i);
			if(noticeMap.get("rowStatus").toString().equals("D")) {
				noticeService.deleteNotice((int)noticeMap.get("n_no"));
			}
		}
		
		Map newListMap = new HashMap();
		ArrayList newList = (ArrayList) noticeService.selectAllNotice();
		newListMap.put("noticeList", newList);
		return newListMap;
	}

	@PostMapping(value = "/notice/saveAndSelectMember.do")
	public Map saveAndSelectMember(@RequestBody Map param) throws Exception {
		Map resObj = new HashMap();
		List modList = null;
		Map saveResult = null;
		int modListLen;
		Map modParam = new HashMap<String, List>();
		List insert = new ArrayList<Map>();
		List update = new ArrayList<Map>();
		List delete = new ArrayList<Map>();
		Map rowData;
		String rowStatus;

		try {
			modList = (List) param.get("noticeList");
			modListLen = modList.size();

			for (int i = 0; i < modListLen; i++) {
				rowData = (Map) modList.get(i);
				rowStatus = (String) rowData.get("rowStatus");

				if (rowStatus.equals("C")) {
					insert.add(rowData);
				} else if (rowStatus.equals("U")) {
					update.add(rowData);
				} else if (rowStatus.equals("D") || rowStatus.equals("E")) {
					delete.add(rowData);
				}
			}
			modParam.put("insert", insert);
			modParam.put("update", update);
			modParam.put("delete", delete);

			saveResult = noticeService.saveSpNotice(modParam);

			try {
				resObj.put("noticeList", noticeService.selectAllNotice());
				resObj.put("msg", "조회가 완료되었습니다.");
			} catch (Exception ex) {
				throw new RuntimeException("저장은 완료되었으나 조회도중 오류가 발생하였습니다. 다시 조회 해주시기 바랍니다.");
			}
			resObj.put("rsObj", saveResult);
			resObj.put("msg", "저장이 완료되었습니다.");
			resObj.put("msgCode", "S");
		} catch (Exception ex) {
			ex.printStackTrace();
		}
		return resObj;
	}

	// Websquare용 faq controller
	@PostMapping(value = "/faq.do")
	public Map websquareGetAllFaq() {
		log.info("Get All Faq");

		Map faqObj = new HashMap<>();
		faqObj.put("faqList", faqService.selectAllFaq());
		faqObj.put("msg", "조회가 완료되었습니다.");

		return faqObj;
	}
	
	@DeleteMapping(value = "/faq.delete")
	public Map removeFaq(@RequestBody Map faq) {
		ArrayList faqList = (ArrayList) faq.get("faqList");
		System.out.println(faqList);
		Map faqMap;
		for(int i = 0; i < faqList.size(); i++) {
			faqMap = (Map)faqList.get(i);
			if(faqMap.get("rowStatus").toString().equals("D")) {
				faqService.deleteFaq((int)faqMap.get("f_no"));
			}
		}
		
		Map newListMap = new HashMap();
		ArrayList newList = (ArrayList) faqService.selectAllFaq();
		newListMap.put("faqList", newList);
		return newListMap;
	}
	
	@PostMapping(value = "/faq/saveAndSelectMember.do")
	public Map saveAndSelectFaq(@RequestBody Map param) throws Exception {
		Map resObj = new HashMap();
		List modList = null;
		Map saveResult = null;
		int modListLen;
		Map modParam = new HashMap<String, List>();
		List insert = new ArrayList<Map>();
		List update = new ArrayList<Map>();
		List delete = new ArrayList<Map>();
		Map rowData;
		String rowStatus;

		try {
			modList = (List) param.get("faqList");
			modListLen = modList.size();

			for (int i = 0; i < modListLen; i++) {
				rowData = (Map) modList.get(i);
				rowStatus = (String) rowData.get("rowStatus");

				if (rowStatus.equals("C")) {
					insert.add(rowData);
				} else if (rowStatus.equals("U")) {
					update.add(rowData);
				} else if (rowStatus.equals("D") || rowStatus.equals("E")) {
					delete.add(rowData);
				}
			}
			modParam.put("insert", insert);
			modParam.put("update", update);
			modParam.put("delete", delete);

//			saveResult = noticeService.saveSpNotice(modParam);
			saveResult = faqService.saveSpFaq(modParam);

			try {
				resObj.put("faqList", faqService.selectAllFaq());
				resObj.put("msg", "조회가 완료되었습니다.");
			} catch (Exception ex) {
				throw new RuntimeException("저장은 완료되었으나 조회도중 오류가 발생하였습니다. 다시 조회 해주시기 바랍니다.");
			}
			resObj.put("rsObj", saveResult);
			resObj.put("msg", "저장이 완료되었습니다.");
			resObj.put("msgCode", "S");
		} catch (Exception ex) {
			ex.printStackTrace();
		}
		return resObj;
	}

	// Websquare용 qna controller
	@PostMapping(value = "/qna.do")
	public Map websquareGetAllQna() {
		log.info("Get All Qna");

		Map qnaObj = new HashMap<>();
		qnaObj.put("qnaList", qnaService.adminSelectAllQna());
		qnaObj.put("msg", "조회가 완료되었습니다.");

		return qnaObj;
	}
	
	@DeleteMapping(value = "/qna.delete")
	public Map removeQna(@RequestBody Map qna) {
		ArrayList qnaList = (ArrayList) qna.get("qnaList");
		System.out.println(qnaList);
		Map qnaMap;
		for(int i = 0; i < qnaList.size(); i++) {
			qnaMap = (Map)qnaList.get(i);
			if(qnaMap.get("rowStatus").toString().equals("D")) {
				qnaService.deleteQna((int)qnaMap.get("q_no"));
			}
		}
		
		Map newListMap = new HashMap();
		ArrayList newList = (ArrayList) qnaService.adminSelectAllQna();
		newListMap.put("qnaList", newList);
		return newListMap;
	}
	
	@PostMapping(value = "/qna/saveAndSelectMember.do")
	public Map saveAndSelectQna(@RequestBody Map param) throws Exception {
		Map resObj = new HashMap();
		List modList = null;
		Map saveResult = null;
		int modListLen;
		Map modParam = new HashMap<String, List>();
		List insert = new ArrayList<Map>();
		List update = new ArrayList<Map>();
		List delete = new ArrayList<Map>();
		Map rowData;
		String rowStatus;

		try {
			modList = (List) param.get("qnaList");
			modListLen = modList.size();

			for (int i = 0; i < modListLen; i++) {
				rowData = (Map) modList.get(i);
				rowStatus = (String) rowData.get("rowStatus");

				if (rowStatus.equals("C")) {
					insert.add(rowData);
				} else if (rowStatus.equals("U")) {
					update.add(rowData);
				} else if (rowStatus.equals("D") || rowStatus.equals("E")) {
					delete.add(rowData);
				}
			}
			modParam.put("insert", insert);
			modParam.put("update", update);
			modParam.put("delete", delete);

			saveResult = qnaService.saveSpQna(modParam);

			try {
				resObj.put("qnaList", qnaService.adminSelectAllQna());
				resObj.put("msg", "조회가 완료되었습니다.");
			} catch (Exception ex) {
				throw new RuntimeException("저장은 완료되었으나 조회도중 오류가 발생하였습니다. 다시 조회 해주시기 바랍니다.");
			}
			resObj.put("rsObj", saveResult);
			resObj.put("msg", "저장이 완료되었습니다.");
			resObj.put("msgCode", "S");
		} catch (Exception ex) {
			ex.printStackTrace();
		}
		return resObj;
	}

	// 관리자 페이지 용 ↓
	@PostMapping(value = "/faq/create")
	public int createFaq(@RequestBody Faq faq) {
		log.info("create faq");
		return faqService.createFaq(faq);
	}

	@PutMapping(value = "/faq/update")
	public int updateFaq(@RequestBody Faq faq) {
		log.info("update faq");
		return faqService.editFaq(faq);
	}

	@DeleteMapping(value = "/faq/delete/{f_no}")
	public int deleteFaq(@PathVariable("f_no") long f_no) {
		log.info("delete FAQ");
		return faqService.deleteFaq(f_no);
	}

	@PostMapping(value = "/notice/create")
	public int createNotice(@RequestBody Notice notice) {
		log.info("create notice");
		return noticeService.createNotice(notice);
	}

	@PutMapping(value = "/notice/update")
	public int updateNotice(@RequestBody Notice notice) {
		log.info("update notice");
		return noticeService.editNotice(notice);
	}

	@DeleteMapping(value = "/notice/delete/{n_no}")
	public int DeleteNotice(@PathVariable("n_no") long n_no) {
		log.info("delete notice");
		return noticeService.deleteNotice(n_no);
	}

	// qna답글달기
	@PutMapping(value = "/qna/reply")
	public int updateQnaReply(@RequestBody Qna qna) {
		log.info("update qna reply");
		return qnaService.updateQnaReply(qna);
	}

	// 관리자 페이지용↑
}
