package jframee;
import javax.swing.JFrame;

public class JframeTest {

	public static void main(String[] args) {
		JFrame jf = new JFrame();
		// 새로운 jframe  을 만들어서 살짜 Scanner sc = new Scanner 
		jf.setBounds(600,300,300,300); // 화면 크기 
		//jf의 좌표와 크기를 지정
		jf.setTitle("ㅎㅇ 프레임"); //html 이름이랑 비슷함 
		//jf 의 제목을 ㅎㅇ 프레임으로 설정
		jf.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		//jframe 닫기 버튼을 눌렀을때 동작 설정 (프로그램을 아예 나가도록 설정)
		jf.setVisible(true);
		//jf창 프레임이 보이도록 설정 하도록 설정 	
	}

}
