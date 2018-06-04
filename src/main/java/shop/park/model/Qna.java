package shop.park.model;

import java.util.Date;

public class Qna {
	private long q_no;
	private String q_title;
	private String q_content;
	private String u_id;
	private Date q_date;
	private String q_reply;
	
	public Qna() {}
	
	public Qna(long q_no, String q_title, String q_content, String u_id, Date q_date, String q_reply) {
		super();
		this.q_no = q_no;
		this.q_title = q_title;
		this.q_content = q_content;
		this.u_id = u_id;
		this.q_date = q_date;
		this.q_reply = q_reply;
	}

	public long getQ_no() {
		return q_no;
	}

	public void setQ_no(long q_no) {
		this.q_no = q_no;
	}

	public String getQ_title() {
		return q_title;
	}

	public void setQ_title(String q_title) {
		this.q_title = q_title;
	}

	public String getQ_content() {
		return q_content;
	}

	public void setQ_content(String q_content) {
		this.q_content = q_content;
	}

	public String getU_id() {
		return u_id;
	}

	public void setU_id(String u_id) {
		this.u_id = u_id;
	}

	public Date getQ_date() {
		return q_date;
	}

	public void setQ_date(Date q_date) {
		this.q_date = q_date;
	}

	public String getQ_reply() {
		return q_reply;
	}

	public void setQ_reply(String q_reply) {
		this.q_reply = q_reply;
	}
}
