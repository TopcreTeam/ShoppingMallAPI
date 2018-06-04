package shop.son.productqna.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import shop.son.productqna.model.ProductQna;
import shop.son.productqna.service.ProductQnaService;

@RestController
@RequestMapping("/toma/productqna")
@CrossOrigin(origins = "*")
public class ProductQnaController {

	@Autowired
	ProductQnaService productQnaService;

	@RequestMapping(value = "/{p_code}", method = RequestMethod.GET)
	public List<ProductQna> listAllProductQna(@PathVariable("p_code") String p_code) {
		List<ProductQna> productQnas = productQnaService.selectAllProductQna(p_code);
		return productQnas;

	}
	
	@DeleteMapping("/{u_id}")
	public int deleteProductQna(@PathVariable("u_id") String u_id) {
		return productQnaService.deleteProductQna(u_id);
	}
	
	@PostMapping("/{u_id}")
	public int updateProductQna(@PathVariable("u_id") String u_id) {
		return productQnaService.updateProductQna(u_id); 
	}
	
	
	@PostMapping("/")
	public int insertProductQna(@PathVariable("/") ProductQna productQna) {
		return productQnaService.insertProductQna(productQna);
		
	}

}
