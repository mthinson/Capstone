package com.claim.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class SendMail {

	
	@Autowired
	private JavaMailSender emailSender;
	
	public void send(String username, String subject, String email,  String Message) {
		SimpleMailMessage simpleMailMessage = new SimpleMailMessage();
		simpleMailMessage.setTo(username);
		simpleMailMessage.setText(Message);
		simpleMailMessage.setFrom(email);
		simpleMailMessage.setSubject(subject);
		
		emailSender.send(simpleMailMessage);
	}

	
}
