package shop.kim.login.service;

import org.apache.ibatis.annotations.Mapper;

import shop.kim.login.model.User;
import shop.kim.login.model.Values;

@Mapper
public interface LoginMapper {
	
	public User logincheck(String uid);
	
	public User getUser();
}
