package shop.choi.admin.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import shop.choi.admin.model.Admin;
import shop.choi.admin.service.AdminService;

@RequestMapping("/toma/admin")
@RestController
@CrossOrigin(origins="*")
public class AdminController {
	
	@Autowired
	private AdminService adminService;
	
	@PostMapping("/login")
	public Admin adminlogin(@RequestBody Admin requestAdmin) { //Login : 앵귤러에서 던진 id/pw
		
		System.out.println(requestAdmin.getA_id());
		Admin admin = adminService.adminLoginCheck(requestAdmin);
		if(admin==null) {//아이디가 존재하지 않는다
			System.out.println("널이들어왔다");
			return null;
		}else {
			if(!admin.getA_pw().equals(requestAdmin.getA_pw())) {//비밀번호가 틀렸다
				return null;
			}
		}
		return admin;
	}

	@GetMapping("/")
	public List getAdminList() {
		return adminService.getAdminList();
	}
	
	@PostMapping("/")
	public int deleteAdmin(@RequestBody Admin admin) {
		return adminService.createAdmin(admin);
	}
	
	@PutMapping("/")
	public int updateAdmin(@RequestBody Admin admin) {
		return adminService.updateAdmin(admin);
	}
	
	@DeleteMapping("/{a_id}")
	public int deleteProductQna(@PathVariable("a_id") String a_id) {
		return adminService.deleteAdmin(a_id);
	}
	
	// Websquare용 notice controller
		@PostMapping(value = "/admin.do")
		public Map websquareGetAllNotice() {
			Map adminObj = new HashMap<>();
			adminObj.put("adminList", adminService.getAdminList());
			adminObj.put("msg", "조회가 완료되었습니다.");
			return adminObj;
		}
		
		@PostMapping(value = "/admin/saveAndSelectMember.do")
		public Map saveAndSelectMember(@RequestBody Map param) throws Exception {
			Map resObj = new HashMap();
			List modList = null;
			Map saveResult = null;
			int modListLen;
			Map modParam = new HashMap<String, List>();
			List insert = new ArrayList<Map>();
			List update = new ArrayList<Map>();
			List delete = new ArrayList<Map>();
			Map rowData;
			String rowStatus;

			try {
				modList = (List) param.get("adminList");
				modListLen = modList.size();

				for (int i = 0; i < modListLen; i++) {
					rowData = (Map) modList.get(i);
					rowStatus = (String) rowData.get("rowStatus");

					if (rowStatus.equals("C")) {
						insert.add(rowData);
					} else if (rowStatus.equals("U")) {
						update.add(rowData);
					} else if (rowStatus.equals("D") || rowStatus.equals("E")) {
						delete.add(rowData);
					}
				}
				modParam.put("insert", insert);
				modParam.put("update", update);
				modParam.put("delete", delete);

				saveResult = adminService.saveSpEmp(modParam);

				try {
					resObj.put("adminList", adminService.getAdminList());
					resObj.put("msg", "조회가 완료되었습니다.");
				} catch (Exception ex) {
					throw new RuntimeException("저장은 완료되었으나 조회도중 오류가 발생하였습니다. 다시 조회 해주시기 바랍니다.");
				}
				resObj.put("rsObj", saveResult);
				resObj.put("msg", "저장이 완료되었습니다.");
				resObj.put("msgCode", "S");
			} catch (Exception ex) {
				ex.printStackTrace();
			}
			return resObj;
		}
}
