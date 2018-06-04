package shop.park.model;

import java.util.Date;

public class Faq {
	private long f_no;
	private String f_category;
	private String f_title;
	private String f_content;
	private String a_id;
	private Date f_date;
	private long f_hits;
	
	public Faq() {}
	
	public Faq(long f_no, String f_category, String f_title, String f_content, String a_id, Date f_date, long f_hits) {
		super();
		this.f_no = f_no;
		this.f_category = f_category;
		this.f_title = f_title;
		this.f_content = f_content;
		this.a_id = a_id;
		this.f_date = f_date;
		this.f_hits = f_hits;
	}

	public long getF_no() {
		return f_no;
	}

	public void setF_no(long f_no) {
		this.f_no = f_no;
	}

	public String getF_category() {
		return f_category;
	}

	public void setF_category(String f_category) {
		this.f_category = f_category;
	}

	public String getF_title() {
		return f_title;
	}

	public void setF_title(String f_title) {
		this.f_title = f_title;
	}

	public String getF_content() {
		return f_content;
	}

	public void setF_content(String f_content) {
		this.f_content = f_content;
	}
		
	public String getA_id() {
		return a_id;
	}

	public void setA_id(String a_id) {
		this.a_id = a_id;
	}

	public Date getF_date() {
		return f_date;
	}

	public void setF_date(Date f_date) {
		this.f_date = f_date;
	}

	public long getF_hits() {
		return f_hits;
	}

	public void setF_hits(long f_hits) {
		this.f_hits = f_hits;
	}
	
}
