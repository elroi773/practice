package javaclass;

public class subStringExam {
	public static void main (String[] args) {
		String strDataa11 = "i love you";
		String strDataa3;
		strDataa3 = strDataa11.substring(7);
		System.out.println("strData3.substring(7) -> " + strDataa3);
		strDataa3 = strDataa11.substring(2,5);
		System.out.println("strData3.substring(2,5) -> "+ strDataa3);
	}
}
