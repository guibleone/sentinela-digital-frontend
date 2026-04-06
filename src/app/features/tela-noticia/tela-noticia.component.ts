import { Component, computed, inject, input, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Noticia } from '../../shared/models/noticia.model';
import { NoticiaService } from '../../shared/services/noticia.service';
import { NoticiaComponent } from './noticia/noticia.component';
import { NoticiasRelacionadasComponent } from "./noticias-relacionadas/noticias-relacionadas.component";

@Component({
  selector: 'app-tela-noticia',
  imports: [NoticiaComponent, NoticiasRelacionadasComponent],
  templateUrl: './tela-noticia.component.html',
  styleUrl: './tela-noticia.component.scss'
})
export class TelaNoticiaComponent {
  private readonly noticiaService = inject(NoticiaService);

  slug = input.required<string>();
  noticia = computed(() => {
    return this.noticiaService.getNoticiaPorSlug(computed(this.slug)());
  });
}

