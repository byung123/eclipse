<%@page import="com.study.dvd.dao.ProducerDao"%>
<%@page import="com.study.dvd.entity.Producer"%>
<%@page import="java.util.List"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<div>
		<label>producer 검색</label>
		<input type="text" 
		class="producer-input" 
		placeholder="제작사 이름을 입력해주세요.">
		<button onclick="handleSearchProducerClick()">검색</button>
	</div>
	
	<style>
		table, th, td {
			border: 1px solid #dbdbdb;
			border-collapse: collapse;
		}
		
		th, td {
			padding: 5px, 10px;
		}
		
	</style>
	<%
	String searchText = request.getParameter("searchText");
	List<Producer> producers = ProducerDao.searchProducerByProducerName(searchText);
	%>
	<table>
		<thead>
			<tr>
				<th>producer_id</th>
				<th>producer_name</th>
			</tr>
		</thead>
		<tbody>
		<% 
			for(Producer producer : producers) {
		%>
			<tr>
				<td><%=producer.getProducerId() %></td>
				<td><%=producer.getProducerName() %></td>
			</tr>
		<%
			}
		%>	
		</tbody>
	</table>
	
	<script src="/dvd/static/search_producer.js"></script>
</body>
</html>