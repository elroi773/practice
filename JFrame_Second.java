package jframee;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JTextField;
public class JFrame_Second {

	public static void main(String[] args) {
		JFrame jf = new JFrame();
		jf.setSize(380,180);
		jf.setLocation(400,200);
		jf.setTitle("Login");
		jf.setLayout(null);
		
		JLabel jl = new JLabel("ID : ");
		jl.setSize(80,30);
		jl.setLocation(30,30);
		jl.setHorizontalAlignment(JLabel.CENTER);
		jf.add(jl);
		
		JTextField jt = new JTextField();
		jt.setSize(130,30);
		jt.setLocation(110,30);
		
		jf.add(jt);
		
		jl = new JLabel("password : ");
		jl.setSize(80,30);
		jl.setLocation(30,70);
		jf.add(jl);
		
		jt = new JTextField();
		jt.setSize(130, 30);
		jt.setLocation(110, 70);
		jf.add(jt);
		
		jf.setVisible(true);
	}

}
