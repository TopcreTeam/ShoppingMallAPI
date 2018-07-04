package shop.choi.admin.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

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

	@Override
	public Map saveSpEmp(Map param) throws Exception {
		Map resMap = new HashMap();

		List arr = null;

		int arrLen = 0;

		int rsNum = 0;

		if (((List) param.get("insert")).size() > 0) {

			resMap.put("I", adminMapper.insertEmpWqBatch(param));

		}

		if (((List) param.get("delete")).size() > 0) {

			resMap.put("D", adminMapper.deleteEmpWqBatch(param));

		}

		/*
		 * 
		 * if(((List)param.get("update")).size() > 0){
		 * 
		 * resMap.put("U",eduDao.updateSpMemberBatch(param));
		 * 
		 * }
		 * 
		 */

		arr = (List) param.get("update");

		arrLen = arr.size();

		if (arrLen > 0) {

			for (int i = 0; i < arrLen; i++) {

				rsNum += adminMapper.updateEmpWq((Map) arr.get(i));

			}

			resMap.put("U", rsNum);

		}

		return resMap;
	}
	
	
	
}
