<%@ page contentType="application/json; charset=UTF-8" language="java" errorPage="" import="java.io.*,java.util.*,websquare.logging.util.LogUtil"
%><%
try {
	StringBuffer sb = new StringBuffer();
	Vector vec = (Vector)session.getAttribute("w2xList");
	if( vec == null ) {
		out.println("[]");
	} else {
		sb.append("[");
		for(int i = vec.size() - 1; i >= 0 ; i--) {
			String[] data = (String[])vec.elementAt(i);
			sb.append("{\"path\":\"" + data[0] +"\",\"date\":\"" + data[1] + "\",\"token\":\"" + data[2] + "\"}");
			if( i > 0 ) {
				sb.append(",");
			}
		}
		sb.append("]");
		out.println(sb.toString());	
	}
	return;
} catch (Throwable e) {
	out.println("[]");
	LogUtil.exception("[w2xList.jsp] Exception.", e);
}%>