import java.util.Scanner;

public class Score_Switch_Method_While1403 {
   public static void main(String[] args) {
	Scanner sc = new Scanner(System.in); 

	System.out.print("인원수 입력 : ");
	int stu_num = sc.nextInt();

     	   for (int i = 1; i <=stu_num; i++) {
		int kor;
		int eng;
		int math;
		int java;
		System.out.print("학번: ");
		String number = sc.next();
		System.out.print("이름: ");
		String name = sc.next();

		do{
			System.out.print("국어: ");
			kor = sc.nextInt();
			//if (kor >= 0 && kor <=100 ) break;
		}while(kor <0 || kor >100);
		do {
			System.out.print("영어: ");
			eng = sc.nextInt();
			//if(eng >=0 && eng <=100) break;
			}while(!(eng >=0 && eng <=100));

		do{
			System.out.print("수학: ");
			math = sc.nextInt();
			//if(math >=0 && math <=100)break;
		}while(!(math >=0 && math <=100));
		do{
			System.out.print("자바: ");
			java = sc.nextInt();
			//if(java >=0 && java <=100) break;
		}while(!(java >=0 && java <=100));

		int total = Total(kor, eng, math, java);
		double average = Average(total);

		int b = (int) average / 10;

		char grade=switchgrade(b);

		System.out.printf("%6s %5s %5d %5d %5d %5d %5d %7.2f %3c\n",
		number, name, kor, eng, math, java, total, average, grade);
	}//for

		}//main

	static int Total(int kor, int eng, int math, int java) {
	return kor + eng + math + java;
	}

	static double Average(int total) {
	return (double) total / 4;
	}

	static char switchgrade (int b){
		char grade;
		switch (b) {
			case 10: grade = 'A';  break;
			case 9:  grade = 'A';  break;
			case 8:  grade = 'B'; break;
			case 7 : grade = 'C'; break;
                		case 6:  grade = 'D';  break;
               		default: grade = 'F'; break;
           		}
		return grade;
	}//switchgrade
}//end of file