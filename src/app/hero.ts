import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Hero {
  toastTimer: any;

  showToast(msg: any, type: any = 'info') {
    let t: any = document.getElementById('toast');
    let icons: any = { success: 'ti-circle-check', danger: 'ti-circle-x', info: 'ti-info-circle' };
    t.className = 'toast ' + type;
    t.querySelector('i').className = 'ti ' + (icons[type] || icons.info);
    let toastmsg: any = document.getElementById('toast-msg');
    toastmsg.textContent = msg;
    t.classList.add('show');
    clearTimeout(this.toastTimer);
    this.toastTimer = setTimeout(() => t.classList.remove('show'), 3200);
  }
}
