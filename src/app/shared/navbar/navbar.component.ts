import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common'
import { RouterLink } from "@angular/router";

export interface Link {
  path: string;
  titulo: string;
}

@Component({
  selector: 'app-navbar',
  imports: [NgOptimizedImage, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  navLinks: Link[] = [
    { path: '/', titulo: 'Ataques' },
    { path: '/', titulo: 'Dicas de Segurança' },
    { path: '/', titulo: 'Golpes' },
  ]


}
