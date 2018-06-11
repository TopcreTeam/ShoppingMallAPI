package shop.lee.user.service;

import org.apache.ibatis.annotations.Mapper;

import shop.kim.login.model.User;

@Mapper
public interface UserMapper {
	public int updateUser(User user);
}
