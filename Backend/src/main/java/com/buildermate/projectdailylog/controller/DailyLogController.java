package com.buildermate.projectdailylog.controller;


import com.buildermate.projectdailylog.entity.DailyLog;
import com.buildermate.projectdailylog.service.DailyLogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class DailyLogController {

    @Autowired
    private DailyLogService service;

    @PostMapping("/addDailyLog")
    public DailyLog addDailyLog(@RequestBody DailyLog dailyLog){
        return service.saveDailyLog(dailyLog);
    }

    @GetMapping("/dailyLogs")
    public List<DailyLog> findAllLogs(){
        return service.getDailyLogs();
    }

    @PutMapping("/update")
    public DailyLog updateDailyLog(@RequestBody DailyLog dailyLog){
        return service.updateDailyLog(dailyLog);
    }

    @DeleteMapping("/delete/{id}")
    public String deleteDailyLog(@PathVariable int id){
        return service.deleteDailyLogById(id);
    }

}
