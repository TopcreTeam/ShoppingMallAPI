package shop.app.park.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND, reason = "Product not Found")
public class ProductNotFoundException extends Exception {
	public ProductNotFoundException() {
		super();
	}
	
	public ProductNotFoundException(String message) {
		super(message);
	}
}
