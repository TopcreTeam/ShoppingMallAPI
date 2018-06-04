package shop.park.service;

import java.util.List;

import shop.park.exception.NoticeNotFoundException;
import shop.park.model.Notice;

public interface NoticeService {
	List<Notice> selectAllNotice() throws NoticeNotFoundException;
	List<Notice> selectByNoticeCategory(String n_category) throws NoticeNotFoundException;
	Notice selectByNoticeNo(long n_no) throws NoticeNotFoundException;
}
