package shop.park.service;

import java.util.List;

import shop.park.exception.FaqNotFoundException;
import shop.park.model.Faq;

public interface FaqService {
	List<Faq> selectAllFaq() throws FaqNotFoundException;
	List<Faq> selectByFaqCategory(String f_category) throws FaqNotFoundException;
	Faq selectByFaqNo(long f_no) throws FaqNotFoundException;
}
