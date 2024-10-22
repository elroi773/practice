package javaclass;

public class StringstrTest {
	public static void main (String args[]) {
		
		String a = "Java";
		String b = "Java";
		String c = new String ("JAVA");
		String d = new String ("JAVA");
		
		System.identityHashCode(a);
		System.identityHashCode(b);
		System.identityHashCode(c);
		System.identityHashCode(d);
		
		System.out.println(a.hashCode());
		System.out.println(b.hashCode());
		System.out.println(c.hashCode());
		System.out.println(d.hashCode());
		
	}
}
