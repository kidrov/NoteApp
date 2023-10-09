import { Component, OnInit } from '@angular/core';
import { NotesService } from '../notes.service'; // Adjust the import path based on your actual project structure
import { Note } from '../noteModel/note.model'; // Adjust the import path based on your actual project structure

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit {
  notes: Note[] = [];
  newTitle: string = '';
  newText: string = '';
  newState: string = '';

  constructor(private notesService: NotesService) {}

  ngOnInit(): void {
    // Fetch initial data
    this.notes = this.notesService.getNotes();
  }

  addNewNote(): void {
    const newNote: Note = {
      id: this.notes.length + 1,
      title: this.newTitle,
      text: this.newText,
      state: this.newState
    };

    console.log('New Note:', newNote);
    this.notesService.addNote(newNote);
    this.notes.push(newNote);

    
    this.newTitle = '';
    this.newText = '';
    this.newState = '';
  }
}
