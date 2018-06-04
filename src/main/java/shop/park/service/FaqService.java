package shop.park.service;

import java.util.List;

import shop.park.model.Faq;

public interface FaqService {
	List<Faq> selectAllFaq();
	List<Faq> selectByFaqCategory(String f_category);
	Faq selectByFaqNo(long f_no);
}
