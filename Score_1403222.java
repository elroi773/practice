import java.util.Scanner;
public class Score_1403222 {
	public static void main(String args[]){
		Scanner sc= new Scanner(System.in);


	for (int i = 1; i < 4; i++){


		System.out.print("학번 : ");
		String number= sc.next(); 
		System.out.print("이름 :");
		String name = sc.next();
		
		System.out.print("국어 :");
		int kor = sc.nextInt();

		System.out.print("영어 :");
		int eng = sc.nextInt();

		System.out.print("수학 :");
		int math = sc.nextInt();

		System.out.print("자바 :");
		int java = sc.nextInt(); 
		

		int t =  kor+eng+math+java;	

		double v =(double) t/4;

		int b = (int)v/10;
		
		char grade;
		switch (b) {

			case 10 :  grade = 'A'; break;
			case 9 :   grade = 'A'; break;
			case 8 :   grade = 'B'; break;
			case 7 :   grade = 'C'; break;
			case 6 :   grade = 'D'; break;
			default :  grade = 'F'; break;

			}

		 	 System.out.printf( "%6s %5s %5d %5d %5d %5d %5d %7.2f %3c \n ", number ,  name , kor, eng, math, java, t , v , grade); 

			}

		}

	}

