package shop.lee.join;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import shop.kim.login.model.User;
import shop.lee.join.service.JoinService;

@RestController
@RequestMapping("/toma/join")
@CrossOrigin(origins = "*")
public class JoinController {

	@Autowired
	JoinService joinService;

	@PostMapping("/")
	public int NewUser(@PathVariable("/") User user) {
		return joinService.NewUser(user);
	}

}
