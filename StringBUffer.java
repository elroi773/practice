package javaclass;

public class StringBUffer {
	public static void main (String args[]) {
		StringBuffer sb1 = new StringBuffer ("JAVA Programming");
		StringBuffer sb2 = new StringBuffer (" Project");
		StringBuffer strr1 = null;
		StringBuffer strr2 = null;
		
		strr1 = sb1.append(" Project");
		strr2 = sb1.append(sb2);
		
		System.out.println("sb1 = " + sb1);
		System.out.println("sb2 = " + sb2);
		System.out.println("str1 = " + strr1);
		System.out.println("str2 = " + strr2);
		System.out.println();
		
		
	}
}
