package shop.park.service;

import java.util.List;

import shop.park.model.Qna;

public interface QnaService {
	public List<Qna> selectAllQna();
	public List<Qna> selectByQnaReply(String q_reply);
	public Qna selectByQnaNo(long q_no);
	public int insertQna(Qna qna);
	public int updateQna(Qna qna);
	public int deleteQna(Qna qna);
}
