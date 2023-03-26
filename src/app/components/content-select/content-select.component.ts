import { Component, ElementRef, ViewChild } from '@angular/core';
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

  activateNotesMode(noteSelectElement: HTMLElement) {
    this.appStateService.toogleViewMode('notes');
    this.rippleButton(noteSelectElement);
  }

  activateTasksMode(taskSelectElement: HTMLElement) {
    this.appStateService.toogleViewMode('tasks');
    this.rippleButton(taskSelectElement);
  }

  rippleButton(element: HTMLElement) {
    let ripple = document.createElement('span');
    ripple.classList.add('ripple');
    element.appendChild(ripple);
    setTimeout(() => {
      ripple.remove();
    }, 100000);
  }
}
