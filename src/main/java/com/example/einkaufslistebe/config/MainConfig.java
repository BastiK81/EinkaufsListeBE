package com.example.einkaufslistebe.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.config.AbstractMongoClientConfiguration;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@Configuration
@EnableMongoRepositories
public class MainConfig extends AbstractMongoClientConfiguration {

    @Value("${spring.data.mongodb.database}")
    private String dbName;

    @Override
    protected String getDatabaseName() {
        return dbName;
    }

}
