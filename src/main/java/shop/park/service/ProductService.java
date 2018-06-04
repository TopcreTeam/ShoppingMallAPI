package shop.park.service;

import java.util.List;

import org.springframework.stereotype.Service;

import shop.park.model.Products;

@Service
public interface ProductService {
	List<Products> selectAllProducts();
	List<Products> selectByProductKind(String p_kind);
	Products selectByProductCode(String p_code);
	public void insertProduct(Products product);
	public void updateProduct(Products product);
	public void deleteProduct(String p_code);
}
