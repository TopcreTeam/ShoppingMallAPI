package shop.kim.order.service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import shop.kim.order.model.Order;
import shop.kim.order.model.Order_Detail;

@Service
public class OrderService {
	
	@Autowired
	OrderMapper orderMapper;

	
//	주문
	public ArrayList<Order> orderList(String uid){
		ArrayList<Order> orderArr=orderMapper.orderList(uid);
		
		return orderArr;
	};
	
	public int orderInsert(Order order) {
		return orderMapper.orderInsert(order);
	};
	
	public int cancleOrder(int ono) {
		return orderMapper.cancleOrder(ono);
	}
	
	//관리자 페이지용
	public ArrayList<Order> getAllorderList(){
		ArrayList<Order> orderArr=orderMapper.getAllorderList();
		return orderArr;
	};
	
	public int orderUpdate(Order order) {
		return orderMapper.orderUpdate(order);
	}
	
	public int aOrderDelete(int ono) {
		
		return orderMapper.aOrderDelete(ono);
	}
	
//	주문상세
	
	public ArrayList<Order_Detail> orderDetailList(int ono){
		ArrayList<Order_Detail> orderDetailArr=new ArrayList<Order_Detail>();
		orderDetailArr=orderMapper.orderDetailList(ono);
		
		return orderDetailArr;
	}
	
	public int orderDetailInsert(Order_Detail orderDetail) {
		return orderMapper.orderDetailInsert(orderDetail);
	}
	
	public int maxO_no() {
		return orderMapper.maxO_no();
	}

	public int orderDetailDelete(int ono) {
		return orderMapper.orderDetailDelete(ono);
	};

	
}
