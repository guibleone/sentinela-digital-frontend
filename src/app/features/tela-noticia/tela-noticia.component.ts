import { Component, inject, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Noticia } from '../../shared/models/noticia.model';
import { NoticiaService } from '../../shared/services/noticia.service';
import { NoticiaComponent } from './noticia/noticia.component';

@Component({
  selector: 'app-tela-noticia',
  imports: [NoticiaComponent],
  templateUrl: './tela-noticia.component.html',
  styleUrl: './tela-noticia.component.scss'
})
export class TelaNoticiaComponent implements OnInit {
  private readonly noticiaService = inject(NoticiaService);

  @Input() slug!: string;

  noticia: Noticia | undefined;

  ngOnInit(): void {
   this.noticia = this.noticiaService.getNoticiaPorSlug(this.slug);
  }
}
