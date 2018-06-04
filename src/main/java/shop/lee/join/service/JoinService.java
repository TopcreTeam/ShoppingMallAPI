package shop.lee.join.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import shop.kim.login.model.User;

@Service
public class JoinService {
	@Autowired
	JoinMapper joinMapper;

	public int NewUser(User user) {
		return joinMapper.NewUser(user);
	}
}