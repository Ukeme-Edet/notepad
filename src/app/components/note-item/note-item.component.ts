import { Component, Input } from '@angular/core';
import { Note } from 'src/app/interfaces/note.model';

@Component({
  selector: 'app-note-item',
  templateUrl: './note-item.component.html',
  styleUrls: ['./note-item.component.css']
})
export class NoteItemComponent {

  @Input() note!: Note;

}
