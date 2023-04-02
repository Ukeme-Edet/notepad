import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './components/header/header.component';
import { ContentViewComponent } from './components/content-view/content-view.component';
import { ContentSelectComponent } from './components/content-select/content-select.component';
import { HttpClientModule } from '@angular/common/http';
import { NoteItemComponent } from './components/note-item/note-item.component';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { NotesListComponent } from './components/notes-list/notes-list.component';
import { TasksListComponent } from './components/tasks-list/tasks-list.component';
import { AddButtonComponent } from './components/add-button/add-button.component';
import { NoteFormComponent } from './components/note-form/note-form.component';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentViewComponent,
    ContentSelectComponent,
    NoteItemComponent,
    TaskItemComponent,
    NotesListComponent,
    TasksListComponent,
    AddButtonComponent,
    NoteFormComponent,
    TaskFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
