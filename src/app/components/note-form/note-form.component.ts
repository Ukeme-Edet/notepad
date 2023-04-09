import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { faArrowLeft, faCheck } from '@fortawesome/free-solid-svg-icons';
import { Note } from 'src/app/interfaces/note.model';
import { ContentDatabaseService } from 'src/app/services/content-database/content-database.service';

@Component({
  selector: 'app-note-form',
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.css'],
})
export class NoteFormComponent {
  faArrowLeft = faArrowLeft;
  faCheck = faCheck;

  noteForm = this.formBuilder.group({
    title: '',
    content: '',
    formId: '',
  });

  constructor(
    private formBuilder: FormBuilder,
    private contentDatabaseService: ContentDatabaseService
  ) {
    // Focus on the content field when the form is loaded
    setTimeout(() => {
      document.getElementById('note-content')?.focus();
    }, 0);
  }

  onSubmit(formIdE: HTMLInputElement): void {
    if (
      (this.noteForm.controls.content.value !== '' ||
        this.noteForm.controls.title.value !== '') &&
      !this.noteForm.controls.formId.value
    ) {
      console.log(
        this.contentDatabaseService
          .addNote(this.noteForm.value as Note)
          .subscribe((data) => {
            console.log(data);
            formIdE.value = data.id + '';
          })
      );
    } else if (this.noteForm.controls.formId.value) {
      this.contentDatabaseService
        .editNote(this.noteForm.value as Note)
        .subscribe((data) => {
          console.log(data);
        });
    }
  }
}
