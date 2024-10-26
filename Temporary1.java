package EmployeePackage;

public class Temporary1 extends Employee1 {
	private int bonusPay;
	private int year;
	
	Temporary1(String Id, String name, char basicSalary, int bonusPay, int year) {
		super(Id, name, basicSalary); // 
		this.bonusPay = bonusPay;
		this.year = year;
	}
	
	void printEmployee1() {
		super.printEmployee1();
		System.out.printf("%5d %5d (%d)\n", this.bonusPay, getTotal(bonusPay), this.year ); 
	}
	
	static void title() {
		System.out.println("Temporary*************************************************");
		System.out.println("사번      이름     기본급      관리수당      총수력액       계약기간");
		System.out.println("**********************************************************");
	}
	
}
