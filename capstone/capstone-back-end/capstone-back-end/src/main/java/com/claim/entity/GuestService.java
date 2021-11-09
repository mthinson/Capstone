package com.claim.entity;

import java.util.ArrayList;

import org.springframework.stereotype.Service;

@Service
public class GuestService {

	public ArrayList<Guest> guestInfo = new ArrayList<Guest>();
	
	public void saveGuest(Guest guest) {
			guestInfo.add(guest);
			System.out.println("guess info" + guestInfo.get(0));
			}

}
