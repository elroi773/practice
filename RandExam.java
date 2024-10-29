package javaclass;

public class RandExam {

	public static void main(String[] args) {
		System.out.println(Math.random());
		System.out.println(Math.random());
		System.out.println((int)Math.random()*5);
		System.out.println((int)(Math.random()*5));
		System.out.println((int)(Math.random()*10));
		System.out.println((int)(Math.random()*100));
		for(int i =0; i<21; i++) {
			System.out.println((int)(Math.random()*46)+5);
		}
		
	}

}
