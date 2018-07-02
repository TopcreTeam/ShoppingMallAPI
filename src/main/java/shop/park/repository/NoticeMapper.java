package shop.park.repository;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import shop.park.model.Notice;

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
	
	
	// 웹스퀘어용
	public int insertNoticeWq(Map param);

	public int insertNoticeWqBatch(Map param);

	public int updateNoticeWq(Map param);

	public int updateNoticeWqBatch(Map param);

	public int deleteNoticeWq(Map param);

	public int deleteNoticeWqBatch(Map param);
}
