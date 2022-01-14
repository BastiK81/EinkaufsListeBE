package com.example.einkaufslistebe.controller;

import com.example.einkaufslistebe.items.ListItem;
import com.example.einkaufslistebe.services.ListService;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import java.util.List;

@RestController
public class ListController {

    private ListService listService;

    public ListController(ListService listService) {
        this.listService = listService;
    }

//    @GetMapping("/")
//    public String helloWorld() {
//        return "Hello World!";
//    }

    @PutMapping(value = "list/addCount/{id}")
    public List<ListItem> addItemCount(@PathVariable String id) {
        return listService.addItemCount(id);
    }

    @PutMapping(value = "list/decreaseCount/{id}")
    public List<ListItem> decreaseItemCouunt(@PathVariable String id) {
        return listService.decreaseItemCount(id);
    }

    @DeleteMapping(value = "list/removeItem/{id}")
    public List<ListItem> removeItem(@PathVariable String id) {
        return listService.removeItem(id);
    }

    @GetMapping(value = "list/getall")
    public List<ListItem> getAll() {
        return listService.getAll();
    }

    @PostMapping(value = "list/addItem")
    public List<ListItem> addItem(@RequestBody ListItem item) {
        return listService.addItem(item);
    }

}
