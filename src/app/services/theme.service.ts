import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  readonly STORAGE_KEY = 'theme-preference';
  readonly isDark = signal(true);

  constructor() {
    this.initTheme();
  }

  initTheme(): void {
    const saved = localStorage.getItem(this.STORAGE_KEY);
    const prefersDark = saved === null ? true : saved === 'dark';
    this.setTheme(prefersDark);
  }

  toggleTheme(): void {
    this.setTheme(!this.isDark());
  }

  private setTheme(dark: boolean): void {
    this.isDark.set(dark);
    localStorage.setItem(this.STORAGE_KEY, dark ? 'dark' : 'light');
    if (dark) {
      document.documentElement.classList.remove('light-theme');
    } else {
      document.documentElement.classList.add('light-theme');
    }
  }
}
