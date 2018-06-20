package shop.kim.login.service;

import java.util.ArrayList;

import org.apache.ibatis.annotations.Mapper;

import shop.kim.login.model.User;
import shop.kim.login.model.Login;

@Mapper
public interface LoginMapper {
	
	public User logincheck(String uid);
	
	public ArrayList<User> getUser();
}
