package shop.son.review.service;


import java.util.List;

import shop.son.review.exception.ReviewNotFoundException;
import shop.son.review.model.Review;

public interface ReviewService {
	List<Review> selectAllReview(String p_code) throws ReviewNotFoundException;
	int	deleteReview(Review review);
	int editReview(Review review);
	int insertReview(Review review);
	Review selectByReviewNo(int rev_no);
	void incrementReviewHits(int rev_no);
	void updateReview(Review review);
	List<Review> getReviewList();
}
