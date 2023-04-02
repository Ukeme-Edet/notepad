import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppStateService {
  viewMode!: string;
  noteFormOpen!: boolean;
  taskFormOpen!: boolean;

  constructor() {
    this.viewMode = 'notes';
    this.noteFormOpen = false;
    this.taskFormOpen = false;
  }

  toogleViewMode(viewMode: string): void {
    this.viewMode = viewMode;
  }
}
