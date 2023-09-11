package com.danieljhv.tasktemple.service.impl;

import com.danieljhv.tasktemple.dto.TaskDto;
import com.danieljhv.tasktemple.entity.Task;
import com.danieljhv.tasktemple.exception.ResourceNotFoundException;
import com.danieljhv.tasktemple.repository.TaskRepository;
import com.danieljhv.tasktemple.service.TaskService;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

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

    @Override
    public TaskDto getTask(Long id) {
        Task task = taskRepository.findById(id).orElseThrow(
                () -> new ResourceNotFoundException("There is not task with that id")
        );
        return modelMapper.map(task, TaskDto.class);
    }

    @Override
    public List<TaskDto> getAllTasks() {
        List<Task> tasks = taskRepository.findAll();
        return tasks.stream().map((task) -> modelMapper.map(task, TaskDto.class)).collect(Collectors.toList());
    }

    @Override
    public TaskDto updateTask(TaskDto taskDto, Long id) {
        Task task = taskRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("There is no task with that id"));
        task.setTitle(taskDto.getTitle());
        task.setDescription(taskDto.getDescription());
        task.setCompleted(taskDto.isCompleted());

        Task updatedTask = taskRepository.save(task);

        return modelMapper.map(updatedTask, TaskDto.class);
    }

    @Override
    public void deleteTask(Long id) {
        Task task = taskRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("There is not task with that id"));
        taskRepository.deleteById(id);
    }
}
