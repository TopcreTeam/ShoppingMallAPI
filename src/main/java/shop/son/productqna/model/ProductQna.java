package shop.son.productqna.model;

import java.util.Date;

public class ProductQna {

	private int pq_no;
	private String pq_category;
	private String pq_title;
	private String pq_content;
	private String pq_reply;
	private String pq_replyyn;
	private int pq_hits;
	private String p_code;
	private String u_id;
	private Date pq_date;
	
	public String getPq_replyyn() {
		return pq_replyyn;
	}
	public void setPq_replyyn(String pq_replyyn) {
		this.pq_replyyn = pq_replyyn;
	}
	public String getPq_reply() {
		return pq_reply;
	}
	public void setPq_reply(String pq_reply) {
		this.pq_reply = pq_reply;
	}
	public int getPq_no() {
		return pq_no;
	}
	public void setPq_no(int pq_no) {
		this.pq_no = pq_no;
	}
	public String getPq_category() {
		return pq_category;
	}
	public void setPq_category(String pq_category) {
		this.pq_category = pq_category;
	}
	public String getPq_title() {
		return pq_title;
	}
	public void setPq_title(String pq_title) {
		this.pq_title = pq_title;
	}
	public String getPq_content() {
		return pq_content;
	}
	public void setPq_content(String pq_content) {
		this.pq_content = pq_content;
	}
	public int getPq_hits() {
		return pq_hits;
	}
	public void setPq_hits(int pq_hits) {
		this.pq_hits = pq_hits;
	}
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
	public Date getPq_date() {
		return pq_date;
	}
	public void setPq_date(Date pq_date) {
		this.pq_date = pq_date;
	}
	
	
}
