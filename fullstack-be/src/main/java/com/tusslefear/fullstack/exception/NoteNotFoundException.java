package com.tusslefear.fullstack.exception;

public class NoteNotFoundException extends RuntimeException {
    public NoteNotFoundException(Long id) {
        super("Could not found the note with id " + id);
    }
}
