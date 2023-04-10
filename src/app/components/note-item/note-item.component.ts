import { Component, Input, OnInit } from '@angular/core';
import { Note } from 'src/app/interfaces/note.model';

@Component({
  selector: 'app-note-item',
  templateUrl: './note-item.component.html',
  styleUrls: ['./note-item.component.css'],
})
export class NoteItemComponent implements OnInit {
  @Input() note!: Note;
  noteSaveTime!: Date;
  noteHours!: number;
  noteMinutes!: number;
  noteDateStr!: string;

  ngOnInit() {
    this.noteSaveTime = new Date(this.note.saveTime);
    this.noteHours = this.noteSaveTime.getHours();
    this.noteMinutes = this.noteSaveTime.getMinutes();
    this.noteDateStr = this.noteSaveTime.toDateString();
  }
}
