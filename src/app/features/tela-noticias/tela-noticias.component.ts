import { Component, OnInit } from '@angular/core';
import { Noticia } from '../../shared/models/noticia.model';
import { NOTICIAS } from '../../shared/data/noticias.data';
import { CardComponent } from '../tela-noticia/noticias-relacionadas/card/card.component';

@Component({
  selector: 'app-tela-noticias',
  imports: [CardComponent],
  templateUrl: './tela-noticias.component.html',
  styleUrl: './tela-noticias.component.scss'
})
export class TelaNoticiasComponent implements OnInit {
  noticias!: Noticia[];

  ngOnInit(): void {
    this.noticias = NOTICIAS;
  }

}
