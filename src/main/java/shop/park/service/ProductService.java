package shop.park.service;

import java.util.List;

import org.springframework.stereotype.Service;

import shop.park.exception.ProductNotFoundException;
import shop.park.model.Products;

@Service
public interface ProductService {
	List<Products> findAllProducts() throws ProductNotFoundException;
	List<Products> findByKind(String kind) throws ProductNotFoundException;
	Products findByProductCode(String productCode) throws ProductNotFoundException;
}
