package shop.park.repository;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import shop.park.model.Qna;

@Mapper
public interface QnaMapper {
	
	public List<Qna> adminSelectAllQna();
	
	public List<Qna> selectAllQna(String u_id);
	
	public List<Qna> searchByQnaTitle(String q_title);
	
	public List<Qna> selectByQnaReply(String q_reply);
	
	public Qna selectByQnaNo(long q_no);
	
	public int insertQna(Qna qna);
	
	public int updateQna(Qna qna);
	
	public int deleteQna(long q_no);
	
	public int updateQnaReply(Qna qna);
	
	// 웹스퀘어용
	public int insertQnaWq(Map param);
	
	public int insertQnaWqBatch(Map param);
	
	public int updateQnaWq(Map param);
	
	public int updateQnaWqBatch(Map param);
	
	public int deleteQnaWq(Map param);
	
	public int deleteQnaWqBatch(Map param);
}
