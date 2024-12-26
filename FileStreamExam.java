package javaclass;

import java.io.*;

class FileStreamExam {
	public static void main (String args[]) throws IOException {
		byte [] b = new byte[1024];
		FileInputStream fis = new FileInputStream("바탕 화면/tin.txt");
		FileOutputStream fos = new FileOutputStream("바탕 화면/tout.txt");
		fis.read(b);
		fos.write(b);
		fis.close();
		fos.close();
	}
}