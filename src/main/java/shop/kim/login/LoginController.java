package shop.kim.login;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import shop.kim.login.model.User;
import shop.kim.login.model.Login;
import shop.kim.login.service.LoginService;


@RequestMapping("/toma/login")
@RestController
@CrossOrigin(origins="*")
public class LoginController {
	
	@Autowired
	private LoginService loginService;
	
	@PostMapping("/")
	public User login(@PathVariable("login") Login login) { //Login : 앵귤러에서 던진 id/pw
		User user = loginService.logincheck(login);
		if(user==null) {//아이디가 존재하지 않는다
			return null;
		}else {
			if(!user.getUpw().equals(login.getUpw())) {//비밀번호가 틀렸다
				return null;
			}
		}
		return user;
	}
	@GetMapping("/user/list")
	public User getUser() {
		User user = loginService.getUser();
		return user;
	}
	
	
}
