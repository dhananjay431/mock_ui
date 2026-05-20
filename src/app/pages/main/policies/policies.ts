import { Component } from '@angular/core';
import { Hero } from '../../../hero';

@Component({
  selector: 'app-policies',
  imports: [],
  templateUrl: './policies.html',
  styleUrl: './policies.scss',
})
export class Policies {
  constructor(private hero: Hero) {
    this.hero.showToast('Policies module coming soon', 'info');
  }
}
