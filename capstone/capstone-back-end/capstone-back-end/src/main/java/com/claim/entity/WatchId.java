package com.claim.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="watch_list")
public class WatchId {
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Id
	@Column(name="watch_id")
	private Integer watchId;
	
	@Column(name="title")
	private String title;
	
	@Column(name="mal_id")
	private String malId;

	@Column(name="user_id")
	private String userId;
	
	@Column(name="has_seen")
	private Boolean hasSeen;
	
	@Column(name="rating")
	private String rating;
	
	
	public Boolean getHasSeen() {
		return hasSeen;
	}

	public void setHasSeen(Boolean hasSeen) {
		this.hasSeen = hasSeen;
	}

	public String getRating() {
		return rating;
	}

	public void setRating(String rating) {
		this.rating = rating;
	}

	public String getUserId() {
		return userId;
	}

	public Integer getWatchId() {
		return watchId;
	}

	public void setWatchId(Integer watchId) {
		this.watchId = watchId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getMalId() {
		return malId;
	}

	public void setMalId(String malId) {
		this.malId = malId;
	}
	
	
}
