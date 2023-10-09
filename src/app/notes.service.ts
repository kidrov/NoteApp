import { Injectable } from '@angular/core';
import { Note } from './noteModel/note.model';
@Injectable({
  providedIn: 'root'
})
export class NotesService {
  private notes: Note[] = [];

  constructor() {}

  getNotes(): Note[] {
    return this.notes;
  }

  addNote(note: Note): void {
    this.notes.push(note);
  }
}
