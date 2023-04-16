import { ChangeDetectionStrategy, Component } from '@angular/core';
import { map } from 'rxjs';
import { Task } from 'src/app/interfaces/task.model';
import { AppStateService } from 'src/app/services/app-state/app-state.service';
import { ContentDatabaseService } from 'src/app/services/content-database/content-database.service';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TasksListComponent {
  tasks$ = this.contentDatabaseService.getTasks().pipe(map((data) => data));

  constructor(
    private contentDatabaseService: ContentDatabaseService,
    private appStateService: AppStateService
  ) {}
}
