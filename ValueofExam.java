package javaclass;

public class ValueofExam {
	public static void main (String args[]) {
		char ch = 'A';
		String strDataa1 = "A";
		String strDataa2;;
		
		strDataa2 = String.valueOf(ch);
		if(strDataa1.equals(strDataa2)) {
			System.out.println("같음");
		}else {
			System.out.println("다름");
		}
		String strDataa3 = String.valueOf(157);
		System.out.println(strDataa3 + 91.7);
	}
}
