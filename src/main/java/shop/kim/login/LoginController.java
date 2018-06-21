package shop.kim.login;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import shop.kim.login.model.Login;
import shop.kim.login.model.User;
import shop.kim.login.service.LoginService;


@RequestMapping("/toma/login")
@RestController
@CrossOrigin(origins="*")
public class LoginController {
	
	@Autowired
	private LoginService loginService;
	
	@PostMapping("/")
	public User login(@RequestBody Login login) { //Login : 앵귤러에서 던진 id/pw

		//User 객체를 던지는 함수일때
		System.out.println(login.getUid());
		User user = loginService.logincheck(login);		
		if(user==null) {//아이디가 존재하지 않는다
			System.out.println("널이들어왔다");
			return null;
		}else {
			if(!user.getUpw().equals(login.getUpw())) {//비밀번호가 틀렸다
				User pwdError = new User();
				pwdError.setUaddr1("err");
				return pwdError;
			}
		}
		System.out.println("Return직전");
		System.out.println(user.getUname());
		System.out.println(user.getUaddr1());
		return user;
		
//		//ResponseEntity<User>(HttpStatus.OK) 로 던질때
//		User user = loginService.logincheck(login);
//		if(user==null) {
//			System.out.println("아이디가 없음");
//			return new ResponseEntity<User>(HttpStatus.BAD_REQUEST);
//		}else if(!user.getUpw().equals(login.getUpw())) {
//			System.out.println("비밀번호 불일치");
//			return new ResponseEntity<User>(HttpStatus.BAD_REQUEST);
//		}
//		
//		//ResponseEntity를 던지는 함수일때
//		return new ResponseEntity<User>(HttpStatus.OK);
	}

	
	
}
