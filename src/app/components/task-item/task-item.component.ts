import { Component, Input, OnInit } from '@angular/core';
import { faCircle } from '@fortawesome/free-regular-svg-icons';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { map } from 'rxjs';
import { Task } from 'src/app/interfaces/task.model';
import { AppStateService } from 'src/app/services/app-state/app-state.service';
import { ContentDatabaseService } from 'src/app/services/content-database/content-database.service';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent implements OnInit {
  @Input() task!: Task;
  faCircle = faCircle;
  faCircleCheck = faCircleCheck;
  taskDone!: boolean;

  constructor(
    private appStateService: AppStateService,
    private contentDb: ContentDatabaseService
  ) {}

  ngOnInit(): void {
    this.taskDone = this.task.done;
  }

  toggleTaskDone(e: Event) {
    this.taskDone = !this.taskDone;
    e.stopPropagation();
    this.contentDb
      .editTask({
        id: this.task.id,
        title: this.task.title,
        done: this.taskDone,
      } as Task)
      .subscribe((task) => console.log(task));
  }
}
