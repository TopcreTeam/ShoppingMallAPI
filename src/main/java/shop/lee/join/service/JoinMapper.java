package shop.lee.join.service;

import org.apache.ibatis.annotations.Mapper;

import shop.kim.login.model.User;

@Mapper
public interface JoinMapper {
	public int NewUser(User user);

}