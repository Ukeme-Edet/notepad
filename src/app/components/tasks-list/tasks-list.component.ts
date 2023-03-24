import { ChangeDetectionStrategy, Component } from '@angular/core';
import { map } from 'rxjs';
import { ContentDatabaseService } from 'src/app/services/content-database/content-database.service';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TasksListComponent {
  tasks$ = this.contentDatabaseService.getTasks().pipe(map((data) => data));

  constructor(private contentDatabaseService: ContentDatabaseService) {}
}
