package com.study.dvd.servlet;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.study.dvd.dao.ProducerDao;
import com.study.dvd.entity.Producer;

@WebServlet("/producer/add")
public class AddProducerServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
		
	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		req.getRequestDispatcher("/WEB-INF/views/add_producer.jsp").forward(req, resp);
	}
	
	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		req.setCharacterEncoding("UTF-8"); // 요청이 들어왔을 때 utf-8로 바꿔야함(아니면 한글이 깨져서 나옴)
		// System.out.println(req.getParameter("producer")); // input 안에 name이 producer임.
		String producerName = req.getParameter("producer");
		Producer producer = Producer.builder().producerName(producerName).build();
		boolean isSuccess = ProducerDao.save(producer) > 0; // 1이든 0이든 가져와서 비교
		req.setAttribute("isSuccess", isSuccess);
		req.getRequestDispatcher("/WEB-INF/views/add_producer_result.jsp").forward(req, resp);
	}
}
