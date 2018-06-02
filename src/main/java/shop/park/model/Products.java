package shop.park.model;

import java.util.Date;

public class Products {
	private String p_code;
	private String p_name;
	private int p_count;
	private String p_kind;
	private int p_price;
	private int p_sellPrice;
	private int p_profit;
	private String p_content;
	private String p_img;
	private Date p_date;
	
	public Products() {}

	public Products(String p_code, String p_name, int p_count, String p_kind, int p_price, int p_sellPrice,
			int p_profit, String p_content, String p_img, Date p_date) {
		super();
		this.p_code = p_code;
		this.p_name = p_name;
		this.p_count = p_count;
		this.p_kind = p_kind;
		this.p_price = p_price;
		this.p_sellPrice = p_sellPrice;
		this.p_profit = p_profit;
		this.p_content = p_content;
		this.p_img = p_img;
		this.p_date = p_date;
	}

	public String getP_code() {
		return p_code;
	}

	public void setP_code(String p_code) {
		this.p_code = p_code;
	}

	public String getP_name() {
		return p_name;
	}

	public void setP_name(String p_name) {
		this.p_name = p_name;
	}

	public int getP_count() {
		return p_count;
	}

	public void setP_count(int p_count) {
		this.p_count = p_count;
	}

	public String getP_kind() {
		return p_kind;
	}

	public void setP_kind(String p_kind) {
		this.p_kind = p_kind;
	}

	public int getP_price() {
		return p_price;
	}

	public void setP_price(int p_price) {
		this.p_price = p_price;
	}

	public int getP_sellPrice() {
		return p_sellPrice;
	}

	public void setP_sellPrice(int p_sellPrice) {
		this.p_sellPrice = p_sellPrice;
	}

	public int getP_profit() {
		return p_profit;
	}

	public void setP_profit(int p_profit) {
		this.p_profit = p_profit;
	}

	public String getP_content() {
		return p_content;
	}

	public void setP_content(String p_content) {
		this.p_content = p_content;
	}

	public String getP_img() {
		return p_img;
	}

	public void setP_img(String p_img) {
		this.p_img = p_img;
	}

	public Date getP_date() {
		return p_date;
	}

	public void setP_date(Date p_date) {
		this.p_date = p_date;
	}
}
