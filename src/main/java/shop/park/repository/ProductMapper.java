package shop.park.repository;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import shop.park.model.Products;

@Mapper
public interface ProductMapper {
	
	@Select("SELECT * FROM tm_product ORDER BY p_code DESC")
	public List<Products> selectAllProducts();
	
	@Select("SELECT COUNT(*) FROM tm_product")
	public int count();
	
	public Products selectByProductCode(String p_code);
	
	public List<Products> selectByProductKind(String p_kind);
	
	public int insertProduct(Products product);
	
	public int updateProduct(Products product);
	
	public int deleteProduct(String p_code);
	
}
