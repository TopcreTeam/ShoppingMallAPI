package shop.choi.admin.repository;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import shop.choi.admin.model.Admin;

@Mapper
public interface AdminMapper {
	public Admin adminLoginCheck(String a_id);
	public List<Admin> selectAllAdmin();
	public int insertAdmin(Admin admin);
	public int updateAdmin(Admin admin);
	public int deleteAdmin(String a_id);
}
