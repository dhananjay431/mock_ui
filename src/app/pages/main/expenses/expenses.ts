import { Component } from '@angular/core';
import { Hero } from '../../../hero';

@Component({
  selector: 'app-expenses',
  imports: [],
  templateUrl: './expenses.html',
  styleUrl: './expenses.scss',
})
export class Expenses {
  receiptZoom = 100;
  receiptZoomMin = 50;
  receiptZoomMax = 200;
  receiptZoomStep = 25;

  constructor(private hero: Hero) {}

  showToast(message: string, type: string) {
    this.hero.showToast(message, type);
  }

  openReceiptModal() {
    this.receiptZoom = 100;
  }

  closeReceiptModal() {
    this.receiptZoom = 100;
  }

  zoomIn() {
    if (this.receiptZoom < this.receiptZoomMax) {
      this.receiptZoom += this.receiptZoomStep;
    }
  }

  zoomOut() {
    if (this.receiptZoom > this.receiptZoomMin) {
      this.receiptZoom -= this.receiptZoomStep;
    }
  }

  zoomReset() {
    this.receiptZoom = 100;
  }

  zoomFit() {
    this.receiptZoom = 100;
  }

  getZoomTransform(): string {
    return `scale(${this.receiptZoom / 100})`;
  }
}
