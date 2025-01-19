//class SchoolMember를 정의한다 (멤버변수 : 고유번호 (문자열),이름(문자열))
//class SchoolMember를 상속받는 class Teacher(멤버변수 : 담당교과 (문자열),경력(정수)), class Student(멤버 변수 : 전공(문자 : D/S),학년(정수)), class Admin(멤버변수 : 담당직무 (문자열), 경력(정수)) 를 정의한다
//자식 class 의 모든 멤버변수의 접근제어자는 private로 한다
//생성자와 함수으 overriding을 이용한다 
//data[][]의 자료를 이용하여 사원 번호의 두 번째 자리에 따라 'T'는 Teacher 클래스, 'S'는  Student 크래스, 'A'는 Admin 클래스를 이용한다 
//Student 의 경우 학년은 1~3학년까지만 존재하고, 그 이외의 학년이 입력되면 Error(학년)으로 처리 한다
//main() 함수의 구성을 참조하고 필요한 부분은 추가하도록 한다 
//단 배열 data 의 내용을 변경하여도 프로그램의 수정없이 결과가 정상적으로 나오도록 프로그래밍 한다
//Teacher, Student, Administrator 의 순으로 출력하고, 출력 형식에 유의한다 
//
//


package JavaExam;
class SchoolMember{
	private String id;
	private String name;
	
	public SchoolMember(String id, String name) {
		this.id = id;
		this.name = name;
	}
	public String getId() {
		return id;
	}
	public String getName() {
		return name;
	}
	public String toString() {
		return "ID : " + id +", Name" + name;
	}
}

class Teacher extends SchoolMember{
	private String subject;
	private int experience;
	
	public Teacher (String id, String name, String subject, int experience) {
		super(id,name);
		this.subject = subject;
		this.experience = experience;
	}
	public String toString() {
        return "Teacher - " + super.toString() + ", Subject: " + subject + ", Experience: " + experience + " years";
    }
}
class Student extends SchoolMember{
	private String major;
	private int year;
	
	public Student(String id, String name, String major,int year) {
		super(id, name);
		this.major = major;
		this.year = year;
	}
	 public String toString() {
	        return "Student - " + super.toString() + ", Major: " + major + ", Year: " + year;
	    }
}

class Admin extends SchoolMember{
	private String work;
	private int experience;
	
	public Admin(String id, String name ,String work, int experience) {
		super(id, name);
		this.work=work;
		this.experience = experience;
	}
}
public class Ex4 {
	public static void main(String args[]) {
		String data[][] = {
				{"MS1","강서연","D","10"},
				{"MS2","고주원","S","7"},
				{"MT1","양민서","영어","21"},
				{"MA1","송하준","정보보호","11"},
				{"MT2","방서현","운영체제","25"},
				{"MS3","김예준","S","3"},
				{"MT3","이지민","컴퓨터그래픽","8"}
				};
		for(int i =0; i < data.length; i++) {
			String [] entry = data[i];
			String id = entry[0];
			String name = entry[1];
			String type = id.substring(1,2);
			
			 SchoolMember member = null;
	            if (type.equals("T")) {
	                member = new Teacher(id, name, entry[2], Integer.parseInt(entry[3]));
	            } else if (type.equals("S")) {
	                member = new Student(id, name, entry[2], Integer.parseInt(entry[3]));
	            } else if (type.equals("A")) {
	                member = new Admin(id, name, entry[2], Integer.parseInt(entry[3]));
	            } else {
	                System.out.println("Unknown type: " + type);
	                break; 
	            }
		}
	}
}


