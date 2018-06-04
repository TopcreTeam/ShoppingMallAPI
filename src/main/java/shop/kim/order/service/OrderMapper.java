package shop.kim.order.service;

import java.util.ArrayList;

import org.apache.ibatis.annotations.Mapper;

import shop.kim.order.model.Order;

@Mapper
public interface OrderMapper {
	
	public ArrayList<Order> orderList();
	
	public int orderInsert(Order order);
	
	public int orderDelete(int ono);
	
}
