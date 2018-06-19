package shop.park.repository;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import shop.park.model.Faq;
import shop.park.model.Notice;

@Mapper
public interface FaqMapper {

	public List<Faq> selectAllFaq();
	
	public Faq selectByFaqNo(long f_no);
	
	public List<Faq> selectByFaqCategory(String f_category);
	
	public List<Faq> searchByFaqTitle(String faq_title);
	
	public int updateFaqHits(Faq faq);
	
	public int insertFaq(Faq faq);

	public int deleteFaq(long f_no);
	
	public int updateFaq(Faq faq);
}
