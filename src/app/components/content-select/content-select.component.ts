import { Component } from '@angular/core';
import { AppStateService } from 'src/app/services/app-state/app-state.service';

@Component({
  selector: 'app-content-select',
  templateUrl: './content-select.component.html',
  styleUrls: ['./content-select.component.css']
})
export class ContentSelectComponent {

  constructor(private appStateService: AppStateService) {
  }

  activateNotesMode() {
    this.appStateService.toogleViewMode("notes");
  }

  activateTasksMode() {
    this.appStateService.toogleViewMode("tasks");
  }

}
