package com.danieljhv.tasktemple.repository;

import com.danieljhv.tasktemple.entity.Task;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TaskRepository extends JpaRepository<Task, Long> {

}
