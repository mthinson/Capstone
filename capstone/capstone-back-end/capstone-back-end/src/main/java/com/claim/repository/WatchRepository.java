package com.claim.repository;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.claim.entity.WatchId;

@Repository
public interface WatchRepository extends JpaRepository<WatchId, String> {
	
	@Query("Select S from WatchId S where S.userId = ?1 ")
	List<WatchId> returnedList(String userId);
	
}
