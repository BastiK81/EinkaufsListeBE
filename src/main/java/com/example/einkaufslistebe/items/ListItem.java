package com.example.einkaufslistebe.items;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document("shopItems")
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ListItem {

    @Id
    private String id;

    private String name;
    private int anzahl;
    private boolean gestrichen;

}
