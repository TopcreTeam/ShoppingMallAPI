<%@ page contentType="text/plain; charset=UTF-8" language="java" errorPage="" import="websquare.logging.util.*,websquare.util.*,java.util.*,org.json.simple.*"
%><%
try {
	JSONArray result = new JSONArray();

	Hashtable hash = (Hashtable)application.getAttribute("WebsquareRemoteConsole");
	if(hash == null) {
		hash = new Hashtable();
		application.setAttribute("WebsquareRemoteConsole", hash);
	}
	
	for (Enumeration en = hash.keys();en.hasMoreElements() ;) {
		String clientID = (String)en.nextElement();
		Hashtable logInfo = (Hashtable)hash.get(clientID);
		String clientName = (String)logInfo.get("clientName");
		String remoteAddr = (String)logInfo.get("remoteAddr");
		String userAgent = (String)logInfo.get("userAgent");

		if( clientID == null ) {
			clientID = "";
		}
	
		if( remoteAddr == null ) {
			remoteAddr = "";
		}
	
		if( userAgent == null ) {
			userAgent = "";
		}
	
		JSONObject client = new JSONObject();
		client.put("clientID", clientID);
		client.put("clientName", clientName);
		client.put("remoteAddr", remoteAddr);
		client.put("userAgent", userAgent);
		result.add(client);
	}
	out.println(result.toJSONString());
} catch (Throwable e) {
	LogUtil.exception("[saveLog.jsp] Exception.", e);
}%>