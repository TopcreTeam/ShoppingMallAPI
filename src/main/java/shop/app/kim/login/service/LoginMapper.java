package shop.app.kim.login.service;

import org.apache.ibatis.annotations.Mapper;

import shop.app.kim.login.model.User;
import shop.app.kim.login.model.Values;

@Mapper
public interface LoginMapper {
	
	public User logincheck(String uid);
	
	public User getUser();
}
