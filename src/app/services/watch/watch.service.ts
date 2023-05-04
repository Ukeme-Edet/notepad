import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Note } from 'src/app/interfaces/note.model';

@Injectable({
  providedIn: 'root'
})
export class WatchService {

  constructor() { }
  private noteAlert = new Subject<Note>

  watchNotes(){
    return this.noteAlert.asObservable()
  }

  refreshNotes(note: Note){
    this.noteAlert.next(note)
  }
}
