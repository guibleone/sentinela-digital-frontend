import { Component, OnInit } from '@angular/core';
import { Noticia } from '../../../shared/models/noticia.model';
import { NOTICIAS } from '../../../shared/data/noticias.data';
import { CardComponent } from './card/card.component';

@Component({
  selector: 'app-noticias-relacionadas',
  imports: [CardComponent],
  templateUrl: './noticias-relacionadas.component.html',
  styleUrl: './noticias-relacionadas.component.scss'
})
export class NoticiasRelacionadasComponent implements OnInit {
  noticiasRelacionadas!: Noticia[];

  ngOnInit(): void {
    this.noticiasRelacionadas = this.getNoticiasRelacionadas();
  }

  getNoticiasRelacionadas(): Noticia[] {
    return NOTICIAS;
  }
}
