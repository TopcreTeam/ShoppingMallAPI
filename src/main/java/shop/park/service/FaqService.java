package shop.park.service;

import java.util.List;
import java.util.Map;

import shop.park.model.Faq;

public interface FaqService {
	List<Faq> selectAllFaq();
	List<Faq> selectByFaqCategory(String f_category);
	Faq selectByFaqNo(long f_no);
	List<Faq> searchByFaqTitle(String faq_title);
	void updateFaq(Faq faq);
	void incrementFaqHits(long f_no);
	
	// 웹스퀘어용
	int createFaq(Faq faq);
	int editFaq(Faq faq);
	int deleteFaq(long f_no);
	Map saveSpFaq(Map param) throws Exception;
}
