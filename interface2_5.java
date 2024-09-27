package javaclass;
abstract class ShapeExam1 {
    public String name1;

    public String getName() {
        return name1;
    }

    public abstract double getArea1();

    public abstract double getCircum1();
}

class Rectangle1 extends ShapeExam1 {
    private int Length1;
    private int Width1;

    public Rectangle1(String name1, int Length1, int Width1) {
        this.Length1 = Length1;
        this.Width1 = Width1;
        this.name1 = name1;
    }

    public double getArea1() {
        return Length1 * Width1;
    }

    public double getCircum1() {
        return 2 * (Length1 + Width1);
    }
}

class Circle extends ShapeExam1 {
    private double r;

    public Circle (int r) {
        this.r = r;
    }

    public double getArea1() {
        return Math.PI * r*r;
    }

    public double getCircum1() {
        return 2 * Math.PI * r;
    }
}
public class interface2_5 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		 Circle c = new Circle(5);
	     System.out.println("원의 면적 : " +  c.getArea1());
	     System.out.println("원의 둘레 : " + c.getCircum1());
	     ShapeExam1 s = c; //downcasting 
	     System.out.println(s.getArea1());
	}

}
