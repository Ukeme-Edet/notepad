import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Task } from 'src/app/interfaces/task.model';
import { AppStateService } from 'src/app/services/app-state/app-state.service';
import { ContentDatabaseService } from 'src/app/services/content-database/content-database.service';
@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css'],
})
export class TaskFormComponent {
  taskId!: number | null;
  taskForm = this.formBuilder.group({
    title: '',
    id: NaN,
  });

  constructor(
    private formBuilder: FormBuilder,
    private appStateService: AppStateService,
    private contentDbService: ContentDatabaseService
  ) {
    this.taskId = this.appStateService.activeTaskId;
    this.taskForm.controls.id.setValue(this.taskId);
    this.taskId !== null && this.taskId !== undefined ? this.loadTask() : null;
    setTimeout(() => {
      document.getElementById('task-name')?.focus();
    }, 0);
  }

  checkSaveState(saveButton: HTMLButtonElement): void {
    saveButton.disabled = this.taskForm.value.title
      ? this.taskForm.value.title.length < 1
      : true;
  }

  saveForm(): void {
    if (typeof this.taskId !== 'number') {
      this.contentDbService
        .addTask(this.taskForm.value as Task)
        .subscribe((data) => {
          data;
        });
    } else if (this.taskForm.controls.id.value !== null) {
      this.contentDbService
        .editTask(this.taskForm.value as Task)
        .subscribe((data) => {
          data;
        });
    }
    this.closeForm();
  }

  closeForm(): void {
    this.appStateService.taskFormOpen = false;
    this.appStateService.activeTaskId = null;
  }

  loadTask(): void {
    this.contentDbService
      .getTaskById(this.taskId !== null ? this.taskId : NaN)
      .subscribe((data) => {
        this.taskForm.controls.title.setValue(data.title);
        this.taskForm.controls.id.setValue(data.id);
      });
  }
}
