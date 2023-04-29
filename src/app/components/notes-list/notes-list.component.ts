import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable, debounceTime, map, switchMap, tap } from 'rxjs';
import { Note } from 'src/app/interfaces/note.model';
import { AppStateService } from 'src/app/services/app-state/app-state.service';
import { ContentDatabaseService } from 'src/app/services/content-database/content-database.service';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotesListComponent {
  notes$!: Observable<Note[]>;

  constructor(
    private contentDatabaseService: ContentDatabaseService,
    private appStateService: AppStateService
  ) {
    this.notes$ = appStateService.searchTerms.pipe(
      debounceTime(300), // delay the search until the user has stopped typing for 300ms
      switchMap((searchQuery) => {
        if (searchQuery.trim() === '') {
          // if the search query is empty, fetch all the notes
          return this.contentDatabaseService.getNotes();
        } else {
          // if the search query is not empty, filter the notes based on the search query
          return this.contentDatabaseService.searchNotes(searchQuery);
        }
      }),
      tap((notes) => notes) // log the filtered notes in the console
    );
  }

  onNoteClick(note: Note) {
    this.appStateService.setActiveNoteId(note.id);
  }
}
