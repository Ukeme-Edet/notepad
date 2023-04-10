import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Note } from 'src/app/interfaces/note.model';
import { Task } from 'src/app/interfaces/task.model';

@Injectable({
  providedIn: 'root',
})
export class ContentDatabaseService {
  apiUrl: string = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getTasks() {
    return this.http.get<Task[]>(`${this.apiUrl}/tasks`);
  }

  getNotes() {
    return this.http.get<Note[]>(`${this.apiUrl}/notes`);
  }

  addNote(note: Note) {
    return this.http.post<Note>(`${this.apiUrl}/notes`, {id: note.id, title: note.title, content: note.content, saveTime: note.saveTime});
  }

  editNote(note: Note) {
    return this.http.patch<Note>(`${this.apiUrl}/notes/${note.id}`, {id: note.id, title: note.title, content: note.content});
  }
}
