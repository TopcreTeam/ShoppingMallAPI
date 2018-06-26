package shop.son.review.repository;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import shop.son.review.model.Review;

@Mapper
public interface ReviewMapper {

	public List<Review> selectAllReview(String p_code);
	
	public int insertReview(Review review);
	
	public int editReview(Review review);
	
	public int deleteReview(Review review);
	
	public List<Review> getReviewList();
	
    public Review selectByReviewNo(int rev_no);
	
	public int updateReviewHits(Review review);
	
}
