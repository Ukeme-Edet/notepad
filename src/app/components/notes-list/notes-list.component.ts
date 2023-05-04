import { WatchService } from './../../services/watch/watch.service';
import { Component, OnInit } from '@angular/core';
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
export class NotesListComponent implements OnInit {
  notes$!: Observable<Note[]>;

  constructor(
    private contentDatabaseService: ContentDatabaseService,
    private appStateService: AppStateService,
    private watchService: WatchService
  ) {}

  ngOnInit(): void {
    this.notes$ = this.appStateService.searchTerms.pipe(
      debounceTime(300), // delay the search until the user has stopped typing for 300ms
      switchMap((searchQuery) => {
        if (searchQuery.trim() === '') {
          // if the search query is empty, fetch all the notes
          return this.contentDatabaseService.getNotes();
          // .pipe(map((notes) => notes));
        } else {
          // if the search query is not empty, filter the notes based on the search query
          return this.contentDatabaseService.searchNotes(searchQuery);
        }
      }),
      tap((notes) => notes) // log the filtered notes in the console
    );
    this.watchNewNotes()

    // make the notes$ object to be refreshed whenever there's a change anywhere in the application
    // this.appStateService.refreshNotes$.subscribe(() => {
    //   this.notes$ = this.contentDatabaseService.getNotes();
    // });
  }

  watchNewNotes(){
    this.watchService.watchNotes().subscribe((note) => {
      this.notes$ = this.contentDatabaseService.getNotes()
    })
  }

  onNoteClick(note: Note) {
    this.appStateService.setActiveNoteId(note.id);
  }
}
