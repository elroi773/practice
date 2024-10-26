package EmployeePackage;

public class SalesMan1 extends Employee1 {
	private int salesPay;
	
	SalesMan1(String Id, String name, char basicSalary, int salesPay) {
		super(Id, name, basicSalary);
		this.salesPay = salesPay;
	}
	
	void printEmployee1() {
		super.printEmployee(); // 고유변호, 이름, 기본급(문자)
		System.out.printf("%5d %5d\n", this.salesPay, getTotal(salesPay)); // 관리수당, 기본급+관리수당
	}
	
	static void title() {
		System.out.println("SalesMan**************************************************");
		System.out.println("사번      이름     기본급      관리수당      총수력액");
		System.out.println("**********************************************************");
	}
	
}
