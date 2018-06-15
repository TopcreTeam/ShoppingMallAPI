package shop.choi.admin.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import shop.choi.admin.model.Admin;
import shop.choi.admin.repository.AdminMapper;

@Service
public class AdminServiceImpl implements AdminService {
	
	@Autowired
	AdminMapper adminMapper;

	@Override
	public Admin adminLoginCheck(Admin admin) {
		return adminMapper.adminLoginCheck(admin.getA_id());
	}

	@Override
	public List<Admin> getAdminList() {
		List<Admin> adminList = adminMapper.selectAllAdmin();
		return adminList;
	}

	@Override
	public int createAdmin(Admin admin) {
		return adminMapper.insertAdmin(admin);
	}

	@Override
	public int deleteAdmin(String a_id) {
		return adminMapper.deleteAdmin(a_id);
	}

	@Override
	public int updateAdmin(Admin admin) {
		return adminMapper.updateAdmin(admin);
	}
	
	
	
}
