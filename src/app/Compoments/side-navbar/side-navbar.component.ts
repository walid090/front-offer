import { Component } from '@angular/core';

@Component({
  selector: 'app-side-navbar',
  templateUrl: './side-navbar.component.html',
  styleUrl: './side-navbar.component.css'
})
export class SideNavbarComponent {
  isNavbarOpen = false;
  activeLink: string = '';

  toggleNavbar() {
    this.isNavbarOpen = !this.isNavbarOpen;
    document.getElementById('header-toggle')?.classList.toggle('bx-x');
    document.getElementById('body-pd')?.classList.toggle('body-pd');
    document.getElementById('header')?.classList.toggle('body-pd');
  }

  setActiveLink(link: string) {
    this.activeLink = link;
  }
  
}
