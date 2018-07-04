package shop.kim.webSquare;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import shop.choi.admin.model.Admin;
import shop.choi.admin.service.AdminService;
import shop.kim.login.model.User;
import shop.kim.login.service.LoginService;
import shop.kim.order.model.Order;
import shop.kim.order.model.OrderWriter;
import shop.kim.order.service.OrderService;
import shop.park.model.Products;
import shop.park.service.ProductServiceImpl;

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
	@Autowired
	private ProductServiceImpl productService;
	
	//WEBSQAURE용
		@PostMapping("/webLogin")
		public Map webAdLogin(@RequestBody Map param2) {
			Admin requestAdmin=new Admin();
			Admin admin=null;
			Map param=new HashMap();
			OrderWriter message = new OrderWriter();//스트링 get/set객체
//			admin=(Admin)param2.get("requestAdmin"); CAST안됨
			Map a = (Map)param2.get("requestAdmin");
			requestAdmin.setA_id(a.get("a_id").toString());
			requestAdmin.setA_pw(a.get("a_pw").toString());
			admin=adminService.adminLoginCheck(requestAdmin);
			if(admin==null) {
				
				message.setCno("아이디가 존재하지 않습니다.");
				param.put("requestAdmin", null);
				param.put("message", message);
				return param;
			}
			
			if(admin.getA_pw().equals(a.get("a_pw").toString())){
				param.put("requestAdmin", admin);
			}else if(!admin.getA_pw().equals(a.get("a_pw").toString())){
				message.setCno("비밀번호가 틀렸습니다.");
				param.put("requestAdmin", null);
				param.put("message", message);
			}
			System.out.println(param.get("requestAdmin"));
			System.out.println(param.get("message"));
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
		
//		@DeleteMapping("/removeOrder")
//		public void removeOrder(@RequestBody Map rOnos) {
//			
//			ArrayList onoList=new ArrayList();
//			onoList = (ArrayList)rOnos.get("removes");//Map으로 넘어온 DataList를 ArrayList로 받아준다.
//			Map rowData;//DataList는 2쌍의 key=value로 구성되어 ArrayList에 저장됐기 때문에 값을 찾으려면 다시 Map으로 캐스팅해야한다. 
//			for(int i=0;i<onoList.size();i++) {//ArrayList의 요소만큼 포문을 돌린다. 각 요소마다 Ono를 추출해야 하기 때문이다.
//				rowData=(Map)onoList.get(i);
//				int removeOno=(int)rowData.get("rOno");//각 요소의 "rOno" 값을 int형 변수에 담는다.
//				orderService.orderDetailDelete(removeOno);//참조키를 가진 order_detail테이블 행 먼저 delete
//				orderService.aOrderDelete(removeOno);//order_detail 행 delete
//			}
//		}
//		@DeleteMapping("/removeOne")
//		public void removeOne(@RequestBody Map remove) {
//			Map removeMap = (Map)remove.get("remove");
//			int rOno = (int)removeMap.get("rOno");
//			orderService.orderDetailDelete(rOno);
//			orderService.aOrderDelete(rOno);
//		}
		@PutMapping("/updateOrder")
		public void updateOrder(@RequestBody Map order) {
			ArrayList orderList = (ArrayList) order.get("orderList");
			Map orderMap;
			Order odr=new Order();
			for(int i=0;i<orderList.size();i++) {
				orderMap=(Map)orderList.get(i);
				if(orderMap.get("rowStatus").toString().equals("U")) {
					odr.setOno((int)orderMap.get("ono"));
					odr.setOstatus(orderMap.get("ostatus").toString().charAt(0));
					orderService.orderUpdate(odr);
				}
			}
		}
		@DeleteMapping("/deleteOrder")
		public Map deleteOrder(@RequestBody Map order) {
			ArrayList orderList = (ArrayList) order.get("orderList");
			Map orderMap;
			for(int i=0;i<orderList.size();i++) {
				orderMap=(Map)orderList.get(i);
				if(orderMap.get("rowStatus").toString().equals("D")) {
					orderService.orderDetailDelete((int)orderMap.get("ono"));
					orderService.aOrderDelete((int)orderMap.get("ono"));
				}
			}
			//새 주문리스트 리턴
			Map newListMap=new HashMap();
			ArrayList<Order> newList = orderService.getAllorderList();
			newListMap.put("orderList", newList);
			return newListMap;
		}
		
		@GetMapping("/productList")
		public Map productList() {
			Map productList = new HashMap();
			List<Products> pListArr = productService.selectAllProducts();
			productList.put("pList", pListArr);
			return productList;
		}
		
		@PostMapping("/insProduct")
		public void insProduct(@RequestBody Map param) {
			Map inspMap = (Map)param.get("inProduct");
			
			Products insProduct = new Products();
			insProduct.setP_code(inspMap.get("p_code").toString());
			insProduct.setP_content(inspMap.get("p_content").toString());
			insProduct.setP_count(Integer.parseInt(inspMap.get("p_count").toString()));
			insProduct.setP_img(inspMap.get("p_img").toString());
			insProduct.setP_kind(inspMap.get("p_kind").toString());
			insProduct.setP_name(inspMap.get("p_name").toString());
			insProduct.setP_price(Integer.parseInt(inspMap.get("p_price").toString()));
			insProduct.setP_profit(Integer.parseInt(inspMap.get("p_profit").toString()));
			insProduct.setP_sellPrice(Integer.parseInt(inspMap.get("p_sellPrice").toString()));
			productService.insertProduct(insProduct);
			return;
		}
		
		@PostMapping("/saveProduct")
		public Map saveProduct(@RequestBody Map param) {
			ArrayList delpArr = (ArrayList)param.get("pList");
			Map proMap;
			Map pList = new HashMap();
			Products modProduct=new Products();
			for(int i=0;i<delpArr.size();i++) {
				proMap=(Map)delpArr.get(i);
				if(proMap.get("rowStatus").toString().equals("D")) {
					productService.deleteProduct(proMap.get("p_code").toString());
				}else if(proMap.get("rowStatus").toString().equals("U")) {
					modProduct.setP_code(proMap.get("p_code").toString());
					modProduct.setP_content(proMap.get("p_content").toString());
					modProduct.setP_count(Integer.parseInt(proMap.get("p_count").toString()));
					modProduct.setP_img(proMap.get("p_img").toString());
					modProduct.setP_kind(proMap.get("p_kind").toString());
					modProduct.setP_name(proMap.get("p_name").toString());
					modProduct.setP_price(Integer.parseInt(proMap.get("p_price").toString()));
					modProduct.setP_profit(Integer.parseInt(proMap.get("p_profit").toString()));
					modProduct.setP_sellPrice(Integer.parseInt(proMap.get("p_sellPrice").toString()));
					productService.updateProduct(modProduct);
				}					
			}
			pList.put("pList", productService.selectAllProducts());
			return pList;
		}
}