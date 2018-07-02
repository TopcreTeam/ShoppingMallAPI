package shop.choi.admin.repository;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import shop.choi.admin.model.Admin;

@Mapper
public interface AdminMapper {
	public Admin adminLoginCheck(String a_id);
	public List<Admin> selectAllAdmin();
	public int insertAdmin(Admin admin);
	public int updateAdmin(Admin admin);
	public int deleteAdmin(String a_id);
	public int insertEmpWq(Map param);
	public int insertEmpWqBatch(Map param);
	public int updateEmpWq(Map param);
	public int updateEmpWqBatch(Map param);
	public int deleteEmpWq(Map param);
	public int deleteEmpWqBatch(Map param);
}
