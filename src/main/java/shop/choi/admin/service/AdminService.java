package shop.choi.admin.service;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import shop.choi.admin.model.Admin;

@Service
public interface AdminService {
	public Admin adminLoginCheck(Admin admin);
	public List<Admin> getAdminList();
	public int createAdmin(Admin admin);
	public int updateAdmin(Admin admin);
	public int deleteAdmin(String a_id);
	Map saveSpEmp(Map param) throws Exception;
}
