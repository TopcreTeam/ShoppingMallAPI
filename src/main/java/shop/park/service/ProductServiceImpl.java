package shop.park.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import shop.park.model.Products;
import shop.park.repository.ProductMapper;
import shop.utill.ProductCodeMaker;

@Service
public class ProductServiceImpl implements ProductService {
	
	@Autowired
	ProductMapper productMapper;
	
	
	
	@Override
	public List<Products> selectAllProducts(){
		
		List<Products> productsList = productMapper.selectAllProducts();
		
		return productsList;
	}

	@Override
	public List<Products> selectByProductKind(String p_kind) {

		List<Products> productsKindList = productMapper.selectByProductKind(p_kind);
		
		return productsKindList;
	}

	@Override
	public Products selectByProductCode(String p_code) {
		Products product = productMapper.selectByProductCode(p_code);
		return product;
	}

	@Override
	public void insertProduct(Products product) {
		if(product.getP_code()==null || product.getP_code()=="") {
				List<Products> productList = productMapper.selectByProductKind(product.getP_kind());
				ProductCodeMaker codeMaker = new ProductCodeMaker(productList);
				product.setP_code(codeMaker.getNewProductCode());
				product.setP_img(codeMaker.getNewProductCode());
				System.out.println("────────────────────새상품코드 "+product.getP_code());
				
				productMapper.insertProduct(product);
		}else {
				System.out.println("──────────────────── "+product.getP_code());
			productMapper.insertProduct(product);
		}
	}

	@Override
	public void updateProduct(Products product) {
		productMapper.updateProduct(product);
	}

	@Override
	public void deleteProduct(String p_code) {
		productMapper.deleteProduct(p_code);
	}

	
	public void codeMaker() {
		
	}
}
