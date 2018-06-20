package shop.son.productqna.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import shop.son.productqna.model.ProductQna;
import shop.son.productqna.repository.ProductQnaMapper;

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
	public int updateProductQna(ProductQna productQna) {
		// TODO Auto-generated method stub
		return productQnaMapper.updateProductQna(productQna);
	}

	@Override
	public int deleteProductQna(ProductQna productQna) {
		// TODO Auto-generated method stub
		return productQnaMapper.deleteProductQna(productQna);
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
