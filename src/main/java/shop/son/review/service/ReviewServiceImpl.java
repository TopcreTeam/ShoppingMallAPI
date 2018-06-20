package shop.son.review.service;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import shop.son.review.exception.ReviewNotFoundException;
import shop.son.review.model.Review;
import shop.son.review.repository.ReviewMapper;
import shop.son.review.service.ReviewService;;

@Service
public class ReviewServiceImpl implements ReviewService {

	@Autowired
	ReviewMapper reviewMapper;

	

	
	
	public int insertReview(Review review){
	
		return reviewMapper.insertReview(review);
	}
	
	public int deleteReview(Review review){
		return reviewMapper.deleteReview(review);
	}
	
	public int updateReview(Review review){
		return reviewMapper.updateReview(review);
	}

	@Override
	public List<Review> selectAllReview(String p_code) throws ReviewNotFoundException {
		List<Review> reviews = reviewMapper.selectAllReview(p_code);
		if (reviews.isEmpty() || reviews == null) {
			throw new ReviewNotFoundException();
		} else {
			return reviews;
		}
	}

	@Override
	public List<Review> getReviewList() {
		return reviewMapper.getReviewList();
	}
	
	

}
