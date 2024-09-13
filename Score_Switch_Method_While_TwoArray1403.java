import java.util.Scanner;

public class Score_Switch_Method_While_TwoArray1403 {
   public static void main(String[] args) {
	Scanner sc = new Scanner(System.in);
		String[] sub_name={"����", "����", "����", "�ڹ�"};
		System.out.print("�ο��� �Է� : ");
		int stu_num=sc.nextInt();

		String[] num = new String[stu_num+1];
		String[] name = new String[stu_num+1];
		int[][] score = new int[stu_num+1][5];
		double[] average = new double[stu_num+1];
		char[] grade = new char[stu_num+1];
		int[] rank = new int[stu_num+1];

		for (int i=0; i<stu_num; i++) {
			System.out.print("�й� �Է� : ");
			num[i] = sc.next();

			System.out.print("�̸� �Է� : ");
			name[i] = sc.next();

			for (int j=0; j<4; j++) {
				do {
					System.out.print(sub_name[j]+" : ");
					score[i][j] = sc.nextInt();
				} while (!(score[i][j]>=0 && score[i][j]<=100));
			}

			score[i][4] = Total(score[i][0], score[i][1], score[i][2], score[i][3]);
			average[i] = Average(score[i][4]);
			rank[i] = 1;
		}

		//���� ���
		for (int i = 0; i < stu_num-1; i++) {
    			for (int j = i; j < stu_num; j++) {        
				//System.out.println( score[i][4] + score[j][4] );   
     				//System.out.println( i + j );

        				if (score[i][4] < score[j][4]) {
            				rank[i]++;
        				}
				else if (score[i][4] > score[j][4]) {
            				rank[j]++;
        				}
				//System.out.println(rank[i]);
    			}
		}

		System.out.println("=== ��� �޴� ���� ===");
		System.out.println("1.�Է� �� ���");
		System.out.println("2.�й� �� ��� ");
		System.out.println("3.���� �� ��� ");
		
		int menu = sc.nextInt();
		if(menu==1){

		//�Է¼�
			System.out.println("�Է¼�");
			System.out.println("�й�   �̸�   ���� ���� ���� �ڹ� ��÷  ���  ���");
			for (int i = 0; i<stu_num; i++) {
				System.out.printf("%4s%5s%5d%5d%5d%5d%5d%8.2f%4c%4d\n", num[i], name[i], score[i][0], score[i][1], score[i][2], score[i][3], score[i][4], average[i], getGrade(average[i]), rank[i]);
		}
		
		}else if(menu == 2){
			//�й���
			System.out.println("�й���");
			for (int i = 0; i < stu_num-1; i++) {
    				for (int j = i; j < stu_num; j++) {                			
        					if (num[i].compareTo(num[j])>0) {
            						num[stu_num]=num[i];
							num[i] = num[j];
							num[j] = num[stu_num];

							name[stu_num]=name[i];
							name[i] = name[j];
							name[j] = name[stu_num];

							score[stu_num]=score[i];
							score[i] = score[j];
							score[j] = score[stu_num];
	
							average[stu_num]=average[i];
							average[i] = average[j];
							average[j] = average[stu_num];

							grade[stu_num]=grade[i];
							grade[i] = grade[j];
							grade[j] = grade[stu_num];

							rank[stu_num]=rank[i];
							rank[i] = rank[j];
							rank[j] = rank[stu_num];
        					}
    				}//for j 
			}//for
			System.out.println("�й�   �̸�   ���� ���� ���� �ڹ� ��÷  ���  ���");
			for (int i = 0; i<stu_num; i++) {
				System.out.printf("%4s%5s%5d%5d%5d%5d%5d%8.2f%4c%4d\n", num[i], name[i], score[i][0], score[i][1], score[i][2], score[i][3], score[i][4], average[i], getGrade(average[i]), rank[i]);
			}//�й� ������ ���
			}else {
			System.out.println();
			//������
			System.out.println("������");
			for (int i = 0; i < stu_num-1; i++) {
    				for (int j = i; j < stu_num; j++) {                			
        					if (rank[i]>rank[j]) {
            						num[stu_num]=num[i];
							num[i] = num[j];
							num[j] = num[stu_num];

							name[stu_num]=name[i];
							name[i] = name[j];
							name[j] = name[stu_num];

							score[stu_num]=score[i];
							score[i] = score[j];
							score[j] = score[stu_num];
	
							average[stu_num]=average[i];
							average[i] = average[j];
							average[j] = average[stu_num];

							grade[stu_num]=grade[i];
							grade[i] = grade[j];
							grade[j] = grade[stu_num];

							rank[stu_num]=rank[i];
							rank[i] = rank[j];
							rank[j] = rank[stu_num];
        					}
    				}//for j 
			}//for
	
			for (int i = 0; i<stu_num; i++) {
				System.out.printf("%4s%5s%5d%5d%5d%5d%5d%8.2f%4c%4d\n", num[i], name[i], score[i][0], score[i][1], score[i][2], score[i][3], score[i][4], average[i], getGrade(average[i]), rank[i]);
			}

		}	







	} //end of main
	static int Total(int k, int e, int m, int j) {
		int total = k + e + m + j;
		return total;
	}
	static double Average(int total) {
		double average = (double)total/4;
		return average;
	}
	static char getGrade(double average) {
		char score = ' ';
		switch ((int)average/10) {
			case 10 : case 9 : score = 'A'; break;
			case 8 : score = 'B'; break;
			case 7 : score = 'C'; break;
			case 6 : score = 'D'; break;
			default : score = 'F';
			}
		return score;
	}
}//end of file