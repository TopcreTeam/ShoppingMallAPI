package shop;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;

import shop.choi.fileupload.property.FileStorageProperties;

@SpringBootApplication
@EnableConfigurationProperties({FileStorageProperties.class})
public class ShoppingMallApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(ShoppingMallApiApplication.class, args);
	}

}
