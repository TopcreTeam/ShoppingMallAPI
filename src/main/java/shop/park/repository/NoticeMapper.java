package shop.park.repository;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import shop.park.model.Notice;

@Mapper
public interface NoticeMapper {
	
	public List<Notice> selectAllNotice();

	public Notice selectByNoticeNo(long n_no);
	
	public List<Notice> selectByNoticeCategory(String n_category);
	
	public List<Notice> searchByNoticeTitle(String n_title);
	
}
