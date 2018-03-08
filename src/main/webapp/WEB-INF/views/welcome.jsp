<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
    <c:set var="context" value="${pageContext.request.contextPath}"/>
    <link href = "${context}/resources/css/theme-classic-all.css" rel = "stylesheet" />

    <script type = "text/javascript"
            src = "${context}/resources/js/ext-all.js"></script>
    <script type = "text/javascript" src = "${context}/resources/js/app1.js"></script>

          <title>HelloWorld page</title>
</head>
<body>
    Greeting : ${greeting}
</body>
</html>