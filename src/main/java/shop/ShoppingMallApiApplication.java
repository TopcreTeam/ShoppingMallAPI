package shop;

import javax.annotation.Resource;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import shop.choi.admin.service.StorageService;

@SpringBootApplication
public class ShoppingMallApiApplication implements CommandLineRunner  {


	@Resource
	StorageService storageService;
	
	public static void main(String[] args) {
		SpringApplication.run(ShoppingMallApiApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		storageService.deleteAll();
		storageService.init();
	}
	
	
}
