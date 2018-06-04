package shop.kim.login.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import shop.kim.login.model.User;
import shop.kim.login.model.Values;

@Service
public class LoginService {
	@Autowired
	private LoginMapper loginMapper;
	
	public int authenticate(Values login) {
		int result = 0;
		User user=loginMapper.logincheck(login.getUid());
		if(user==null) {//아이디가 존재하지 않는다
			result=0;
		}else {
			if(!user.getUpw().equals(login.getUpw())) {//비밀번호가 틀렸다
				result=-1;
			}else {//로그인 성공
				result=1;
			}
		}
		return result;
	}
	
	public User getUser() {
		return loginMapper.getUser();
	}

}