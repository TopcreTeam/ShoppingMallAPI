package shop.kim.order.model;

public class Cart {
	private int cno;
	private String uid;
	private String pcode;
	private int camount;
	
	//	수정
	
	private String p_img;
	private int p_sellprice;
	private String p_name;
	private String p_kind;
	private String p_content;
	

	
	public String getP_content() {
		return p_content;
	}
	public void setP_content(String p_content) {
		this.p_content = p_content;
	}
	public String getP_kind() {
		return p_kind;
	}
	public void setP_kind(String p_kind) {
		this.p_kind = p_kind;
	}
	public String getP_img() {
		return p_img;
	}
	public void setP_img(String p_img) {
		this.p_img = p_img;
	}
	public int getP_sellprice() {
		return p_sellprice;
	}
	public void setP_sellprice(int p_sellprice) {
		this.p_sellprice = p_sellprice;
	}
	public String getP_name() {
		return p_name;
	}
	public void setP_name(String p_name) {
		this.p_name = p_name;
	}
	
	// 수정끝
	public int getCno() {
		return cno;
	}
	public void setCno(int cno) {
		this.cno = cno;
	}
	public String getUid() {
		return uid;
	}
	public void setUid(String uid) {
		this.uid = uid;
	}
	public String getPcode() {
		return pcode;
	}
	public void setPcode(String pcode) {
		this.pcode = pcode;
	}
	public int getCamount() {
		return camount;
	}
	public void setCamount(int camount) {
		this.camount = camount;
	}
	
}
