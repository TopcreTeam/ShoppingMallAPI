package shop.park.repository;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import shop.park.model.Qna;

@Mapper
public interface QnaMapper {
	
	@Select("SELECT * FROM tm_qna ORDER BY q_no")
	public List<Qna> selectAllQna();
	
	@Select("SELECT * FROM tm_qna WHERE q_reply=#{q_reply}")
	public List<Qna> selectByQnaReply(String q_reply);
}
