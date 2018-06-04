package shop.kim.order;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import shop.kim.order.model.Cart;
import shop.kim.order.service.CartService;


@RestController
@RequestMapping("/toma/cart")
@CrossOrigin(origins="*")
public class CartController {
	
	@Autowired
	CartService cartService;
	
	@GetMapping("/{uid}")
	ArrayList<Cart> carList(String uid){
		ArrayList<Cart> cartArr=cartService.cartList(uid);
		return cartArr;
	}
	@DeleteMapping("/{cno}")
	int cartDelete(int cno) {
		int result = cartService.cartDelete(cno);
		return result;
	}
	
	@PutMapping("/{cart}")
	int cartUpdate(Cart cart) {
		int result = cartService.cartUpdate(cart);
		return result;
	}
	@PostMapping("/{cart}")
	int cartInsert(Cart cart) {
		int result = cartService.cartInsert(cart);
		return result;
	}
}