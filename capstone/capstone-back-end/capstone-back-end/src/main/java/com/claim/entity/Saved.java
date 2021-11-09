package com.claim.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name="save_list")
public class Saved{
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Id
	@Column(name="save_id")
	private Integer saveId;
	
	@Column(name="title")
	private String title;
	
	@Column(name="mal_id")
	private String malId;

	@Column(name="user_id")
	private String userId;
	
	@Column(name="score")
	private String score;
	
	public String getScore() {
		return score;
	}

	public void setScore(String score) {
		this.score = score;
	}

	public Integer getSaveId() {
		return saveId;
	}


	public void setSaveId(Integer saveId) {
		this.saveId = saveId;
	}


	public String getUserId() {
		return userId;
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

