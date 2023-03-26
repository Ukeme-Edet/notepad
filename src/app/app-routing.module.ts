import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
// import { NotesListComponent } from './components/notes-list/notes-list.component';
// import { TasksListComponent } from './components/tasks-list/tasks-list.component';
import { ContentViewComponent } from './components/content-view/content-view.component';

const routes: Route[] = [
  { path: '', redirectTo: 'notes', pathMatch: 'full' },
  { path: 'notes', component: ContentViewComponent },
  { path: 'tasks', component: ContentViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
