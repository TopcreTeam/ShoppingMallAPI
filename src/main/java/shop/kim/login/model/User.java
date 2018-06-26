package shop.kim.login.model;

import java.sql.Date;

import lombok.Getter;
import lombok.Setter;

public class User {
	private String uid;
	private String upw;
	private String uname;
	private String uphone;
	private String uaddr1;
	private String uaddr2;
	private String uaddr3;
	private int uaddrcheck;
	private String ubirth;
	private char ugender;
	private Date ujoindate;
	private char usmsyn;
	private char uemailyn;
	public String getUid() {
		return uid;
	}
	public void setUid(String uid) {
		this.uid = uid;
	}
	public String getUpw() {
		return upw;
	}
	public void setUpw(String upw) {
		this.upw = upw;
	}
	public String getUname() {
		return uname;
	}
	public void setUname(String uname) {
		this.uname = uname;
	}
	public String getUphone() {
		return uphone;
	}
	public void setUphone(String uphone) {
		this.uphone = uphone;
	}
	public String getUaddr1() {
		return uaddr1;
	}
	public void setUaddr1(String uaddr1) {
		this.uaddr1 = uaddr1;
	}
	public String getUaddr2() {
		return uaddr2;
	}
	public void setUaddr2(String uaddr2) {
		this.uaddr2 = uaddr2;
	}
	public String getUaddr3() {
		return uaddr3;
	}
	public void setUaddr3(String uaddr3) {
		this.uaddr3 = uaddr3;
	}
	public int getUaddrcheck() {
		return uaddrcheck;
	}
	public void setUaddrcheck(int uaddrcheck) {
		this.uaddrcheck = uaddrcheck;
	}
	public String getUbirth() {
		return ubirth;
	}
	public void setUbirth(String ubirth) {
		this.ubirth = ubirth;
	}
	public char getUgender() {
		return ugender;
	}
	public void setUgender(char ugender) {
		this.ugender = ugender;
	}
	public Date getUjoindate() {
		return ujoindate;
	}
	public void setUjoindate(Date ujoindate) {
		this.ujoindate = ujoindate;
	}
	public char getUsmsyn() {
		return usmsyn;
	}
	public void setUsmsyn(char usmsyn) {
		this.usmsyn = usmsyn;
	}
	public char getUemailyn() {
		return uemailyn;
	}
	public void setUemailyn(char uemailyn) {
		this.uemailyn = uemailyn;
	}
	
}
