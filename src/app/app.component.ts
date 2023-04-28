import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppStateService } from './services/app-state/app-state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'notepad';
  appState!: AppStateService;

  constructor(
    private router: Router,
    private appStateService: AppStateService
  ) {
    this.appState = appStateService;
  }

  ngOnInit(): void {
    this.router.navigate(['/notes']);
  }
}
