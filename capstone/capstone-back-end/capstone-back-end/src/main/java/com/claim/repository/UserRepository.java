package com.claim.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.claim.entity.User;

@Repository
public interface UserRepository extends JpaRepository<User, String> {
	
	@Query("Select S from User S where S.email = ?1 and S.password = ?2")
	User login(String email, String password);
}
