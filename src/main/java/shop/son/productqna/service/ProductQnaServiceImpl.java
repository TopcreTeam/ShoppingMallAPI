package shop.son.productqna.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import shop.son.productqna.model.ProductQna;
import shop.son.productqna.repository.ProductQnaMapper;
import shop.son.review.model.Review;

@Service
public class ProductQnaServiceImpl implements ProductQnaService {

	@Autowired
	ProductQnaMapper productQnaMapper;
	
	
	@Override
	public List<ProductQna> selectAllProductQna(String p_code) {
		
		List<ProductQna> productQnas = productQnaMapper.selectAllProductQna(p_code);
		
		return productQnas ;
	}

	@Override
	public int insertProductQna(ProductQna productQna) {
		
		return productQnaMapper.insertProductQna(productQna);
	}

	@Override
	public int editProductQna(ProductQna productQna) {
		// TODO Auto-generated method stub
		return productQnaMapper.editProductQna(productQna);
	}

	@Override
	public int deleteProductQna(ProductQna productQna) {
		// TODO Auto-generated method stub
		return productQnaMapper.deleteProductQna(productQna);
	}

	@Override
	public ProductQna selectByProductQnaNo(int pq_no) {
		ProductQna productQna = productQnaMapper.selectByProductQnaNo(pq_no);
		
		if(productQna != null) {
			return productQna;
		} else {
			return null;
		}
	}
	
	@Override
	public void incrementProductQnaHits(int pq_no) {
		ProductQna productQna = productQnaMapper.selectByProductQnaNo(pq_no);
		increment(productQna);
		updateProductQna(productQna);
	}
	
	private void increment(ProductQna productQna) {
		productQna.setPq_hits(productQna.getPq_hits() + 1);;
	}
	
	@Override
	public void updateProductQna(ProductQna productQna) {
		productQnaMapper.updateProductQnaHits(productQna);
	}
	
	
	
	
	
	
	@Override
	public List<ProductQna> getAllProductQna() {
		return productQnaMapper.getAllProductQna();
	}
	
//	관리자용
	@Override
	public int replyProductQna(ProductQna productQna) {
		return productQnaMapper.replyProductQna(productQna);
	}

}
