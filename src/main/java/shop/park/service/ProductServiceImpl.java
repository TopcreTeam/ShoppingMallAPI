package shop.park.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import shop.park.exception.ProductNotFoundException;
import shop.park.model.Products;
import shop.park.repository.ProductMapper;

@Service
public class ProductServiceImpl implements ProductService {
	
	@Autowired
	ProductMapper productMapper;
	
	@Override
	public List<Products> findAllProducts() throws ProductNotFoundException {
		
		List<Products> products = productMapper.selectAllProducts();
		if(products.isEmpty() || products == null) {
			throw new ProductNotFoundException();
		} else {
			return products;
		}
	}

	@Override
	public List<Products> findByKind(String p_kind) throws ProductNotFoundException {
		List<Products> products = productMapper.selectByKind(p_kind);
		if(products.isEmpty() || products == null) {
			throw new ProductNotFoundException();
		} else {
			return products;
		}
	}

	@Override
	public Products findByProductCode(String p_code) throws ProductNotFoundException {
		Products product = productMapper.selectByProduct(p_code);
		if(product != null) {
			return product;
		} else {
			throw new ProductNotFoundException();
		}
	}

}
