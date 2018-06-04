package shop.kim.order.service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import shop.kim.order.model.Order;

@Service
public class OrderService {
	
	@Autowired
	OrderMapper orderMapper;
	
	public ArrayList<Order> orderList(){
		ArrayList<Order> orderArr=orderMapper.orderList();
		
		return orderArr;
	};
	
	public int orderInsert(Order order) {
		return orderMapper.orderInsert(order);
	};
	
	public int orderDelete(int ono) {
		return orderMapper.orderDelete(ono);
	};
}
