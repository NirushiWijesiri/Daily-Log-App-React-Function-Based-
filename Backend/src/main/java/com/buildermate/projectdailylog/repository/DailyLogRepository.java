package com.buildermate.projectdailylog.repository;

import com.buildermate.projectdailylog.entity.DailyLog;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DailyLogRepository extends JpaRepository<DailyLog, Integer> {
}
