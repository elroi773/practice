package javaclass;

public class ReplaceExam {	
	public static void main (String args[]) {
		StringBuffer sbb1 = new StringBuffer("java Programaing");
		StringBuffer sbb2 = null;
		sbb2 = sbb1.replace(0,2,"JAVA");
		System.out.println("sbb2 = " + sbb2);
		
	}
}
