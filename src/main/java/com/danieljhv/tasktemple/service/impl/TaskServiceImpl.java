package com.danieljhv.tasktemple.service.impl;

import com.danieljhv.tasktemple.dto.TaskDto;
import com.danieljhv.tasktemple.entity.Task;
import com.danieljhv.tasktemple.repository.TaskRepository;
import com.danieljhv.tasktemple.service.TaskService;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

@Service
public class TaskServiceImpl implements TaskService {
    private TaskRepository taskRepository;

    private ModelMapper modelMapper;

    public TaskServiceImpl(TaskRepository taskRepository, ModelMapper modelMapper) {
        this.taskRepository = taskRepository;
        this.modelMapper = modelMapper;
    }

    @Override
    public TaskDto addTask(TaskDto taskDto) {

        Task task = modelMapper.map(taskDto, Task.class);

        Task savedTask = taskRepository.save(task);

        TaskDto savedTaskDto = modelMapper.map(savedTask, TaskDto.class);

        return savedTaskDto;
    }
}
