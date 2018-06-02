package shop.app.park.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND, reason = "Notice not found")
public class NoticeNotFoundException extends Exception {
	public NoticeNotFoundException() {
		super();
	}
	
	public NoticeNotFoundException(String message) {
		super(message);
	}
}
