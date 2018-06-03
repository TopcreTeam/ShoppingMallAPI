package shop.park.repository;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import shop.park.model.Faq;

@Mapper
public interface FaqMapper {

	@Select("SELECT * FROM tm_faq ORDER BY f_no")
	public List<Faq> selectAllFaq();
	
	@Select("SELECT * FROM tm_faq WHERE f_no=#{f_no}")
	public Faq selectByFaqNo(long f_no);
	
	@Select("SELECT * FROM tm_faq WHERE f_category=#{f_category}")
	public List<Faq> selectByFaqCategory(String f_category);
	
}
