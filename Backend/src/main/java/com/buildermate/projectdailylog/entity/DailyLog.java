package com.buildermate.projectdailylog.entity;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedDate;

import javax.persistence.*;
import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "DAILYLOG_TBL")
public class DailyLog {
    @Id
    @GeneratedValue
    private int logId;
    private String description;
//    @CreatedDate
//    @Column(name = "createTime",updatable = false,nullable = false)
//    private Date createTime;
}
