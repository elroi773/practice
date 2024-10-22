package javaclass;

interface Shape {
	//interface의 데이터는 final static 만 가능 
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

   public int getArea() { //아들 쪽에서 public없으면 에러 뜸ㅋ 꼭 있어야 함 
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
