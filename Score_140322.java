import java.util.Scanner;
public class Score_140322 {
	public static void main(String args[]){
		Scanner sc= new Scanner(System.in);




		System.out.print("�й� : ");
		String number= sc.nextLine(); 
		System.out.print("�̸� :");
		String name = sc.nextLine();
		
		System.out.print("���� :");
		int kor = sc.nextInt();

		System.out.print("���� :");
		int eng = sc.nextInt();

		System.out.print("���� :");
		int math = sc.nextInt();

		System.out.print("�ڹ� :");
		int java = sc.nextInt();
		

		int t =  kor+eng+math+java;	

		float v =(float) t/4;
	
		//System.out.println( number +  "  " + name +  "  "+ kor + "  "+ eng +  "  "+ math +  "  "+java +  "  "+ t +  "  "+v );		

		if (v >=90) 
			System.out.println( number +  "  " + name +  "  "+ kor + "  "+ eng +  "  "+ math +  "  "+java +  "  "+ t +  "  "+v + "  "+"A" ); 
		else if (v>=80)
			System.out.println( number +  "  " + name +  "  "+ kor + "  "+ eng +  "  "+ math +  "  "+java +  "  "+ t +  "  "+v + "  "+"B" ); 
		else if (v >=70)
			System.out.println( number +  "  " + name +  "  "+ kor + "  "+ eng +  "  "+ math +  "  "+java +  "  "+ t +  "  "+v + "  "+"C" ); 
		else if (v >=60)
			System.out.println( number +  "  " + name +  "  "+ kor + "  "+ eng +  "  "+ math +  "  "+java +  "  "+ t +  "  "+v + "  "+"D" ); 
		else
			System.out.println( number +  "  " + name +  "  "+ kor + "  "+ eng +  "  "+ math +  "  "+java +  "  "+ t +  "  "+v + "  "+"E" );
		 


	}
}