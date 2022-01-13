package com.example.einkaufslistebe.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.config.AbstractMongoClientConfiguration;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@Configuration
@EnableMongoRepositories
public class MainConfig extends AbstractMongoClientConfiguration {

    @Override
    protected String getDatabaseName() {
        return "shoppingDB";
    }

}
