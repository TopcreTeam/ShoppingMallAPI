package shop.son.review.model;

import java.util.Date;

public class Review {

//	rev_no number,
//    rev_title varchar2(100),
//    rev_content varchar2(4000),
//    rev_author varchar2(20),
//    rev_date DATE default to_char(sysdate, 'yyyy-mm-dd') NOT NULL,
//    rev_hits number
	
	private long rev_no;
	private String rev_title;
	private String rev_content;
	private String rev_author;
	private Date rev_date;
	private long rev_hits;
	
	public Review(long rev_no, String rev_title, String rev_content, String rev_author, Date rev_date, long rev_hits) {
		super();
		this.rev_no = rev_no;
		this.rev_title = rev_title;
		this.rev_content = rev_content;
		this.rev_author = rev_author;
		this.rev_date = rev_date;
		this.rev_hits = rev_hits;
	}
	public long getRev_no() {
		return rev_no;
	}
	public void setRev_no(long rev_no) {
		this.rev_no = rev_no;
	}
	public String getRev_title() {
		return rev_title;
	}
	public void setRev_title(String rev_title) {
		this.rev_title = rev_title;
	}
	public String getRev_content() {
		return rev_content;
	}
	public void setRev_content(String rev_content) {
		this.rev_content = rev_content;
	}
	public String getRev_author() {
		return rev_author;
	}
	public void setRev_author(String rev_author) {
		this.rev_author = rev_author;
	}
	public Date getRev_date() {
		return rev_date;
	}
	public void setRev_date(Date rev_date) {
		this.rev_date = rev_date;
	}
	public long getRev_hits() {
		return rev_hits;
	}
	public void setRev_hits(long rev_hits) {
		this.rev_hits = rev_hits;
	}
	
	
	
	
}
