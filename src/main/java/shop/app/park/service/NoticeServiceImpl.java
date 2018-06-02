package shop.app.park.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import shop.app.park.exception.FaqNotFoundException;
import shop.app.park.exception.NoticeNotFoundException;
import shop.app.park.model.Faq;
import shop.app.park.model.Notice;
import shop.app.park.repository.NoticeMapper;


@Service
public class NoticeServiceImpl implements NoticeService {

	@Autowired
	NoticeMapper noticeMapper;
	
	@Override
	public List<Notice> selectAllNotice() throws NoticeNotFoundException {
		List<Notice> notices = noticeMapper.selectAllNotice();
		if(notices.isEmpty() || notices == null) {
			throw new NoticeNotFoundException();
		} else {
			return notices;
		}
	}

	@Override
	public List<Notice> selectByNoticeCategory(String n_category) throws NoticeNotFoundException {
		List<Notice> notices = noticeMapper.selectByNoticeCategory(n_category);
		
		if(notices.isEmpty() || notices == null) {
			throw new NoticeNotFoundException();
		} else {
			return notices;
		}
	}

	@Override
	public Notice selectByNoticeNo(long n_no) throws NoticeNotFoundException {
		Notice notice = noticeMapper.selectByNoticeNo(n_no);
		
		if(notice != null) {
			return notice;
		} else {
			throw new NoticeNotFoundException();
		}
	}

	@Override
	public List<Faq> selectAllFaq() throws FaqNotFoundException {
		List<Faq> faq = noticeMapper.selectAllFaq();
		
		if(faq.isEmpty() || faq == null) {
			throw new FaqNotFoundException();
		} else {
			return faq;
		}
	}

	@Override
	public List<Faq> selectByFaqCategory(String f_category) throws FaqNotFoundException {
		List<Faq> faq = noticeMapper.selectByFaqCategory(f_category);
		
		if(faq.isEmpty() || faq == null) {
			throw new FaqNotFoundException();
		} else {
			return faq;
		}
	}

	@Override
	public Faq selectByFaqNo(long f_no) throws FaqNotFoundException {
		Faq faq = noticeMapper.selectByFaqNo(f_no);
		
		if(faq != null) {
			return faq;
		} else {
			throw new FaqNotFoundException();
		}
	}

}
