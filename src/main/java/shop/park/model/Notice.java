package shop.park.model;

import java.util.Date;

public class Notice {
	private long n_no;
	private String n_category;
	private String n_title;
	private String n_content;
	private String a_id;
	private Date n_date;
	private long n_hits;
	
	public Notice() {}

	public Notice(long n_no, String n_category, String n_title, String n_content, String a_id, Date n_date,
			long n_hits) {
		super();
		this.n_no = n_no;
		this.n_category = n_category;
		this.n_title = n_title;
		this.n_content = n_content;
		this.a_id = a_id;
		this.n_date = n_date;
		this.n_hits = n_hits;
	}

	public long getN_no() {
		return n_no;
	}

	public void setN_no(long n_no) {
		this.n_no = n_no;
	}

	public String getN_category() {
		return n_category;
	}

	public void setN_category(String n_category) {
		this.n_category = n_category;
	}

	public String getN_title() {
		return n_title;
	}

	public void setN_title(String n_title) {
		this.n_title = n_title;
	}

	public String getN_content() {
		return n_content;
	}

	public void setN_content(String n_content) {
		this.n_content = n_content;
	}

	public String getA_id() {
		return a_id;
	}

	public void setA_id(String a_id) {
		this.a_id = a_id;
	}

	public Date getN_date() {
		return n_date;
	}

	public void setN_date(Date n_date) {
		this.n_date = n_date;
	}

	public long getN_hits() {
		return n_hits;
	}

	public void setN_hits(long n_hits) {
		this.n_hits = n_hits;
	}
}
