import { Component } from '@angular/core';
import {
  faCircleCheck as faCircleCheckRegular,
  faRectangleList as faRectangleListRegular,
} from '@fortawesome/free-regular-svg-icons';
import {
  faCircleCheck as faCircleCheckSolid,
  faRectangleList as faRectangleListSolid,
} from '@fortawesome/free-solid-svg-icons';
import { AppStateService } from 'src/app/services/app-state/app-state.service';

@Component({
  selector: 'app-content-select',
  templateUrl: './content-select.component.html',
  styleUrls: ['./content-select.component.css'],
})
export class ContentSelectComponent {
  faCircleCheckRegular = faCircleCheckRegular;
  faCircleCheckSolid = faCircleCheckSolid;
  faRectangleListRegular = faRectangleListRegular;
  faRectangleListSolid = faRectangleListSolid;
  appState!: AppStateService;

  constructor(private appStateService: AppStateService) {
    this.appState = appStateService;
  }

  activateNotesMode() {
    this.appStateService.toogleViewMode('notes');
  }

  activateTasksMode() {
    this.appStateService.toogleViewMode('tasks');
  }
}
