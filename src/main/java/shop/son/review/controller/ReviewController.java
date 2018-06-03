package shop.son.review.controller;



import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import shop.son.review.exception.ReviewNotFoundException;
import shop.son.review.model.Review;
import shop.son.review.service.ReviewService;

@RestController
@RequestMapping("/toma/review")
@CrossOrigin(origins="*")
public class ReviewController {
	
	

	@Autowired
	ReviewService reviewService;
	
	
	@RequestMapping(value = "/{p_code}", method = RequestMethod.GET)
	public List<Review> listAllReviews(@PathVariable("p_code") String p_code ) throws ReviewNotFoundException{
		List<Review> reviews = reviewService.selectAllReview(p_code);
		return reviews;
	}
		
	
	

	
	
	
	
}
