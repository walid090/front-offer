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

  navigateToProductTab() {
    this.router.navigate(['/product-tab']);
  }
  navigateToCustomerTab() {
    this.router.navigate(['/customer-tab']);
  }
  navigateToSupplierTab() {
    this.router.navigate(['/supplier-tab']);
  }
  navigateToReports() {
    this.router.navigate(['/reports']);
  }
  navigateToStock() {
    this.router.navigate(['/stock']);
  }
  navigateToState() {
    this.router.navigate(['/dashbord']);
  }
  LogOut() {
    this.router.navigate(['/']);
  }
}
