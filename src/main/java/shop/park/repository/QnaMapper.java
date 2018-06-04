package shop.park.repository;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import shop.park.model.Qna;

@Mapper
public interface QnaMapper {
	
	public List<Qna> selectAllQna();
	
	public List<Qna> selectByQnaReply(String q_reply);
	
	public Qna selectByQnaNo(long q_no);
	
	public int insertQna(Qna qna);
	
	public int updateQna(Qna qna);
	
	public int deleteQna(Qna qna);
}