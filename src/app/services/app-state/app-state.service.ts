import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppStateService {
  viewMode!: string;
  noteFormOpen!: boolean;
  taskFormOpen!: boolean;
  activeNoteId!: number | null;
  activeTaskId!: number | null;
  searchMode!: boolean;

  
  searchTerms = new BehaviorSubject<string>('');

  setSearchTerms(searchQuery: string) {
    this.searchTerms.next(searchQuery);
  }

  constructor() {
    this.viewMode = 'notes';
    this.noteFormOpen = false;
    this.taskFormOpen = false;
  }

  toogleViewMode(viewMode: string): void {
    this.viewMode = viewMode;
  }

  setActiveNoteId(noteId: number | null): void {
    this.noteFormOpen = !this.noteFormOpen;
    this.activeNoteId = noteId;
  }

  setActiveTaskId(taskId: number | null): void {
    this.taskFormOpen = !this.taskFormOpen;
    this.activeTaskId = taskId;
  }

  toggleSearchMode(): void {
    this.searchMode = !this.searchMode;
  }
}
