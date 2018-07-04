<%@ page contentType="text/plain; charset=UTF-8" language="java" errorPage="" import="websquare.logging.util.*,websquare.util.*,java.util.*,org.json.simple.*"
%><%
ServletInputStream in = null;
java.io.BufferedInputStream bin = null;
try {
	bin = new java.io.BufferedInputStream( request.getInputStream() );
	String args = StreamUtil.getString( bin , "UTF-8" );
	if( args != null && !args.equals("") ) {
		JSONObject clientData = (JSONObject) JSONValue.parse(args);
		
		String clientID = (String)session.getAttribute("WebsquareRemoteConsole");
		String clientName = (String)clientData.get("clientName");
		String remoteAddr = request.getRemoteAddr();
		String userAgent = request.getHeader("User-Agent");
		
		if(clientID == null) {
			clientID = remoteAddr + "_" + System.currentTimeMillis();;
			session.setAttribute("WebsquareRemoteConsole", clientID);
		}

		if(clientName != null && clientName.trim().length() > 0 && remoteAddr != null && remoteAddr.trim().length() > 0 && userAgent != null && userAgent.trim().length() > 0 ) {
			Hashtable hash = (Hashtable)application.getAttribute("WebsquareRemoteConsole");
			if(hash == null) {
				hash = new Hashtable();
				application.setAttribute("WebsquareRemoteConsole", hash);
			}
			Hashtable logInfo = (Hashtable)hash.get(clientID);
			if(logInfo == null) {
				logInfo = new Hashtable();
				hash.put(clientID, logInfo);
			}
	
			logInfo.put("clientID", clientID);
			logInfo.put("clientName", clientName);
			logInfo.put("remoteAddr", remoteAddr);
			logInfo.put("userAgent", userAgent);
			Vector logs = (Vector)logInfo.get("logs");
			if( logs == null ) {
				logs = new Vector();
				logInfo.put("logs", logs);
			}
			
			JSONArray logsJSON = (JSONArray) clientData.get("logs");
			if( logs.size() + logsJSON.size() > 500 ) {
				int deleteCnt = logs.size() + logsJSON.size() - 500;
				while(deleteCnt > 0) {
					logs.removeElementAt(0);
					deleteCnt--;
				}
			}
			for (int i = 0; i < logsJSON.size(); i++) {
				String[] logItem = new String[2];
				logItem[0] = System.currentTimeMillis() + "";
				logItem[1] = (String)logsJSON.get(i);
				logs.addElement(logItem);
			}
			
			String namespace =  "websquare.client." + request.getRemoteAddr().replace('.', '_').replace(':', '_');
			LogUtil.info( namespace, "Client ID:" + clientID + "\nClient Name:" + clientName + "\nUser-Agent : " + request.getHeader("User-Agent") + "\n=======  CLIENT LOG(" + request.getRemoteAddr() + ") =======\n" + args + "\n===========================\n" );
		}
		
	}
} catch (Throwable e) {
	LogUtil.exception("[saveLog.jsp] Exception.", e);
}%>