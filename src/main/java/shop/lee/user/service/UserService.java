package shop.lee.user.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import shop.kim.login.model.User;


@Service
public class UserService {
	
	@Autowired
	UserMapper userMapper;
	
	public int UpdateUser(User user) {
		return userMapper.updateUser(user);
		
	}
	
	public User FindID(User user) {	
		return userMapper.FindID(user);		
	}
	
	public User FindPW(User user) {
		return userMapper.FindPW(user);		
	}
}
