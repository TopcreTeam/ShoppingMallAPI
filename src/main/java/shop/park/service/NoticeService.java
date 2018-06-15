package shop.park.service;

import java.util.List;

import shop.park.model.Notice;

public interface NoticeService {
	List<Notice> selectAllNotice();
	List<Notice> selectByNoticeCategory(String n_category);
	Notice selectByNoticeNo(long n_no);
	List<Notice> searchByNoticeTitle(String n_title);
	void updateNotice(Notice notice);
	Notice incrementNoticeHits(long n_no);
}
