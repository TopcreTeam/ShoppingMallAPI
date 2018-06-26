package shop.kim.webSquare;

import java.awt.List;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
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
		
		@DeleteMapping("/removeOrder")
		public void removeOrder(@RequestBody Map rOnos) {
			
			ArrayList onoList=new ArrayList();
			onoList = (ArrayList)rOnos.get("removes");//Map으로 넘어온 DataList를 ArrayList로 받아준다.
			Map rowData;//DataList는 2쌍의 key=value로 구성되어 ArrayList에 저장됐기 때문에 값을 찾으려면 다시 Map으로 캐스팅해야한다. 
			for(int i=0;i<onoList.size();i++) {//ArrayList의 요소만큼 포문을 돌린다. 각 요소마다 Ono를 추출해야 하기 때문이다.
				rowData=(Map)onoList.get(i);
				int removeOno=(int)rowData.get("rOno");//각 요소의 "rOno" 값을 int형 변수에 담는다.
				orderService.orderDetailDelete(removeOno);//참조키를 가진 order_detail테이블 행 먼저 delete
				orderService.aOrderDelete(removeOno);//order_detail 행 delete
			}
			
		}
}
