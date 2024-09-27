package javaclass;

interface Shape {
    public abstract int getArea();

    public abstract int getCircum();
}

class Rectangle implements Shape {
    private int Length;
    private int Width;

    public Rectangle( int Length, int Width) {
        this.Length = Length;
        this.Width = Width;
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
        Rectangle myRect = new Rectangle( 5, 3);
        System.out.println("사각형의 넓이 : " + myRect.getArea());
        System.out.println("사각형의 둘레 : " + myRect.getCircum());
    }
}
