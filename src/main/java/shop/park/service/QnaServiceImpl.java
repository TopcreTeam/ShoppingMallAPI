package shop.park.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import shop.park.model.Qna;
import shop.park.repository.QnaMapper;

@Service
public class QnaServiceImpl implements QnaService {
	
	@Autowired
	QnaMapper qnaMapper;
	
	@Override
	public List<Qna> selectAllQna(String u_id) {
		List<Qna> qnaList = qnaMapper.selectAllQna(u_id);
		
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

	@Override
	public Qna selectByQnaNo(long q_no) {
		Qna qna = qnaMapper.selectByQnaNo(q_no);
		
		return qna;
	}

	@Override
	public void insertQna(Qna qna) {
		qnaMapper.insertQna(qna);
	}

	@Override
	public void updateQna(Qna qna) {
		qnaMapper.updateQna(qna);
	}

	@Override
	public void deleteQna(long q_no) {
		qnaMapper.deleteQna(q_no);
	}

	@Override
	public List<Qna> searchByQnaTitle(String q_title) {
		List<Qna> searchQnaTitle = qnaMapper.searchByQnaTitle(q_title);
		
		if(searchQnaTitle.isEmpty() || searchQnaTitle == null) {
			return null;
		} else {
			return searchQnaTitle;
		}
	}


	@Override
	public List<Qna> adminSelectAllQna() {
		return qnaMapper.adminSelectAllQna();
	}

	@Override
	public int updateQnaReply(Qna qna) {
		return qnaMapper.updateQnaReply(qna);
	}

	@Override
	public int createQna(Qna qna) {
		return qnaMapper.updateQna(qna);
	}

	@Override
	public int editQna(Qna qna) {
		return qnaMapper.updateQna(qna);
	}

	@Override
	public Map saveSpQna(Map param) throws Exception {
		Map resMap = new HashMap();
		List arr = null;
		int arrLen = 0;
		int rsNum = 0;
		
		if(((List) param.get("insert")).size() > 0) {
			resMap.put("I", qnaMapper.insertQnaWqBatch(param));
		}
		
		if(((List) param.get("delete")).size() > 0) {
			resMap.put("D", qnaMapper.deleteQnaWqBatch(param));
		}
		
		arr = (List) param.get("update");
		arrLen = arr.size();
		
		if(arrLen > 0) {
			for(int i = 0; i < arrLen; i++) {
				rsNum += qnaMapper.updateQnaWq((Map) arr.get(i));
			}
			resMap.put("U", rsNum);
		}
		
		return resMap;
	}
	

}
