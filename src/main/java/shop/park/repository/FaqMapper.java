package shop.park.repository;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import shop.park.model.Faq;

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
	
	// 웹스퀘어용
	public int insertFaqWq(Map param);
	
	public int insertFaqWqBatch(Map param);
	
	public int updateFaqWq(Map param);
	
	public int updateFaqWqBatch(Map param);
	
	public int deleteFaqWq(Map param);
	
	public int deleteFaqWqBatch(Map param);
}
