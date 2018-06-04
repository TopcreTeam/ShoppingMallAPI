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
	public int updateProductQna(String u_id) {
		// TODO Auto-generated method stub
		return productQnaMapper.updateProductQna(u_id);
	}

	@Override
	public int deleteProductQna(String u_id) {
		// TODO Auto-generated method stub
		return productQnaMapper.deleteProductQna(u_id);
	}

}
