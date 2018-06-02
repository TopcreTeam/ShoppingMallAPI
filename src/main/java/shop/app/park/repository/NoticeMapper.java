package shop.app.park.repository;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import shop.app.park.model.Faq;
import shop.app.park.model.Notice;

@Mapper
public interface NoticeMapper {
	
	@Select("SELECT * FROM tm_notice ORDER BY n_no")
	public List<Notice> selectAllNotice();
	
	@Select("SELECT * FROM tm_notice WHERE n_no=#{n_no}")
	public Notice selectByNoticeNo(long n_no);
	
	@Select("SELECT * FROM tm_notice WHERE n_category=#{n_category}")
	public List<Notice> selectByNoticeCategory(String n_category);
	
	@Select("SELECT * FROM tm_faq ORDER BY f_no")
	public List<Faq> selectAllFaq();
	
	@Select("SELECT * FROM tm_faq WHERE f_no=#{f_no}")
	public Faq selectByFaqNo(long f_no);
	
	@Select("SELECT * FROM tm_faq WHERE f_category=#{f_category}")
	public List<Faq> selectByFaqCategory(String f_category);
}
