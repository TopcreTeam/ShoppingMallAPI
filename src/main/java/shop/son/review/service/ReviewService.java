package shop.son.review.service;


import java.util.List;

import shop.son.review.exception.ReviewNotFoundException;
import shop.son.review.model.Review;

public interface ReviewService {
	List<Review> selectAllReview(String p_code) throws ReviewNotFoundException;
	int	deleteReview(Review review);
	int updateReview(Review review);
	int insertReview(Review review);
	List<Review> getReviewList();
}
