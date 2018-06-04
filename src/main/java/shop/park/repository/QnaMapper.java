package shop.park.repository;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import shop.park.model.Qna;

@Mapper
public interface QnaMapper {
	
	public List<Qna> selectAllQna();
	
	public List<Qna> selectByQnaReply(String q_reply);
}
