package shop.kim.login.service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import shop.kim.login.model.User;
import shop.kim.login.model.Login;

@Service
public class LoginService {
	@Autowired
	private LoginMapper loginMapper;
	
	public User logincheck(Login login) {
		return loginMapper.logincheck(login.getUid());
	}
	
	public ArrayList<User> getUser() {
		return loginMapper.getUser();
	}

}