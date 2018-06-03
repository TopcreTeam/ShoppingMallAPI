package shop.son.review.repository;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import shop.son.review.model.Review;

@Mapper
public interface ReviewMapper {

	public List<Review> selectAllReview(String p_code);
	
}
