import { Component } from '@angular/core';
import { Hero } from '../../../hero';

@Component({
  selector: 'app-expenses',
  imports: [],
  templateUrl: './expenses.html',
  styleUrl: './expenses.scss',
})
export class Expenses {
  constructor(private hero: Hero) {}

  showToast(message: string, type: string) {
    this.hero.showToast(message, type);
  }
}
