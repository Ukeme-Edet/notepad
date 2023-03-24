import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppStateService {
  viewMode!: string;

  constructor() {
    this.viewMode = 'notes';
  }

  toogleViewMode(viewMode: string): void {
    this.viewMode = viewMode;
  }
}
