package shop.choi.admin.controller;

import java.util.List;

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

import shop.choi.admin.model.Admin;
import shop.choi.admin.service.AdminService;
import shop.kim.login.model.Login;
import shop.kim.login.model.User;
import shop.kim.login.service.LoginService;
import shop.kim.order.model.Order;
import shop.park.model.Products;
import shop.son.productqna.model.ProductQna;

@RequestMapping("/toma/admin")
@RestController
@CrossOrigin(origins="*")
public class AdminController {
	
	@Autowired
	private AdminService adminService;
	
	@PostMapping("/login")
	public Admin adminlogin(@RequestBody Admin requestAdmin) { //Login : 앵귤러에서 던진 id/pw

		System.out.println(requestAdmin.getA_id());
		Admin admin = adminService.adminLoginCheck(requestAdmin);
		if(admin==null) {//아이디가 존재하지 않는다
			System.out.println("널이들어왔다");
			return null;
		}else {
			if(!admin.getA_pw().equals(requestAdmin.getA_pw())) {//비밀번호가 틀렸다
				return null;
			}
		}
		return admin;
	}
	


	@GetMapping("/")
	public List getAdminList() {
		return adminService.getAdminList();
	}
	
	@PostMapping("/")
	public int deleteAdmin(@RequestBody Admin admin) {
		return adminService.createAdmin(admin);
	}
	
	@PutMapping("/")
	public int updateAdmin(@RequestBody Admin admin) {
		return adminService.updateAdmin(admin);
	}
	
	@DeleteMapping("/{a_id}")
	public int deleteProductQna(@PathVariable("a_id") String a_id) {
		return adminService.deleteAdmin(a_id);
	}
	

}
