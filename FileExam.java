package javaclass;

import java.io.*;

public class FileExam {
	public static void main (String args[]) {
		char buffer[] = new char[100];
		try {
			FileReader fr = new FileReader("datar.txt");
			FileWriter fw = new FileWriter("dataw.txt");
			fr.read(buffer,10,100);
			String str = new String (buffer);
			System.out.println(str);
			fw.write(buffer);
			fw.flush();
		}catch(Exception e) {
			System.out.println(e.toString());
		}
	}
}
