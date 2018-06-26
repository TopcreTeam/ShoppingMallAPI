package shop.son.review.controller;



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

import shop.park.model.Qna;
import shop.son.review.exception.ReviewNotFoundException;
import shop.son.review.model.Review;
import shop.son.review.service.ReviewService;

@RestController
@RequestMapping("/toma/review")
@CrossOrigin(origins="*")
public class ReviewController {
	
	

	@Autowired
	ReviewService reviewService;
	
	//구현완료
	@RequestMapping(value = "/{p_code}", method = RequestMethod.GET)
	public List<Review> listAllReviews(@PathVariable("p_code") String p_code ) throws ReviewNotFoundException{
		List<Review> reviews = reviewService.selectAllReview(p_code);
		return reviews;
	}
	
	//구현완료
	@PostMapping("/delete")
	public int deleteReview(@RequestBody Review review) {
		return reviewService.deleteReview(review);
	}
	

	
	
	@PostMapping("/write")
	public ResponseEntity<?> insertReview(@RequestBody Review review){
		
        reviewService.insertReview(review);
		return new ResponseEntity<Review>(HttpStatus.CREATED);
		
	}
	
	@RequestMapping(value = "/detail/{rev_no}", method = RequestMethod.GET)
	public Review selectByReviewNo(@PathVariable("rev_no") int rev_no ) throws ReviewNotFoundException{
		Review review = reviewService.selectByReviewNo(rev_no);
		return review;
	}
	
	
	@PutMapping(value = "/{rev_no}")
	public ResponseEntity<?> getByReviewNo(@PathVariable("rev_no")  int rev_no, @RequestBody Review review) {
		
		
		review.setRev_no(rev_no);
		reviewService.incrementReviewHits(rev_no);
		
		return new ResponseEntity<Review>(HttpStatus.OK);
	}
	
	
	
	
	@PostMapping("/update")
	public int editReview(@RequestBody Review review){
		return reviewService.editReview(review);
	}
	

	@GetMapping("/")
	public List<Review> getReviewList(){
		return reviewService.getReviewList();
	}
	
	
}
