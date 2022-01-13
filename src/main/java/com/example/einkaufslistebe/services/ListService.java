package com.example.einkaufslistebe.services;

import com.example.einkaufslistebe.items.ListItem;
import com.example.einkaufslistebe.repos.ItemRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ListService {

    private final ItemRepository itemRepository;

    public ListService(ItemRepository itemRepository) {
        this.itemRepository = itemRepository;
    }

    public List<ListItem> getAll() {
        return itemRepository.findAll();
    }

    public List<ListItem> addItem(ListItem item) {
        if (itemRepository.findById(item.getId()).isPresent()) {
            return getAll();
        }
        itemRepository.save(item);
        return getAll();
    }

    public List<ListItem> addItemCount(String itemId) {
        ListItem item = itemRepository.findById(itemId).get();
        item.setAnzahl(item.getAnzahl() + 1);
        itemRepository.save(item);
        return getAll();
    }

    public List<ListItem> decreaseItemCount(String itemId) {
        ListItem item = itemRepository.findById(itemId).get();
        if (item.getAnzahl()<=1) {
            return removeItem(itemId);
        }
        item.setAnzahl(item.getAnzahl() - 1);
        itemRepository.save(item);
        return getAll();
    }

    public List<ListItem> removeItem(String itemId) {
        itemRepository.deleteById(itemId);
        return getAll();
    }
}
