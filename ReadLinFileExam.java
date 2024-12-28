package javaclass;

import java.io.*;

public class ReadLinFileExam {
	public static void main (String args[]) {
		String fname = "Bufferinput.txt";
		try {
			FileReader fr = new FileReader(fname);
			BufferedReader br = new BufferedReader(fr);
			String s = " ";
			while((s=br.readLine())!=null){
				System.out.println(s);
			}
			br.close();
			fr.close();
		}catch(Exception e) {
			System.out.println(e.toString());
		}
	}
}
