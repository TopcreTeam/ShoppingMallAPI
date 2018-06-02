package shop.app.park.service;

import java.util.List;

import shop.app.park.exception.FaqNotFoundException;
import shop.app.park.exception.NoticeNotFoundException;
import shop.app.park.model.Faq;
import shop.app.park.model.Notice;



public interface NoticeService {
	List<Notice> selectAllNotice() throws NoticeNotFoundException;
	List<Notice> selectByNoticeCategory(String n_category) throws NoticeNotFoundException;
	Notice selectByNoticeNo(long n_no) throws NoticeNotFoundException;
	
	List<Faq> selectAllFaq() throws FaqNotFoundException;
	List<Faq> selectByFaqCategory(String f_category) throws FaqNotFoundException;
	Faq selectByFaqNo(long f_no) throws FaqNotFoundException;
}
