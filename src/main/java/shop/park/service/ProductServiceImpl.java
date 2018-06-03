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
	public List<Products> selectAllProducts() throws ProductNotFoundException {
		
		List<Products> productsList = productMapper.selectAllProducts();
		
		if(productsList.isEmpty() || productsList == null) {
			throw new ProductNotFoundException();
		} else {
			return productsList;
		}
	}

	@Override
	public List<Products> selectByKind(String p_kind) throws ProductNotFoundException {
		List<Products> productsKindList = productMapper.selectByKind(p_kind);
		
		if(productsKindList.isEmpty() || productsKindList == null) {
			throw new ProductNotFoundException();
		} else {
			return productsKindList;
		}
	}

	@Override
	public Products selectByProduct(String p_code) throws ProductNotFoundException {
		Products product = productMapper.selectByProduct(p_code);
		
		if(product != null) {
			return product;
		} else {
			throw new ProductNotFoundException();
		}
	}

}
