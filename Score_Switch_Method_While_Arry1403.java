import java.util.Scanner;

public class Score_Switch_Method_While_Arry1403 {
   public static void main(String[] args) {
	Scanner sc = new Scanner(System.in); 

	System.out.print("인원수 입력 : ");
	int stu_num = sc.nextInt();

	String [] number = new String [stu_num];
	String [] name = new String[stu_num];
	int [] kor = new int [stu_num];
	int [] eng = new int [stu_num];
	int [] math = new int [stu_num];
	int [] java = new int [stu_num];
	int [] total = new int [stu_num];
	double [] average = new double [stu_num];
	char [] grade = new char[stu_num];
	int [] rank = new int [stu_num];

     	for (int i =0; i <stu_num; i++) {
		System.out.print("학번: ");
		number[i] =  sc.next();
		System.out.print("이름: ");
		name[i] = sc.next();

		do{
			System.out.print("국어: ");
			kor[i] = sc.nextInt();
			
		} while(kor[i] <0 || kor[i] >100);
		do {
			System.out.print("영어: ");
			eng[i] = sc.nextInt();
			
		}while(!(eng[i] >=0 && eng[i] <=100));

		do{
			System.out.print("수학: ");
			math[i] = sc.nextInt();
			//if(math >=0 && math <=100)break;
		}while(!(math[i] >=0 && math[i] <=100));
		do{
			System.out.print("자바: ");
			java[i] = sc.nextInt();
			//if(java >=0 && java <=100) break;
		}while(!(java[i] >=0 && java[i] <=100));

		total[i] = Total(kor[i], eng[i], math[i], java[i]);
		average[i] = Average(total[i]);

		int b = (int)average[i] / 10;

		grade[i]=switchgrade(b);
		
		rank[i] = 1;
	}//for

	//석차계산

	for(int i = 0; i< stu_num; i++){
		for(int j = 0; j < stu_num; j++){
			if(total[i] < total[j]){
				rank[i]++;
			}
		}
		
	}

	
	//출력
	System.out.print("  합계  이름  국어  영어  수학  자바 함계  평균  등급      석차 \n");
     	for (int i =0; i <stu_num; i++) {
			
		System.out.printf("%6s %5s %5d %5d %5d %5d %5d %7.2f %3c %5d \n",
		number[i], name[i], kor[i], eng[i], math[i], java[i], total[i], average[i], grade[i], rank[i]);
	
		
	}
	
}//main



	static int Total(int korean, int english, int math, int java) {
	return korean + english + math + java;
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