import { Component, OnInit } from '@angular/core';
import { AppStateService } from 'src/app/services/app-state/app-state.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  appState!: AppStateService;

  constructor(private appStateService: AppStateService) {
    this.appState = this.appStateService;
  }

}
