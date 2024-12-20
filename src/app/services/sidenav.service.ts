import { Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Injectable({
  providedIn: 'root',
})
export class SidenavService {
  private sidenav!: MatSidenav;

  setSidenav(sidenav: MatSidenav) {
    this.sidenav = sidenav; 
  }

  toggle(): void {
    this.sidenav.toggle();
  }

  open(): void {
    this.sidenav.open();
  }

  close(): void {
    this.sidenav.close();
  }
}