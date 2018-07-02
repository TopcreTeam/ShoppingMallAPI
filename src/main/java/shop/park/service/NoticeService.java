package shop.park.service;

import java.util.List;
import java.util.Map;

import shop.park.model.Notice;

public interface NoticeService {
	List<Notice> selectAllNotice();
	List<Notice> selectByNoticeCategory(String n_category);
	Notice selectByNoticeNo(long n_no);
	List<Notice> searchByNoticeTitle(String n_title);
	void updateNoticeHits(Notice notice);
	Notice incrementNoticeHits(long n_no);

	// 웹스퀘어용
	int createNotice(Notice notice);
	int editNotice(Notice notice);
	int deleteNotice(long n_no);
	Map saveSpNotice(Map param) throws Exception;
}
