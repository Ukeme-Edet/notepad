import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { faArrowLeft, faCheck } from '@fortawesome/free-solid-svg-icons';
import { Note } from 'src/app/interfaces/note.model';
import { AppStateService } from 'src/app/services/app-state/app-state.service';
import { ContentDatabaseService } from 'src/app/services/content-database/content-database.service';

@Component({
  selector: 'app-note-form',
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.css'],
})
export class NoteFormComponent implements OnInit {
  faArrowLeft = faArrowLeft;
  faCheck = faCheck;
  formUnfocused = false;
  noteOpenTime!: Date;
  noteHours!: number;
  noteMinutes!: number;
  noteDateStr!: string;

  noteForm = this.formBuilder.group({
    title: '',
    content: '',
  });

  constructor(
    private formBuilder: FormBuilder,
    private contentDatabaseService: ContentDatabaseService,
    private appStateService: AppStateService
  ) {
    // Focus on the content field when the form is loaded
    setTimeout(() => {
      document.getElementById('note-content')?.focus();
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
      !formIdE.value
    ) {
      console.log(
        this.contentDatabaseService
          .addNote({
            title: this.noteForm.value.title,
            content: this.noteForm.value.content,
            saveTime: Date.now(),
          } as Note)
          .subscribe((data) => {
            console.log(data);
            formIdE.value = data.id + '';
          })
      );
      this.appStateService.noteFormOpen = false;
    } else if (formIdE.value) {
      this.contentDatabaseService
        .editNote({
          title: this.noteForm.value.title,
          content: this.noteForm.value.content,
          id: Number(formIdE.value),
          saveTime: Date.now(),
        } as Note)
        .subscribe((data) => {
          console.log(data);
        });
    }
  }

  saveCurrentFormState(unfocusButton: HTMLElement): void {
    unfocusButton.focus();
    this.formUnfocused = true;
  }

  inputFocus(): void {
    this.formUnfocused = false;
  }
}
