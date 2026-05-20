import { Component, inject } from '@angular/core';
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
