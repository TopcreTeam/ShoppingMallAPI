package shop.kim.login;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import shop.kim.login.model.User;
import shop.kim.login.model.Values;
import shop.kim.login.service.LoginService;


//@RequestMapping("/toma/login")
@RestController
public class LoginController {
	
	@Autowired
	private LoginService loginService;
	
	@PostMapping("/")
	public int login(Values values) { //Values : 앵귤러에서 던진 id/pw
		int result = loginService.authenticate(values);
		
		return result;
	}
	@GetMapping("/user/list")
	public User getUser() {
		User user = loginService.getUser();
		return user;
	}
	
	
}
