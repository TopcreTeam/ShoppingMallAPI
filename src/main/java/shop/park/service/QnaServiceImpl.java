package shop.park.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import shop.park.model.Qna;
import shop.park.repository.QnaMapper;

public class QnaServiceImpl implements QnaService {
	
	@Autowired
	QnaMapper qnaMapper;

	@Override
	public List<Qna> selectAllQna() {
		List<Qna> qnaList = qnaMapper.selectAllQna();
		
		if(qnaList.isEmpty() || qnaList == null) {
			return null;
		} else {
			return qnaList;
		}
	}

	@Override
	public List<Qna> selectByQnaReply(String q_reply) {
		List<Qna> qnaReplyList = qnaMapper.selectByQnaReply(q_reply);
		
		if(qnaReplyList.isEmpty() || qnaReplyList == null) {
			return null;
		} else {
			return qnaReplyList;
		}
	}

}
