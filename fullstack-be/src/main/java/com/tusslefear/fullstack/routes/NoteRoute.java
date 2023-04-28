package com.tusslefear.fullstack.routes;

import com.tusslefear.fullstack.dal.entity.NoteEntity;
import com.tusslefear.fullstack.dal.repository.NoteRepository;
import com.tusslefear.fullstack.exception.NoteNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class NoteRoute {

    @Autowired
    private NoteRepository noteRepository;

    @PostMapping("/note")
    NoteEntity newNote(@RequestBody NoteEntity newNote){
        return noteRepository.save(newNote);
    }

    @GetMapping("/notes")
    List<NoteEntity> getAllNotes(){
        return noteRepository.findAll();
    }

    @GetMapping("/note/{id}")
    NoteEntity getNoteById(@PathVariable Long id){
        return noteRepository.findById(id).orElseThrow(()-> new NoteNotFoundException(id));
    }

    @PutMapping("/note/{id}")
    NoteEntity updateNote(@RequestBody NoteEntity newNote, @PathVariable Long id){
        return noteRepository.findById(id)
                .map(note -> {
                    note.setDescription(newNote.getDescription());
                    note.setName(newNote.getName());
                    note.setContent(newNote.getContent());
                    return noteRepository.save(note);
                }).orElseThrow(()-> new NoteNotFoundException(id));
    }

    @DeleteMapping("/note/{id}")
    String deleteNote(@PathVariable Long id){
        if(!noteRepository.existsById(id)){
            throw new NoteNotFoundException(id);
        }
        noteRepository.deleteById(id);
        return "Note with id "+id+" has been deleted successfully";
    }
}
