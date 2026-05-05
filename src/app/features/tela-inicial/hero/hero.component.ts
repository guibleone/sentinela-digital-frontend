import { Component, inject } from '@angular/core';
import { NgOptimizedImage } from '@angular/common'
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero',
  imports: [NgOptimizedImage],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {

  private router = inject(Router);

  public navigateTo(url: string) {
    this.router.navigate(["/" + url])
  }

}
