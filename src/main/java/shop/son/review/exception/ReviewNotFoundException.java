package shop.son.review.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND, reason = "Review not found")
public class ReviewNotFoundException extends Exception {

	public ReviewNotFoundException(){
		super();
	}
	
	public ReviewNotFoundException(String message){
		super(message);
	}
}
