import { Component } from '@angular/core';
import { Hero } from '../../../hero';

@Component({
  selector: 'app-analytics',
  imports: [],
  templateUrl: './analytics.html',
  styleUrl: './analytics.scss',
})
export class Analytics {
  constructor(private hero: Hero) {
    this.hero.showToast('Analytics module coming soon', 'info');
  }
}
