package shop.park.repository;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import shop.park.model.Faq;
import shop.park.model.Notice;

@Mapper
public interface NoticeMapper {
	
	public List<Notice> selectAllNotice();
	public Notice selectByNoticeNo(long n_no);
	public List<Notice> selectByNoticeCategory(String n_category);
	public List<Faq> selectAllFaq();
	public Faq selectByFaqNo(long f_no);
	public List<Faq> selectByFaqCategory(String f_category);
}
