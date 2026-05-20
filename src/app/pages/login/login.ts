import { Component, inject, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-login',
  imports: [FormsModule, NgIf],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  private router = inject(Router);
  private theme = inject(ThemeService);

  @ViewChild('bgLayer') bgLayer!: ElementRef<HTMLDivElement>;

  email = 'priya.sharma@company.com';
  password = '';
  showPassword = false;
  rememberMe = true;
  isLoading = false;
  error = '';

  get isDark() {
    return this.theme.isDark();
  }

  toggleTheme(): void {
    this.theme.toggleTheme();
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  onBrandMouseMove(event: MouseEvent): void {
    if (!this.bgLayer?.nativeElement) return;
    const el = this.bgLayer.nativeElement;
    const rect = el.parentElement?.getBoundingClientRect();
    if (!rect) return;
    // Calculate mouse position as percentage within the brand panel
    const xPercent = ((event.clientX - rect.left) / rect.width - 0.5) * 2; // -1 to 1
    const yPercent = ((event.clientY - rect.top) / rect.height - 0.5) * 2; // -1 to 1
    // Move background in opposite direction (parallax effect), max 25px
    const moveX = -xPercent * 25;
    const moveY = -yPercent * 25;
    el.style.transform = `translate(${moveX}px, ${moveY}px)`;
  }

  onSubmit(): void {
    if (!this.email || !this.password) {
      this.error = 'Please enter both email and password.';
      return;
    }
    this.error = '';
    this.isLoading = true;
    // Simulate login delay
    setTimeout(() => {
      this.isLoading = false;
      this.router.navigate(['/dashboard']);
    }, 800);
  }
}
