//원의 넓이를 구하는 프로그램을 다음 조건에 맞게 작성 
//1. class Point 를 정의 (점을 나타낸다)
/*(즉 class Circle 의 속성에는 점과 반지름을 포함한다)
 * 모든 변수의 접근 제어자는 private 로 한다 
 * 점의 x,y 좌표와 반지를 을 임의로 발생시켜 사용한다 
 * 출력을 위해 class Circle 내에 멤버 메서드를 정의한다 
 * main () 메서드를 <<main() 메서드의 구성>> 과 같이 구성한다 
 * 그 밖의 조선은 필요에 따라 작성하여 사용한다 
 * */
package JavaExam;
import java.util.Random;
class Point{
	private int a;
	private int b;
	
	public Point() {
		Random r1 = new Random();
		this.a = r1.nextInt(101);
		this.b = r1.nextInt(01);
	}
	public int geta() {
		return a;
	}
	public int getb() {
		return b;
	}
}

class Circle{
	private Point center;
	private double radius;
	
	public Circle() {
		this.center = new Point();
		Random r1 = new Random();
		this.radius = 1+r1.nextInt(100);
	}
	public double calArea() {
		double area = Math.PI * radius * radius;
	    return Math.round(area * 1000) / 1000.0; 
	}
	
	public void printCircle()
	{
		System.out.println("점의 좌표 <" + center.geta()+"," + center.getb()+"인 반지름 " + radius+"인 원의 넓이 : " + calArea());
		
	}
}
public class Ex1 {
	public static void main (String args[]) {
		Circle circle = new Circle();
		circle.printCircle();
	}
}
