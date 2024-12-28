package javaclass;
import java.io.*;
import java.util.*;
 class sungDatasExam {
	public void readingData(String fname) throws IOException {
		try {
			FileReader fr = new FileReader(new File(fname));
			BufferedReader br = new BufferedReader(fr);
			String csvStr = "";
			String tmpStr = "";
			do {
				tmpStr = br.readLine();
				if(tmpStr != null) {
					csvStr += tmpStr + "\t";
				}
			}while(tmpStr != null);
			StringTokenizer parse = new StringTokenizer(csvStr, "\t");
			int length = parse.countTokens();
			String [] name = new String [length];
			String [] address = new String[length];
			double [] math = new double[length];
			double [] english = new double[length];
			double [] total = new double[length];
			double [] avg = new double[length];
			for(int j = 0; j<length; j++) {
				name[j] = parse.nextToken();
				address[j] = parse.nextToken();
				math[j] = Double.valueOf(parse.nextToken()).doubleValue();
				english[j] = Double.valueOf(parse.nextToken()).doubleValue();
				total[j] = math[j]+english[j];
				avg[j] = total[j]/2.0;
			}
			for(int j =0; j<length; j++) {
				System.out.println(name[j]+"\t"+address[j]+"\t"+math[j]+"\t"+english[j]+"\t"+total[j]+"\t"+avg[j]);
				
			}
		}catch(FileNotFoundException e) {
			System.out.println("잘못된 파일 이름을 입력했습니다");
		}
	}
}

class sungDatasMain{
	public static void main (String args[]) {
		sungDatasExam wd = new sungDatasExam();
		try {
			wd.readingData("writed.txt");
		}catch(IOException e) {
			e.printStackTrace();
		}
	}
}
