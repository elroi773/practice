package javaclass;

abstract class Shape {
    public String name;

    public String getName() {
        return name;
    }

    public abstract int getArea();

    public abstract int getCircum();
}

class Rectangle extends Shape {
    private int Length;
    private int Width;

    public Rectangle(String name, int Length, int Width) {
        this.Length = Length;
        this.Width = Width;
        this.name = name;
    }

    public int getArea() {
        return Length * Width;
    }

    public int getCircum() {
        return 2 * (Length + Width);
    }
}

public class ShapeExam {
	public static void main(String[] args) { 
        Rectangle myRect = new Rectangle("MyR", 5, 3);
        System.out.println("사각형의 넓이 : " + myRect.getArea());
        System.out.println("사각형의 둘레 : " + myRect.getCircum());
    }
}
