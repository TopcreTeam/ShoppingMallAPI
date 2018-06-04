package shop.park.repository;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import shop.park.model.Faq;

@Mapper
public interface FaqMapper {

	public List<Faq> selectAllFaq();
	
	public Faq selectByFaqNo(long f_no);
	
	public List<Faq> selectByFaqCategory(String f_category);
	
}
