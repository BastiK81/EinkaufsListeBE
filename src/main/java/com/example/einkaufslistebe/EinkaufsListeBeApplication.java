package com.example.einkaufslistebe;

import com.example.einkaufslistebe.repos.ItemRepository;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@SpringBootApplication
@EnableMongoRepositories(basePackageClasses = ItemRepository.class)
public class EinkaufsListeBeApplication {

    public static void main(String[] args) {
        SpringApplication.run(EinkaufsListeBeApplication.class, args);
    }

}
