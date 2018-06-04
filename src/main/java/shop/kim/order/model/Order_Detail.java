package shop.kim.order.model;

public class Order_Detail {
	private int odno;
	private int ono;
	private String odimg;
	private String odpname;
	private int odpprice;
	private int odpamount;
	public int getOdno() {
		return odno;
	}
	public void setOdno(int odno) {
		this.odno = odno;
	}
	public int getOno() {
		return ono;
	}
	public void setOno(int ono) {
		this.ono = ono;
	}
	public String getOdimg() {
		return odimg;
	}
	public void setOdimg(String odimg) {
		this.odimg = odimg;
	}
	public String getOdpname() {
		return odpname;
	}
	public void setOdpname(String odpname) {
		this.odpname = odpname;
	}
	public int getOdpprice() {
		return odpprice;
	}
	public void setOdpprive(int odpprice) {
		this.odpprice = odpprice;
	}
	public int getOdpamount() {
		return odpamount;
	}
	public void setOdpamount(int odpamount) {
		this.odpamount = odpamount;
	}
}
