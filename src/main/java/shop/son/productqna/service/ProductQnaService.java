package shop.son.productqna.service;

import java.util.List;

import org.springframework.stereotype.Service;

import shop.son.productqna.model.ProductQna;
import shop.son.review.model.Review;

@Service
public interface ProductQnaService {

	
	List<ProductQna> selectAllProductQna(String p_code);
	
	int insertProductQna(ProductQna productQna);
	
	int editProductQna(ProductQna productQna);
	
	int deleteProductQna(ProductQna productQna);
	  
	ProductQna selectByProductQnaNo(int pq_no);
	
	void incrementProductQnaHits(int pq_no);
	
	void updateProductQna(ProductQna productQna);
	
	List<ProductQna> getAllProductQna();
	
	int replyProductQna(ProductQna productQna);
}
