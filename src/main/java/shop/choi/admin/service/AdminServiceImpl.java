package shop.choi.admin.service;

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
	
	
	
}
