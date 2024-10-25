package javaclass;

public class WrapExam {

	public static void main(String[] args) {
		Integer wrapi = new Integer(100);
		Double wrapd = new Double(55.7);
		
		int i =100;
		double d = 55.7;
		double dl;
		dl = d+i;
		System.out.println(i+d);
		System.out.println(Integer.toString(i)+Double.toString(dl));
		System.out.println(wrapi.toString()+wrapd.toString());

	}

}
