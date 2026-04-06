import { Component, Host, HostListener } from '@angular/core';
import { NgOptimizedImage, NgTemplateOutlet } from '@angular/common'
import { RouterLink } from "@angular/router";

export interface Link {
  path: string;
  titulo: string;
  icon?: string;
}

@Component({
  selector: 'app-navbar',
  imports: [NgOptimizedImage, RouterLink, NgTemplateOutlet],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  isDrawerOpen = false;

  navLinks: Link[] = [
    { path: '/', titulo: 'Ataques', icon: 'icons/threat_intelligence.svg' },
    { path: '/', titulo: 'Dicas de Segurança', icon: 'icons/lightbulb.svg' },
    { path: '/', titulo: 'Golpes', icon: 'icons/phishing.svg' },
  ]

  toggleDrawer() {
    this.isDrawerOpen = !this.isDrawerOpen;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (window.innerWidth > 768) {
      this.isDrawerOpen = false;
    }
  }

}
