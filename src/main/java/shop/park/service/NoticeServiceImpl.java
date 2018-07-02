package shop.park.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import shop.park.model.Notice;
import shop.park.repository.NoticeMapper;

@Service
public class NoticeServiceImpl implements NoticeService {

	@Autowired
	NoticeMapper noticeMapper;

	@Override
	public List<Notice> selectAllNotice() {
		List<Notice> noticeList = noticeMapper.selectAllNotice();
		if (noticeList.isEmpty() || noticeList == null) {
			return null;
		} else {
			return noticeList;
		}
	}

	@Override
	public List<Notice> selectByNoticeCategory(String n_category) {
		List<Notice> noticeCategoryList = noticeMapper.selectByNoticeCategory(n_category);

		if (noticeCategoryList.isEmpty() || noticeCategoryList == null) {
			return null;
		} else {
			return noticeCategoryList;
		}
	}

	@Override
	public Notice selectByNoticeNo(long n_no) {
		Notice notice = noticeMapper.selectByNoticeNo(n_no);

		if (notice != null) {
			return notice;
		} else {
			return null;
		}
	}

	@Override
	public List<Notice> searchByNoticeTitle(String n_title) {
		List<Notice> searchNoticeTitle = noticeMapper.searchByNoticeTitle(n_title);

		if (searchNoticeTitle.isEmpty() || searchNoticeTitle == null) {
			return null;
		} else {
			return searchNoticeTitle;
		}
	}

	@Override
	public Notice incrementNoticeHits(long n_no) {
		Notice notice = noticeMapper.selectByNoticeNo(n_no);
		increment(notice);
		updateNoticeHits(notice);

		return notice;
	}

	private void increment(Notice notice) {
		notice.setN_hits(notice.getN_hits() + 1);
	}

	@Override
	public void updateNoticeHits(Notice notice) {
		noticeMapper.updateNoticeHits(notice);
	}

	@Override
	public int createNotice(Notice notice) {
		return noticeMapper.insertNotice(notice);
	}

	@Override
	public int editNotice(Notice notice) {
		return noticeMapper.updateNotice(notice);
	}

	@Override
	public int deleteNotice(long n_no) {
		return noticeMapper.deleteNotice(n_no);
	}

	@Override
	public Map saveSpNotice(Map param) throws Exception {
		Map resMap = new HashMap();
		List arr = null;
		int arrLen = 0;
		int rsNum = 0;
		
		if (((List) param.get("insert")).size() > 0) {
			resMap.put("I", noticeMapper.insertNoticeWqBatch(param));
		}

		if (((List) param.get("delete")).size() > 0) {
			resMap.put("D", noticeMapper.deleteNoticeWqBatch(param));
		}

		/*
		 * 
		 * if(((List)param.get("update")).size() > 0){
		 * 
		 * resMap.put("U",eduDao.updateSpMemberBatch(param));
		 * 
		 * }
		 * 
		 */

		arr = (List) param.get("update");
		arrLen = arr.size();

		if (arrLen > 0) {
			for (int i = 0; i < arrLen; i++) {
				rsNum += noticeMapper.updateNoticeWq((Map) arr.get(i));
			}
			resMap.put("U", rsNum);
		}

		return resMap;
	}
}
