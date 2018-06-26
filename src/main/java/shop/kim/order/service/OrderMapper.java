package shop.kim.order.service;

import java.util.ArrayList;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import shop.kim.order.model.Order;
import shop.kim.order.model.Order_Detail;

@Mapper
public interface OrderMapper {
//	주문
	public ArrayList<Order> orderList(String uid);
	
	public int orderInsert(Order order);
	
	public int cancleOrder(int ono);
	
//	주문상세
	public ArrayList<Order_Detail> orderDetailList(int ono);
	
	public int orderDetailInsert(Order_Detail orderDetail);
	
	@Select("SELECT MAX(O_NO) FROM TM_ORDER")
	public int maxO_no();
	
	public int orderDetailDelete(int ono);
	
	//관리자 페이지용
	public int orderUpdate(Order order);
	
	public ArrayList<Order> getAllorderList();
	
	public int aOrderDelete(int ono);
}
