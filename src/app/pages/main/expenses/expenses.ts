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

  openModal(id: any) {
    var el = document.getElementById(id);
    if (el) el.classList.add('open');
  }
  closeModal(id: any) {
    var el = document.getElementById(id);
    if (el) el.classList.remove('open');
  }
  showToast(message: string, type: string) {
    this.hero.showToast(message, type);
  }
}
