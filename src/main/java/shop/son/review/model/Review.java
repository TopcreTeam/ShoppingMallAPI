package shop.son.review.model;

import java.util.Date;

public class Review {


	private int rev_no;
	private String rev_title;
	private String rev_content;
	
	private Date rev_date;
	private int rev_hits;
	private String p_code;
	private String u_id;

	
	public String getP_code() {
		return p_code;
	}
	public void setP_code(String p_code) {
		this.p_code = p_code;
	}
	public String getU_id() {
		return u_id;
	}
	public void setU_id(String u_id) {
		this.u_id = u_id;
	}
	public int getRev_no() {
		return rev_no;
	}
	public void setRev_no(int rev_no) {
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
	
	public Date getRev_date() {
		return rev_date;
	}
	public void setRev_date(Date rev_date) {
		this.rev_date = rev_date;
	}
	public int getRev_hits() {
		return rev_hits;
	}
	public void setRev_hits(int rev_hits) {
		this.rev_hits = rev_hits;
	}
	
	
	
	
}
