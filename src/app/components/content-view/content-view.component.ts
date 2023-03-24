import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  OnInit,
} from '@angular/core';
import { map } from 'rxjs';
import { Task } from 'src/app/interfaces/task.model';
import { AppStateService } from 'src/app/services/app-state/app-state.service';
import { ContentDatabaseService } from 'src/app/services/content-database/content-database.service';

@Component({
  selector: 'app-content-view',
  templateUrl: './content-view.component.html',
  styleUrls: ['./content-view.component.css'],
})
export class ContentViewComponent {
  appState!: AppStateService;

  constructor(
    private appStateService: AppStateService
  ) {
    this.appState = this.appStateService;
  }
}
