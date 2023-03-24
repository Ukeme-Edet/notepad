import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Note } from 'src/app/interfaces/note.model';
import { Task } from 'src/app/interfaces/task.model';

@Injectable({
  providedIn: 'root'
})
export class ContentDatabaseService {

  apiUrl: string = "http://localhost:3000";

  constructor(private http: HttpClient) {
  }

  getTasks() {
    return this.http.get<Task[]>(`${this.apiUrl}/tasks`);
  }
  getNotes() {
    return this.http.get<Note[]>(`${this.apiUrl}/notes`);
  }
}
