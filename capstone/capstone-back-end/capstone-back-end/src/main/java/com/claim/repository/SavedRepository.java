package com.claim.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.claim.entity.Saved;


public interface SavedRepository extends JpaRepository<Saved, String> {
	
	@Query("Select S from Saved S where S.userId = ?1 ")
	List<Saved> returnedSaved(String userId); 

}
