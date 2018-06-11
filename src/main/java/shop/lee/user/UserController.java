package shop.lee.user;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import shop.kim.login.model.User;
import shop.lee.user.service.UserService;
import shop.park.MainController;

@RestController
@RequestMapping(value = "/toma/user")
@CrossOrigin(origins="*")
public class UserController {
	
	public static final Logger log = LoggerFactory.getLogger(MainController.class);
	
	@Autowired
	UserService userService;
	
//	@PutMapping("/Update")
//	public User updateUser(@RequestBody User user) {
//		log.info("회원정보수정시도");
//		userService.UpdateUser(user);
//		return user;
//		//angular에서 던져준 User객체를 받고 그 객체로 서비스의 UpdateUser함수실행
//	}
//	
	

	@PutMapping("/Update")
	public ResponseEntity<User> updateUser(@RequestBody User user) {
		int result = userService.UpdateUser(user);
		if(result==1) {
			log.info("정보수정 성공!");
			return new ResponseEntity<User>(HttpStatus.OK);
		}else {
			log.info("실패!");
			return new ResponseEntity<User>(HttpStatus.OK);
		}
	}
	
	@PostMapping(value = "/findID/")
	public User FindUserID(@RequestBody User user) {
		User FindUser = userService.FindID(user);
		
		System.out.println(FindUser.getUid());		
		return FindUser;
	}
	
	@PostMapping(value = "/findPW/")
	public User FindUserPW(@RequestBody User user) {
		User FindUser = userService.FindPW(user);
		
		System.out.println(FindUser.getUid());		
		return FindUser;
	}
	
	
}
