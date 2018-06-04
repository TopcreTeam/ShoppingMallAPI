package shop.kim.order;

import java.util.ArrayList;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import shop.kim.order.model.Order;
import shop.kim.order.model.Order_Detail;
import shop.kim.order.service.OrderService;

@RequestMapping("/toma/order")
@RestController
@CrossOrigin(origins="*")
public class OrderController {
	
	@Autowired
	OrderService orderService;
	
	@GetMapping("/{uid}")
	ArrayList<Order> orderList(@PathVariable("uid") String uid){
		ArrayList<Order> orderArr = new ArrayList<Order>();
		orderArr=orderService.orderList(uid);
		return orderArr;
	}
	
	@PostMapping("/insert/{order}/{orderDetailArr}")
	@Transactional
	int orderInsert(@PathVariable("order") Order order,@PathVariable("orderDetailArr") ArrayList<Order_Detail> orderDetailArr) {

		int oResult = orderService.orderInsert(order);
		int maxO_no = orderService.maxO_no();
		for(int i=0;i<orderDetailArr.size();i++) {
			orderService.orderDetailInsert(orderDetailArr.get(i),maxO_no);
			}
		
		return oResult;
	}
	@DeleteMapping("/delete/{ono}")
	int orderInsert(@PathVariable("ono") int ono) {
		return orderService.orderDelete(ono);
	}
	
	@GetMapping("/orderdetail/{ono}")
	ArrayList<Order_Detail> orderDetailList(@PathVariable("ono") int ono){
		ArrayList<Order_Detail> orderDetailArr=new ArrayList<Order_Detail>();
		orderDetailArr=orderService.orderDetailList(ono);
		
		return orderDetailArr;
	}
	
	@DeleteMapping("/orderdetail/delete/{odno}")
	int orderDetailInsert(@PathVariable("odno") int odno) {
		return orderService.orderDetailDelete(odno);
	}
}
