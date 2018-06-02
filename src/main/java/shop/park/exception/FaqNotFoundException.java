package shop.park.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND, reason = "Faq not found")
public class FaqNotFoundException extends Exception {
	public FaqNotFoundException() {
		super();
	}
	
	public FaqNotFoundException(String message) {
		super(message);
	}
}
