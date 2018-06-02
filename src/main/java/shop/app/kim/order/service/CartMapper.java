package shop.app.kim.order.service;

import java.util.ArrayList;

import org.apache.ibatis.annotations.Mapper;

import shop.app.kim.order.model.Cart;

@Mapper
public interface CartMapper {
	public ArrayList<Cart> cartList(String uid);
	
	public int cartDelete(int cno);
	
	public int cartUpdate(Cart cart);
	
	public int cartInsert(Cart cart);
}
