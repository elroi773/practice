package EmployeePackage;

public class Main1 {
	public static void main(String[] args) {
//		String[][] data = {
//				{"MCTE11", "고영희", "D", "40", "5"},
//				{"MCRS12", "도민준", "A", "50"},
//				{"MCRM13", "채송화", "C", "30"},
//				{"MCRM13", "강연주", "B", "40"}
//				};
		
		String[][] data = {
				{"MCRM1", "강민준", "B", "30"}, 
				{"MCRS2", "송서준", "C", "40"},
				{"MCTE3", "고서윤", "E", "20", "2"},
				{"MCRM4", "민정우", "B", "30"},
				{"MCTE5", "노수지", "D", "10", "1"},
				{"MCTE6", "이준영", "E", "20", "3"},
				{"MCRS7", "김민원", "B", "30"},
				{"MCTE8", "이지욱", "D", "40", "4"},
				{"MCRM9", "신준수", "A", "20"}
				};
		

		
		int dataSize = data.length;
		

		
		Employee1[] pSm = new Employee1[dataSize];
		
		for (int i = 0; i < dataSize; i++) {
//			char ch1 = data[i][0].charAt(2);
//			char ch2 = data[i][0].charAt(3);
//			
//			if (ch1 == 'R' && ch2 == 'M') {
//				pSm[i] = new Manager1(data[i][0], data[i][1], data[i][2].charAt(0), Integer.parseInt(data[i][3]));
//			} else if (ch1 == 'R' && ch2 == 'S') {
//				pSm[i] = new SalesMan1(data[i][0], data[i][1], data[i][2].charAt(0), Integer.parseInt(data[i][3]));
//			} else if (ch1 == 'T' && ch2 == 'E') {					
//				pSm[i] = new Temporary1(data[i][0], data[i][1], data[i][2].charAt(0), Integer.parseInt(data[i][3]), Integer.parseInt(data[i][4]));
//			}
			
			String dataCheck = data[i][0].substring(2, 4);
			
//			if (dataCheck.equals("RM")) {
//				pSm[i] = new Manager1(data[i][0], data[i][1], data[i][2].charAt(0), Integer.parseInt(data[i][3]));
//			} else if (dataCheck.equals("RS")) {
//				pSm[i] = new SalesMan1(data[i][0], data[i][1], data[i][2].charAt(0), Integer.parseInt(data[i][3]));
//			} else if (dataCheck.equals("TE")) {					
//				pSm[i] = new Temporary1(data[i][0], data[i][1], data[i][2].charAt(0), Integer.parseInt(data[i][3]), Integer.parseInt(data[i][4]));
//			}
			
//			switch (dataCheck) {
//				case "RM": pSm[i] = new Manager1(data[i][0], data[i][1], data[i][2].charAt(0), Integer.parseInt(data[i][3])); break;
//				case "RS": pSm[i] = new SalesMan1(data[i][0], data[i][1], data[i][2].charAt(0), Integer.parseInt(data[i][3])); break;
//				case "TE": pSm[i] = new Temporary1(data[i][0], data[i][1], data[i][2].charAt(0), Integer.parseInt(data[i][3]), Integer.parseInt(data[i][4])); break;
//			}
			
			// 향상된 switch문
			pSm[i] = switch (dataCheck) {
			case "RM" -> new Manager1(data[i][0], data[i][1], data[i][2].charAt(0), Integer.parseInt(data[i][3]));
			case "RS" -> new SalesMan1(data[i][0], data[i][1], data[i][2].charAt(0), Integer.parseInt(data[i][3]));
			case "TE" ->  new Temporary1(data[i][0], data[i][1], data[i][2].charAt(0), Integer.parseInt(data[i][3]), Integer.parseInt(data[i][4]));
			default -> new Employee1("Error", "Error0", 'E');
			};
		}
		
//		pSm[0].printEmployee1();
		
		Manager1.title();
		
		for (int i = 0; i < dataSize; i++) {
			if (pSm[i] instanceof Manager1) {
				System.out.println(data[i][0] + "   " + data[i][1] + "     " + data[i][2] + "         " + data[i][3] + "         " + pSm[i].getTotal(Integer.parseInt(data[i][3])));
			}
		}
		
		Employee1.line();
		
		SalesMan1.title();
		
		for (int i = 0; i < dataSize; i++) {
			if (pSm[i] instanceof SalesMan1) {
				System.out.println(data[i][0] + "   " + data[i][1] + "     " + data[i][2] + "         " + data[i][3] + "         " + pSm[i].getTotal(Integer.parseInt(data[i][3])));
			}
		}
		
		Employee1.line();
		
		Temporary1.title();
		
		for (int i = 0; i < dataSize; i++) {
			if (pSm[i] instanceof Temporary1) {
				System.out.println(data[i][0] + "   " + data[i][1] + "     " + data[i][2] + "         " + data[i][3] + "         " + pSm[i].getTotal(Integer.parseInt(data[i][3]))+ "          (" + Integer.parseInt(data[i][4]) +")");
			}
		}
		
		Employee1.line();
		
	}

}

