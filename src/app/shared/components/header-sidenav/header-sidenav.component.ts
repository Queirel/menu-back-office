import { Component, EventEmitter, Output } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { SidenavService } from '../../../services/sidenav.service';

@Component({
  selector: 'app-header-sidenav',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule],
  templateUrl: './header-sidenav.component.html',
  styleUrl: './header-sidenav.component.css'
})
export class HeaderSidenavComponent {
  constructor(private sidenavService: SidenavService) {}

  @Output() toggleDrawer = new EventEmitter<void>();

  onToggleDrawer(): void {
    this.toggleDrawer.emit();
  }
  
  // toggleSidenav() {
  //   this.sidenavService.toggle();
  // }
}
