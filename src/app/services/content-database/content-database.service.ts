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

  getNoteById(noteId: number) {
    return this.http.get<Note>(`${this.apiUrl}/notes/${noteId}`);
  }

  getTaskById(taskId: number) {
    return this.http.get<Task>(`${this.apiUrl}/tasks/${taskId}`);
  }

  addNote(note: Note) {
    return this.http.post<Note>(`${this.apiUrl}/notes`, {
      id: note.id,
      title: note.title,
      content: note.content,
      saveTime: note.saveTime,
    });
  }

  addTask(task: Task) {
    return this.http.post<Task>(`${this.apiUrl}/tasks`, task);
  }

  editNote(note: Note) {
    return this.http.patch<Note>(`${this.apiUrl}/notes/${note.id}`, {
      id: note.id,
      title: note.title,
      content: note.content,
    });
  }

  editTask(task: Task) {
    return this.http.patch<Task>(`${this.apiUrl}/tasks/${task.id}`, task);
  }

  searchNotes(searchTerms: string) {
    return this.http.get<Note[]>(`${this.apiUrl}/notes?q=${searchTerms}`);
  }

  searchTasks(searchTerms: string) {
    return this.http.get<Task[]>(`${this.apiUrl}/tasks?q=${searchTerms}`);
  }
}
