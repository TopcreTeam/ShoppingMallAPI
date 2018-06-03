package shop.park.service;

import java.util.List;

import shop.park.model.Qna;

public interface QnaService {
	public List<Qna> selectAllQna();
	public List<Qna> selectByQnaReply(String q_reply);
}
