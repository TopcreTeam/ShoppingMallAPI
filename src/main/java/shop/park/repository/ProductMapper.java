package shop.park.repository;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import shop.park.model.Products;

@Mapper
public interface ProductMapper {
	
	@Select("SELECT * FROM tm_product ORDER BY p_code DESC")
	public List<Products> selectAllProducts();
	
	@Select("SELECT COUNT(*) FROM tm_product")
	public int count();
	
	public Products selectByProduct(String p_code);
	
	public List<Products> selectByKind(String p_kind);
	
	public int insert(Products product);
	
	public int update(Products product);
	
	public int delete(Products product);
	
}
