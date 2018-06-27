package shop.kim.order;

import java.util.ArrayList;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
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
	
	

	//관리자용
	@GetMapping("/")
	ArrayList<Order> getAllorderList(){
		ArrayList<Order> orderArr = new ArrayList<Order>();
		orderArr=orderService.getAllorderList();
		return orderArr;
	}
	
	@PutMapping("/")
	public int updateOrder(@RequestBody Order order) {
		return orderService.orderUpdate(order);
	}
	
	
	@GetMapping("/{uid}")
	ArrayList<Order> orderList(@PathVariable("uid") String uid){
		ArrayList<Order> orderArr = new ArrayList<Order>();
		orderArr=orderService.orderList(uid);
		return orderArr;
	}
	
	
	
	
	@PutMapping("/cancle")
	public int cancleOrder(@RequestBody int ono) {
		return orderService.cancleOrder(ono);
	}
	@PostMapping("/insert/order")
	int orderInsertOrder(@RequestBody Order order) {
		System.out.println(order.getOtotal());
		return orderService.orderInsert(order);
	}
	@PostMapping("/insert/detail")
	@Transactional
	void orderInsertDetail(@RequestBody ArrayList<Order_Detail> orderDetailArr) {
		int ono = orderService.maxO_no();
		for(int i=0;i<orderDetailArr.size();i++) {
			orderDetailArr.get(i).setOno(ono);
			orderService.orderDetailInsert(orderDetailArr.get(i));
			}
	}
	
	@GetMapping("/orderdetail/{ono}")
	ArrayList<Order_Detail> orderDetailList(@PathVariable("ono") int ono){
		ArrayList<Order_Detail> orderDetailArr=new ArrayList<Order_Detail>();
		orderDetailArr=orderService.orderDetailList(ono);
		
		return orderDetailArr;
	}
	

	
	
}
