import { Component, ViewChild } from '@angular/core';
import {MatSidenav, MatSidenavModule} from '@angular/material/sidenav';
import { SidenavService } from '../../../services/sidenav.service';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [MatSidenavModule],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css'
})
export class SidenavComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav;

  constructor(private sidenavService: SidenavService) {}

  ngAfterViewInit() {
    this.sidenavService.setSidenav(this.sidenav);
}
}