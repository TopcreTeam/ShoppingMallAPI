package shop.lee.join;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import shop.kim.login.model.User;
import shop.lee.join.service.JoinService;

@RestController
@RequestMapping("/toma/join")
@CrossOrigin(origins= "*")
public class JoinController {

	@Autowired
	JoinService joinService;

	@PostMapping("/")
	public int NewUser(@RequestBody User user) {
		System.out.println(user.getUid());
		System.out.println(user.getUpw());
		System.out.println(user.getUname());
		System.out.println(user.getUaddr1());
		return joinService.NewUser(user);
	}

}
