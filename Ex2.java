/*
 * 부채꼴 객체를 생성하기 위한 class Rectangle 을 정의 
 * 생성할 부채꼴의 개수를 입력받은 후, 반복문을 이용하여 입력된 개수만큼 
 * 부채꼴의 객페를 생성한다. 
 * 부채꼴에 대한 출력은 반복문을 이용하여 마지막에 한다 
 * 나머지는 필요에 따라 작서아여 사용한다 
 * 모든 멤버 변수의 접근제어자는 private 으로 한다 
 * 나머지는 필요에 따라 작성하여 사용한다 
 * */
package JavaExam;
import java.util.Scanner;
class Rectangle{
	private double radius;
	private int angle = 90;
	public Rectangle(double radius, int angle) {
		this.radius = radius;
		this.angle = angle;
	}
	public double calArea() {
	    return Math.PI * radius * radius * (angle / 360.0); 
	}

	public double calcircumference() {
	    return 2 * Math.PI * radius * (angle / 360.0) + 2 * radius; 
	}

	public void print() {
		System.out.println("반지름 " + radius+" 인 부채꼴의 면적 : " + calArea() + " 둘레 : " + calcircumference());
	}
}
public class Ex2 {
	public static void main (String args[]) {
		Scanner sc = new Scanner (System.in);
		int temp;
		
		System.out.print("생성할 부채꼴의 갯수 입력 : ");
		temp = sc.nextInt();
		
		Rectangle [] r1 = new Rectangle[temp];
		
		for(int i =0; i < temp; i++) {
			System.out.println((i+1)+"번 부채꼴");
			System.out.print("반지름 입력 : ");
			double radius = sc.nextDouble();
			
			r1[i] = new Rectangle(radius,90);
			
		}
		for(int i =0; i<temp; i++) {
			r1[i].print();
		}
		
	}
	
}
