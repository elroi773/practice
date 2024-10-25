package javaclass;
import java.util.*;
public class dataValueExam {

	public static void main(String[] args) {
		String line;
		String tmpStr = "hong 용산구 10.5 20.5";
		StringTokenizer prase = new StringTokenizer(tmpStr);
		String name;
		String addres;
		double math;
		double english;
		double total;
		double avg;
		
		name =  prase.nextToken();
		addres = prase.nextToken();
		math = Double.valueOf(prase.nextToken()).doubleValue();
		english = Double.valueOf(prase.nextToken()).doubleValue();
		total = math + english;
		avg = total/2.0;
		System.out.println(name + " " + addres + " " + math + " " + english + " "+ total+ " "+avg);
		
	}

}
