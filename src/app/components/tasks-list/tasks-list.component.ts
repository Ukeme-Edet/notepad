import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable, debounceTime, map, switchMap, tap } from 'rxjs';
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
  tasks$!: Observable<Task[]>;

  constructor(
    private contentDatabaseService: ContentDatabaseService,
    private appStateService: AppStateService
  ) {
    this.tasks$ = appStateService.searchTerms.pipe(
      debounceTime(300), // delay the search until the user has stopped typing for 300ms
      switchMap((searchQuery) => {
        if (searchQuery.trim() === '') {
          // if the search query is empty, fetch all the notes
          return this.contentDatabaseService.getTasks();
        } else {
          // if the search query is not empty, filter the notes based on the search query
          return this.contentDatabaseService.searchTasks(searchQuery);
        }
      }),
      tap((tasks) => tasks) // log the filtered notes in the console
    );
  }

  onTaskClick(task: Task) {
    this.appStateService.setActiveTaskId(task.id);
  }
}
