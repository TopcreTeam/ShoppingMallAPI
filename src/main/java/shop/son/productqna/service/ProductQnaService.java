package shop.son.productqna.service;

import java.util.List;

import org.springframework.stereotype.Service;

import shop.son.productqna.model.ProductQna;

@Service
public interface ProductQnaService {

	
	List<ProductQna> selectAllProductQna(String p_code);
	
	int insertProductQna(ProductQna productQna);
	
	int updateProductQna(String u_id);
	
	int deleteProductQna(String u_id);
	
	
}
