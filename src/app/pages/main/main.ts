import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Sidebar } from '../../components/sidebar/sidebar';
import { Topbar } from '../..//components/topbar/topbar';
@Component({
  selector: 'app-main',
  imports: [RouterOutlet, Sidebar, Topbar],
  templateUrl: './main.html',
  styleUrl: './main.scss',
})
export class Main {
  protected readonly sidebarCollapsed = signal(false);

  toggleSidebar(): void {
    this.sidebarCollapsed.update((collapsed) => !collapsed);
  }
}
