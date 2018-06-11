package shop.choi.admin.repository;

import org.apache.ibatis.annotations.Mapper;

import shop.choi.admin.model.Admin;

@Mapper
public interface AdminMapper {
	public Admin adminLoginCheck(String a_id);
	
}
