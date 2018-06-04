package shop.park.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import shop.park.exception.FaqNotFoundException;
import shop.park.model.Faq;
import shop.park.repository.FaqMapper;

@Service
public class FaqServiceImpl implements FaqService {
	
	@Autowired
	FaqMapper faqMapper;

	@Override
	public List<Faq> selectAllFaq() throws FaqNotFoundException {
		List<Faq> faqList = faqMapper.selectAllFaq();
		
		if(faqList.isEmpty() || faqList == null) {
			throw new FaqNotFoundException();
		} else {
			return faqList;
		}
	}

	@Override
	public List<Faq> selectByFaqCategory(String f_category) throws FaqNotFoundException {
		List<Faq> faqCategoryList = faqMapper.selectByFaqCategory(f_category);
		
		if(faqCategoryList.isEmpty() || faqCategoryList == null) {
			throw new FaqNotFoundException();
		} else {
			return faqCategoryList;
		}
	}

	@Override
	public Faq selectByFaqNo(long f_no) throws FaqNotFoundException {
		Faq faq = faqMapper.selectByFaqNo(f_no);
		
		if(faq != null) {
			return faq;
		} else {
			throw new FaqNotFoundException();
		}
	}

}
