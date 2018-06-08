package shop.kim.order.service;

import java.util.ArrayList;

import org.apache.ibatis.annotations.Mapper;

import shop.kim.order.model.Cart;
import shop.kim.order.model.OrderWriter;

@Mapper
public interface CartMapper {
	public ArrayList<Cart> cartList(String uid);
	
	public int cartDelete(int cno);
	
	public int cartUpdate(Cart cart);
	
	public int cartInsert(Cart cart);
	
	public ArrayList<Cart> orderWriteList(OrderWriter cno);
}
