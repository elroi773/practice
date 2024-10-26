package EmployeePackage;

public class Manager1 extends Employee1 {
    private int managerPay;
    
    Manager1(String Id, String name, char basicSalary, int managerPay) {
        super(Id, name, basicSalary);
        this.managerPay = managerPay;
    }
    
    void printEmployee1() {
        super.printEmployee1(); 
        System.out.printf("%5d %5d\n", this.managerPay, getTotal());
    }
    
    int getTotal() {
        return this.getTotal() + this.managerPay; 
    }
    
    static void title() {
        System.out.println("Manager***************************************************");
        System.out.println("사번      이름     기본급      관리수당      총수령액");
        System.out.println("**********************************************************");
    }
}
