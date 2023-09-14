package com.danieljhv.tasktemple.exception;
import org.springframework.http.HttpStatus;

public class TaskAPIException extends RuntimeException {
    private HttpStatus status;
    private String message;

    public TaskAPIException(HttpStatus status, String message) {
        this.status = status;
        this.message = message;
    }

    public HttpStatus getStatus() {
        return status;
    }

    @Override
    public String getMessage() {
        return message;
    }
}
