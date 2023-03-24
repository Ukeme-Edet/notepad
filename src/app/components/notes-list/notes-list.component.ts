import { ChangeDetectionStrategy, Component } from '@angular/core';
import { map } from 'rxjs';
import { ContentDatabaseService } from 'src/app/services/content-database/content-database.service';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotesListComponent {
  notes$ = this.contentDatabaseService.getNotes().pipe(map((data) => data));

  constructor(private contentDatabaseService: ContentDatabaseService) {}
}
