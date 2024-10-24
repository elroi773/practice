package Study;
import java.awt.event.ActionListener;
import javax.swing.*;
import java.awt.event.*;
public class JButton {
	 public static void main(String[] args) {
	      // TODO Auto-generated method stub
	      FrameLayout f = new FrameLayout();
	      f.FrameLayout();
	   }

	}

	class FrameLayout implements ActionListener {
	   //이벤트 리스너는 static으로 선언한 main 메소드에서 사용할 수 없다.
	   //따라서 클래스를 하나 더 만들어 선언한다.
	   
	   public void FrameLayout() {
	      JFrame jf = new JFrame();
	      jf.setSize(300, 300);
	      jf.setTitle("JFrame_Study");
	      jf.setLayout(null);
	      
	      String[] name = {"1번", "2번", "3번"};
	      
	      for (int i = 0; i < name.length; i++) {
	         JButton jb = new JButton(name[i]);
	         jb.setSize(140, 50);
	         jb.addActionListener(this);
	         //jb 버튼에 이벤트 리스너를 추가
	         //아래 actionPerformed 메소드는 클릭할 때마다 작동함
	         
	         jb.setLocation(70, 30+70*i);
	         
	         jf.add(jb);
	      }
	      
	      jf.setVisible(true);
	   }

	   @Override
	   public void actionPerformed(ActionEvent e) {
	      // TODO Auto-generated method stub
	      JOptionPane.showMessageDialog(null, "이벤트 발생\n클릭한 버튼의 번호는 "+e.getActionCommand()+"입니다.");
	      //getActionCommand()메소드는 이벤트가 발생한 개체의 내용을 돌려줌
	   }
	}

	