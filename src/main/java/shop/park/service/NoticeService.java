package shop.park.service;

import java.util.List;

import shop.park.exception.FaqNotFoundException;
import shop.park.exception.NoticeNotFoundException;
import shop.park.model.Faq;
import shop.park.model.Notice;



public interface NoticeService {
	List<Notice> selectAllNotice() throws NoticeNotFoundException;
	List<Notice> selectByNoticeCategory(String n_category) throws NoticeNotFoundException;
	Notice selectByNoticeNo(long n_no) throws NoticeNotFoundException;
	
	List<Faq> selectAllFaq() throws FaqNotFoundException;
	List<Faq> selectByFaqCategory(String f_category) throws FaqNotFoundException;
	Faq selectByFaqNo(long f_no) throws FaqNotFoundException;
}
