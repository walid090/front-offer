import { Component, ViewChild } from '@angular/core';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { AvatarModule } from 'primeng/avatar';
import { StyleClassModule } from 'primeng/styleclass';
import { Sidebar } from 'primeng/sidebar';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  standalone: true,
  imports: [
    SidebarModule,
    ButtonModule,
    RippleModule,
    AvatarModule,
    StyleClassModule,
  ],
})
export class NavbarComponent {
  constructor(private router: Router) {}
  @ViewChild('sidebarRef') sidebarRef!: Sidebar;

  closeCallback(e: any): void {
    this.sidebarRef.close(e);
  }

  sidebarVisible: boolean = false;

  navigateToOfferTab() {
    this.router.navigate(['/offer_tab']);
  }

  navigateToReservation() {
    this.router.navigate(['/reservation_tab']);
  }

  navigateToState() {
    this.router.navigate(['/dashbord']);
  }
  LogOut() {
    this.router.navigate(['/']);
  }
}
