package shop.park.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import shop.park.exception.NoticeNotFoundException;
import shop.park.model.Notice;
import shop.park.repository.NoticeMapper;

@Service
public class NoticeServiceImpl implements NoticeService {

	@Autowired
	NoticeMapper noticeMapper;
	
	@Override
	public List<Notice> selectAllNotice() throws NoticeNotFoundException {
		List<Notice> noticeList = noticeMapper.selectAllNotice();
		if(noticeList.isEmpty() || noticeList == null) {
			throw new NoticeNotFoundException();
		} else {
			return noticeList;
		}
	}

	@Override
	public List<Notice> selectByNoticeCategory(String n_category) throws NoticeNotFoundException {
		List<Notice> noticeCategoryList = noticeMapper.selectByNoticeCategory(n_category);
		
		if(noticeCategoryList.isEmpty() || noticeCategoryList == null) {
			throw new NoticeNotFoundException();
		} else {
			return noticeCategoryList;
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
}
