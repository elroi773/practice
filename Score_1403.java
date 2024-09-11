import java.util.Scanner;
public class Score_1403 {
	public static void main(String args[]){
		Scanner sc= new Scanner(System.in);
		System.out.print("국어");
		int kor = sc.nextInt();

		System.out.print("영어");
		int eng = sc.nextInt();

		System.out.print("수학");
		int math = sc.nextInt();

		System.out.print("자바");
		int java = sc.nextInt();
		

		int t =  kor+eng+math+java;	

		float v =(float) t/4;
	
		System.out.print("합계: " + t +" 평균:" + v );		
	}
}

