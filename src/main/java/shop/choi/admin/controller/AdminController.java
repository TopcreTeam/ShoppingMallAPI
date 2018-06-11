package shop.choi.admin.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import shop.choi.admin.model.Admin;
import shop.choi.admin.service.AdminService;
import shop.kim.login.model.Login;
import shop.kim.login.model.User;
import shop.kim.login.service.LoginService;

@RequestMapping("/toma/admin")
@RestController
@CrossOrigin(origins="*")
public class AdminController {
	
	@Autowired
	private AdminService adminService;
	
	@PostMapping("/")
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
	
}
