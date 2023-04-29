import { Component } from '@angular/core';
import { faArrowLeft, faSearch } from '@fortawesome/free-solid-svg-icons';
import { AppStateService } from 'src/app/services/app-state/app-state.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  appState!: AppStateService;
  faSearch = faSearch;
  faArrowLeft = faArrowLeft;

  constructor(private appStateService: AppStateService) {
    this.appState = this.appStateService;
  }

  toggleSearch(searchInput: HTMLInputElement): void {
    this.appState.searchMode ? null : this.appState.toggleSearchMode();
    searchInput.addEventListener('input', () => {
      this.appState.setSearchTerms(searchInput.value);
    });
  }

  closeSearch(searchInput: HTMLInputElement): void {
    this.appState.toggleSearchMode();
    searchInput.value = '';
    this.appState.setSearchTerms("");
  }
}
