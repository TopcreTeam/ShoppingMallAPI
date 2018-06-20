package shop.park.repository;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import shop.park.model.Notice;
import shop.park.model.Qna;

@Mapper
public interface NoticeMapper {
	
	public List<Notice> selectAllNotice();

	public Notice selectByNoticeNo(long n_no);
	
	public int insertNotice(Notice notice);

	public int deleteNotice(long n_no);
	
	public int updateNotice(Notice notice);
	
	public List<Notice> selectByNoticeCategory(String n_category);
	
	public List<Notice> searchByNoticeTitle(String n_title);
	
	public int updateNoticeHits(Notice notice);
	
}
