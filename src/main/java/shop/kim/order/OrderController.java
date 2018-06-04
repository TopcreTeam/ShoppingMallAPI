package shop.kim.order;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import shop.kim.order.model.Order;
import shop.kim.order.service.OrderService;

@RequestMapping("/toma/order")
@RestController
@CrossOrigin(origins="*")
public class OrderController {
	
	@Autowired
	OrderService orderService;
	
	@GetMapping("/")
	ArrayList<Order> orderList(){
		ArrayList<Order> orderArr = new ArrayList<Order>();
		orderArr=orderService.orderList();
		return orderArr;
	}
	
	@PostMapping("/order/insert/{order}")
	int orderInsert(Order order) {
		return orderService.orderInsert(order);
	}
	@DeleteMapping("/order/insert/{ono}")
	int orderInsert(int ono) {
		return orderService.orderDelete(ono);
	}
}
