import { Component, inject, Input } from '@angular/core';
import { Noticia } from '../../../shared/models/noticia.model';
import { NgOptimizedImage } from '@angular/common';
import { Router, RouterLink } from "@angular/router";
import { TagComponent } from "../../../shared/components/tag/tag.component";
import { StripMarkdownPipe } from '../../../core/pipes/strip-markdown.pipe';

@Component({
  selector: 'app-ataque',
  imports: [NgOptimizedImage, RouterLink, TagComponent, StripMarkdownPipe],
  templateUrl: './ataque.component.html',
  styleUrl: './ataque.component.scss'
})
export class AtaqueComponent {
  @Input({ required: true }) ataque!: Noticia;

  router: Router = inject(Router);

  acessarAtaque(ataque: Noticia) {
    this.router.navigate(['/noticias', ataque.categoria.toLowerCase(), ataque.slug]);
  }

}
