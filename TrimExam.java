package javaclass;

public class TrimExam {
	public static void main (String args[]) {
		String strData11 = "   i love you    ";
		String strData22;
		strData22=strData11.trim();
		System.out.println("strData2.trim() -> " +strData22);
		if(strData11.equals(strData22)) {
			System.out.println("같음");
		}else System.out.println("다름");
	}
}
