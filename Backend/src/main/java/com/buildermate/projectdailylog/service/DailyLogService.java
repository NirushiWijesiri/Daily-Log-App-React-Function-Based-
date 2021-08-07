package com.buildermate.projectdailylog.service;

import com.buildermate.projectdailylog.entity.DailyLog;
import com.buildermate.projectdailylog.repository.DailyLogRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DailyLogService {

    @Autowired
    private DailyLogRepository repository;

    //save a daily log
    public DailyLog saveDailyLog(DailyLog dailyLog){
        return repository.save(dailyLog);
    }

    //show all the logs
    public List<DailyLog> getDailyLogs(){
        return repository.findAll();
    }

    //delete daily log
    public String deleteDailyLogById(int id){
        repository.deleteById(id);
        return "Daily Log Deleted Successfully";
    }

    //update a daily log
    public DailyLog updateDailyLog(DailyLog dailyLog){
        DailyLog existingDailylog = repository.findById(dailyLog.getLogId()).orElse(null);
        existingDailylog.setDescription(dailyLog.getDescription());
        return repository.save(existingDailylog);
    }
}
