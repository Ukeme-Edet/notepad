import { Injectable } from '@angular/core';

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
  searchTerms!: string;

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
