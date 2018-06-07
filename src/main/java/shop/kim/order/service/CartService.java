package shop.kim.order.service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import shop.kim.order.model.Cart;

@Service
public class CartService {
	
	@Autowired
	CartMapper cartMapper;
	public ArrayList<Cart> cartList(String uid){
		ArrayList<Cart> cartArr = new ArrayList<Cart>();
		
		cartArr=cartMapper.cartList(uid);
		return cartArr;
		
	};
	
	public int cartDelete(int cno) {
		return cartMapper.cartDelete(cno);
		
	};
	
	public int cartUpdate(Cart cart) {
		return cartMapper.cartUpdate(cart);
		
	};
	
	public int cartInsert(Cart cart) {
		return cartMapper.cartInsert(cart);
		
	};
	
	
}
