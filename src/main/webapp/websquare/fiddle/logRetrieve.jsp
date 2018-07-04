<%@ page contentType="text/plain; charset=UTF-8" language="java" errorPage="" import="websquare.logging.util.*,websquare.util.*,java.util.*,org.json.simple.*"
%><%
String clientID = null;
String sLastLogTime = null;
try {
	clientID = request.getParameter("clientID");
	sLastLogTime = request.getParameter("lastLogTime");
	JSONObject result = new JSONObject();

	if( clientID != null && !clientID.trim().equals("") ) {
		Hashtable hash = (Hashtable)application.getAttribute("WebsquareRemoteConsole");
		if(hash == null) {
			hash = new Hashtable();
			application.setAttribute("WebsquareRemoteConsole", hash);
		}
		Hashtable logInfo = (Hashtable)hash.get(clientID);
		if(logInfo != null) {
			String clientName = (String)logInfo.get("clientName");
			String remoteAddr = (String)logInfo.get("remoteAddr");
			String userAgent = (String)logInfo.get("userAgent");
			Vector logs = (Vector)logInfo.get("logs");
			
			if( clientName == null ) {
				clientName = "";
			}
		
			if( remoteAddr == null ) {
				remoteAddr = "";
			}
		
			if( userAgent == null ) {
				userAgent = "";
			}
		
			if( logs == null ) {
				logs = new Vector();
				logInfo.put("logs", logs);
			}
			JSONArray logsJSON = new JSONArray();
			
			long lastLogTime = 0;
			if( sLastLogTime != null && sLastLogTime.trim().length() > 0 ) {
				try {
					lastLogTime = Long.parseLong(sLastLogTime);
				} catch(Exception e) {
					LogUtil.exception("[logRetrieve.jsp] lastLogTime parLong Exception.", e);
				}
			}

			String lastIndex = lastLogTime + "";
			for (int i = 0; i < logs.size(); i++) {
				try {
					String[] logItem = (String[])logs.elementAt(i);
					long time = Long.parseLong(logItem[0]);
					if( time > lastLogTime) {
						logsJSON.add(logItem[1]);
						lastIndex = logItem[0];
					}
				} catch(Exception e) {
					LogUtil.exception("[logRetrieve.jsp] logItem add Exception.", e);
				}
			}
	
			result.put("clientID", clientID);
			result.put("clientName", clientName);
			result.put("remoteAddr", remoteAddr);
			result.put("userAgent", userAgent);
			result.put("lastLogTime", lastIndex);
			result.put("logs", logsJSON);
		}
	}
	out.println(result.toJSONString());
} catch (Throwable e) {
	LogUtil.exception("[saveLog.jsp] Exception.", e);
}%>