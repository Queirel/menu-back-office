import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { RouterOutlet } from '@angular/router';
import { SidenavComponent } from "../sidenav/sidenav.component";
import { MatSidenavModule } from '@angular/material/sidenav';
import { HeaderSidenavComponent } from "../header-sidenav/header-sidenav.component";

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, RouterOutlet, MatSidenavModule, SidenavComponent, HeaderSidenavComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export default class LayoutComponent {

}
