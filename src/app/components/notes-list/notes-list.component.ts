import { ChangeDetectionStrategy, Component } from '@angular/core';
import { map, tap } from 'rxjs';
import { ContentDatabaseService } from 'src/app/services/content-database/content-database.service';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotesListComponent {
  // notes$ = this.contentDatabaseService.getNotes().pipe(map((data) => data));
  // Update Tthe list everytime a new note is added
  notes$ = this.contentDatabaseService.getNotes().pipe(
    map((data) => data),
    tap((data) => console.log(data))
  );

  constructor(private contentDatabaseService: ContentDatabaseService) {}
}
