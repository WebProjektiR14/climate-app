package com.climate.db;

import java.util.Optional;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.climate.db.data.VisualSelect;
import com.climate.db.repo.VisualSelectRepository;
import com.climate.db.data.User;
import com.climate.db.repo.UserRepository;
@SpringBootApplication
public class DbApplication {

	@Autowired
	UserRepository userRepo;
	VisualSelectRepository visualSelectRepo;

	public static void main(String[] args) {
		SpringApplication.run(DbApplication.class, args);
		
	}

	//save lisää käyttäjä tai päivitä tietoja
	@PostConstruct
	public void init(){
		userRepo.save(new User (1,"Miia","salasana"));

		Optional<User> opt = userRepo.findById(1);
	
		if (opt.isPresent()) {
			User p = opt.get();
			System.out.println(p.getUsername());
		}
	}
	
	public void init2(){

		visualSelectRepo.save(new VisualSelect (1));

		Optional<VisualSelect> optional = visualSelectRepo.findById(1);
	
		if (optional.isPresent()) {
			VisualSelect p = optional.get();
			System.out.println(p);
		}
	}


}
