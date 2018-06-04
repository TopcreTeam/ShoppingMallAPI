package shop.park.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import shop.park.model.Notice;
import shop.park.repository.NoticeMapper;

@Service
public class NoticeServiceImpl implements NoticeService {

	@Autowired
	NoticeMapper noticeMapper;
	
	@Override
	public List<Notice> selectAllNotice() {
		List<Notice> noticeList = noticeMapper.selectAllNotice();
		if(noticeList.isEmpty() || noticeList == null) {
			return null;
		} else {
			return noticeList;
		}
	}

	@Override
	public List<Notice> selectByNoticeCategory(String n_category) {
		List<Notice> noticeCategoryList = noticeMapper.selectByNoticeCategory(n_category);
		
		if(noticeCategoryList.isEmpty() || noticeCategoryList == null) {
			return null;
		} else {
			return noticeCategoryList;
		}
	}

	@Override
	public Notice selectByNoticeNo(long n_no) {
		Notice notice = noticeMapper.selectByNoticeNo(n_no);
		
		if(notice != null) {
			return notice;
		} else {
			return null;
		}
	}
}
