<%@ page contentType="text/xml; charset=UTF-8" language="java" errorPage="" import="java.io.*,java.util.*,websquare.logging.util.LogUtil"
%><%!
	public static String getString( InputStream in, String charSet ) {
		try {
			if ( !( in instanceof BufferedInputStream ) ) {
				in = new BufferedInputStream( in );
			}
			Vector vec = new Vector();

			int size = 1024;

			byte[] buf = new byte[size];
			int readSize = 0;
			int totalRead = 0;
			int length = 0;
			while ( true ) {
				readSize = in.read( buf, totalRead, size - totalRead );
				if ( readSize == -1 ) {
					if ( totalRead > 0 ) {
						byte[] tmp = new byte[ totalRead ];
						System.arraycopy(buf, 0, tmp, 0, totalRead);
						vec.addElement( tmp );
						length += totalRead;
					}
					break;
				}
				totalRead += readSize;
				if ( totalRead == size ) {
					byte[] tmp = new byte[ totalRead ];
					System.arraycopy(buf, 0, tmp, 0, totalRead);
					vec.addElement( tmp );
					length += totalRead;
					totalRead = 0;
				}
			}

			byte[] ret = new byte[length];
			int idx = 0;
			for( int i = 0, vecSize = vec.size(); i < vecSize ; i++ ) {
				byte[] tmp = (byte[])vec.elementAt(i);
				System.arraycopy(tmp , 0, ret, idx, tmp.length);
				idx += tmp.length;
			}
			return new String(ret, charSet);
		} catch ( Exception e ) {
			LogUtil.exception("[w2x.jsp] InputStream getString Exception.", e);
			return "";
		}
	}
%><%
ServletInputStream in = null;
java.io.BufferedInputStream bin = null;
try {
	in = request.getInputStream();
	bin = new java.io.BufferedInputStream( in );
	String args = getString( bin , "UTF-8" );
	String query = request.getQueryString();
	String token = System.currentTimeMillis() + "";
	if( args != null && args.trim().length() > 0 ) {
		int idx = args.indexOf("|||");
		int idx2 = args.indexOf("|||", idx + 3);
		String path = args.substring(0, idx);
		String css = "";
		if( idx2 > 0 ) {
			css = args.substring(idx2 + 3);
			args = args.substring(idx + 3, idx2);
			int idx3 = args.indexOf("?>");
			if( idx3 >= 0 ) {
				args = args.substring(0, idx3 + 2) + "\n<?xml-stylesheet href='css.jsp?token=css" + token +"' type='text/css' ?>" + args.substring(idx3 + 2);
			} else {
				args = "<?xml version='1.0' encoding='UTF-8' ?>\n<?xml-stylesheet href='css.jsp?token=css" + token +"' type='text/css' ?>" + args;
			}
		} else {
			args = args.substring(idx + 3);
		}
		
		Hashtable hash = (Hashtable)session.getAttribute("w2xData");
		if( hash == null ) {
			hash = new Hashtable();
			session.setAttribute("w2xData", hash);
		}
		hash.put(token, args);
		if(!css.equals("")) {
			hash.put("css" + token, css);
		}

		java.text.SimpleDateFormat formatter = new java.text.SimpleDateFormat("yyyy-MM-dd hh:mm:ss");
		String date = formatter.format(new Date());
		Vector vec = null;
		if( idx2 > 0 ) {
			vec = (Vector)session.getAttribute("cssList");
			if( vec == null ) {
				vec = new Vector();
				session.setAttribute("cssList", vec);
			}
		} else {
			vec = (Vector)session.getAttribute("w2xList");
			if( vec == null ) {
				vec = new Vector();
				session.setAttribute("w2xList", vec);
			}
		}
		vec.addElement(new String[]{path, date, token});
		if( vec.size() > 100 ) {
			vec.removeElementAt(0);
		}
		out.println( "<?xml version='1.0' encoding='UTF-8' ?><token key='"+ token + "'>" + token + "</token>" );
	} else if( query.startsWith("token=") ) {
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
		
		args = (String)hash.get(token);
		if( args != null) {
			out.println( args );
		} else {
			out.println( "<?xml version='1.0' encoding='UTF-8' ?><error>token : " + token + "</error>" );
		}
	}
	return;
} catch (Throwable e) {
	out.println( "<?xml version='1.0' encoding='UTF-8' ?><error></error>" );
	LogUtil.exception("[w2x.jsp] Exception.", e);
} finally {
	if( bin != null ) {
		try {
			bin.close();
			bin = null;
		} catch( Exception e ) {
			LogUtil.exception("[w2x.jsp] BufferedInputStream clear Exception.", e);
		}
	}
	if( in != null ) {
		try {
			in.close();
			in = null;
		} catch( Exception e ) {
			LogUtil.exception("[w2x.jsp] ServletInputStream clear Exception.", e);
		}
	}
}%>