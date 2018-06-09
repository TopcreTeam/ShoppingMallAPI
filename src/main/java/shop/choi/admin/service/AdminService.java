package shop.choi.admin.service;

import org.springframework.stereotype.Service;

import shop.choi.admin.model.Admin;

@Service
public interface AdminService {
	public Admin adminLoginCheck(Admin admin);
}
