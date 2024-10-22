package javaclass;

public class LengthExam {
	public static void main(String args[]) {
		String strData = "I LOVE YOU";
		System.out.println("strData.length() = " + strData.length());
		String str = "i love Korea";
		for(int i = 0; i<str.length(); i++){
			System.out.print(str.charAt(i));
		}
		System.out.println();
		
		String R1 = new String("JAVA");
		String R2 = new String ("JAVA");
		String R3 = new String ("java");
		
		System.out.println("R1 == R2 --> " + (R1 == R2));
		System.out.println("R1.equals(R2) -->"+ (R1.equals(R2)));
		System.out.println("R1 == R3 --> " + (R1 == R3));
		System.out.println("R1.equals(R3) -->"+ (R1.equals(R3)));
		
		String strr1 = "Surnin";
		String strr2 = "surnin";
		String strr3 = new String("highschool");
		String strr4 = new String("highschool");
		
		if(strr1.equals(strr2)) {
			System.out.println("같다");
		}else {
			System.out.println("다르다");
		}
		
		if(strr3.equals(strr4)) {
			System.out.println("같다");
		}else {
			System.out.println("다르다");
		}
		
	}
}
