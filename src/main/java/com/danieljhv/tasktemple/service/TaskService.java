package com.danieljhv.tasktemple.service;

import com.danieljhv.tasktemple.dto.TaskDto;

import java.util.List;

public interface TaskService {
    TaskDto addTask(TaskDto taskDto);

    TaskDto getTask(Long id);

    List<TaskDto> getAllTasks();

    TaskDto updateTask(TaskDto taskDto, Long id);

    void deleteTask(Long id);
}
