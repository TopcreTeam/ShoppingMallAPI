package shop.son.productqna.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
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
	
	@DeleteMapping("/delete")
	public int deleteProductQna(@RequestBody ProductQna productQna) {
		return productQnaService.deleteProductQna(productQna);
	}
	
	@PutMapping("/update")
	public int updateProductQna(@RequestBody ProductQna productQna) {
		return productQnaService.updateProductQna(productQna); 
	}
	
	
	@PostMapping("/")
	public int insertProductQna(@PathVariable("/") ProductQna productQna) {
		return productQnaService.insertProductQna(productQna);
		
	}
	
	
//	관리자용 
	@GetMapping(value = "/")
	public List<ProductQna> listAllProducts() {
		return productQnaService.getAllProductQna();
	}

	
	
	@PutMapping("/reply")
	public int replyProductQna(@RequestBody ProductQna productQna) {
		return productQnaService.replyProductQna(productQna); 
	}
	
}
