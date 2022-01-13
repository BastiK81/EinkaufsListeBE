package com.example.einkaufslistebe.repos;

import com.example.einkaufslistebe.items.ListItem;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ItemRepository extends MongoRepository<ListItem, String> {

}