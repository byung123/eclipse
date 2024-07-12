<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
<%
	boolean isSuccess = (boolean) request.getAttribute("isSuccess");
%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<style type="text/css">
	html, body {
		width: 100%;
		height: 100%;
	}
	
	.container {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	
	.msgbox {
		width: 400px;
		height: 400px;
		box-sizing: border-box;
		border: 2px solid #dbdbdb;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
</style>
</head>
<body>
	<div class="container">
		<div class="msgbox">
			<%  
			if(isSuccess) {
			%>
				<h1>출판사 추가 성공!!</h1>
			<%
				} else {
			%>
				<h1>출판사 추가 실패!!</h1>
			<%
				}
			%>
		
			<button onclick="location.href='http://localhost:8080/dvd/publisher/add'">확인</button>
			<button onclick="history.back()">뒤로가기</button>
		</div>
	</div>
</body>
</html>