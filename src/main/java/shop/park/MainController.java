package shop.park;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import shop.park.exception.ProductNotFoundException;
import shop.park.model.Products;
import shop.park.service.ProductServiceImpl;

@RestController
@RequestMapping(value = "/toma")
public class MainController {
	
	public static final Logger log = LoggerFactory.getLogger(MainController.class);
	
	@Autowired
	ProductServiceImpl productService;
	
	@RequestMapping(value = "", method = RequestMethod.GET)
	public List<Products> listAllProducts() throws ProductNotFoundException {
		log.info("Select All Products");
		
		List<Products> products = productService.findAllProducts();
//		
		return products;
//		return null;
	}
	
	@RequestMapping(value = "/product/{p_kind}", method = RequestMethod.GET)
	public List<Products> getByProductsKind(@PathVariable("p_kind") String productKind) throws ProductNotFoundException {
		log.info("Select Product by p_kind");
		
		List<Products> products = productService.findByKind(productKind);
		
		return products;
	}
	
	@RequestMapping(value = "/detail/product/{p_code}", method = RequestMethod.GET)
	public Products getByProductsCode(@PathVariable("p_code") String productCode) throws ProductNotFoundException {
		log.info("Select Product by p_code");
		
		Products product = productService.findByProductCode(productCode);
		
		return product;
	}
}
