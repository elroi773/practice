package javaclass;
import java.io.*;
public class ReadFromSysExam {
	public static void main (String args[]) {
		byte [] b = new byte[1024];
		int len = 0;
		try {
			len = System.in.read(b);
			System.out.write(b,3,len-8);
		}catch(IOException ioe) {
			System.out.println("입력 실패");
		}
	}
}
