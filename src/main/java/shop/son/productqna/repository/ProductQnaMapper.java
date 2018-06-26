package shop.son.productqna.repository;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import shop.son.productqna.model.ProductQna;
import shop.son.review.model.Review;

@Mapper
public interface ProductQnaMapper {

	public List<ProductQna> selectAllProductQna(String p_code);
	
	public int insertProductQna(ProductQna productQna);
	
	public int editProductQna(ProductQna productQna);
	
	public int deleteProductQna(ProductQna productQna);
	
	public List<ProductQna> getAllProductQna();
	
    public ProductQna selectByProductQnaNo(int pq_no);
	
	public int updateProductQnaHits(ProductQna productQna);
	
	public int replyProductQna(ProductQna productQna);
	
}
