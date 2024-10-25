package javaclass;

public class Valueof_Exam {
	public static void main (String args[]) {
		String stri = "123456";
		String strd = "123.56";
		System.out.println(Integer.valueOf(stri));
		System.out.println(Double.valueOf(strd));
		System.out.println(Integer.valueOf(stri) + Double.valueOf(strd));
	}
}
