import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {
  faArrowLeft,
  faCheck,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import { Note } from 'src/app/interfaces/note.model';
import { AppStateService } from 'src/app/services/app-state/app-state.service';
import { ContentDatabaseService } from 'src/app/services/content-database/content-database.service';
import { WatchService } from 'src/app/services/watch/watch.service';

@Component({
  selector: 'app-note-form',
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.css'],
})
export class NoteFormComponent implements OnInit {
  faArrowLeft = faArrowLeft;
  faCheck = faCheck;
  faTrash = faTrash;
  formUnfocused = true;
  noteOpenTime!: Date;
  noteHours!: number;
  noteMinutes!: number;
  noteDateStr!: string;
  noteId: number | null;

  noteForm = this.formBuilder.group({
    title: '',
    content: '',
    id: NaN,
  });

  constructor(
    private formBuilder: FormBuilder,
    private contentDatabaseService: ContentDatabaseService,
    private appStateService: AppStateService,
    private watchService: WatchService
  ) {
    this.noteId = this.appStateService.activeNoteId;
    this.noteForm.controls.id.setValue(this.noteId);
    this.noteId !== null && this.noteId !== undefined
      ? this.loadNote() // Focus on the content field when the form is loaded
      : setTimeout(() => {
          document.getElementById('note-content')?.focus();
          this.formUnfocused = false;
        }, 0);
  }

  ngOnInit(): void {
    this.noteOpenTime = new Date();
    this.noteHours = this.noteOpenTime.getHours();
    this.noteMinutes = this.noteOpenTime.getMinutes();
    this.noteDateStr = this.noteOpenTime.toDateString();
  }

  onSubmit(formIdE: HTMLInputElement): void {
    if (
      (this.noteForm.controls.content.value !== '' ||
        this.noteForm.controls.title.value !== '') &&
      typeof this.noteForm.controls.id.value !== 'number'
    ) {
      const note: Note = {
        title: this.noteForm.value.title || '',
        content: this.noteForm.value.content || '',
        saveTime: Date.now(),
        id: NaN,
      };
      this.contentDatabaseService.addNote(note)
      .subscribe((data) => {
        data;
        this.noteForm.controls.id.setValue(data.id);
        this.watchService.refreshNotes(note);
      });
    } else if (this.noteForm.controls.id.value !== null) {
      this.contentDatabaseService
        .editNote({
          title: this.noteForm.value.title,
          content: this.noteForm.value.content,
          id: Number(formIdE.value),
          saveTime: Date.now(),
        } as Note)
        .subscribe((data) => {
          data;
        });
    }
    // this.appStateService.noteFormOpen = false;
    this.appStateService.setActiveNoteId(null);
  }

  saveCurrentFormState(unfocusButton: HTMLElement): void {
    unfocusButton.focus();
    this.formUnfocused = true;
  }

  deleteNote(): void {
    this.contentDatabaseService
      .deleteNote(this.noteForm.value.id as number)
      .subscribe((data) => {
        data;
      });
    this.appStateService.setActiveNoteId(null);
  }

  inputFocus(): void {
    this.formUnfocused = false;
  }

  loadNote(): void {
    this.contentDatabaseService
      .getNoteById(this.noteId !== null ? this.noteId : NaN)
      .subscribe((data) => {
        this.noteForm.controls.title.setValue(data.title);
        this.noteForm.controls.content.setValue(data.content);
        this.noteForm.controls.id.setValue(data.id);
      });
  }
}
