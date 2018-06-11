package shop.kim.order.model;

import java.sql.Date;

public class Order {
	private int ono;
	private String uid;
	private int ototal;
	private Date odate;
	private char ostatus;
	private String oaddr;
	public String getOaddr() {
		return oaddr;
	}
	public void setOaddr(String oaddr) {
		this.oaddr = oaddr;
	}
	public int getOno() {
		return ono;
	}
	public void setOno(int ono) {
		this.ono = ono;
	}
	public String getUid() {
		return uid;
	}
	public void setUid(String uid) {
		this.uid = uid;
	}
	public int getOtotal() {
		return ototal;
	}
	public void setOtotal(int ototal) {
		this.ototal = ototal;
	}
	public Date getOdate() {
		return odate;
	}
	public void setOdate(Date odate) {
		this.odate = odate;
	}
	public char getOstatus() {
		return ostatus;
	}
	public void setOstatus(char ostatus) {
		this.ostatus = ostatus;
	}
}
