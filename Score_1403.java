import java.util.Scanner;
public class Score_1403 {
	public static void main(String args[]){
		Scanner sc= new Scanner(System.in);
		System.out.print("����");
		int kor = sc.nextInt();

		System.out.print("����");
		int eng = sc.nextInt();

		System.out.print("����");
		int math = sc.nextInt();

		System.out.print("�ڹ�");
		int java = sc.nextInt();
		

		int t =  kor+eng+math+java;	

		float v =(float) t/4;
	
		System.out.print("�հ�: " + t +" ���:" + v );		
	}
}

