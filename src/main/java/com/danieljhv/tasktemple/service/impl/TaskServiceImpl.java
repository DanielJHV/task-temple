package com.danieljhv.tasktemple.service.impl;

import com.danieljhv.tasktemple.dto.TaskDto;
import com.danieljhv.tasktemple.entity.Task;
import com.danieljhv.tasktemple.repository.TaskRepository;
import com.danieljhv.tasktemple.service.TaskService;
import org.springframework.stereotype.Service;

@Service
public class TaskServiceImpl implements TaskService {
    private TaskRepository taskRepository;

    public TaskServiceImpl(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }

    @Override
    public TaskDto addTask(TaskDto taskDto) {

        // Covert dto to entity
        Task task = new Task();
        task.setTitle(taskDto.getTitle());
        task.setDescription(taskDto.getDescription());
        task.setCompleted(taskDto.isCompleted());

        // Task entity
        Task savedTask = taskRepository.save(task);

        // Convert saved Task entity object into TaskDto object
        TaskDto savedTaskDto = new TaskDto();
        savedTaskDto.setId(savedTask.getId());
        savedTaskDto.setTitle(savedTask.getTitle());
        savedTaskDto.setDescription(savedTask.getDescription());
        savedTaskDto.setCompleted(savedTask.isCompleted());

        return savedTaskDto;
    }
}
