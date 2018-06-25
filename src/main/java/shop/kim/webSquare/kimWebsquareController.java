package shop.kim.webSquare;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import shop.choi.admin.model.Admin;
import shop.choi.admin.service.AdminService;
import shop.kim.login.model.User;
import shop.kim.login.service.LoginService;
import shop.kim.order.model.Order;
import shop.kim.order.service.OrderService;

@RequestMapping("/toma/admin/kdh")
@RestController
@CrossOrigin(origins="*")
public class kimWebsquareController {
	
	@Autowired
	private AdminService adminService;
	@Autowired
	private LoginService loginService;
	@Autowired
	private OrderService orderService;
	
	
	//WEBSQAURE용
		@PostMapping("/webLogin")
		public Map webAdLogin(@RequestBody Map param2) {
			Admin requestAdmin=new Admin();
			Admin admin=null;
			Map param=new HashMap();
//			admin=(Admin)param2.get("requestAdmin"); CAST안됨
			Map a = (Map)param2.get("requestAdmin");
			requestAdmin.setA_id(a.get("a_id").toString());
			requestAdmin.setA_pw(a.get("a_pw").toString());
			System.out.println(requestAdmin.getA_id()+","+requestAdmin.getA_pw());
			admin=adminService.adminLoginCheck(requestAdmin);
			
			param.put("requestAdmin", admin);
			
			return param;
		}
		
		
//		public User getUser() {
//			User user = loginService.getUser();
//			return user;
//		}
		@GetMapping("/userList")
		public Map getUser() {
			Map userList=new HashMap();
			ArrayList<User> userArr=loginService.getUser();
			userList.put("userList", userArr);
			
			return userList;
		}
		@GetMapping("/orderList")
		public Map getOrder() {
			Map orderList = new HashMap();
			ArrayList<Order> orderArr=orderService.getAllorderList();
			orderList.put("orderList", orderArr);
			
			return orderList;
		}
		
}
