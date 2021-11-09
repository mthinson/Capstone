package com.claim.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.claim.entity.Guest;
import com.claim.entity.GuestService;
import com.claim.entity.Saved;
import com.claim.entity.User;
import com.claim.entity.WatchId;
import com.claim.repository.SavedRepository;
import com.claim.repository.UserRepository;
import com.claim.repository.WatchRepository;
import com.claim.service.SendMail;

@CrossOrigin
@RestController
public class UserController {
	
	@Autowired
	UserRepository userRepository;
	@Autowired
	GuestService guestService;
	@Autowired
	WatchRepository watchRepository;
	@Autowired
	SavedRepository savedRepository;
	
	@Autowired
	private SendMail sendMail;
	private String userName = "hinson.test.claim@gmail.com";
	
	//sends the email once you have submitted your contact info and message in about us page.
	@RequestMapping(value="/sendMail", 
			 consumes=MediaType.APPLICATION_JSON_VALUE, 
			 produces=MediaType.APPLICATION_JSON_VALUE,
			 method= RequestMethod.POST
			 )
	public void sendMail(@RequestBody Guest guest) {
		guestService.saveGuest(guest);
		String msg = "Senders Email: " + guest.getEmail() + " Message: " + guest.getMessage();
		sendMail.send(userName , "I want to Connect", guest.getEmail(),  msg );
	}
	
	//saves student info into bean/class
	@RequestMapping(value="/save",
			consumes=MediaType.APPLICATION_JSON_VALUE,
			produces=MediaType.APPLICATION_JSON_VALUE,
			method=RequestMethod.POST
			)
	
	public void submitUserdetails(@RequestBody User user) {
		userRepository.save(user);
	}
	
	//getting user info to set first name in profile
	@RequestMapping(value="/findUser",
			produces=MediaType.APPLICATION_JSON_VALUE,
			method=RequestMethod.GET
			)
	@ResponseBody
	private ResponseEntity<Optional<User>>findUser(String email){
		Optional<User> user = userRepository.findById(email);
		return new ResponseEntity<>(user,HttpStatus.OK);
	}
		
	//login in servlet finds user by email and password then uses a query request inside userRepository
	@RequestMapping(value="/login",
			produces=MediaType.APPLICATION_JSON_VALUE,
			method=RequestMethod.POST
			)
	public ResponseEntity<User>login(@RequestBody User user){
		User userLogin = userRepository.login(user.getEmail(), user.getPassword());
			if(userLogin != null) {
				return new ResponseEntity<>(userLogin, HttpStatus.OK);
			}else {
				return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
			}
		
	}
	//finds watch list database and returns it to see
	@RequestMapping(value="/findWatchList",
			produces=MediaType.APPLICATION_JSON_VALUE,
			method=RequestMethod.GET
			)
//	@ResponseBody
	private ResponseEntity<List<WatchId>>findWatchList(String userId){
		List<WatchId> watch = watchRepository.returnedList(userId);
		return new ResponseEntity<>(watch,HttpStatus.OK);
	}
	//saved list of items
	@RequestMapping(value="/findSavedList",
			produces=MediaType.APPLICATION_JSON_VALUE,
			method=RequestMethod.GET
			)
//	@ResponseBody
	private ResponseEntity<List<Saved>>findSavedList(String userId){
		List<Saved> saved = savedRepository.returnedSaved(userId);
		return new ResponseEntity<>(saved,HttpStatus.OK);
	}
	
	@RequestMapping(value="/saveViewed",
			consumes=MediaType.APPLICATION_JSON_VALUE,
			produces=MediaType.APPLICATION_JSON_VALUE,
			method=RequestMethod.POST
			)
	
	public void saveViewed(@RequestBody Saved viewed) {
		savedRepository.save(viewed);
	}
	
	//saving the anime list from the button on home inside animecard.js
	@RequestMapping(value="/saveData",
			consumes=MediaType.APPLICATION_JSON_VALUE,
			produces=MediaType.APPLICATION_JSON_VALUE,
			method=RequestMethod.POST
			)
	
	public void saveData(@RequestBody WatchId watch) {
		watchRepository.save(watch);
	}
	
	@RequestMapping(value = "/deleteData",
            produces = MediaType.APPLICATION_JSON_VALUE, 
            method = RequestMethod.POST)
	public void deleteData( @RequestBody WatchId watch) {
	
	watchRepository.delete(watch);
		
	}
	
	
	
	
	
	

}
