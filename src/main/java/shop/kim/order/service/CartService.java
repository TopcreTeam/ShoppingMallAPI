package shop.kim.order.service;

import java.util.ArrayList;

import org.springframework.stereotype.Service;

import shop.kim.order.model.Cart;

@Service
public class CartService {
	CartMapper cartMapper;
	public ArrayList<Cart> cartList(String uid){
		ArrayList<Cart> cartArr = new ArrayList<Cart>();
		
		cartArr=cartMapper.cartList(uid);
		return cartArr;
		
	};
	
	public int cartDelete(int cno) {
		return cno;
		
	};
	
	public int cartUpdate(Cart cart) {
		return 0;
		
	};
	
	public int cartInsert(Cart cart) {
		return 0;
		
	};
	
	
}
