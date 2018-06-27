package shop.son.productqna.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
import shop.son.review.exception.ReviewNotFoundException;
import shop.son.review.model.Review;

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
	
	@PostMapping("/delete")
	public int deleteProductQna(@RequestBody ProductQna productQna) {
		return productQnaService.deleteProductQna(productQna);
	}
	
	@PutMapping("/update")
	public int editProductQna(@RequestBody ProductQna productQna) {
		return productQnaService.editProductQna(productQna); 
	}
	
	
	@PostMapping("/write")
	public ResponseEntity<?> insertProductQna(@RequestBody ProductQna productQna){
		
		productQnaService.insertProductQna(productQna);
		return new ResponseEntity<ProductQna>(HttpStatus.CREATED);
		
	}
	
	
	@RequestMapping(value = "/detail/{pq_no}", method = RequestMethod.GET)
	public ProductQna selectByProductQnaNo(@PathVariable("pq_no") int pq_no ) throws ReviewNotFoundException{
		ProductQna productQna = productQnaService.selectByProductQnaNo(pq_no);
		return productQna;
	}
	
	
	
	@PutMapping(value = "/{pq_no}")
	public ResponseEntity<?> getByProductQnaNo(@PathVariable("pq_no")  int pq_no, @RequestBody ProductQna productQna) {
		
		
		productQna.setPq_no(pq_no);
		productQnaService.incrementProductQnaHits(pq_no);
		
		return new ResponseEntity<ProductQna>(HttpStatus.OK);
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
