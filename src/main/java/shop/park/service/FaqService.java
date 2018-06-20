package shop.park.service;

import java.util.List;

import shop.park.model.Faq;
import shop.park.model.Notice;

public interface FaqService {
	List<Faq> selectAllFaq();
	List<Faq> selectByFaqCategory(String f_category);
	Faq selectByFaqNo(long f_no);
	List<Faq> searchByFaqTitle(String faq_title);
	void updateFaq(Faq faq);
	void incrementFaqHits(long f_no);
	int createFaq(Faq faq);
	int editFaq(Faq faq);
	int deleteFaq(long f_no);
}
