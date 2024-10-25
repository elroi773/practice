package javaclass;
import java.util.*;
public class AbsExam {
	public static void main(String[] args) {
		String data1 = "10";
		String data2 = "20";
		
		int i = Integer.parseInt(data1);
		double ii = Double.parseDouble(data2);
		
		int iii = Integer.valueOf(data1);
		double iiii = Double.valueOf(data2);
		
		System.out.println("data 1 = " +i+", data2 = "+ii );
		System.out.println("data1 + data2 " + (int)(i+ii));
		System.out.println("data1 + data2 " + (iii+iiii));
		
		System.out.println("data1 + data2 " + (int)(i+ii));
		System.out.println("data1 + data2 " + (iii+iiii));
		
	}

}
