package shop.park.repository;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import shop.park.model.Notice;

@Mapper
public interface NoticeMapper {
	
	@Select("SELECT * FROM tm_notice ORDER BY n_no")
	public List<Notice> selectAllNotice();
	
	@Select("SELECT * FROM tm_notice WHERE n_no=#{n_no}")
	public Notice selectByNoticeNo(long n_no);
	
	@Select("SELECT * FROM tm_notice WHERE n_category=#{n_category}")
	public List<Notice> selectByNoticeCategory(String n_category);
	
}
