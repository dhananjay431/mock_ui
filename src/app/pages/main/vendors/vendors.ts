import { Component } from '@angular/core';
import { Hero } from '../../../hero';

@Component({
  selector: 'app-vendors',
  imports: [],
  templateUrl: './vendors.html',
  styleUrl: './vendors.scss',
})
export class Vendors {
  constructor(private hero: Hero) {
    this.hero.showToast('Vendors module coming soon', 'info');
  }
}
