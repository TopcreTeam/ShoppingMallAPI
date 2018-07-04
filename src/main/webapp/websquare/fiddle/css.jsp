<%@ page contentType="text/css; charset=UTF-8" language="java" errorPage="" import="java.io.*,java.util.*,websquare.logging.util.LogUtil"
%><%
try {
	String query = request.getQueryString();
	String token = System.currentTimeMillis() + "";
	if( query.startsWith("token=") ) {
		token = query.substring(6);
		int idx = token.indexOf("&");
		if( idx > 0 ) {
			token = token.substring(0,idx);
		}
		Hashtable hash = (Hashtable)session.getAttribute("w2xData");
		if( hash == null ) {
			hash = new Hashtable();
			session.setAttribute("w2xData", hash);
		}
		
		String args = (String)hash.get(token);
		if( args != null) {
			out.println( args );
		}
	}
	return;
} catch (Throwable e) {
	LogUtil.exception("[fiddle css.jsp] Exception.", e);
}%>