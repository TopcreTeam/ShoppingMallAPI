package shop.app.park.service;

import java.util.List;

import org.springframework.stereotype.Service;

import shop.app.park.exception.ProductNotFoundException;
import shop.app.park.model.Products;


@Service
public interface ProductService {
	List<Products> selectAllProducts() throws ProductNotFoundException;
	List<Products> selectByKind(String kind) throws ProductNotFoundException;
	Products selectByProduct(String productCode) throws ProductNotFoundException;
}
