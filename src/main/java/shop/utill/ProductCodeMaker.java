package shop.utill;

import java.util.List;

import shop.park.model.Products;

public class ProductCodeMaker {
	
	private String zeroString;
	private String productFrontCode;
	private String productBackCode;
	private String newProductCode;
	
	
	
	public String getNewProductCode() {
		return newProductCode;
	}


	public ProductCodeMaker(List<Products> productList) {
		MakeProductFrontCode(productList.get(0).getP_kind());
		System.out.println("────────────────────frontcode : "+ this.productFrontCode);
		MakeProductBackCode(productList);
		System.out.println("────────────────────backcode : "+ this.productBackCode);
		this.newProductCode = productFrontCode+productBackCode;
		System.out.println("────────────────────front+back: "+ this.newProductCode);
	}
	
	
	void MakeProductFrontCode(String productKind){
		if(productKind.equals("Bakery")) {
			this.productFrontCode = "B";
		}else if(productKind.equals("Sauce")) {
			this.productFrontCode = "S";
		}else if(productKind.equals("Drink")) {
			this.productFrontCode = "D";
		}else if(productKind.equals("Instant")) {
			this.productFrontCode = "I";
		}else {
			this.productFrontCode = "SN";
		}
	}
	
	void MakeProductBackCode(List<Products> productList) {
		Products lastProduct = productList.get(productList.size()-1);
		String lastProductCode = lastProduct.getP_code();
		lastProductCode = lastProductCode.replaceAll("[^0-9]", "");
		System.out.println("───────────────────────lastProcutCode : "+lastProductCode+"───────────────────────────────");
		int newProductNumber = Integer.parseInt(lastProductCode)+1;	
		this.productBackCode = pad(newProductNumber,4);
	}
	
	String pad(int number, int width) {
		String xnumber = number+ "";
		zeroString = "";
		int numberlength = xnumber.length();
		if(numberlength>=width) {
			return xnumber;
		}else {                 
			int zeroCount = width - numberlength; //0이 들어갈 횟수
			for(int i = 0 ;i<zeroCount;i++) {
				zeroString += "0";
				if(i==zeroCount) {
					break;
				}
			}
			System.out.println("───────────────────────zeroString : "+zeroString+"───────────────────────────────");
			System.out.println("───────────────────────zeroString+xnumber : "+zeroString+xnumber+"───────────────────────────────");
			return zeroString+xnumber;
		}
	}
}
