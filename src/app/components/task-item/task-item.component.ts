import { Component, Input } from '@angular/core';
import { faCircle } from '@fortawesome/free-regular-svg-icons';
import { Task } from 'src/app/interfaces/task.model';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent {
  @Input() task!: Task;
  faCircle = faCircle;
}
