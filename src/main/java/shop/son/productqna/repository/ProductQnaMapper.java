package shop.son.productqna.repository;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import shop.son.productqna.model.ProductQna;

@Mapper
public interface ProductQnaMapper {

	public List<ProductQna> selectAllProductQna(String p_code);
	
	public int insertProductQna(ProductQna productQna);
	
	public int updateProductQna(ProductQna productQna);
	
	public int deleteProductQna(ProductQna productQna);
	
	public List<ProductQna> getAllProductQna();
	
	public int replyProductQna(ProductQna productQna);
	
}
