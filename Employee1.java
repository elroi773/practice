package EmployeePackage;

public class Employee1 {
	int[] basicSalaryList = {230, 210, 190, 170, 150};
	String Id;
	String name;
	char basicSalary;
	
	Employee1(String Id, String name, char basicSalary) {
		this.Id = Id;
		this.name = name;
		this.basicSalary = basicSalary;
	}
	
	int getTotal(int bonus) {
		return basicSalaryList[basicSalary-'A'] + bonus;
	}
	
	void printEmployee1() {
		System.out.printf("%7s %5s %5d", Id, name, basicSalaryList[basicSalary-'A']);
	}
	
	static void line() {
		System.out.println("**********************************************************");
	}
	
	
}