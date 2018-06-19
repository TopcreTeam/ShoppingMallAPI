package shop.park.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import shop.park.model.Faq;
import shop.park.repository.FaqMapper;

@Service
public class FaqServiceImpl implements FaqService {
	
	@Autowired
	FaqMapper faqMapper;

	@Override
	public List<Faq> selectAllFaq() {
		List<Faq> faqList = faqMapper.selectAllFaq();
		
		if(faqList.isEmpty() || faqList == null) {
			return null;
		} else {
			return faqList;
		}
	}

	@Override
	public List<Faq> selectByFaqCategory(String f_category) {
		List<Faq> faqCategoryList = faqMapper.selectByFaqCategory(f_category);
		
		if(faqCategoryList.isEmpty() || faqCategoryList == null) {
			return null;
		} else {
			return faqCategoryList;
		}
	}

	@Override
	public Faq selectByFaqNo(long f_no) {
		Faq faq = faqMapper.selectByFaqNo(f_no);
		
		if(faq != null) {
			return faq;
		} else {
			return null;
		}
	}

	@Override
	public List<Faq> searchByFaqTitle(String faq_title) {
		List<Faq> searchFaqTitle = faqMapper.searchByFaqTitle(faq_title);
		
		if(searchFaqTitle.isEmpty() || searchFaqTitle == null) {
			return null;
		} else {
			return searchFaqTitle;
		}
	}

	@Override
	public void incrementFaqHits(long f_no) {
		Faq faq = faqMapper.selectByFaqNo(f_no);
		increment(faq);
		updateFaq(faq);
	}

	private void increment(Faq faq) {
		faq.setF_hits(faq.getF_hits() + 1);;
	}

	@Override
	public void updateFaq(Faq faq) {
		faqMapper.updateFaqHits(faq);
	}

	@Override
	public int createFaq(Faq faq) {
		return faqMapper.insertFaq(faq);
	}

	@Override
	public int editFaq(Faq faq) {
		return faqMapper.updateFaq(faq);
	}

	@Override
	public int deleteFaq(long f_no) {
		return faqMapper.deleteFaq(f_no);
	}
	
}
