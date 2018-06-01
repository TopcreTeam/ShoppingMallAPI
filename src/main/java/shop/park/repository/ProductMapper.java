package shop.park.repository;

import java.util.List;

import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import shop.park.model.Products;

@Mapper
public interface ProductMapper {
	
	@Select("SELECT * FROM tm_product ORDER BY p_code DESC")
	public List<Products> selectAllProducts();
	
	@Select("SELECT COUNT(*) FROM tm_product")
	public int count();
	
	@Select("SELECT * FROM tm_product WHERE p_code=#{p_code}")
	public Products selectByProduct(String p_code);
	
	@Select("SELECT * FROM tm_product WHERE p_kind=#{p_kind}")
	public List<Products> selectByKind(String p_kind);
	
	@Insert("INSERT INTO tm_product(p_code, p_name, p_count, p_kind, p_price, p_sellprice, p_profit, p_content, p_img, p_date) "
			+ "VALUES(TM_PRODUCT_SEQ.NEXTVAL, #{p_name}, #{p_count}, #{p_kind}, #{p_price}, #{p_sellprice}, #{p_profit}, #{p_content}, #{p_img}, SYSDATE)")
	public int insert(Products product);
	
	@Update("UPDATE tm_product SET p_name=#{p_name}, p_count=#{p_count}, p_kind=#{p_kind}, "
			+ "p_price=#{p_price}, p_sellprice=#{p_sellprice}, p_profit=#{p_profit}, p_content=#{p_content}, p_img=#{p_img}")
	public int update(Products product);
	
	@Delete("DELETE FROM tm_product WHERE p_code=#{p_code}")
	public int delete(Products product);
	
}
